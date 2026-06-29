import { useState } from "react";
import SupervisorLayout from "../../layouts/SupervisorLayout";

const SupervisorProduction = () => {

  const [productions, setProductions] = useState([]);

  const [editIndex, setEditIndex] = useState(null);

  const [showForm, setShowForm] = useState(false);

  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState({
    labour: "",
    workType: "",
    quantity: "",
    rate: "",
    date: "",
  });

  const handleSaveProduction = () => {

    if (
      !formData.labour ||
      !formData.workType ||
      !formData.quantity ||
      !formData.rate ||
      !formData.date
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (editIndex !== null) {

      const updatedProductions = [...productions];

      updatedProductions[editIndex] = formData;

      setProductions(updatedProductions);

      setEditIndex(null);

    } else {

      setProductions([
        ...productions,
        formData,
      ]);

    }

    setFormData({
      labour: "",
      workType: "",
      quantity: "",
      rate: "",
      date: "",
    });

    setShowForm(false);

  };

  const handleEditProduction = (index) => {

    setFormData(productions[index]);

    setEditIndex(index);

    setShowForm(true);

  };

  const handleDeleteProduction = (index) => {

    setProductions(
      productions.filter((_, i) => i !== index)
    );

  };

  const filteredProductions = productions.filter((item) =>
    item.labour
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (

    <SupervisorLayout>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

  <h1 className="text-3xl font-bold">
    Production Management
  </h1>

  <button
    onClick={() => {
      setShowForm(true);
      setEditIndex(null);
      setFormData({
        labour: "",
        workType: "",
        quantity: "",
        rate: "",
        date: "",
      });
    }}
    className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg transition"
  >
    + Add Production
  </button>

</div>
      
            {/* Summary Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Today's Production
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            {
              productions.reduce(
                (total, item) =>
                  total + Number(item.quantity || 0),
                0
              )
            }
          </h1>

        </div>

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Total Amount
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            ₹
            {
              productions.reduce(
                (total, item) =>
                  total +
                  Number(item.quantity || 0) *
                    Number(item.rate || 0),
                0
              )
            }
          </h1>

        </div>

        <div className="bg-purple-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Active Labour
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            {productions.length}
          </h1>

        </div>

        <div className="bg-red-500 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Monthly Production
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            {
              productions.reduce(
                (total, item) =>
                  total + Number(item.quantity || 0),
                0
              )
            }
          </h1>

        </div>

      </div>

      

      {showForm && (

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <h2 className="text-xl font-semibold mb-4">

          {editIndex !== null
            ? "Edit Production"
            : "Add Production Entry"}

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
            type="text"
            placeholder="Labour Name"
            value={formData.labour}
            onChange={(e) =>
              setFormData({
                ...formData,
                labour: e.target.value,
              })
            }
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Work Type"
            value={formData.workType}
            onChange={(e) =>
              setFormData({
                ...formData,
                workType: e.target.value,
              })
            }
            className="border p-3 rounded-lg"
          />

          <input
            type="number"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={(e) =>
              setFormData({
                ...formData,
                quantity: e.target.value,
              })
            }
            className="border p-3 rounded-lg"
          />

          <input
            type="number"
            placeholder="Piece Rate"
            value={formData.rate}
            onChange={(e) =>
              setFormData({
                ...formData,
                rate: e.target.value,
              })
            }
            className="border p-3 rounded-lg"
          />

          <input
            type="date"
            value={formData.date}
            onChange={(e) =>
              setFormData({
                ...formData,
                date: e.target.value,
              })
            }
            className="border p-3 rounded-lg md:col-span-2"
          />

        </div>

        <button
          onClick={handleSaveProduction}
          className="bg-blue-700 text-white px-6 py-3 rounded-lg mt-5"
        >
          {editIndex !== null
            ? "Update Production"
            : "Save Production"}
        </button>

      </div>

      )}

      {/* Search */}

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <input
          type="text"
          placeholder="Search Production..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full border p-3 rounded-lg"
        />

      </div>

      {/* Production Records */}

      <div className="bg-white rounded-xl shadow p-5">

        <h2 className="text-xl font-semibold mb-4">
          Production Records
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="p-3 text-left">Labour</th>
                <th className="p-3 text-left">Work Type</th>
                <th className="p-3 text-left">Quantity</th>
                <th className="p-3 text-left">Rate</th>
                <th className="p-3 text-left">Amount</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Action</th>

              </tr>

            </thead>

            <tbody>
                          {filteredProductions.length > 0 ? (

                filteredProductions.map((item, index) => (

                  <tr
                    key={index}
                    className="border-b"
                  >

                    <td className="p-3">
                      {item.labour}
                    </td>

                    <td className="p-3">
                      {item.workType}
                    </td>

                    <td className="p-3">
                      {item.quantity}
                    </td>

                    <td className="p-3">
                      ₹{item.rate}
                    </td>

                    <td className="p-3">
                      ₹
                      {Number(item.quantity) *
                        Number(item.rate)}
                    </td>

                    <td className="p-3">
                      {item.date}
                    </td>

                    <td className="p-3">

                      <div className="flex gap-2">

                        <button
                          onClick={() =>
                            handleEditProduction(index)
                          }
                          className="bg-yellow-500 text-white px-3 py-2 rounded-lg"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() =>
                            handleDeleteProduction(index)
                          }
                          className="bg-red-600 text-white px-3 py-2 rounded-lg"
                        >
                          Delete
                        </button>

                      </div>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="7"
                    className="text-center py-6 text-gray-500"
                  >
                    No Production Records Found
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </SupervisorLayout>

  );

};

export default SupervisorProduction;  