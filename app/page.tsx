import Image from "next/image";

import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/Dashboard/dashboardsidebar";
import { DashboardHeader } from "@/components/Dashboard/dashboardheader";



export default function Home() {
  return (
    <div>
    <div className="flex h-screen bg-background justify-center">
      <SidebarProvider>
        <DashboardSidebar/>
         <DashboardHeader />
      </SidebarProvider>
    </div>
   <main>
    
   </main>
    </div>
  );
}
