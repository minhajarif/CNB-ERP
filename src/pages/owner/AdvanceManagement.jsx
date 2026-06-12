
import MainLayout from "../../layouts/MainLayout";

const AdvanceManagement = () => {
  return (
    <MainLayout>

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Advance Management
        </h1>

        <button className="bg-blue-700 text-white px-5 py-3 rounded-lg">
          + Give Advance
        </button>

      </div>

      <div className="bg-white p-5 rounded-xl shadow">

        <table className="w-full">

          <thead>
            <tr className="border-b">
              <th className="p-3 text-left">Labour</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Date</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3">Rahman</td>
              <td className="p-3">₹2000</td>
              <td className="p-3">12-06-2026</td>
            </tr>
          </tbody>

        </table>

      </div>

    </MainLayout>
  );
};

export default AdvanceManagement;