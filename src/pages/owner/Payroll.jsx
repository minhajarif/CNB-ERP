
import MainLayout from "../../layouts/MainLayout";

const Payroll = () => {
  return (
    <MainLayout>

      <h1 className="text-3xl font-bold mb-6">
        Payroll
      </h1>

      <div className="bg-white p-5 rounded-xl shadow">

        <table className="w-full">

          <thead>
            <tr className="border-b">
              <th className="p-3 text-left">Labour</th>
              <th className="p-3 text-left">Salary</th>
              <th className="p-3 text-left">Advance</th>
              <th className="p-3 text-left">Payable</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3">Rahman</td>
              <td className="p-3">₹12000</td>
              <td className="p-3">₹2000</td>
              <td className="p-3">₹10000</td>
            </tr>
          </tbody>

        </table>

      </div>

    </MainLayout>
  );
};

export default Payroll;