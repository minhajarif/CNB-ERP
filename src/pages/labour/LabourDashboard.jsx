import { useState } from "react";
import LabourLayout from "../../layouts/LabourLayout";
import AttendanceChart from "../../components/charts/AttendanceChart";
import ProductionChart from "../../components/charts/ProductionChart";
import SalaryChart from "../../components/charts/SalaryChart";

const Dashboard = () => {

  const [dashboardData] = useState({
    attendanceStatus: "--",
    todayProduction: 0,
    currentSalary: 0,
    advanceBalance: 0,

    totalPieces: 0,
    walletPieces: 0,
    beltPieces: 0,
    bagPieces: 0,
    totalEarnings: 0,

    recentActivities: [],
  });

  return (

    <LabourLayout>

      <h1 className="text-3xl font-bold mb-6">
        My Dashboard
      </h1>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Today's Status
          </h3>

          <h1 className="text-3xl font-bold mt-2">
            {dashboardData.attendanceStatus}
          </h1>

        </div>

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Today's Production
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            {dashboardData.todayProduction}
          </h1>

          <p className="text-sm mt-2">
            Pieces Completed
          </p>

        </div>

        <div className="bg-purple-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Current Salary
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            ₹{dashboardData.currentSalary}
          </h1>

        </div>

        <div className="bg-yellow-500 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Advance Balance
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            ₹{dashboardData.advanceBalance}
          </h1>

        </div>

      </div>
            {/* Charts Section */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">

        <AttendanceChart />

        <ProductionChart />

        <SalaryChart />

      </div>

      {/* Bottom Section */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* Recent Activities */}

        <div className="bg-white rounded-xl shadow p-5">

          <h2 className="text-xl font-semibold mb-4">
            Recent Activities
          </h2>

          <div className="space-y-4">
                      {dashboardData.recentActivities.length > 0 ? (

              dashboardData.recentActivities.map((activity, index) => (

                <div
                  key={index}
                  className="border-b pb-3 last:border-b-0"
                >
                  {activity}
                </div>

              ))

            ) : (

              <div className="text-center text-gray-500 py-8">

                No Recent Activities Found

              </div>

            )}

          </div>

        </div>

        {/* Work Summary */}

        <div className="bg-white rounded-xl shadow p-5">

          <h2 className="text-xl font-semibold mb-4">
            My Work Summary
          </h2>

          <div className="space-y-4">
                      <div className="flex justify-between">

              <span>
                Total Pieces This Month
              </span>

              <span className="font-bold">
                {dashboardData.totalPieces}
              </span>

            </div>

            <div className="flex justify-between">

              <span>
                Wallet Stitching
              </span>

              <span className="font-bold">
                {dashboardData.walletPieces} Pieces
              </span>

            </div>

            <div className="flex justify-between">

              <span>
                Belt Stitching
              </span>

              <span className="font-bold">
                {dashboardData.beltPieces} Pieces
              </span>

            </div>

            <div className="flex justify-between">

              <span>
                Bag Stitching
              </span>

              <span className="font-bold">
                {dashboardData.bagPieces} Pieces
              </span>

            </div>

            <div className="flex justify-between">

              <span>
                Total Earnings
              </span>

              <span className="font-bold text-green-600">
                ₹{dashboardData.totalEarnings}
              </span>

            </div>

          </div>

        </div>  
              </div>

    </LabourLayout>

  );

};

export default Dashboard;