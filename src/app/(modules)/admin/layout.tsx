import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getOrganizationDetails } from "@/action/auth-actions";
import AdminSidebar from "./sidebar-admin";

export default async function ModulesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  if (!session) {
    return redirect("/auth/login");
  }
  const isOrganizationExist = await getOrganizationDetails(
    session.user?.email ?? ""
  );
  if (!isOrganizationExist) {
    return redirect("/school-registration");
  }

  return (
    <main>
      <AdminSidebar>{children}</AdminSidebar>
    </main>
  );
}
