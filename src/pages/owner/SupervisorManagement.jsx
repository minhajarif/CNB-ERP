
import MainLayout from "../../layouts/MainLayout";

const SupervisorManagement = () => {
  return (
    <MainLayout>

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Supervisor Management
        </h1>

        <button className="bg-blue-700 text-white px-5 py-3 rounded-lg">
          + Add Supervisor
        </button>

      </div>

      <div className="bg-white rounded-xl shadow p-4">

        <input
          type="text"
          placeholder="Search Supervisor..."
          className="w-full border p-3 rounded-lg mb-4"
        />

        <table className="w-full">

          <thead>
            <tr className="border-b">

              <th className="text-left p-3">ID</th>
              <th className="text-left p-3">Photo</th>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Department</th>
              <th className="text-left p-3">Mobile</th>
              <th className="text-left p-3">Status</th>

            </tr>
          </thead>

          <tbody>

            <tr>

              <td className="p-3">SUP001</td>

              <td className="p-3">
                <img
                  src="https://i.pravatar.cc/40"
                  alt="supervisor"
                  className="rounded-full"
                />
              </td>

              <td className="p-3">
                Ahmad
              </td>

              <td className="p-3">
                Stitching
              </td>

              <td className="p-3">
                9876543210
              </td>

              <td className="p-3">
                Active
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </MainLayout>
  );
};

export default SupervisorManagement;