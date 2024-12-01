"use client"

import { Team } from "@/app/(modules)/admin/sidebar-admin";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { LucideIcon } from "lucide-react";
import { Session } from "next-auth";

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  session: Session;
  data: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
  teams: Team;
}

export function AppSidebar({ teams, data, session, ...props }: AppSidebarProps) {  
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser data={session.user ?? { name: "", email: "", image: "" }} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
