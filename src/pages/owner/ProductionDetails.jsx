
import MainLayout from "../../layouts/MainLayout";

const ProductionDetails = () => {
  return (
    <MainLayout>

      {/* Header */}

      <div className="bg-white rounded-2xl shadow p-6 mb-6">

        <div className="flex flex-col md:flex-row justify-between">

          <div>

            <h1 className="text-3xl font-bold">
              Production Details
            </h1>

            <p className="text-gray-500 mt-2">
              Complete production record overview
            </p>

          </div>

          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full h-fit">
            Completed
          </span>

        </div>

      </div>

      {/* KPI Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-5 rounded-2xl shadow">
          <p>Target Quantity</p>
          <h2 className="text-4xl font-bold mt-2">
            500
          </h2>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-5 rounded-2xl shadow">
          <p>Produced Quantity</p>
          <h2 className="text-4xl font-bold mt-2">
            480
          </h2>
        </div>

        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-5 rounded-2xl shadow">
          <p>Rejected Pieces</p>
          <h2 className="text-4xl font-bold mt-2">
            20
          </h2>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-5 rounded-2xl shadow">
          <p>Production Cost</p>
          <h2 className="text-4xl font-bold mt-2">
            ₹4,800
          </h2>
        </div>

      </div>

      {/* Production Information */}

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <h2 className="text-xl font-semibold mb-4">
          Production Information
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <div className="flex justify-between">
            <span>Production ID</span>
            <span className="font-semibold">
              PROD001
            </span>
          </div>

          <div className="flex justify-between">
            <span>Product Name</span>
            <span className="font-semibold">
              Leather Wallet
            </span>
          </div>

          <div className="flex justify-between">
            <span>Department</span>
            <span className="font-semibold">
              Stitching
            </span>
          </div>

          <div className="flex justify-between">
            <span>Supervisor</span>
            <span className="font-semibold">
              Ahmad
            </span>
          </div>

          <div className="flex justify-between">
            <span>Labour</span>
            <span className="font-semibold">
              Abdul Rahman
            </span>
          </div>

          <div className="flex justify-between">
            <span>Work Type</span>
            <span className="font-semibold">
              Wallet Stitching
            </span>
          </div>

          <div className="flex justify-between">
            <span>Rate Per Piece</span>
            <span className="font-semibold">
              ₹10
            </span>
          </div>

          <div className="flex justify-between">
            <span>Date</span>
            <span className="font-semibold">
              15-07-2026
            </span>
          </div>

        </div>

      </div>

      {/* Production Progress */}

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <h2 className="text-xl font-semibold mb-4">
          Production Progress
        </h2>

        <div className="w-full bg-gray-200 rounded-full h-4">

          <div
            className="bg-green-500 h-4 rounded-full"
            style={{ width: "96%" }}
          />

        </div>

        <p className="mt-3 text-gray-600">
          480 of 500 pieces completed
        </p>

      </div>

      {/* Production History */}

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <h2 className="text-xl font-semibold mb-4">
          Production History
        </h2>

        <div className="space-y-3">

          <div className="border-b pb-3">
            15 July - 120 Pieces Produced
          </div>

          <div className="border-b pb-3">
            14 July - 110 Pieces Produced
          </div>

          <div className="border-b pb-3">
            13 July - 130 Pieces Produced
          </div>

          <div>
            12 July - 120 Pieces Produced
          </div>

        </div>

      </div>

      {/* Cost Breakdown */}

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <h2 className="text-xl font-semibold mb-4">
          Cost Breakdown
        </h2>

        <div className="space-y-3">

          <div className="flex justify-between">
            <span>Total Produced</span>
            <span>480 Pieces</span>
          </div>

          <div className="flex justify-between">
            <span>Rate Per Piece</span>
            <span>₹10</span>
          </div>

          <div className="flex justify-between font-bold text-lg">
            <span>Total Cost</span>
            <span>₹4,800</span>
          </div>

        </div>

      </div>

      {/* Recent Activities */}

      <div className="bg-white rounded-xl shadow p-5">

        <h2 className="text-xl font-semibold mb-4">
          Recent Activities
        </h2>

        <div className="space-y-4">

          <div className="border-b pb-3">
            Production Entry Added
          </div>

          <div className="border-b pb-3">
            Supervisor Verified Production
          </div>

          <div className="border-b pb-3">
            Labour Completed Daily Target
          </div>

          <div>
            Salary Updated Based On Production
          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default ProductionDetails;