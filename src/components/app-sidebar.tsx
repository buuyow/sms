"use client"

import { Team } from "@/app/(modules)/admin/layout";
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
import { Session } from "next-auth";

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  session: Session;
  data: unknown;
  teams:Team
}

export function AppSidebar({ teams, data, session, ...props }: AppSidebarProps) {
  // const [organization, setOrganization] = useState<Organization>()
  // const session = useSession();
  // const router = useRouter();

  // if (!session) {
  //   return router.push("/auth/login");
  // }

  // useEffect(() => {
  //   const getData = async () => {
  //     const isOrganizationExist = await getOrganizationDetails(
  //       session.data?.user?.email ?? ""
  //     );
  //     if (!isOrganizationExist) {
  //       router.push("/school-registration");
  //     } else {
  //       setOrganization(isOrganizationExist);
  //     }
  //   };

  //   if (session) {
  //     getData();
  //   }
  // }, [router, session.data?.user?.email, session]);
 console.log(teams, "🚀");
  
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={teams} />
      </SidebarHeader>
      
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser data={session.user ?? { name: "", email: "", image: "" }} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
