
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
import LabourDetails from "../pages/owner/LabourDetails";
import DepartmentDetails from "../pages/owner/DepartmentDetails";
import SupervisorDetails from "../pages/owner/SupervisorDetails";
import WorkDetails from "../pages/owner/WorkDetails";
import ProductionDetails from "../pages/owner/ProductionDetails";

import SupervisorDashboard from "../pages/supervisor/SupervisorDashboard";
import SupervisorAttendance from "../pages/supervisor/SupervisorAttendance";
import SupervisorProductGallery from "../pages/supervisor/SupervisorProductGallery";
import SupervisorProduction from "../pages/supervisor/SupervisorProduction";
import SupervisorLabourList from "../pages/supervisor/SupervisorLabourList";
import SupervisorReports from "../pages/supervisor/SupervisorReports";
import SupervisorNotifications from "../pages/supervisor/SupervisorNotifications";
import SupervisorProfile from "../pages/supervisor/SupervisorProfile";


import LabourDashboard from "../pages/labour/LabourDashboard";
import LabourMyAttendance from "../pages/labour/LabourMyAttendance";
import LabourMyProduction from "../pages/labour/LabourMyProduction";
import LabourMySalary from "../pages/labour/LabourMySalary";
import LabourAdvanceHistory from "../pages/labour/LabourAdvanceHistory";
import LabourNotifications from "../pages/labour/LabourNotifications";
import LabourMyProfile from "../pages/labour/LabourMyProfile";
import LabourWorkHistory from "../pages/labour/LabourWorkHistory";
import ProtectedRoute from "./ProtectedRoute";

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


        <Route
          path="/supervisor/dashboard"
          element={<SupervisorDashboard />}
        />

        <Route
          path="/supervisor/attendance"
          element={<SupervisorAttendance />}
        />

        <Route
          path="/supervisor/product-gallery"
          element={<SupervisorProductGallery />}
        />
        

        <Route
          path="/supervisor/production"
          element={<SupervisorProduction />}
        />

        <Route
          path="/supervisor/labour-list"
          element={<SupervisorLabourList />}
       />

        <Route
          path="/supervisor/reports"
          element={<SupervisorReports />}
        />

       <Route
         path="/supervisor/notifications"
         element={<SupervisorNotifications />}
        />

       <Route
         path="/supervisor/profile"
         element={<SupervisorProfile />}
        />

        <Route
          path="/labour/dashboard"
          element={<LabourDashboard />}
        />

        <Route
          path="/labour/attendance"
          element={<LabourMyAttendance />}
        />

        <Route
          path="/labour/production"
          element={<LabourMyProduction />}
        />

        <Route
          path="/labour/salary"
          element={<LabourMySalary />}
        />

        <Route
          path="/labour/advance-history"
          element={<LabourAdvanceHistory />}
        />

        <Route
          path="/labour/notifications"
          element={<LabourNotifications />}
        />

        <Route
          path="/labour/profile"
          element={<LabourMyProfile />}
        />

        <Route
          path="/labour/work-history"
          element={<LabourWorkHistory />}
        />

        <Route
          path="/owner/labour-details"
          element={<LabourDetails />}
        />

        <Route
          path="/owner/supervisor-details"
          element={<SupervisorDetails />}
        />

        <Route
           path="/owner/department-details"
           element={<DepartmentDetails />}
        />

        <Route
           path="/owner/work-details"
           element={<WorkDetails />}
        />

        <Route
           path="/owner/production-details"
           element={<ProductionDetails />}
        />

        <Route
           path="/labour/dashboard"
           element={<LabourDashboard />}
        />

        <Route
            path="/owner/dashboard"
            element={
               <ProtectedRoute allowedRole="owner" >
                  <Dashboard />
               </ProtectedRoute>
            }
        />

        <Route
            path="/supervisor/dashboard"
            element={
               <ProtectedRoute allowedRole="supervisor">
                  <SupervisorDashboard />
               </ProtectedRoute>
            }
        />

        <Route
          path="/labour/dashboard"
          element={
            <ProtectedRoute allowedRole="labour">
                <LabourDashboard />
            </ProtectedRoute>
          }
        />


      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;