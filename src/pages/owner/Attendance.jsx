import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";

const Attendance = () => {

  const [attendance, setAttendance] = useState([]);

  const [editIndex, setEditIndex] = useState(null);

  const [search, setSearch] = useState("");

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    department: "",
    date: "",
    login: "",
    logout: "",
    hours: "",
    status: "Present",
  });

  const handleSaveAttendance = () => {

    if (
      !formData.name ||
      !formData.department ||
      !formData.date
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (editIndex !== null) {

      const updated = [...attendance];

      updated[editIndex] = formData;

      setAttendance(updated);

      setEditIndex(null);

    } else {

      setAttendance([
        ...attendance,
        formData,
      ]);

    }

    setFormData({
      name: "",
      department: "",
      date: "",
      login: "",
      logout: "",
      hours: "",
      status: "Present",
    });

    setShowForm(false);

  };

  const handleDeleteAttendance = (index) => {

    setAttendance(
      attendance.filter((_, i) => i !== index)
    );

  };

  const handleEditAttendance = (index) => {

    setFormData(attendance[index]);

    setEditIndex(index);

    setShowForm(true);

  };

  const filteredAttendance = attendance.filter((item) =>
    item.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <MainLayout>
            {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Attendance Management
        </h1>

        <button
          onClick={() => {
            setShowForm(true);
            setEditIndex(null);
            setFormData({
              name: "",
              department: "",
              date: "",
              login: "",
              logout: "",
              hours: "",
              status: "Present",
            });
          }}
          className="bg-blue-700 text-white px-5 py-3 rounded-xl"
        >
          + Add Attendance
        </button>

      </div>

      {/* KPI Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">
          <h3>Present Today</h3>
          <h1 className="text-4xl font-bold mt-2">
            {
              attendance.filter(
                (item) => item.status === "Present"
              ).length
            }
          </h1>
        </div>

        <div className="bg-red-500 text-white p-5 rounded-xl shadow">
          <h3>Absent Today</h3>
          <h1 className="text-4xl font-bold mt-2">
            {
              attendance.filter(
                (item) => item.status === "Absent"
              ).length
            }
          </h1>
        </div>

        <div className="bg-yellow-500 text-white p-5 rounded-xl shadow">
          <h3>Late Entries</h3>
          <h1 className="text-4xl font-bold mt-2">
            {
              attendance.filter(
                (item) => item.status === "Late"
              ).length
            }
          </h1>
        </div>

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">
          <h3>Total Labour</h3>
          <h1 className="text-4xl font-bold mt-2">
            {attendance.length}
          </h1>
        </div>

      </div>

      {showForm && (

      <div className="bg-white rounded-xl shadow p-5 mb-8">

        <h2 className="text-xl font-semibold mb-4">

          {editIndex !== null
            ? "Edit Attendance"
            : "Add Attendance"}

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

          <input
            type="time"
            value={formData.login}
            onChange={(e) =>
              setFormData({
                ...formData,
                login: e.target.value,
              })
            }
            className="border p-3 rounded-lg"
          />

          <input
            type="time"
            value={formData.logout}
            onChange={(e) =>
              setFormData({
                ...formData,
                logout: e.target.value,
              })
            }
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Working Hours"
            value={formData.hours}
            onChange={(e) =>
              setFormData({
                ...formData,
                hours: e.target.value,
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
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
            <option value="Late">Late</option>
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
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

      </div>

      {/* Attendance Table */}

      <div className="bg-white rounded-xl shadow p-5">

        <h2 className="text-xl font-semibold mb-4">
          Attendance Records
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b">
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Department</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Login</th>
                <th className="p-3 text-left">Logout</th>
                <th className="p-3 text-left">Hours</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Action</th>
              </tr>

            </thead>

            <tbody>
                            {filteredAttendance.map((item, index) => (

                <tr
                  key={index}
                  className="border-b"
                >

                  <td className="p-3">
                    {item.name}
                  </td>

                  <td className="p-3">
                    {item.department}
                  </td>

                  <td className="p-3">
                    {item.date}
                  </td>

                  <td className="p-3">
                    {item.login}
                  </td>

                  <td className="p-3">
                    {item.logout}
                  </td>

                  <td className="p-3">
                    {item.hours}
                  </td>

                  <td className="p-3">

                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        item.status === "Present"
                          ? "bg-green-100 text-green-700"
                          : item.status === "Late"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.status}
                    </span>

                  </td>

                  <td className="p-3">

                    <div className="flex gap-2">

                      <button
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                      >
                        View
                      </button>

                      <button
                        onClick={() =>
                          handleEditAttendance(index)
                        }
                        className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          handleDeleteAttendance(index)
                        }
                        className="bg-red-600 text-white px-4 py-2 rounded-lg"
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

export default Attendance;