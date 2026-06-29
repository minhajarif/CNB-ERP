import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { Link } from "react-router-dom";

const DepartmentManagement = () => {

  const [departments, setDepartments] = useState([]);

  const [editIndex, setEditIndex] = useState(null);

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    id: "",
    department: "",
    supervisor: "",
    labour: "",
    production: "",
    salary: "",
    status: "Active",
  });

  const handleSaveDepartment = () => {

    if (
      !formData.id ||
      !formData.department ||
      !formData.supervisor
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (editIndex !== null) {

      const updatedDepartments = [...departments];

      updatedDepartments[editIndex] = formData;

      setDepartments(updatedDepartments);

      setEditIndex(null);

    } else {

      setDepartments([
        ...departments,
        formData,
      ]);

    }

    setFormData({
      id: "",
      department: "",
      supervisor: "",
      labour: "",
      production: "",
      salary: "",
      status: "Active",
    });

  };

  const handleDeleteDepartment = (index) => {

    setDepartments(
      departments.filter((_, i) => i !== index)
    );

  };

  const handleEditDepartment = (index) => {

    setFormData(departments[index]);

    setEditIndex(index);

  };

  const filteredDepartments = departments.filter((item) =>
    item.department
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <MainLayout>

      {/* Header */}

      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">

        <div>

          <h1 className="text-3xl font-bold">
            Department Management
          </h1>

          <p className="text-gray-500 mt-1">
            Manage departments, supervisors and labour performance
          </p>

        </div>

        <button
  onClick={() => {
    setShowForm(true);
    setEditIndex(null);
    setFormData({
      id: "",
      department: "",
      supervisor: "",
      labour: "",
      production: "",
      salary: "",
      status: "Active",
    });
  }}
  className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-xl shadow"
>
          + Add Department
        </button>

      </div>

      {/* KPI Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 gap-6 mb-6">

        <div className="bg-linear-to-r from-blue-600 to-blue-700 text-white p-5 rounded-2xl shadow">
          <p>Total Departments</p>
          <h2 className="text-4xl font-bold mt-2">
            {departments.length}
          </h2>
        </div>

        <div className="bg-linear-to-r from-green-600 to-green-700 text-white p-5 rounded-2xl shadow">
          <p>Active Departments</p>
          <h2 className="text-4xl font-bold mt-2">
            {
              departments.filter(
                (item) => item.status === "Active"
              ).length
            }
          </h2>
        </div>    
     
     
     <div className="bg-linear-to-r from-purple-600 to-purple-700 text-white p-5 rounded-2xl shadow">
          <p>Total Supervisors</p>
          <h2 className="text-4xl font-bold mt-2">
            {departments.length}
          </h2>
        </div>

        <div className="bg-linear-to-r from-orange-500 to-orange-600 text-white p-5 rounded-2xl shadow">
          <p>Total Labour</p>
          <h2 className="text-4xl font-bold mt-2">
            {departments.reduce(
              (total, item) => total + Number(item.labour || 0),
              0
            )}
          </h2>
        </div>

        <div className="bg-linear-to-r from-cyan-600 to-cyan-700 text-white p-5 rounded-2xl shadow">
          <p>Monthly Production</p>
          <h2 className="text-4xl font-bold mt-2">
            {departments.reduce(
              (total, item) => total + Number(item.production || 0),
              0
            )}
          </h2>
        </div>

        <div className="bg-linear-to-r from-pink-600 to-pink-700 text-white p-5 rounded-2xl shadow">
          <p>Salary Cost</p>
          <h2 className="text-4xl font-bold mt-2">
            ₹
            {departments.reduce(
              (total, item) => total + Number(item.salary || 0),
              0
            )}
          </h2>
        </div>

      </div>

      {/* Add Department */}

      {showForm && (
<div className="bg-white rounded-2xl shadow p-6 mb-6">

        <h2 className="text-xl font-semibold mb-5">

          {editIndex !== null
            ? "Edit Department"
            : "Add New Department"}

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <input
            type="text"
            placeholder="Department ID"
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
            placeholder="Department Name"
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
            type="text"
            placeholder="Supervisor Name"
            value={formData.supervisor}
            onChange={(e) =>
              setFormData({
                ...formData,
                supervisor: e.target.value,
              })
            }
            className="border p-3 rounded-lg"
          />

          <input
            type="number"
            placeholder="Total Labour"
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
            type="number"
            placeholder="Salary Cost"
            value={formData.salary}
            onChange={(e) =>
              setFormData({
                ...formData,
                salary: e.target.value,
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
          onClick={handleSaveDepartment}
          className="bg-blue-700 text-white px-6 py-3 rounded-xl mt-5"
        >
          {editIndex !== null
            ? "Update Department"
            : "Save Department"}
        </button>

      </div>
      )}
      

      <div className="bg-white rounded-2xl shadow p-5 mb-6">

        <input
          type="text"
          placeholder="Search Department..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="border p-3 rounded-lg w-full"
        />

      </div>

      {/* Department Table */}

      <div className="bg-white rounded-2xl shadow p-5">

        <h2 className="text-xl font-semibold mb-4">
          Department List
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b bg-gray-50">

                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Department</th>
                <th className="p-3 text-left">Supervisor</th>
                <th className="p-3 text-left">Labour</th>
                <th className="p-3 text-left">Production</th>
                <th className="p-3 text-left">Salary</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Action</th>

              </tr>

            </thead>

            <tbody>
                          {filteredDepartments.map((item, index) => (

                <tr
                  key={index}
                  className="border-b"
                >

                  <td className="p-3">
                    {item.id}
                  </td>

                  <td className="p-3 font-medium">
                    {item.department}
                  </td>

                  <td className="p-3">
                    {item.supervisor}
                  </td>

                  <td className="p-3">
                    {item.labour}
                  </td>

                  <td className="p-3">
                    {item.production}
                  </td>

                  <td className="p-3">
                    ₹{item.salary}
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
                        to="/owner/department-details"
                        className="bg-blue-600 text-white px-3 py-2 rounded-lg"
                      >
                        View
                      </Link>

                      <button
                        onClick={() =>
                          handleEditDepartment(index)
                        }
                        className="bg-yellow-500 text-white px-3 py-2 rounded-lg"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          handleDeleteDepartment(index)
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

export default DepartmentManagement;