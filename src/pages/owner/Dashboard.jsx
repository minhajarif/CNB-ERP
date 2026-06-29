import MainLayout from "../../layouts/MainLayout";

import ProductionChart from "../../components/charts/ProductionChart";
import AttendanceChart from "../../components/charts/AttendanceChart";
import DepartmentChart from "../../components/charts/DepartmentChart";


const Dashboard = () => {
  return (
    <MainLayout>

      <h1 className="text-3xl font-bold mb-6">
        Owner Dashboard
      </h1>

      

      {/* Stats Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Total Labour
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            0
          </h1>

        </div>

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Present Today
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            0
          </h1>

        </div>

        <div className="bg-red-500 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Absent Today
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            0
          </h1>

        </div>

        <div className="bg-purple-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Production Today
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            0
          </h1>

        </div>

      </div>

      {/* Charts Section */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">

        <ProductionChart />

        <AttendanceChart />

      </div>

      {/* Department Chart */}

      <div className="mb-8">

        <DepartmentChart />

      </div>

      {/* Bottom Section */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* Recent Activities */}

        <div className="bg-white rounded-xl shadow p-5">

          <h2 className="text-xl font-semibold mb-4">
            Recent Activities
          </h2>

          <div className="space-y-4">

            <div className="border-b pb-3">
              New Labour Added
            </div>

            <div className="border-b pb-3">
              Salary Generated
            </div>

            <div className="border-b pb-3">
              Production Updated
            </div>

            <div>
              Advance Payment Given
            </div>

          </div>

        </div>

        {/* Salary Summary */}

        <div className="bg-white rounded-xl shadow p-5">

          <h2 className="text-xl font-semibold mb-4">
            Salary Summary
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">

              <span>
                Total Salary
              </span>

              <span className="font-bold">
                ₹0
              </span>

            </div>

            <div className="flex justify-between">

              <span>
                Total Advance
              </span>

              <span className="font-bold">
                ₹0
              </span>

            </div>

            <div className="flex justify-between">

              <span>
                Pending Salary
              </span>

              <span className="font-bold text-red-600">
                ₹0
              </span>

            </div>

            <div className="flex justify-between">

              <span>
                Paid Salary
              </span>

              <span className="font-bold text-green-600">
                ₹0
              </span>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default Dashboard;