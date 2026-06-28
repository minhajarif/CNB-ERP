
import MainLayout from "../../layouts/MainLayout";

const WorkDetails = () => {
  return (
    <MainLayout>

      {/* Header */}

      <div className="bg-white rounded-2xl shadow p-6 mb-6">

        <div className="flex flex-col md:flex-row justify-between">

          <div>

            <h1 className="text-3xl font-bold">
              Work Details
            </h1>

            <p className="text-gray-500 mt-2">
              Complete work assignment overview
            </p>

          </div>

          <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full h-fit">
            In Progress
          </span>

        </div>

      </div>

      {/* KPI Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">
          <h3>Target Quantity</h3>
          <h1 className="text-4xl font-bold mt-2">500</h1>
        </div>

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">
          <h3>Completed</h3>
          <h1 className="text-4xl font-bold mt-2">320</h1>
        </div>

        <div className="bg-red-500 text-white p-5 rounded-xl shadow">
          <h3>Pending</h3>
          <h1 className="text-4xl font-bold mt-2">180</h1>
        </div>

        <div className="bg-purple-600 text-white p-5 rounded-xl shadow">
          <h3>Progress</h3>
          <h1 className="text-4xl font-bold mt-2">64%</h1>
        </div>

      </div>

      {/* Work Information */}

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <h2 className="text-xl font-semibold mb-4">
          Work Information
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <div className="flex justify-between">
            <span>Work ID</span>
            <span className="font-semibold">WK001</span>
          </div>

          <div className="flex justify-between">
            <span>Product</span>
            <span className="font-semibold">Leather Wallet</span>
          </div>

          <div className="flex justify-between">
            <span>Department</span>
            <span className="font-semibold">Stitching</span>
          </div>

          <div className="flex justify-between">
            <span>Supervisor</span>
            <span className="font-semibold">Ahmad</span>
          </div>

          <div className="flex justify-between">
            <span>Rate Per Piece</span>
            <span className="font-semibold">₹10</span>
          </div>

          <div className="flex justify-between">
            <span>Priority</span>
            <span className="font-semibold text-red-600">
              High
            </span>
          </div>

          <div className="flex justify-between">
            <span>Start Date</span>
            <span className="font-semibold">
              01-07-2026
            </span>
          </div>

          <div className="flex justify-between">
            <span>Due Date</span>
            <span className="font-semibold">
              10-07-2026
            </span>
          </div>

        </div>

      </div>

      {/* Progress */}

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <h2 className="text-xl font-semibold mb-4">
          Progress Tracking
        </h2>

        <div className="w-full bg-gray-200 rounded-full h-4">

          <div
            className="bg-green-500 h-4 rounded-full"
            style={{ width: "64%" }}
          />

        </div>

        <p className="mt-3 text-gray-600">
          320 of 500 pieces completed
        </p>

      </div>

      {/* Assigned Labour */}

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <h2 className="text-xl font-semibold mb-4">
          Assigned Labour
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b bg-gray-50">

                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Production</th>
                <th className="p-3 text-left">Attendance</th>
                <th className="p-3 text-left">Salary</th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-b">
                <td className="p-3">LB001</td>
                <td className="p-3">Abdul Rahman</td>
                <td className="p-3">150</td>
                <td className="p-3">98%</td>
                <td className="p-3">₹12,500</td>
              </tr>

              <tr>
                <td className="p-3">LB002</td>
                <td className="p-3">Ahmed Ali</td>
                <td className="p-3">170</td>
                <td className="p-3">96%</td>
                <td className="p-3">₹11,800</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

      {/* Production History */}

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <h2 className="text-xl font-semibold mb-4">
          Production History
        </h2>

        <div className="space-y-3">

          <div className="border-b pb-3">
            05 July - 50 Pieces Completed
          </div>

          <div className="border-b pb-3">
            04 July - 70 Pieces Completed
          </div>

          <div className="border-b pb-3">
            03 July - 80 Pieces Completed
          </div>

          <div>
            02 July - 120 Pieces Completed
          </div>

        </div>

      </div>

      {/* Estimated Cost */}

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <h2 className="text-xl font-semibold mb-4">
          Cost Estimation
        </h2>

        <div className="space-y-3">

          <div className="flex justify-between">
            <span>Total Target</span>
            <span>500 Pieces</span>
          </div>

          <div className="flex justify-between">
            <span>Rate Per Piece</span>
            <span>₹10</span>
          </div>

          <div className="flex justify-between font-bold text-lg">
            <span>Estimated Cost</span>
            <span>₹5,000</span>
          </div>

        </div>

      </div>

      {/* Activity Timeline */}

      <div className="bg-white rounded-xl shadow p-5">

        <h2 className="text-xl font-semibold mb-4">
          Recent Activities
        </h2>

        <div className="space-y-4">

          <div className="border-b pb-3">
            Work Assigned To Labour
          </div>

          <div className="border-b pb-3">
            Production Updated
          </div>

          <div className="border-b pb-3">
            Supervisor Reviewed Progress
          </div>

          <div>
            Target Updated
          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default WorkDetails;