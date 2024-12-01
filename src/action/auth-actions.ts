"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { formSchemaSignup } from "@/components/(auth)/signup-form";
import { Role, SubscriptionStatus } from "@prisma/client";
import { auth } from "@/lib/auth";
import { formSchemaSchool } from "@/components/school-registration-form";

export async function getUserByEmail(email: string) {
  const user = prisma.user.findUnique({
    where: { email },
  });
  return user;
}
export async function signUpAction(values: z.infer<typeof formSchemaSignup>) {
  const { name, email, password } = values;

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return {
        errors: {
          email: ["A user with this email already exists"],
        },
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    return { success: true };
  } catch (error) {
    console.error("Error during sign up:", error);
  }
}



export async function createOrganization(values: z.infer<typeof formSchemaSchool>) {
  const { name, subdomain, logo } = values;

  const session = await auth();
  console.log(session?.user, '🚀');
  if (!session || !session.user?.email) {
    throw new Error("Unauthorized");
  }


  try {
    const existingOrg = await prisma.organization.findUnique({
      where: { subdomain },
    });
    if (existingOrg) {
      throw new Error("Subdomain is already taken");
    }

    await prisma.organization.create({
      data: {
        name,
        subdomain,
        logo,
        members: {
          create: {
            user:{
              connect:{
                email:session.user.email
              }
            },
            role: Role.SUPER_ADMIN,
            status: SubscriptionStatus.ACTIVE,
          },
        },
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Organization creation error:", error);
    throw new Error("Failed to create organization");
  }
}

export async function getOrganizationDetails(email: string) {
  const session = await auth();
  if (!session || !session.user) {
    throw new Error("Unauthorized");
  }

  try {
    const organization = await prisma.organization.findFirst({
      where:{
        members:{
          some:{
            user:{
              email
            }
          }
        }
      }
    });
    return organization;
  } catch (error) {
    console.error("Error fetching organization details:", error);
    throw new Error("Failed to fetch organization details");
  }
}

// export async function updateOrganization(
//   id: string,
//   data: Partial<CreateOrganizationData>
// ) {
//   const session = await auth();
//   if (!session || !session.user) {
//     throw new Error("Unauthorized");
//   }

//   try {
//     const updatedOrganization = await prisma.organization.update({
//       where: { id },
//       data,
//     });
//     return updatedOrganization;
//   } catch (error) {
//     console.error("Error updating organization:", error);
//     throw new Error("Failed to update organization");
//   }
// }

// export async function deleteOrganization(id: string) {
//   const session = await getServerSession(authOptions);
//   if (!session || !session.user) {
//     throw new Error("Unauthorized");
//   }

//   try {
//     const deletedOrganization = await prisma.organization.delete({
//       where: { id },
//     });
//     return deletedOrganization;
//   } catch (error) {
//     console.error("Error deleting organization:", error);
//     throw new Error("Failed to delete organization");
//   }
// }

