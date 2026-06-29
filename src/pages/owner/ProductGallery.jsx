import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";

const ProductGallery = () => {

  const [products, setProducts] = useState([]);

  const [editIndex, setEditIndex] = useState(null);

  const [search, setSearch] = useState("");

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    status: "Active",
    image: "",
  });

  const handleSaveProduct = () => {

    if (!formData.name || !formData.category) {
      alert("Please fill all required fields");
      return;
    }

    if (editIndex !== null) {

      const updated = [...products];

      updated[editIndex] = formData;

      setProducts(updated);

      setEditIndex(null);

    } else {

      setProducts([
        ...products,
        formData,
      ]);

    }

    setFormData({
      name: "",
      description: "",
      category: "",
      status: "Active",
      image: "",
    });

    setShowForm(false);

  };

  const handleDeleteProduct = (index) => {

    setProducts(
      products.filter((_, i) => i !== index)
    );

  };

  const handleEditProduct = (index) => {

    setFormData(products[index]);

    setEditIndex(index);

    setShowForm(true);

  };

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <MainLayout>
            {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Product Gallery
        </h1>

        <button
          onClick={() => {
            setShowForm(true);
            setEditIndex(null);
            setFormData({
              name: "",
              description: "",
              category: "",
              status: "Active",
              image: "",
            });
          }}
          className="bg-blue-700 text-white px-5 py-3 rounded-lg"
        >
          + Upload Product
        </button>

      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">

          <h3>Total Products</h3>

          <h1 className="text-4xl font-bold mt-2">
            {products.length}
          </h1>

        </div>

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">

          <h3>Active Products</h3>

          <h1 className="text-4xl font-bold mt-2">
            {
              products.filter(
                (item) => item.status === "Active"
              ).length
            }
          </h1>

        </div>

        <div className="bg-yellow-500 text-white p-5 rounded-xl shadow">

          <h3>Categories</h3>

          <h1 className="text-4xl font-bold mt-2">
            {
              new Set(
                products.map((item) => item.category)
              ).size
            }
          </h1>

        </div>

        <div className="bg-purple-600 text-white p-5 rounded-xl shadow">

          <h3>Inactive Products</h3>

          <h1 className="text-4xl font-bold mt-2">
            {
              products.filter(
                (item) => item.status === "Inactive"
              ).length
            }
          </h1>

        </div>

      </div>

      {showForm && (

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <h2 className="text-xl font-semibold mb-4">

          {editIndex !== null
            ? "Edit Product"
            : "Upload Product"}

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
            type="text"
            placeholder="Product Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Category"
            value={formData.category}
            onChange={(e) =>
              setFormData({
                ...formData,
                category: e.target.value,
              })
            }
            className="border p-3 rounded-lg"
          />

          <textarea
            placeholder="Product Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({
                ...formData,
                description: e.target.value,
              })
            }
            className="border p-3 rounded-lg md:col-span-2"
          />

          <input
            type="file"
            onChange={(e) =>
              setFormData({
                ...formData,
                image: URL.createObjectURL(e.target.files[0]),
              })
            }
            className="border p-3 rounded-lg"
          />

          <select
            value={formData.status}
            onChange={(e) =>
              setFormData({
                ...formData,
                status: e.target.value,
              })
            }
            className="border p-3 rounded-lg"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

        </div>

        <button
          onClick={handleSaveProduct}
          className="mt-5 bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          {editIndex !== null
            ? "Update Product"
            : "Save Product"}
        </button>

      </div>

      )}

      {/* Search */}

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <input
          type="text"
          placeholder="Search Product..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full border p-3 rounded-lg"
        />

      </div>

      {/* Product Grid */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((item, index) => (

          <div
            key={index}
            className="bg-white rounded-xl shadow p-4"
          >

            <div className="h-48 bg-gray-200 rounded-lg overflow-hidden">

              {item.image ? (

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />

              ) : (

                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  No Image
                </div>

              )}

            </div>

            <h3 className="mt-4 font-semibold text-lg">
              {item.name}
            </h3>

            <p className="text-gray-500 mt-2">
              {item.description}
            </p>

            <p className="text-sm mt-2">
              Category :
              <span className="font-semibold">
                {" "}{item.category}
              </span>
            </p>

            <span
              className={`inline-block mt-3 px-3 py-1 rounded-full text-sm ${
                item.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {item.status}
            </span>

            <div className="flex gap-2 mt-4">

              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                View
              </button>

              <button
                onClick={() =>
                  handleEditProduct(index)
                }
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
              >
                Edit
              </button>

              <button
                onClick={() =>
                  handleDeleteProduct(index)
                }
                className="bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </MainLayout>

  );

};

export default ProductGallery;  