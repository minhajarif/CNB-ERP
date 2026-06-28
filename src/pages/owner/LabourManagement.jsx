import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { Link } from "react-router-dom";

const LabourManagement = () => {
  const [showModal, setShowModal] = useState(false);
  const [labours, setLabours] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const handleDeleteLabour = (index) => {
    setLabours(
      labours.filter((_, i) => i !== index)
    );
  };
  const handleEditLabour = (index) => {
     setFormData(labours[index]);
     setEditIndex(index);
     setShowModal(true);
  };
  const [formData, setFormData] = useState({
     id: "",
     name: "",
     phone: "",
     department: "",
     status: "Active",
  });

  const handleSaveLabour = () => {
     
     console.log(formData);
     if (
         !formData.id ||
         !formData.name ||
         !formData.phone ||
         !formData.department
     ) {
       alert("Please fill all fields");
       return;
     }

    if (editIndex !== null) {
        const updatedLabours = [...labours];

        updatedLabours[editIndex] = formData;

        setLabours(updatedLabours);

        setEditIndex(null);
    } else {
        setLabours([
           ...labours,
           formData,
        ]);
    }

    setFormData({
      id: "",
      name: "",
      phone: "",
      department: "",
      status: "Active",
    });

    setShowModal(false);
  };
  return (
    <MainLayout>

      {/* Header */}

      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">

        <div>
          <h1 className="text-3xl font-bold">
            Labour Management
          </h1>

          <p className="text-gray-500 mt-1">
            Manage labour attendance, production and salary
          </p>
        </div>

        <button
           onClick={() => setShowModal(true)}
           className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-xl shadow"
        >
          + Add New Labour
        </button>

      </div>

      {/* KPI Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-5 rounded-2xl shadow">
          <p>Total Labour</p>
          <h2 className="text-4xl font-bold mt-2">
             {labours.length}
          </h2>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-5 rounded-2xl shadow">
          <p>Present Today</p>
          <h2 className="text-4xl font-bold mt-2">118</h2>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-5 rounded-2xl shadow">
          <p>Monthly Production</p>
          <h2 className="text-4xl font-bold mt-2">8500</h2>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-5 rounded-2xl shadow">
          <p>Salary Cost</p>
          <h2 className="text-4xl font-bold mt-2">₹2.5L</h2>
        </div>

      </div>

      {/* Add Labour */}

     
      {/* Search & Filters */}

      <div className="bg-white rounded-2xl shadow p-5 mb-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

          <select className="border p-3 rounded-lg">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>

        </div>

      </div>

      {/* Labour Table */}

      <div className="bg-white rounded-2xl shadow p-5">

        <h2 className="text-xl font-semibold mb-4">
          Labour List
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b bg-gray-50">

                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Photo</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Department</th>
                <th className="p-3 text-left">Production</th>
                <th className="p-3 text-left">Attendance</th>
                <th className="p-3 text-left">Salary</th>
                <th className="p-3 text-left">Phone</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Action</th>

              </tr>

            </thead>

            <tbody>

              {labours.map((labour, index) => (
  <tr
    key={index}
    className="border-b"
  >
    <td className="p-3">
      {labour.id}
    </td>

    <td className="p-3">
      <img
        src="https://i.pravatar.cc/50"
        alt="labour"
        className="w-10 h-10 rounded-full"
      />
    </td>

    <td className="p-3 font-medium">
      {labour.name}
    </td>

    <td className="p-3">
      {labour.department}
    </td>

    <td className="p-3">
      0
    </td>

    <td className="p-3">
      0%
    </td>

    <td className="p-3">
      ₹0
    </td>

    <td className="p-3">
      {labour.phone}
    </td>

    <td className="p-3">
      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
        {labour.status}
      </span>
    </td>

    <td className="p-3">
      <div className="flex gap-2">

        <Link
          to="/owner/labour-details"
          className="bg-blue-600 text-white px-3 py-2 rounded-lg"
        >
          View
        </Link>

        <button
           onClick={() => handleEditLabour(index)}
           className="bg-yellow-500 text-white px-3 py-2 rounded-lg"
        >
          Edit
        </button>

        <button
              onClick={() => handleDeleteLabour(index)}
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

{showModal && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

    <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl p-6">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          Add New Labour
        </h2>

        <button
          onClick={() => setShowModal(false)}
          className="text-3xl font-bold text-gray-500 hover:text-red-600"
        >
          
        </button>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <input
          type="text"
          placeholder="Labour ID"
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
            placeholder="Labour Name"
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
            value={formData.phone}
            onChange={(e) =>
             setFormData({
               ...formData,
               phone: e.target.value,
             })
            }
            className="border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Address"
          className="border p-3 rounded-lg"
        />

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

        <select className="border p-3 rounded-lg">
          <option>Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>

      </div>

      <div className="flex justify-end gap-3 mt-6">

        <button
          onClick={() => setShowModal(false)}
          className="px-5 py-3 bg-gray-300 rounded-lg"
        >
          Cancel
        </button>

        <button
          onClick={handleSaveLabour}

          
          className="px-5 py-3 bg-blue-700 text-white rounded-lg"
        >
          Save Labour
        </button>
        
      </div>

    </div>

  </div>
)}  

    </MainLayout>
  );
};

export default LabourManagement;

