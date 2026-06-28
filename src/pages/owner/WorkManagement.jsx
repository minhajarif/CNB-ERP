import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { Link } from "react-router-dom";

const WorkManagement = () => {

  const [works, setWorks] = useState([]);

  const [editIndex, setEditIndex] = useState(null);

  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState({
    workName: "",
    rateType: "",
    rate: "",
    status: "Active",
  });

  const handleSaveWork = () => {

    if (
      !formData.workName ||
      !formData.rateType ||
      !formData.rate
    ) {
      alert("Please fill all fields");
      return;
    }

    if (editIndex !== null) {

      const updatedWorks = [...works];

      updatedWorks[editIndex] = formData;

      setWorks(updatedWorks);

      setEditIndex(null);

    } else {

      setWorks([
        ...works,
        formData,
      ]);

    }

    setFormData({
      workName: "",
      rateType: "",
      rate: "",
      status: "Active",
    });

  };

  const handleDeleteWork = (index) => {

    setWorks(
      works.filter((_, i) => i !== index)
    );

  };

  const handleEditWork = (index) => {

    setFormData(works[index]);

    setEditIndex(index);

  };

  const filteredWorks = works.filter((work) =>
    work.workName
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (

    <MainLayout>

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <div>

          <h1 className="text-3xl font-bold">
            Work Management
          </h1>

          <p className="text-gray-500 mt-1">
            Manage work types & rates
          </p>

        </div>

      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-5 rounded-2xl shadow">

          <p>Total Work Types</p>

          <h2 className="text-4xl font-bold mt-2">

            {works.length}

          </h2>

        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-5 rounded-2xl shadow">

          <p>Piece Rate Works</p>

          <h2 className="text-4xl font-bold mt-2">

            {
              works.filter(
                (w) => w.rateType === "Piece Rate"
              ).length
            }

          </h2>

        </div>

        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-5 rounded-2xl shadow">

          <p>Daily Rate Works</p>

          <h2 className="text-4xl font-bold mt-2">

            {
              works.filter(
                (w) => w.rateType === "Daily Rate"
              ).length
            }

          </h2>

        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-5 rounded-2xl shadow">

          <p>Active Works</p>

          <h2 className="text-4xl font-bold mt-2">

            {
              works.filter(
                (w) => w.status === "Active"
              ).length
            }

          </h2>

        </div>

      </div>


            {/* Add Work Form */}

      <div className="bg-white rounded-2xl shadow p-5 mb-6">

        <h2 className="text-xl font-semibold mb-4">
          {editIndex !== null ? "Update Work Type" : "Add New Work Type"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <input
            type="text"
            placeholder="Work Name"
            value={formData.workName}
            onChange={(e) =>
              setFormData({
                ...formData,
                workName: e.target.value,
              })
            }
            className="border p-3 rounded-lg"
          />

          <select
            value={formData.rateType}
            onChange={(e) =>
              setFormData({
                ...formData,
                rateType: e.target.value,
              })
            }
            className="border p-3 rounded-lg"
          >
            <option value="">Select Rate Type</option>
            <option value="Piece Rate">Piece Rate</option>
            <option value="Daily Rate">Daily Rate</option>
          </select>

          <input
            type="number"
            placeholder="Rate Amount"
            value={formData.rate}
            onChange={(e) =>
              setFormData({
                ...formData,
                rate: e.target.value,
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
          onClick={handleSaveWork}
          className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl mt-5"
        >
          {editIndex !== null ? "Update Work Type" : "Save Work Type"}
        </button>

      </div>

      {/* Search */}

      <div className="bg-white rounded-2xl shadow p-5 mb-6">

        <input
          type="text"
          placeholder="Search Work Type..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

      </div>

            {/* Work Table */}

      <div className="bg-white rounded-2xl shadow p-5">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b bg-gray-100">

                <th className="text-left p-3">Work Name</th>
                <th className="text-left p-3">Rate Type</th>
                <th className="text-left p-3">Rate</th>
                <th className="text-left p-3">Status</th>
                <th className="text-left p-3">Action</th>

              </tr>

            </thead>

            <tbody>

              {filteredWorks.length > 0 ? (

                filteredWorks.map((work, index) => (

                  <tr key={index} className="border-b hover:bg-gray-50">

                    <td className="p-3 font-medium">
                      {work.workName}
                    </td>

                    <td className="p-3">
                      {work.rateType}
                    </td>

                    <td className="p-3">
                      ₹{work.rate}
                    </td>

                    <td className="p-3">

                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          work.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {work.status}
                      </span>

                    </td>

                    <td className="p-3">

                      <div className="flex gap-2">

                        <Link
                          to="/owner/work-details"
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                        >
                          View
                        </Link>

                        <button
                          onClick={() => handleEditWork(index)}
                          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDeleteWork(index)}
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
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
                    colSpan="5"
                    className="text-center py-10 text-gray-500"
                  >
                    No Work Found
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

export default WorkManagement;




