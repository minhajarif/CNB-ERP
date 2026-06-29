import { useState } from "react";
import SupervisorLayout from "../../layouts/SupervisorLayout";

const SupervisorAttendance = () => {

  const [attendance, setAttendance] = useState([]);

  const [editIndex, setEditIndex] = useState(null);

  const [showForm, setShowForm] = useState(false);

  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState({
    labour: "",
    department: "",
    date: "",
    status: "Present",
  });

  const handleSaveAttendance = () => {

    if (
      !formData.labour ||
      !formData.department ||
      !formData.date
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (editIndex !== null) {

      const updatedAttendance = [...attendance];

      updatedAttendance[editIndex] = formData;

      setAttendance(updatedAttendance);

      setEditIndex(null);

    } else {

      setAttendance([
        ...attendance,
        formData,
      ]);

    }

    setFormData({
      labour: "",
      department: "",
      date: "",
      status: "Present",
    });

    setShowForm(false);

  };

  const handleEditAttendance = (index) => {

    setFormData(attendance[index]);

    setEditIndex(index);

    setShowForm(true);

  };

  const handleDeleteAttendance = (index) => {

    setAttendance(
      attendance.filter((_, i) => i !== index)
    );

  };

  const filteredAttendance = attendance.filter((item) =>
    item.labour
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (

    <SupervisorLayout>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

  <h1 className="text-3xl font-bold">
    Attendance Management
  </h1>

  <button
    onClick={() => {
      setShowForm(true);
      setEditIndex(null);
      setFormData({
        labour: "",
        department: "",
        date: "",
        status: "Present",
      });
    }}
    className="bg-blue-700 text-white px-6 py-3 rounded-lg"
  >
    + Mark Attendance
  </button>

</div>

      
            {/* Summary Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Present Today
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            {
              attendance.filter(
                (item) => item.status === "Present"
              ).length
            }
          </h1>

        </div>

        <div className="bg-red-500 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Absent Today
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            {
              attendance.filter(
                (item) => item.status === "Absent"
              ).length
            }
          </h1>

        </div>

        <div className="bg-yellow-500 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Late Entries
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            {
              attendance.filter(
                (item) => item.status === "Late"
              ).length
            }
          </h1>

        </div>

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Total Labour
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            {attendance.length}
          </h1>

        </div>

      </div>


      {showForm && (

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <h2 className="text-xl font-semibold mb-4">

          {editIndex !== null
            ? "Edit Attendance"
            : "Mark Attendance"}

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
            <option value="Present">
              Present
            </option>

            <option value="Absent">
              Absent
            </option>

            <option value="Late">
              Late
            </option>

          </select>

        </div>

        <button
          onClick={handleSaveAttendance}
          className="bg-blue-700 text-white px-6 py-3 rounded-lg mt-5"
        >
          {editIndex !== null
            ? "Update Attendance"
            : "Save Attendance"}
        </button>

      </div>

      )}

      {/* Search */}

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <input
          type="text"
          placeholder="Search Labour..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full border p-3 rounded-lg"
        />

      </div>

      {/* Attendance Records */}

      <div className="bg-white rounded-xl shadow p-5">

        <h2 className="text-xl font-semibold mb-4">
          Attendance Records
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="p-3 text-left">
                  Labour
                </th>

                <th className="p-3 text-left">
                  Department
                </th>

                <th className="p-3 text-left">
                  Date
                </th>

                <th className="p-3 text-left">
                  Status
                </th>

                <th className="p-3 text-left">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>
                          {filteredAttendance.length > 0 ? (

                filteredAttendance.map((item, index) => (

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
                      {item.date}
                    </td>

                    <td className="p-3">

                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          item.status === "Present"
                            ? "bg-green-100 text-green-700"
                            : item.status === "Absent"
                            ? "bg-red-100 text-red-700"
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
                            handleEditAttendance(index)
                          }
                          className="bg-yellow-500 text-white px-3 py-2 rounded-lg"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() =>
                            handleDeleteAttendance(index)
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
                    colSpan="5"
                    className="text-center py-6 text-gray-500"
                  >
                    No Attendance Records Found
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

export default SupervisorAttendance;