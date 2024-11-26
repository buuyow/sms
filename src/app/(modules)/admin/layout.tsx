import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getOrganizationDetails } from "@/action/auth-actions";

import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import {
  BarChart,
  Bell,
  BookOpen,
  Bot,
  CalendarDays,
  ClipboardList,
  GraduationCap,
  Grid,
  LucideIcon,
  PiggyBank,
  Settings,
  Settings2,
  SquareTerminal,
  Users,
} from "lucide-react";

// This is sample data.


export type Team = {
  name: string;
  logo: string | null;
  subdomain: string;
  data: {
    label: string;
    icon: LucideIcon;
    subdomain: string;
  }[];
};
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

  const teams: Team = {
    name: isOrganizationExist.name,
    logo: isOrganizationExist.logo,
    subdomain: isOrganizationExist.subdomain,
    data: [
      {
        label: "Administration",
        icon: Grid,
        subdomain: "admin",
      },
      {
        label: "Teachers",
        icon: Users,
        subdomain: "teamchers",
      },
      {
        label: "Students",
        icon: GraduationCap,
        subdomain: "studients",
      },
    ],
  };

  const navMain= [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: BarChart,
      isActive: true,
    },
    {
      title: "Students",
      url: "/students",
      icon: GraduationCap,
      items: [
        { title: "Enrollment", url: "/students/enrollment" },
        { title: "Attendance", url: "/students/attendance" },
        { title: "Performance", url: "/students/performance" },
      ],
    },
    {
      title: "Teachers",
      url: "/teachers",
      icon: Users,
      items: [
        { title: "Directory", url: "/teachers/directory" },
        { title: "Schedules", url: "/teachers/schedules" },
        { title: "Performance", url: "/teachers/performance" },
      ],
    },
    {
      title: "Classes",
      url: "/classes",
      icon: CalendarDays,
      items: [
        { title: "Timetable", url: "/classes/timetable" },
        { title: "Subjects", url: "/classes/subjects" },
        { title: "Assignments", url: "/classes/assignments" },
      ],
    },
    {
      title: "Exams",
      url: "/exams",
      icon: ClipboardList,
      items: [
        { title: "Schedule", url: "/exams/schedule" },
        { title: "Results", url: "/exams/results" },
        { title: "Analysis", url: "/exams/analysis" },
      ],
    },
    {
      title: "Library",
      url: "/library",
      icon: BookOpen,
    },
    {
      title: "Finance",
      url: "/finance",
      icon: PiggyBank,
      items: [
        { title: "Fees", url: "/finance/fees" },
        { title: "Expenses", url: "/finance/expenses" },
        { title: "Payroll", url: "/finance/payroll" },
      ],
    },
    {
      title: "Reports",
      url: "/reports",
      icon: BarChart,
    },
    {
      title: "Notifications",
      url: "/notifications",
      icon: Bell,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
      items: [
        { title: "School Profile", url: "/settings/profile" },
        { title: "Users", url: "/settings/users" },
        { title: "Integrations", url: "/settings/integrations" },
      ],
    },
  ]


  return (
    <main>
      <SidebarProvider>
        <AppSidebar teams={teams} data={navMain} session={session} />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      Building Your Application
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <section>{children}</section>
        </SidebarInset>
      </SidebarProvider>
    </main>
  );
}
