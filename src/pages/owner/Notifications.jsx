import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";

const Notifications = () => {

  const [notifications, setNotifications] = useState([]);

  const [editIndex, setEditIndex] = useState(null);

  const [search, setSearch] = useState("");

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    message: "",
    type: "Info",
    status: "Unread",
    date: "",
  });

  const handleSaveNotification = () => {

    if (
      !formData.title ||
      !formData.message
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (editIndex !== null) {

      const updated = [...notifications];

      updated[editIndex] = formData;

      setNotifications(updated);

      setEditIndex(null);

    } else {

      setNotifications([
        ...notifications,
        formData,
      ]);

    }

    setFormData({
      title: "",
      message: "",
      type: "Info",
      status: "Unread",
      date: "",
    });

    setShowForm(false);

  };

  const handleDeleteNotification = (index) => {

    setNotifications(
      notifications.filter((_, i) => i !== index)
    );

  };

  const handleEditNotification = (index) => {

    setFormData(notifications[index]);

    setEditIndex(index);

    setShowForm(true);

  };

  const filteredNotifications = notifications.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <MainLayout>
           {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Notifications
        </h1>

        <button
          onClick={() => {
            setShowForm(true);
            setEditIndex(null);
            setFormData({
              title: "",
              message: "",
              type: "Info",
              status: "Unread",
              date: "",
            });
          }}
          className="bg-blue-700 text-white px-5 py-3 rounded-lg"
        >
          + Add Notification
        </button>

      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">
          <h3>Total Notifications</h3>
          <h1 className="text-4xl font-bold mt-2">
            {notifications.length}
          </h1>
        </div>

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">
          <h3>Read</h3>
          <h1 className="text-4xl font-bold mt-2">
            {
              notifications.filter(
                (item) => item.status === "Read"
              ).length
            }
          </h1>
        </div>

        <div className="bg-yellow-500 text-white p-5 rounded-xl shadow">
          <h3>Unread</h3>
          <h1 className="text-4xl font-bold mt-2">
            {
              notifications.filter(
                (item) => item.status === "Unread"
              ).length
            }
          </h1>
        </div>

        <div className="bg-purple-600 text-white p-5 rounded-xl shadow">
          <h3>Today</h3>
          <h1 className="text-4xl font-bold mt-2">
            {
              notifications.filter(
                (item) =>
                  item.date ===
                  new Date().toISOString().split("T")[0]
              ).length
            }
          </h1>
        </div>

      </div>

      {showForm && (

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <h2 className="text-xl font-semibold mb-4">

          {editIndex !== null
            ? "Edit Notification"
            : "Add Notification"}

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
            type="text"
            placeholder="Notification Title"
            value={formData.title}
            onChange={(e) =>
              setFormData({
                ...formData,
                title: e.target.value,
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

          <textarea
            placeholder="Notification Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({
                ...formData,
                message: e.target.value,
              })
            }
            className="border p-3 rounded-lg md:col-span-2"
            rows={4}
          />

          <select
            value={formData.type}
            onChange={(e) =>
              setFormData({
                ...formData,
                type: e.target.value,
              })
            }
            className="border p-3 rounded-lg"
          >
            <option value="Info">Info</option>
            <option value="Alert">Alert</option>
            <option value="Success">Success</option>
          </select>

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
            <option value="Unread">Unread</option>
            <option value="Read">Read</option>
          </select>

        </div>

        <button
          onClick={handleSaveNotification}
          className="mt-5 bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          {editIndex !== null
            ? "Update Notification"
            : "Save Notification"}
        </button>

      </div>

      )}

      {/* Search */}

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <input
          type="text"
          placeholder="Search Notifications..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full border p-3 rounded-lg"
        />

      </div>

      {/* Notification List */}

      <div className="bg-white rounded-xl shadow p-5">

        <div className="space-y-4">
                  {filteredNotifications.map((item, index) => (

            <div
              key={index}
              className="border rounded-lg p-4 hover:bg-slate-50"
            >

              <div className="flex justify-between items-center">

                <div>

                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm mt-1">
                    {item.message}
                  </p>

                  <p className="text-xs text-gray-400 mt-2">
                    {item.date}
                  </p>

                </div>

                <div className="flex items-center gap-2">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      item.type === "Success"
                        ? "bg-green-100 text-green-700"
                        : item.type === "Alert"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {item.type}
                  </span>

                  <button
                    onClick={() =>
                      handleEditNotification(index)
                    }
                    className="bg-yellow-500 text-white px-3 py-2 rounded-lg"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      handleDeleteNotification(index)
                    }
                    className="bg-red-600 text-white px-3 py-2 rounded-lg"
                  >
                    Delete
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </MainLayout>

  );

};

export default Notifications;