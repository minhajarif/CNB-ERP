import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { Link } from "react-router-dom";

const Production = () => { 
  
const [showModal, setShowModal] = useState(false);

const [productions, setProductions] = useState([]);

const [editIndex, setEditIndex] = useState(null);

const [search, setSearch] = useState("");

const [formData, setFormData] = useState({
  labour: "",
  department: "",
  workType: "",
  quantity: "",
  rate: "",
  date: "",
  image: "",
  status: "Completed",
});

const filteredProductions = productions.filter((item) =>
  item.labour.toLowerCase().includes(search.toLowerCase()) ||
  item.department.toLowerCase().includes(search.toLowerCase()) ||
  item.workType.toLowerCase().includes(search.toLowerCase())
);

const handleSaveProduction = () => {

  if (
    !formData.labour ||
    !formData.department ||
    !formData.workType ||
    !formData.quantity ||
    !formData.rate ||
    !formData.date
  ) {
    alert("Please fill all fields");
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
    department: "",
    workType: "",
    quantity: "",
    rate: "",
    date: "",
    image: "",
    status: "Completed",
  });

  setShowModal(false);

};

const handleDeleteProduction = (index) => {

  setProductions(
    productions.filter((_, i) => i !== index)
  );

};

const handleEditProduction = (index) => {

  setFormData(productions[index]);

  setEditIndex(index);

  setShowModal(true);

};
return (
  <MainLayout>

    {/* Header */}

    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">

      <div>

        <h1 className="text-3xl font-bold">
          Production Management
        </h1>

        <p className="text-gray-500 mt-1">
          Manage Daily Production Entries
        </p>

      </div>

      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-xl shadow"
      >
        + Add Production
      </button>

    </div>

    {/* Summary Cards */}

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

      <div className="bg-blue-600 text-white p-5 rounded-xl shadow">

        <h3 className="text-lg">
          Total Entries
        </h3>

        <h1 className="text-4xl font-bold mt-2">
          {productions.length}
        </h1>

      </div>

      <div className="bg-green-600 text-white p-5 rounded-xl shadow">

        <h3 className="text-lg">
          Total Quantity
        </h3>

        <h1 className="text-4xl font-bold mt-2">
          {productions.reduce(
            (total, item) => total + Number(item.quantity),
            0
          )}
        </h1>

      </div>

      <div className="bg-purple-600 text-white p-5 rounded-xl shadow">

        <h3 className="text-lg">
          Total Amount
        </h3>

        <h1 className="text-4xl font-bold mt-2">
          ₹
          {productions.reduce(
            (total, item) =>
              total +
              Number(item.quantity) *
                Number(item.rate),
            0
          )}
        </h1>

      </div>

    </div>

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

    {/* Modal */}

    {showModal && (

      <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

        <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl p-6">

          <div className="flex justify-between items-center mb-5">

            <h2 className="text-2xl font-bold">

              {editIndex !== null
                ? "Update Production"
                : "Add Production"}

            </h2>

            <button
              onClick={() =>
                setShowModal(false)
              }
              className="text-3xl"
            >
              ×
            </button>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

  <select
    value={formData.labour}
    onChange={(e) =>
      setFormData({
        ...formData,
        labour: e.target.value,
      })
    }
    className="border p-3 rounded-lg"
  >
    <option value="">Select Labour</option>
    <option value="Rahman">Rahman</option>
    <option value="Ahmed">Ahmed</option>
    <option value="Aslam">Aslam</option>
  </select>

  <select
    value={formData.department}
    onChange={(e) =>
      setFormData({
        ...formData,
        department: e.target.value,
      })
    }
    className="border p-3 rounded-lg"
  >
    <option value="">Select Department</option>
    <option value="Stitching">Stitching</option>
    <option value="Packing">Packing</option>
    <option value="Finishing">Finishing</option>
  </select>

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
    placeholder="Production Quantity"
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
    placeholder="Piece Rate (₹)"
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
    type="number"
    value={
      formData.quantity && formData.rate
        ? Number(formData.quantity) * Number(formData.rate)
        : ""
    }
    readOnly
    placeholder="Total Amount"
    className="border p-3 rounded-lg bg-gray-100"
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
    <option value="Completed">Completed</option>
    <option value="Pending">Pending</option>
    <option value="Rejected">Rejected</option>
  </select>

  <input
    type="file"
    onChange={(e) =>
      setFormData({
        ...formData,
        image: e.target.files[0],
      })
    }
    className="border p-3 rounded-lg md:col-span-2"
  />

</div>
          <div className="flex justify-end gap-3 mt-6">

            <button
              onClick={() => setShowModal(false)}
              className="px-5 py-3 bg-gray-300 rounded-lg"
            >
              Cancel
            </button>

            <button
              onClick={handleSaveProduction}
              className="px-5 py-3 bg-blue-700 text-white rounded-lg"
            >
              {editIndex !== null
                ? "Update Production"
                : "Save Production"}
            </button>

          </div>

        </div>

      </div>

    )}

    {/* Production Table */}

    <div className="bg-white rounded-2xl shadow p-5">

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b bg-gray-100">

              <th className="p-3 text-left">Labour</th>
              <th className="p-3 text-left">Department</th>
              <th className="p-3 text-left">Work</th>
              <th className="p-3 text-left">Qty</th>
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
                  className="border-b hover:bg-gray-50"
                >

                  <td className="p-3">
                    {item.labour}
                  </td>

                  <td className="p-3">
                    {item.department}
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

                  <td className="p-3 font-semibold">
                    ₹
                    {Number(item.quantity) *
                     Number(item.rate)}
                  </td>

                  <td className="p-3">
                    {item.date}
                  </td>

                  <td className="p-3">

                    <div className="flex gap-2">

                      <Link
                        to="/owner/production-details"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg"
                      >
                        View
                      </Link>

                      <button
                        onClick={() =>
                          handleEditProduction(index)
                        }
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded-lg"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          handleDeleteProduction(index)
                        }
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg"
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
                  colSpan="8"
                  className="text-center py-10 text-gray-500"
                >
                  No Production Found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>

  </MainLayout>

);

};

export default Production;