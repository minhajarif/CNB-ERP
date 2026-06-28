import MainLayout from "../../layouts/MainLayout";

import AttendanceChart from "../../components/charts/AttendanceChart";
import ProductionChart from "../../components/charts/ProductionChart";
import SalaryChart from "../../components/charts/SalaryChart";

const Reports = () => {
  return (
    <MainLayout>

      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

        <h1 className="text-3xl font-bold">
          Reports & Analytics
        </h1>

        <div className="flex flex-wrap gap-2">

          <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
            PDF
          </button>

          <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
            Excel
          </button>

          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg">
            Print
          </button>

        </div>

      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Total Production
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            8,500
          </h1>

        </div>

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Total Salary
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            ₹2,50,000
          </h1>

        </div>

        <div className="bg-yellow-500 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Total Advance
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            ₹45,000
          </h1>

        </div>

        <div className="bg-purple-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Total Labour
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            125
          </h1>

        </div>

      </div>

      {/* Analytics Charts */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">

        <AttendanceChart />

        <ProductionChart />

        <SalaryChart />

      </div>

      {/* Filters */}

      <div className="bg-white rounded-xl shadow p-5 mb-8">

        <h2 className="text-xl font-semibold mb-4">
          Report Filters
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">

          <button className="bg-blue-600 text-white py-3 rounded-lg">
            Today
          </button>

          <button className="border py-3 rounded-lg">
            Week
          </button>

          <button className="border py-3 rounded-lg">
            Month
          </button>

          <button className="border py-3 rounded-lg">
            Year
          </button>

          <button className="border py-3 rounded-lg">
            Custom Range
          </button>

        </div>

      </div>

      {/* Reports Table */}

      <div className="bg-white rounded-xl shadow p-5">

        <h2 className="text-xl font-semibold mb-4">
          Generated Reports
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="p-3 text-left">
                  Report Type
                </th>

                <th className="p-3 text-left">
                  Department
                </th>

                <th className="p-3 text-left">
                  Date
                </th>

                <th className="p-3 text-left">
                  Records
                </th>

                <th className="p-3 text-left">
                  Status
                </th>

                <th className="p-3 text-left">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-b">

                <td className="p-3">
                  Attendance Report
                </td>

                <td className="p-3">
                  Stitching
                </td>

                <td className="p-3">
                  12-06-2026
                </td>

                <td className="p-3">
                  125
                </td>

                <td className="p-3">

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Ready
                  </span>

                </td>

                <td className="p-3">

                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    Download
                  </button>

                </td>

              </tr>

              <tr className="border-b">

                <td className="p-3">
                  Production Report
                </td>

                <td className="p-3">
                  Packing
                </td>

                <td className="p-3">
                  June 2026
                </td>

                <td className="p-3">
                  8,500
                </td>

                <td className="p-3">

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Ready
                  </span>

                </td>

                <td className="p-3">

                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    Download
                  </button>

                </td>

              </tr>

              <tr className="border-b">

                <td className="p-3">
                  Salary Report
                </td>

                <td className="p-3">
                  All Departments
                </td>

                <td className="p-3">
                  June 2026
                </td>

                <td className="p-3">
                  ₹2,50,000
                </td>

                <td className="p-3">

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Generated
                  </span>

                </td>

                <td className="p-3">

                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    Download
                  </button>

                </td>

              </tr>

              <tr>

                <td className="p-3">
                  Advance Report
                </td>

                <td className="p-3">
                  All Departments
                </td>

                <td className="p-3">
                  June 2026
                </td>

                <td className="p-3">
                  ₹45,000
                </td>

                <td className="p-3">

                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                    Active
                  </span>

                </td>

                <td className="p-3">

                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    Download
                  </button>

                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </MainLayout>
  );
};

export default Reports;