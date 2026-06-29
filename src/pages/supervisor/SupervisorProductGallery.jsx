import { useState } from "react";
import SupervisorLayout from "../../layouts/SupervisorLayout";

const SupervisorProductGallery = () => {

  const [products, setProducts] = useState([]);

  const [editIndex, setEditIndex] = useState(null);

  const [showForm, setShowForm] = useState(false);

  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    image: "",
  });

  const handleSaveProduct = () => {

    if (
      !formData.name ||
      !formData.category ||
      !formData.description
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (editIndex !== null) {

      const updatedProducts = [...products];

      updatedProducts[editIndex] = formData;

      setProducts(updatedProducts);

      setEditIndex(null);

    } else {

      setProducts([
        ...products,
        formData,
      ]);

    }

    setFormData({
      name: "",
      category: "",
      description: "",
      image: "",
    });

    setShowForm(false);

  };

  const handleEditProduct = (index) => {

    setFormData(products[index]);

    setEditIndex(index);

    setShowForm(true);

  };

  const handleDeleteProduct = (index) => {

    setProducts(
      products.filter((_, i) => i !== index)
    );

  };

  const filteredProducts = products.filter((item) =>
    item.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (

    <SupervisorLayout>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

        <h1 className="text-3xl font-bold">
          Product Gallery
        </h1>

        <button
          onClick={() => {
            setShowForm(true);
            setEditIndex(null);
            setFormData({
              name: "",
              category: "",
              description: "",
              image: "",
            });
          }}
          className="bg-blue-700 text-white px-5 py-3 rounded-lg"
        >
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
            {products.length}
          </h1>

        </div>

        
        <div className="bg-green-600 text-white p-5 rounded-x  shadow">

          <h3 className="text-lg">
            Categories
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            {
              [...new Set(products.map(item => item.category))]
                .length
            }
          </h1>

        </div>

        <div className="bg-purple-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            This Month
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            {products.length}
          </h1>

        </div>

        <div className="bg-yellow-500 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            With Image
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            {
              products.filter(item => item.image)
                .length
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
            rows="4"
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
                image: URL.createObjectURL(
                  e.target.files[0]
                ),
              })
            }
            className="border p-3 rounded-lg md:col-span-2"
          />

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

      {/* Product Gallery */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredProducts.length > 0 ? (

          filteredProducts.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-xl shadow overflow-hidden"
            >

              <img
                src={
                  item.image ||
                  "https://via.placeholder.com/500x300"
                }
                alt={item.name}
                className="h-56 w-full object-cover"
              />

                          <div className="p-4">

                <h3 className="font-semibold text-lg">
                  {item.name}
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  {item.description}
                </p>

                <p className="text-sm text-blue-600 mt-2">
                  Category : {item.category}
                </p>

                <div className="flex gap-2 mt-4">

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

            </div>

          ))

        ) : (

          <div className="col-span-full bg-white rounded-xl shadow p-10 text-center text-gray-500">

            No Products Found

          </div>

        )}

      </div>

    </SupervisorLayout>

  );

};

export default SupervisorProductGallery; 