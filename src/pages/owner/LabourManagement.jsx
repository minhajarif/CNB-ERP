import MainLayout from "../../layouts/MainLayout";

const LabourManagement = () => {
  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Labour Management
        </h1>

        <button className="bg-blue-700 text-white px-5 py-3 rounded-lg">
          + Add Labour
        </button>
      </div>

      {/* Add Labour Form */}

      <div className="bg-white rounded-xl shadow p-5 mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Add New Labour
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Employee ID"
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Full Name"
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Mobile Number"
            className="border p-3 rounded-lg"
          />

          <select className="border p-3 rounded-lg">
            <option>Select Department</option>
            <option>Stitching</option>
            <option>Cutting</option>
            <option>Packing</option>
            <option>Finishing</option>
          </select>

          <input
            type="date"
            className="border p-3 rounded-lg"
          />

          <input
            type="file"
            className="border p-3 rounded-lg"
          />
        </div>

        <button className="mt-5 bg-blue-700 text-white px-6 py-3 rounded-lg">
          Save Labour
        </button>
      </div>

      {/* Search + Table */}

      <div className="bg-white rounded-xl shadow p-4">
        <input
          type="text"
          placeholder="Search Labour..."
          className="w-full border p-3 rounded-lg mb-4"
        />

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3">ID</th>
                <th className="text-left p-3">Photo</th>
                <th className="text-left p-3">Name</th>
                <th className="text-left p-3">Department</th>
                <th className="text-left p-3">Mobile</th>
                <th className="text-left p-3">Status</th>
                <th className="text-left p-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="p-3">EMP001</td>

                <td className="p-3">
                  <img
                    src="https://i.pravatar.cc/40"
                    alt="labour"
                    className="rounded-full"
                  />
                </td>

                <td className="p-3">Rahman</td>

                <td className="p-3">Stitching</td>

                <td className="p-3">9876543210</td>

                <td className="p-3">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Active
                  </span>
                </td>

                <td className="p-3 flex gap-2">
                  <button className="bg-blue-600 text-white px-3 py-1 rounded">
                    View
                  </button>

                  <button className="bg-yellow-500 text-white px-3 py-1 rounded">
                    Edit
                  </button>

                  <button className="bg-red-600 text-white px-3 py-1 rounded">
                    Delete
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

export default LabourManagement;