
import MainLayout from "../../layouts/MainLayout";

const WorkManagement = () => {
  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Work Management
        </h1>

        <button className="bg-blue-700 text-white px-5 py-3 rounded-lg">
          + Add Work Type
        </button>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3">Work Name</th>
              <th className="text-left p-3">Rate Type</th>
              <th className="text-left p-3">Rate</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3">Wallet Stitching</td>
              <td className="p-3">Piece Rate</td>
              <td className="p-3">₹10</td>
            </tr>
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
};

export default WorkManagement;