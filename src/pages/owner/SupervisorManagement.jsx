import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { Link } from "react-router-dom";

const SupervisorManagement = () => {

  const [supervisors, setSupervisors] = useState([]);

  const [editIndex, setEditIndex] = useState(null);

  const [search, setSearch] = useState("");

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    mobile: "",
    email: "",
    department: "",
    labour: "",
    production: "",
    attendance: "",
    status: "Active",
    photo: "",
  });

  const handleSaveSupervisor = () => {

    if (
      !formData.id ||
      !formData.name ||
      !formData.department
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (editIndex !== null) {

      const updated = [...supervisors];

      updated[editIndex] = formData;

      setSupervisors(updated);

      setEditIndex(null);

    } else {

      setSupervisors([
        ...supervisors,
        formData,
      ]);

    }

    setFormData({
      id: "",
      name: "",
      mobile: "",
      email: "",
      department: "",
      labour: "",
      production: "",
      attendance: "",
      status: "Active",
      photo: "",
    });

    setShowForm(false);

  };

  const handleDeleteSupervisor = (index) => {

    setSupervisors(
      supervisors.filter((_, i) => i !== index)
    );

  };

  const handleEditSupervisor = (index) => {

    setFormData(supervisors[index]);

    setEditIndex(index);

    setShowForm(true);

  };

  const filteredSupervisors = supervisors.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <MainLayout>

          {/* Header */}

      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">

        <div>

          <h1 className="text-3xl font-bold">
            Supervisor Management
          </h1>

          <p className="text-gray-500 mt-1">
            Manage supervisors, departments and labour performance
          </p>

        </div>

        <button
          onClick={() => {
            setShowForm(true);
            setEditIndex(null);
            setFormData({
              id: "",
              name: "",
              mobile: "",
              email: "",
              department: "",
              labour: "",
              production: "",
              attendance: "",
              status: "Active",
              photo: "",
            });
          }}
          className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-xl shadow"
        >
          + Add Supervisor
        </button>

      </div>

      {/* KPI Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-5 rounded-2xl shadow">
          <p>Total Supervisors</p>
          <h2 className="text-4xl font-bold mt-2">
            {supervisors.length}
          </h2>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-5 rounded-2xl shadow">
          <p>Active Supervisors</p>
          <h2 className="text-4xl font-bold mt-2">
            {
              supervisors.filter(
                (item) => item.status === "Active"
              ).length
            }
          </h2>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-5 rounded-2xl shadow">
          <p>Total Labour Managed</p>
          <h2 className="text-4xl font-bold mt-2">
            {
              supervisors.reduce(
                (total, item) => total + Number(item.labour || 0),
                0
              )
            }
          </h2>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-5 rounded-2xl shadow">
          <p>Monthly Production</p>
          <h2 className="text-4xl font-bold mt-2">
            {
              supervisors.reduce(
                (total, item) => total + Number(item.production || 0),
                0
              )
            }
          </h2>
        </div>

      </div>

      {showForm && (

      <div className="bg-white rounded-2xl shadow p-6 mb-6">

        <h2 className="text-xl font-semibold mb-5">

          {editIndex !== null
            ? "Edit Supervisor"
            : "Add New Supervisor"}

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                 <input
            type="text"
            placeholder="Supervisor ID"
            value={formData.id}
            onChange={(e) =>
              setFormData({
                ...formData,
                id: e.target.value,
              })
            }
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Supervisor Name"
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
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={(e) =>
              setFormData({
                ...formData,
                mobile: e.target.value,
              })
            }
            className="border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
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
            placeholder="Labour Managed"
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
            type="number"
            placeholder="Monthly Production"
            value={formData.production}
            onChange={(e) =>
              setFormData({
                ...formData,
                production: e.target.value,
              })
            }
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Attendance %"
            value={formData.attendance}
            onChange={(e) =>
              setFormData({
                ...formData,
                attendance: e.target.value,
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
          onClick={handleSaveSupervisor}
          className="bg-blue-700 text-white px-6 py-3 rounded-xl mt-5"
        >
          {editIndex !== null
            ? "Update Supervisor"
            : "Save Supervisor"}
        </button>

      </div>

      )}

      {/* Search */}

      <div className="bg-white rounded-2xl shadow p-5 mb-6">

        <input
          type="text"
          placeholder="Search Supervisor..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="border p-3 rounded-lg w-full"
        />

      </div>

      {/* Supervisor Table */}

      <div className="bg-white rounded-2xl shadow p-5">

        <h2 className="text-xl font-semibold mb-4">
          Supervisor List
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b bg-gray-50">
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Department</th>
                <th className="p-3 text-left">Labour</th>
                <th className="p-3 text-left">Production</th>
                <th className="p-3 text-left">Attendance</th>
                <th className="p-3 text-left">Mobile</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Action</th>
              </tr>

            </thead>

            <tbody>
                          {filteredSupervisors.map((item, index) => (

                <tr
                  key={index}
                  className="border-b"
                >

                  <td className="p-3">
                    {item.id}
                  </td>

                  <td className="p-3 font-medium">
                    {item.name}
                  </td>

                  <td className="p-3">
                    {item.department}
                  </td>

                  <td className="p-3">
                    {item.labour}
                  </td>

                  <td className="p-3">
                    {item.production}
                  </td>

                  <td className="p-3 text-green-600 font-semibold">
                    {item.attendance}
                  </td>

                  <td className="p-3">
                    {item.mobile}
                  </td>

                  <td className="p-3">

                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        item.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.status}
                    </span>

                  </td>

                  <td className="p-3">

                    <div className="flex gap-2">

                      <Link
                        to="/owner/supervisor-details"
                        className="bg-blue-600 text-white px-3 py-2 rounded-lg"
                      >
                        View
                      </Link>

                      <button
                        onClick={() =>
                          handleEditSupervisor(index)
                        }
                        className="bg-yellow-500 text-white px-3 py-2 rounded-lg"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          handleDeleteSupervisor(index)
                        }
                        className="bg-red-600 text-white px-3 py-2 rounded-lg"
                      >
                        Delete
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

export default SupervisorManagement;