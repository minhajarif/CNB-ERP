import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";

const AdvanceManagement = () => {

  const [advances, setAdvances] = useState([]);

  const [editIndex, setEditIndex] = useState(null);

  const [search, setSearch] = useState("");

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    labour: "",
    department: "",
    amount: "",
    reason: "",
    date: "",
    status: "Pending",
  });

  const handleSaveAdvance = () => {

    if (
      !formData.labour ||
      !formData.department ||
      !formData.amount
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (editIndex !== null) {

      const updated = [...advances];

      updated[editIndex] = formData;

      setAdvances(updated);

      setEditIndex(null);

    } else {

      setAdvances([
        ...advances,
        formData,
      ]);

    }

    setFormData({
      labour: "",
      department: "",
      amount: "",
      reason: "",
      date: "",
      status: "Pending",
    });

    setShowForm(false);

  };

  const handleDeleteAdvance = (index) => {

    setAdvances(
      advances.filter((_, i) => i !== index)
    );

  };

  const handleEditAdvance = (index) => {

    setFormData(advances[index]);

    setEditIndex(index);

    setShowForm(true);

  };

  const filteredAdvances = advances.filter((item) =>
    item.labour.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <MainLayout>
           {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Advance Management
        </h1>

        <button
          onClick={() => {
            setShowForm(true);
            setEditIndex(null);
            setFormData({
              labour: "",
              department: "",
              amount: "",
              reason: "",
              date: "",
              status: "Pending",
            });
          }}
          className="bg-blue-700 text-white px-5 py-3 rounded-xl"
        >
          + Add Advance
        </button>

      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">

          <h3>Total Advances</h3>

          <h1 className="text-4xl font-bold mt-2">
            {advances.length}
          </h1>

        </div>

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">

          <h3>Total Amount</h3>

          <h1 className="text-4xl font-bold mt-2">
            ₹{
              advances.reduce(
                (total, item) =>
                  total + Number(item.amount || 0),
                0
              )
            }
          </h1>

        </div>

        <div className="bg-yellow-500 text-white p-5 rounded-xl shadow">

          <h3>Pending</h3>

          <h1 className="text-4xl font-bold mt-2">
            {
              advances.filter(
                (item) => item.status === "Pending"
              ).length
            }
          </h1>

        </div>

        <div className="bg-purple-600 text-white p-5 rounded-xl shadow">

          <h3>Approved</h3>

          <h1 className="text-4xl font-bold mt-2">
            {
              advances.filter(
                (item) => item.status === "Approved"
              ).length
            }
          </h1>

        </div>

      </div>

      {showForm && (

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <h2 className="text-xl font-semibold mb-4">

          {editIndex !== null
            ? "Edit Advance"
            : "Add Advance"}

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
            placeholder="Department"
            value={formData.department}
            onChange={(e) =>
              setFormData({
                ...formData,
                department: e.target.value,
              })
            }
            className="border p-3 rounded-lg"
          />

          <input
            type="number"
            placeholder="Advance Amount"
            value={formData.amount}
            onChange={(e) =>
              setFormData({
                ...formData,
                amount: e.target.value,
              })
            }
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Reason"
            value={formData.reason}
            onChange={(e) =>
              setFormData({
                ...formData,
                reason: e.target.value,
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
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
          </select>

        </div>

        <button
          onClick={handleSaveAdvance}
          className="mt-5 bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          {editIndex !== null
            ? "Update Advance"
            : "Save Advance"}
        </button>

      </div>

      )}

      {/* Search */}

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <input
          type="text"
          placeholder="Search Advance..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full border p-3 rounded-lg"
        />

      </div>

      {/* Advance Table */}

      <div className="bg-white rounded-xl shadow p-5">

        <h2 className="text-xl font-semibold mb-4">
          Advance History
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="p-3 text-left">Labour</th>
                <th className="p-3 text-left">Department</th>
                <th className="p-3 text-left">Amount</th>
                <th className="p-3 text-left">Reason</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Action</th>

              </tr>

            </thead>

            <tbody>
                            {filteredAdvances.map((item, index) => (

                <tr
                  key={index}
                  className="border-b"
                >

                  <td className="p-3">
                    {item.labour}
                  </td>

                  <td className="p-3">
                    {item.department}
                  </td>

                  <td className="p-3">
                    ₹{item.amount}
                  </td>

                  <td className="p-3">
                    {item.reason}
                  </td>

                  <td className="p-3">
                    {item.date}
                  </td>

                  <td className="p-3">

                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        item.status === "Approved"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {item.status}
                    </span>

                  </td>

                  <td className="p-3">

                    <div className="flex gap-2">

                      <button
                        onClick={() =>
                          handleEditAdvance(index)
                        }
                        className="bg-yellow-500 text-white px-3 py-2 rounded-lg"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          handleDeleteAdvance(index)
                        }
                        className="bg-red-600 text-white px-3 py-2 rounded-lg"
                      >
                        Delete
                      </button>

                      <button
                        onClick={() => {
                          const updated = [...advances];
                          updated[index].status = "Approved";
                          setAdvances(updated);
                        }}
                        className="bg-green-600 text-white px-3 py-2 rounded-lg"
                      >
                        Approve
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </MainLayout>

  );

};

export default AdvanceManagement;