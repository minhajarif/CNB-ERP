import { useState } from "react";

import SupervisorLayout from "../../layouts/SupervisorLayout";

import AttendanceChart from "../../components/charts/AttendanceChart";
import ProductionChart from "../../components/charts/ProductionChart";
import SalaryChart from "../../components/charts/SalaryChart";

const SupervisorDashboard = () => {

  const [dashboardData] = useState({

    totalLabour: 0,

    presentToday: 0,

    absentToday: 0,

    lateEntries: 0,

    productionToday: 0,

    salaryToday: 0,

    department: "",

    monthlySalary: 0,

  });

  const [topLabours] = useState([]);

  const [activities] = useState([]);

  return (

    <SupervisorLayout>

      <h1 className="text-3xl font-bold mb-6">
        Supervisor Dashboard
      </h1>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 gap-6 mb-8">

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-sm">
            Total Labour
          </h3>

          <h1 className="text-3xl font-bold mt-2">
            {dashboardData.totalLabour}
          </h1>

        </div>

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-sm">
            Present Today
          </h3>

          <h1 className="text-3xl font-bold mt-2">
            {dashboardData.presentToday}
          </h1>

        </div>

        <div className="bg-red-500 text-white p-5 rounded-xl shadow">

          <h3 className="text-sm">
            Absent Today
          </h3>

          <h1 className="text-3xl font-bold mt-2">
            {dashboardData.absentToday}
          </h1>

        </div>

        <div className="bg-yellow-500 text-white p-5 rounded-xl shadow">

          <h3 className="text-sm">
            Late Entries
          </h3>

          <h1 className="text-3xl font-bold mt-2">
            {dashboardData.lateEntries}
          </h1>

        </div>

        <div className="bg-purple-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-sm">
            Production Today
          </h3>

          <h1 className="text-3xl font-bold mt-2">
            {dashboardData.productionToday}
          </h1>

        </div>

        <div className="bg-indigo-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-sm">
            Salary Cost Today
          </h3>

          <h1 className="text-3xl font-bold mt-2">
            ₹{dashboardData.salaryToday}
          </h1>

        </div>

      </div>

            {/* Charts */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">

        <AttendanceChart />

        <ProductionChart />

        <SalaryChart />

      </div>

      {/* Department Summary + Top Labour */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">

        {/* Department Summary */}

        <div className="bg-white rounded-xl shadow p-5">

          <h2 className="text-xl font-semibold mb-4">
            Department Summary
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span>Department</span>

              <span className="font-bold">
                {dashboardData.department || "-"}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Total Labour</span>

              <span className="font-bold">
                {dashboardData.totalLabour}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Present</span>

              <span className="font-bold text-green-600">
                {dashboardData.presentToday}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Absent</span>

              <span className="font-bold text-red-600">
                {dashboardData.absentToday}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Production Today</span>

              <span className="font-bold">
                {dashboardData.productionToday}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Monthly Salary Cost</span>

              <span className="font-bold text-purple-600">
                ₹{dashboardData.monthlySalary}
              </span>
            </div>

          </div>

        </div>

        {/* Top Labour */}

        <div className="bg-white rounded-xl shadow p-5">

          <h2 className="text-xl font-semibold mb-4">
            Top Labour
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="border-b">

                  <th className="p-3 text-left">
                    Name
                  </th>

                  <th className="p-3 text-left">
                    Production
                  </th>

                  <th className="p-3 text-left">
                    Salary
                  </th>

                </tr>

              </thead>

              <tbody>
                              {topLabours.length > 0 ? (

                  topLabours.map((item, index) => (

                    <tr
                      key={index}
                      className="border-b"
                    >

                      <td className="p-3">
                        {item.name}
                      </td>

                      <td className="p-3">
                        {item.production}
                      </td>

                      <td className="p-3">
                        ₹{item.salary}
                      </td>

                    </tr>

                  ))

                ) : (

                  <tr>

                    <td
                      colSpan="3"
                      className="text-center py-6 text-gray-500"
                    >
                      No Top Labour Found
                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

      {/* Recent Activities */}

      <div className="bg-white rounded-xl shadow p-5">

        <h2 className="text-xl font-semibold mb-4">
          Recent Activities
        </h2>

        <div className="space-y-4">
                  {activities.length > 0 ? (

            activities.map((activity, index) => (

              <div
                key={index}
                className="border-b pb-3 last:border-0"
              >
                {activity}
              </div>

            ))

          ) : (

            <div className="text-center text-gray-500 py-6">
              No Recent Activities
            </div>

          )}

        </div>

      </div>

    </SupervisorLayout>

  );

};

export default SupervisorDashboard;  