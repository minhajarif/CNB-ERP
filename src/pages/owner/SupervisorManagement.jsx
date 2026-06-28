
import MainLayout from "../../layouts/MainLayout";
import { Link } from "react-router-dom";
const SupervisorManagement = () => {
  return (
    <MainLayout>

      {/* Header */}

      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">

        <div>
          <h1 className="text-3xl font-bold">
            Supervisor Management
          </h1>

          <p className="text-gray-500 mt-1">
            Manage supervisors, departments and labour performance
          </p>
        </div>

        <button className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-xl shadow">
          + Add Supervisor
        </button>

      </div>

      {/* KPI Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-5 rounded-2xl shadow">
          <p className="opacity-80">
            Total Supervisors
          </p>

          <h2 className="text-4xl font-bold mt-2">
            12
          </h2>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-5 rounded-2xl shadow">
          <p className="opacity-80">
            Active Supervisors
          </p>

          <h2 className="text-4xl font-bold mt-2">
            10
          </h2>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-5 rounded-2xl shadow">
          <p className="opacity-80">
            Total Labour Managed
          </p>

          <h2 className="text-4xl font-bold mt-2">
            125
          </h2>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-5 rounded-2xl shadow">
          <p className="opacity-80">
            Monthly Production
          </p>

          <h2 className="text-4xl font-bold mt-2">
            8,500
          </h2>
        </div>

      </div>

      {/* Analytics */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

        <div className="bg-white rounded-2xl shadow p-5">

          <h3 className="font-semibold text-gray-700">
            Best Supervisor
          </h3>

          <h2 className="text-3xl font-bold text-green-600 mt-3">
            Ahmad
          </h2>

          <p className="text-gray-500 mt-2">
            4500 Production
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow p-5">

          <h3 className="font-semibold text-gray-700">
            Highest Attendance
          </h3>

          <h2 className="text-3xl font-bold text-blue-600 mt-3">
            98%
          </h2>

          <p className="text-gray-500 mt-2">
            Stitching Department
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow p-5">

          <h3 className="font-semibold text-gray-700">
            Salary Cost Managed
          </h3>

          <h2 className="text-3xl font-bold text-purple-600 mt-3">
            ₹2.5L
          </h2>

          <p className="text-gray-500 mt-2">
            Monthly Payroll
          </p>

        </div>

      </div>

      {/* Add Supervisor Form */}

      <div className="bg-white rounded-2xl shadow p-6 mb-6">

        <h2 className="text-xl font-semibold mb-5">
          Add New Supervisor
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <input
            type="text"
            placeholder="Supervisor ID"
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Supervisor Name"
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Mobile Number"
            className="border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="border p-3 rounded-lg"
          />

          <select className="border p-3 rounded-lg">

            <option>
              Select Department
            </option>

            <option>
              Stitching
            </option>

            <option>
              Packing
            </option>

            <option>
              Finishing
            </option>

            <option>
              Quality
            </option>

          </select>

          <select className="border p-3 rounded-lg">

            <option>
              Status
            </option>

            <option>
              Active
            </option>

            <option>
              Inactive
            </option>

          </select>

          <input
            type="file"
            className="border p-3 rounded-lg md:col-span-2"
          />

        </div>

        <button className="bg-blue-700 text-white px-6 py-3 rounded-xl mt-5">
          Save Supervisor
        </button>

      </div>

      {/* Search Filters */}

      <div className="bg-white rounded-2xl shadow p-5 mb-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <input
            type="text"
            placeholder="Search Supervisor..."
            className="border p-3 rounded-lg"
          />

          <select className="border p-3 rounded-lg">

            <option>
              All Departments
            </option>

            <option>
              Stitching
            </option>

            <option>
              Packing
            </option>

            <option>
              Finishing
            </option>

          </select>

          <select className="border p-3 rounded-lg">

            <option>
              All Status
            </option>

            <option>
              Active
            </option>

            <option>
              Inactive
            </option>

          </select>

        </div>

      </div>

      {/* Supervisor Table */}

      <div className="bg-white rounded-2xl shadow p-5">

        <h2 className="text-xl font-semibold mb-4">
          Supervisor List
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b bg-gray-50">

                <th className="p-3 text-left">
                  ID
                </th>

                <th className="p-3 text-left">
                  Photo
                </th>

                <th className="p-3 text-left">
                  Name
                </th>

                <th className="p-3 text-left">
                  Department
                </th>

                <th className="p-3 text-left">
                  Labour
                </th>

                <th className="p-3 text-left">
                  Production
                </th>

                <th className="p-3 text-left">
                  Attendance
                </th>

                <th className="p-3 text-left">
                  Mobile
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
                  SUP001
                </td>

                <td className="p-3">

                  <img
                    src="https://i.pravatar.cc/50?img=5"
                    alt="supervisor"
                    className="w-10 h-10 rounded-full"
                  />

                </td>

                <td className="p-3 font-medium">
                  Ahmad
                </td>

                <td className="p-3">
                  Stitching
                </td>

                <td className="p-3">
                  35
                </td>

                <td className="p-3">
                  4500
                </td>

                <td className="p-3 text-green-600 font-semibold">
                  98%
                </td>

                <td className="p-3">
                  9876543210
                </td>

                <td className="p-3">

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Active
                  </span>

                </td>

                <td className="p-3">

                  <div className="flex gap-2">

                    <Link
                       to="/owner/supervisor-details"
                       className="bg-blue-600 text-white px-3 py-2 rounded-lg"
                    >
                       View
                    </Link>

                    <button className="bg-yellow-500 text-white px-3 py-2 rounded-lg">
                      Edit
                    </button>

                    <button className="bg-red-600 text-white px-3 py-2 rounded-lg">
                      Delete
                    </button>

                  </div>

                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </MainLayout>
  );
};

export default SupervisorManagement;