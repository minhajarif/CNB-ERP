
import { useState } from "react";
import SupervisorNavbar from "../components/supervisor-navbar/SupervisorNavbar";
import SupervisorSidebar from "../components/supervisor-sidebar/SupervisorSidebar";

const SupervisorLayout = ({ children }) => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100">

      <SupervisorNavbar
        setSidebarOpen={setSidebarOpen}
      />

      <SupervisorSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <main className="pt-20 px-4 md:px-6 pb-6 min-h-screen">
        {children}
      </main>

    </div>
  );
};

export default SupervisorLayout;