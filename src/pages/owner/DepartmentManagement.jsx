import MainLayout from "../../layouts/MainLayout";
import { Link } from "react-router-dom";

const DepartmentManagement = () => {
  return (
    <MainLayout>

      {/* Header */}

      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">

        <div>
          <h1 className="text-3xl font-bold">
            Department Management
          </h1>

          <p className="text-gray-500 mt-1">
            Manage departments, supervisors and labour performance
          </p>
        </div>

        <button className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-xl shadow">
          + Add Department
        </button>

      </div>

      {/* KPI Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 gap-6 mb-6">

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-5 rounded-2xl shadow">
          <p>Total Departments</p>
          <h2 className="text-4xl font-bold mt-2">6</h2>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-5 rounded-2xl shadow">
          <p>Active Departments</p>
          <h2 className="text-4xl font-bold mt-2">6</h2>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-5 rounded-2xl shadow">
          <p>Total Supervisors</p>
          <h2 className="text-4xl font-bold mt-2">12</h2>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-5 rounded-2xl shadow">
          <p>Total Labour</p>
          <h2 className="text-4xl font-bold mt-2">125</h2>
        </div>

        <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white p-5 rounded-2xl shadow">
          <p>Monthly Production</p>
          <h2 className="text-4xl font-bold mt-2">8500</h2>
        </div>

        <div className="bg-gradient-to-r from-pink-600 to-pink-700 text-white p-5 rounded-2xl shadow">
          <p>Salary Cost</p>
          <h2 className="text-4xl font-bold mt-2">₹2.5L</h2>
        </div>

      </div>

      {/* Analytics */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

        <div className="bg-white rounded-2xl shadow p-5">

          <h3 className="font-semibold text-gray-700">
            Best Department
          </h3>

          <h2 className="text-3xl font-bold text-green-600 mt-3">
            Stitching
          </h2>

          <p className="text-gray-500 mt-2">
            4500 Production
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow p-5">

          <h3 className="font-semibold text-gray-700">
            Highest Salary Cost
          </h3>

          <h2 className="text-3xl font-bold text-purple-600 mt-3">
            ₹85,000
          </h2>

          <p className="text-gray-500 mt-2">
            Stitching Department
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow p-5">

          <h3 className="font-semibold text-gray-700">
            Attendance Rate
          </h3>

          <h2 className="text-3xl font-bold text-blue-600 mt-3">
            96%
          </h2>

          <p className="text-gray-500 mt-2">
            Company Wide
          </p>

        </div>

      </div>

      {/* Add Department */}

      <div className="bg-white rounded-2xl shadow p-6 mb-6">

        <h2 className="text-xl font-semibold mb-5">
          Add New Department
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <input
            type="text"
            placeholder="Department ID"
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Department Name"
            className="border p-3 rounded-lg"
          />

          <select className="border p-3 rounded-lg">

            <option>Select Supervisor</option>
            <option>Ahmad</option>
            <option>Rahman</option>

          </select>

          <select className="border p-3 rounded-lg">

            <option>Status</option>
            <option>Active</option>
            <option>Inactive</option>

          </select>

        </div>

        <button className="bg-blue-700 text-white px-6 py-3 rounded-xl mt-5">
          Save Department
        </button>

      </div>

      {/* Filters */}

      <div className="bg-white rounded-2xl shadow p-5 mb-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <input
            type="text"
            placeholder="Search Department..."
            className="border p-3 rounded-lg"
          />

          <select className="border p-3 rounded-lg">

            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>

          </select>

          <select className="border p-3 rounded-lg">

            <option>All Supervisors</option>
            <option>Ahmad</option>
            <option>Rahman</option>

          </select>

        </div>

      </div>

      {/* Department Table */}

      <div className="bg-white rounded-2xl shadow p-5">

        <h2 className="text-xl font-semibold mb-4">
          Department List
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b bg-gray-50">

                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Department</th>
                <th className="p-3 text-left">Supervisor</th>
                <th className="p-3 text-left">Labour</th>
                <th className="p-3 text-left">Production</th>
                <th className="p-3 text-left">Salary Cost</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Action</th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-b">

                <td className="p-3">DEP001</td>

                <td className="p-3 font-medium">
                  Stitching
                </td>

                <td className="p-3">
                  Ahmad
                </td>

                <td className="p-3">
                  35
                </td>

                <td className="p-3">
                  4500
                </td>

                <td className="p-3">
                  ₹85,000
                </td>

                <td className="p-3">

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Active
                  </span>

                </td>

                <td className="p-3">

                  <div className="flex gap-2">

                    <Link
                      to="/owner/department-details"
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

export default DepartmentManagement;