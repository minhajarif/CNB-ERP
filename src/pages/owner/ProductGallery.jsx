import MainLayout from "../../layouts/MainLayout";

const ProductGallery = () => {
return ( <MainLayout>

  <div className="flex justify-between items-center mb-6">

    <h1 className="text-3xl font-bold">
      Product Gallery
    </h1>

    <button className="bg-blue-700 text-white px-5 py-3 rounded-lg">
      + Upload Product
    </button>

  </div>

  {/* Summary Cards */}

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">

    <div className="bg-blue-600 text-white p-5 rounded-xl shadow">
      <h3 className="text-lg">
        Total Products
      </h3>

      <h1 className="text-4xl font-bold mt-2">
        150
      </h1>
    </div>

    <div className="bg-green-600 text-white p-5 rounded-xl shadow">
      <h3 className="text-lg">
        New Products
      </h3>

      <h1 className="text-4xl font-bold mt-2">
        25
      </h1>
    </div>

    <div className="bg-yellow-500 text-white p-5 rounded-xl shadow">
      <h3 className="text-lg">
        Categories
      </h3>

      <h1 className="text-4xl font-bold mt-2">
        8
      </h1>
    </div>

    <div className="bg-purple-600 text-white p-5 rounded-xl shadow">
      <h3 className="text-lg">
        Active Products
      </h3>

      <h1 className="text-4xl font-bold mt-2">
        145
      </h1>
    </div>

  </div>

  {/* Search */}

  <div className="bg-white rounded-xl shadow p-5 mb-6">

    <input
      type="text"
      placeholder="Search Product..."
      className="w-full border p-3 rounded-lg"
    />

  </div>

  {/* Product Grid */}

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

    <div className="bg-white rounded-xl shadow p-4">

      <div className="h-48 bg-gray-200 rounded-lg"></div>

      <h3 className="mt-4 font-semibold text-lg">
        Leather Wallet
      </h3>

      <p className="text-gray-500 mt-2">
        Premium Quality Product
      </p>

      <div className="flex gap-2 mt-4">

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          View
        </button>

        <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
          Edit
        </button>

      </div>

    </div>

    <div className="bg-white rounded-xl shadow p-4">

      <div className="h-48 bg-gray-200 rounded-lg"></div>

      <h3 className="mt-4 font-semibold text-lg">
        Leather Bag
      </h3>

      <p className="text-gray-500 mt-2">
        Export Quality Product
      </p>

      <div className="flex gap-2 mt-4">

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          View
        </button>

        <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
          Edit
        </button>

      </div>

    </div>

  </div>

</MainLayout>

);
};

export default ProductGallery;
