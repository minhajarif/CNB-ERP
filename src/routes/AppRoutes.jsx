
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SplashScreen from "../pages/auth/SplashScreen";
import Login from "../pages/auth/Login";
import ForgotPassword from "../pages/auth/ForgotPassword";


import Dashboard from "../pages/owner/Dashboard";

import LabourManagement from "../pages/owner/LabourManagement";

import SupervisorManagement from "../pages/owner/SupervisorManagement";
import DepartmentManagement from "../pages/owner/DepartmentManagement";
import WorkManagement from "../pages/owner/WorkManagement";
import Production from "../pages/owner/Production";
import Attendance from "../pages/owner/Attendance";
import Payroll from "../pages/owner/Payroll";
import AdvanceManagement from "../pages/owner/AdvanceManagement";
import Reports from "../pages/owner/Reports";
import ProductGallery from "../pages/owner/ProductGallery";
import Notifications from "../pages/owner/Notifications";
import Settings from "../pages/owner/Settings";
import Profile from "../pages/owner/Profile";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<SplashScreen />} />

        <Route path="/login" element={<Login />} />

        <Route path="/owner/reports" element={<Reports />} />

        <Route
         path="/owner/product-gallery"
         element={<ProductGallery />}
        />

        <Route
          path="/owner/notifications"
          element={<Notifications />}
        />

        <Route
          path="/owner/settings"
          element={<Settings />}
        />

        <Route
          path="/owner/profile"
          element={<Profile />}
        />

        <Route
          path="/owner/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/owner/labour-management"
          element={<LabourManagement />}
        />

        <Route
          path="/owner/supervisor-management"
          element={<SupervisorManagement />}
        />  

        <Route
          path="/owner/department-management"
          element={<DepartmentManagement />}
        />

        <Route
          path="/owner/work-management"
          element={<WorkManagement />}
        />

        <Route
          path="/owner/production"
          element={<Production />}
        />

        <Route
          path="/owner/attendance"
          element={<Attendance />}
        />

        <Route
          path="/owner/payroll"
          element={<Payroll />}
        />

        <Route
          path="/owner/advance-management"
          element={<AdvanceManagement />}
        />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;