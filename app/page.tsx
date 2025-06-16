import Image from "next/image";
import { DashboardHeader } from "@/components/Dashboard/dashboardheader"


export default function Home() {
  return (
   <div className="flex h-screen bg-background">
    <DashboardHeader/>
   </div>
  );
}
