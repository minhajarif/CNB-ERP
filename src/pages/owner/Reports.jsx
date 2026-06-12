
import MainLayout from "../../layouts/MainLayout";

const Reports = () => {
  return (
    <MainLayout>

      <h1 className="text-3xl font-bold mb-6">
        Reports
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

        <button className="bg-white shadow rounded-xl p-4">
          Today
        </button>

        <button className="bg-white shadow rounded-xl p-4">
          Yesterday
        </button>

        <button className="bg-white shadow rounded-xl p-4">
          Weekly
        </button>

        <button className="bg-white shadow rounded-xl p-4">
          Monthly
        </button>

        <button className="bg-white shadow rounded-xl p-4">
          Custom Range
        </button>

      </div>

    </MainLayout>
  );
};

export default Reports;