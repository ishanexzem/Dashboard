import Image from "next/image";

import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/Dashboard/dashboardsidebar";
import { DashboardHeader } from "@/components/Dashboard/dashboardheader";



export default function Home() {
  return (
    <div className="flex h-screen bg-background jutsify-between">
      <SidebarProvider>
        <DashboardSidebar/>
        <DashboardHeader />
      </SidebarProvider>
    


    </div>
  );
}
