
import MainLayout from "../../layouts/MainLayout";

const ProductGallery = () => {
  return (
    <MainLayout>

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Product Gallery
        </h1>

        <button className="bg-blue-700 text-white px-5 py-3 rounded-lg">
          + Upload Product
        </button>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white rounded-xl shadow p-4">
          <div className="h-48 bg-gray-200 rounded-lg"></div>

          <h3 className="mt-4 font-semibold">
            Leather Wallet
          </h3>
        </div>

      </div>

    </MainLayout>
  );
};

export default ProductGallery;