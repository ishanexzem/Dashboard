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
     <div>
      <h1 className="text-lg text-white font-bold">Dashboard</h1>
      <p className="text-sm text-gray-700 font-semibold">Dashboard</p>
     </div>
   </main>
    </div>
  );
}
