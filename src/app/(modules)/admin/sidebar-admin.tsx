"use client";
import React, { useEffect, useState } from "react";

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
  Banknote,
  BarChart,
  Bell,
  BookOpen,
  CalendarDays,
  ClipboardList,
  GraduationCap,
  Grid,
  LayoutDashboard,
  LucideIcon,
  PiggyBank,
  Settings,
  Users,
} from "lucide-react";
import { useSession } from "next-auth/react";
import { Organization } from "@prisma/client";
import { getOrganizationDetails } from "@/action/auth-actions";
import { useRouter } from "next/navigation";

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

export default function AdminSidebar({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [organization, setOrganization] = useState<Organization>();
  const session = useSession();
  const router = useRouter();

  const teams: Team = {
    name: organization?.name ?? "",
    logo: organization?.logo ?? "",
    subdomain: organization?.subdomain ?? "",
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

  const navMain = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
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
      icon: Banknote,
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
  ];

  useEffect(() => {
    const getData = async () => {
      const response = await getOrganizationDetails(
        session.data?.user?.email ?? ""
      );
      if (response) {
        setOrganization(response);
      } else {
        router.push("/school-registration");
      }
    };

    getData();
  }, [router, session, session.data?.user?.email]);
  if (!session.data) {
    return router.push("/auth/login");
  }
  return (
    <SidebarProvider>
      <AppSidebar teams={teams} data={navMain} session={session.data} />
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
  );
}
