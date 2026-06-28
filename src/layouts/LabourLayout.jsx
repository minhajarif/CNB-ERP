
import { useState } from "react";
import LabourNavbar from "../components/labour-navbar/LabourNavbar";
import LabourSidebar from "../components/labour-sidebar/LabourSidebar";

const LabourLayout = ({ children }) => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100">

      <LabourNavbar
        setSidebarOpen={setSidebarOpen}
      />

      <LabourSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <main className="pt-20 px-4 md:px-6 pb-6 min-h-screen">
        {children}
      </main>

    </div>
  );
};

export default LabourLayout;