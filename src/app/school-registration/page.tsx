import { getOrganizationDetails } from "@/action/auth-actions";
import { SchoolRegistrationForm } from "@/components/school-registration-form";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function Page() {
  const session = await auth();

  if (!session) {
    return redirect("/auth/login");
  }
  const isOrganizationExist = await getOrganizationDetails(
    session.user?.email ?? ""
  );
  console.log(isOrganizationExist);
  if (isOrganizationExist) {
    return redirect("/admin");
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container mx-auto">
        <SchoolRegistrationForm />
      </div>
    </section>
  );
}
