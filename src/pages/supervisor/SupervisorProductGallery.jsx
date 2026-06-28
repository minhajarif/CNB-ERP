
import SupervisorLayout from "../../layouts/SupervisorLayout";

const SupervisorProductGallery = () => {
  return (
    <SupervisorLayout>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

        <h1 className="text-3xl font-bold">
          Product Gallery
        </h1>

        <button className="bg-blue-700 text-white px-5 py-3 rounded-lg">
          + Upload Product
        </button>

      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Total Products
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            125
          </h1>

        </div>

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            New Uploads
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            12
          </h1>

        </div>

        <div className="bg-purple-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Categories
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            8
          </h1>

        </div>

        <div className="bg-yellow-500 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            This Month
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            45
          </h1>

        </div>

      </div>

      {/* Upload Product */}

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <h2 className="text-xl font-semibold mb-4">
          Upload Product
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <input
            type="text"
            placeholder="Product Name"
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Category"
            className="border p-3 rounded-lg"
          />

          <textarea
            placeholder="Product Description"
            className="border p-3 rounded-lg md:col-span-2"
            rows="4"
          />

          <input
            type="file"
            className="border p-3 rounded-lg md:col-span-2"
          />

        </div>

        <button className="mt-5 bg-blue-700 text-white px-6 py-3 rounded-lg">
          Save Product
        </button>

      </div>

      {/* Search */}

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <input
          type="text"
          placeholder="Search Product..."
          className="w-full border p-3 rounded-lg"
        />

      </div>

      {/* Product Gallery */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="bg-white rounded-xl shadow overflow-hidden">

          <div className="h-56 bg-gray-200"></div>

          <div className="p-4">

            <h3 className="font-semibold text-lg">
              Leather Wallet
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              Premium leather wallet product.
            </p>

            <div className="flex gap-2 mt-4">

              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                View
              </button>

              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
                Edit
              </button>

              <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
                Delete
              </button>

            </div>

          </div>

        </div>

        <div className="bg-white rounded-xl shadow overflow-hidden">

          <div className="h-56 bg-gray-200"></div>

          <div className="p-4">

            <h3 className="font-semibold text-lg">
              Leather Belt
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              High quality leather belt.
            </p>

            <div className="flex gap-2 mt-4">

              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                View
              </button>

              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
                Edit
              </button>

              <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
                Delete
              </button>

            </div>

          </div>

        </div>

      </div>

    </SupervisorLayout>
  );
};

export default SupervisorProductGallery;