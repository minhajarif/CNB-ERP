
import MainLayout from "../../layouts/MainLayout";

const DepartmentManagement = () => {
  return (
    <MainLayout>

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Department Management
        </h1>

        <button className="bg-blue-700 text-white px-5 py-3 rounded-lg">
          + Add Department
        </button>

      </div>

      <div className="bg-white rounded-xl shadow p-4">

        <table className="w-full">

          <thead>
            <tr className="border-b">

              <th className="text-left p-3">
                Department ID
              </th>

              <th className="text-left p-3">
                Department Name
              </th>

              <th className="text-left p-3">
                Supervisor
              </th>

              <th className="text-left p-3">
                Total Labour
              </th>

            </tr>
          </thead>

          <tbody>

            <tr>

              <td className="p-3">
                DEP001
              </td>

              <td className="p-3">
                Stitching
              </td>

              <td className="p-3">
                Ahmad
              </td>

              <td className="p-3">
                35
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </MainLayout>
  );
};

export default DepartmentManagement;