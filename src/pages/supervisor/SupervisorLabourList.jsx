
import SupervisorLayout from "../../layouts/SupervisorLayout";

const SupervisorLabourList = () => {
  return (
    <SupervisorLayout>

      <h1 className="text-3xl font-bold mb-6">
        Labour List
      </h1>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">
          <h3 className="text-lg">
            Total Labour
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            35
          </h1>
        </div>

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">
          <h3 className="text-lg">
            Present Today
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            32
          </h1>
        </div>

        <div className="bg-red-500 text-white p-5 rounded-xl shadow">
          <h3 className="text-lg">
            Absent Today
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            3
          </h1>
        </div>

        <div className="bg-purple-600 text-white p-5 rounded-xl shadow">
          <h3 className="text-lg">
            Active Workers
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            34
          </h1>
        </div>

      </div>

      {/* Search */}

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <input
          type="text"
          placeholder="Search Labour..."
          className="w-full border p-3 rounded-lg"
        />

      </div>

      {/* Labour Table */}

      <div className="bg-white rounded-xl shadow p-5">

        <h2 className="text-xl font-semibold mb-4">
          Department Labour
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b">

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
                  EMP001
                </td>

                <td className="p-3">

                  <img
                    src="https://i.pravatar.cc/40"
                    alt="labour"
                    className="w-10 h-10 rounded-full"
                  />

                </td>

                <td className="p-3">
                  Rahman
                </td>

                <td className="p-3">
                  Stitching
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

                    <button className="bg-blue-600 text-white px-3 py-2 rounded-lg">
                      View
                    </button>

                    <button className="bg-yellow-500 text-white px-3 py-2 rounded-lg">
                      Edit
                    </button>

                  </div>

                </td>

              </tr>

              <tr>

                <td className="p-3">
                  EMP002
                </td>

                <td className="p-3">

                  <img
                    src="https://i.pravatar.cc/41"
                    alt="labour"
                    className="w-10 h-10 rounded-full"
                  />

                </td>

                <td className="p-3">
                  Ahmed
                </td>

                <td className="p-3">
                  Stitching
                </td>

                <td className="p-3">
                  9876543211
                </td>

                <td className="p-3">

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Active
                  </span>

                </td>

                <td className="p-3">

                  <div className="flex gap-2">

                    <button className="bg-blue-600 text-white px-3 py-2 rounded-lg">
                      View
                    </button>

                    <button className="bg-yellow-500 text-white px-3 py-2 rounded-lg">
                      Edit
                    </button>

                  </div>

                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </SupervisorLayout>
  );
};

export default SupervisorLabourList;