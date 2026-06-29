import { useState } from "react";
import SupervisorLayout from "../../layouts/SupervisorLayout";

const SupervisorLabourList = () => {

  const [labours, setLabours] = useState([]);

  const [editIndex, setEditIndex] = useState(null);

  const [showForm, setShowForm] = useState(false);

  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    department: "",
    mobile: "",
    status: "Active",
    photo: "",
  });

  const handleSaveLabour = () => {

    if (
      !formData.id ||
      !formData.name ||
      !formData.department ||
      !formData.mobile
    ) {
      alert("Please fill all required fields");
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
      department: "",
      mobile: "",
      status: "Active",
      photo: "",
    });

    setShowForm(false);

  };

  const handleEditLabour = (index) => {

    setFormData(labours[index]);

    setEditIndex(index);

    setShowForm(true);

  };

  const filteredLabours = labours.filter((item) =>
    item.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (

    <SupervisorLayout>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

  <h1 className="text-3xl font-bold">
    Labour List
  </h1>

  <button
    onClick={() => {
      setShowForm(true);
      setEditIndex(null);
      setFormData({
        id: "",
        name: "",
        department: "",
        mobile: "",
        status: "Active",
        photo: "",
      });
    }}
    className="bg-blue-700 text-white px-6 py-3 rounded-lg"
  >
    + Add Labour
  </button>

</div>
            {/* Summary Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Total Labour
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            {labours.length}
          </h1>

        </div>

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Active Workers
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            {
              labours.filter(
                (item) => item.status === "Active"
              ).length
            }
          </h1>

        </div>

        <div className="bg-red-500 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Inactive Workers
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            {
              labours.filter(
                (item) => item.status === "Inactive"
              ).length
            }
          </h1>

        </div>

        <div className="bg-purple-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Departments
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            {
              [...new Set(labours.map(item => item.department))]
                .length
            }
          </h1>

        </div>

      </div>

      

      {showForm && (

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <h2 className="text-xl font-semibold mb-4">

          {editIndex !== null
            ? "Edit Labour"
            : "Add Labour"}

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <input
            type="text"
            placeholder="Labour ID"
            value={formData.id}
            onChange={(e)=>
              setFormData({
                ...formData,
                id:e.target.value
              })
            }
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Labour Name"
            value={formData.name}
            onChange={(e)=>
              setFormData({
                ...formData,
                name:e.target.value
              })
            }
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Department"
            value={formData.department}
            onChange={(e)=>
              setFormData({
                ...formData,
                department:e.target.value
              })
            }
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={(e)=>
              setFormData({
                ...formData,
                mobile:e.target.value
              })
            }
            className="border p-3 rounded-lg"
          />

          <select
            value={formData.status}
            onChange={(e)=>
              setFormData({
                ...formData,
                status:e.target.value
              })
            }
            className="border p-3 rounded-lg"
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <input
            type="file"
            onChange={(e)=>
              setFormData({
                ...formData,
                photo: URL.createObjectURL(
                  e.target.files[0]
                ),
              })
            }
            className="border p-3 rounded-lg"
          />

        </div>

        <button
          onClick={handleSaveLabour}
          className="bg-blue-700 text-white px-6 py-3 rounded-lg mt-5"
        >
          {editIndex !== null
            ? "Update Labour"
            : "Save Labour"}
        </button>

      </div>

      )}

      {/* Search */}

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <input
          type="text"
          placeholder="Search Labour..."
          value={search}
          onChange={(e)=>
            setSearch(e.target.value)
          }
          className="w-full border p-3 rounded-lg"
        />

      </div>

      {/* Labour Table */}

      <div className="bg-white rounded-xl shadow p-5">
              <h2 className="text-xl font-semibold mb-4">
          Department Labour
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Photo</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Department</th>
                <th className="p-3 text-left">Mobile</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Action</th>

              </tr>

            </thead>

            <tbody>

              {filteredLabours.length > 0 ? (

                filteredLabours.map((item, index) => (

                  <tr
                    key={index}
                    className="border-b"
                  >

                    <td className="p-3">
                      {item.id}
                    </td>

                    <td className="p-3">

                      <img
                        src={
                          item.photo ||
                          "https://via.placeholder.com/40"
                        }
                        alt="labour"
                        className="w-10 h-10 rounded-full object-cover"
                      />

                    </td>

                    <td className="p-3">
                      {item.name}
                    </td>

                    <td className="p-3">
                      {item.department}
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

                        <button
                          onClick={() =>
                            handleEditLabour(index)
                          }
                          className="bg-yellow-500 text-white px-3 py-2 rounded-lg"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() =>
                            setLabours(
                              labours.filter(
                                (_, i) => i !== index
                              )
                            )
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
                    No Labour Found
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

export default SupervisorLabourList;