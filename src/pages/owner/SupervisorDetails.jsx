
import MainLayout from "../../layouts/MainLayout";

import AttendanceChart from "../../components/charts/AttendanceChart";
import ProductionChart from "../../components/charts/ProductionChart";
import SalaryChart from "../../components/charts/SalaryChart";
const SupervisorDetails = () => {
  return (
    <MainLayout>

      {/* Profile Header */}

      <div className="bg-white rounded-2xl shadow p-6 mb-6">

        <div className="flex flex-col md:flex-row items-center gap-6">

          <img
            src="https://i.pravatar.cc/120?img=5"
            alt="Supervisor"
            className="w-28 h-28 rounded-full border-4 border-blue-500"
          />

          <div>

            <h1 className="text-3xl font-bold">
              Ahmad Khan
            </h1>

            <p className="text-gray-500 mt-1">
              Stitching Department Supervisor
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">

              <p>
                📞 9876543210
              </p>

              <p>
                📧 ahmad@gmail.com
              </p>

              <p>
                🏢 Stitching
              </p>

              <p>
                📅 Joined: 15 Jan 2024
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* KPI Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">

          <h3>
            Total Labour
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            35
          </h1>

        </div>

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">

          <h3>
            Present Today
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            32
          </h1>

        </div>

        <div className="bg-purple-600 text-white p-5 rounded-xl shadow">

          <h3>
            Monthly Production
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            4500
          </h1>

        </div>

        <div className="bg-orange-500 text-white p-5 rounded-xl shadow">

          <h3>
            Salary Cost
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            ₹2.5L
          </h1>

        </div>

      </div>

      {/* Charts */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">

        <AttendanceChart />

        <ProductionChart />

        <SalaryChart />

      </div>

      {/* Department Stats */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">

        <div className="bg-white rounded-xl shadow p-5">

          <h2 className="text-xl font-semibold mb-4">
            Department Statistics
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span>Total Labour</span>
              <span className="font-bold">35</span>
            </div>

            <div className="flex justify-between">
              <span>Attendance Rate</span>
              <span className="font-bold text-green-600">
                98%
              </span>
            </div>

            <div className="flex justify-between">
              <span>Production Target</span>
              <span className="font-bold">
                5000
              </span>
            </div>

            <div className="flex justify-between">
              <span>Completed</span>
              <span className="font-bold text-blue-600">
                4500
              </span>
            </div>

          </div>

        </div>

        {/* Top Labour */}

        <div className="bg-white rounded-xl shadow p-5">

          <h2 className="text-xl font-semibold mb-4">
            Top Labour
          </h2>

          <div className="space-y-3">

            <div className="flex justify-between border-b pb-2">
              <span>Rahman</span>
              <span className="font-bold">
                450 Pieces
              </span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span>Ahmed</span>
              <span className="font-bold">
                390 Pieces
              </span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span>Ali</span>
              <span className="font-bold">
                350 Pieces
              </span>
            </div>

            <div className="flex justify-between">
              <span>Usman</span>
              <span className="font-bold">
                320 Pieces
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* Recent Activities */}

      <div className="bg-white rounded-xl shadow p-5">

        <h2 className="text-xl font-semibold mb-4">
          Recent Activities
        </h2>

        <div className="space-y-4">

          <div className="border-b pb-3">
            Attendance Updated
          </div>

          <div className="border-b pb-3">
            Production Entry Added
          </div>

          <div className="border-b pb-3">
            Salary Generated
          </div>

          <div>
            Labour Assigned New Work
          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default SupervisorDetails;

