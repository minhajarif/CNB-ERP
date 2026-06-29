import { useState } from "react";
import SupervisorLayout from "../../layouts/SupervisorLayout";

const SupervisorNotifications = () => {

  const [notifications, setNotifications] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const [editIndex, setEditIndex] = useState(null);

  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState({
    labour: "",
    title: "",
    message: "",
    priority: "Normal",
    status: "Unread",
  });

  const handleSaveNotification = () => {

    if (
      !formData.labour ||
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
      labour: "",
      title: "",
      message: "",
      priority: "Normal",
      status: "Unread",
    });

    setShowForm(false);

  };

  const handleEditNotification = (index) => {

    setFormData(notifications[index]);

    setEditIndex(index);

    setShowForm(true);

  };

  const handleDeleteNotification = (index) => {

    setNotifications(
      notifications.filter((_, i) => i !== index)
    );

  };

  const filteredNotifications = notifications.filter(
    (item) =>
      item.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      item.labour
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (

    <SupervisorLayout>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

        <h1 className="text-3xl font-bold">
          Notifications
        </h1>

        <button
          onClick={() => {
            setShowForm(true);
            setEditIndex(null);

            setFormData({
              labour: "",
              title: "",
              message: "",
              priority: "Normal",
              status: "Unread",
            });

          }}
          className="bg-blue-700 text-white px-5 py-3 rounded-lg"
        >
          + Send Notification
        </button>

      </div>
            {/* Summary Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Total Notifications
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            {notifications.length}
          </h1>

        </div>

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Read
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            {
              notifications.filter(
                (item) => item.status === "Read"
              ).length
            }
          </h1>

        </div>

        <div className="bg-yellow-500 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Unread
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            {
              notifications.filter(
                (item) => item.status === "Unread"
              ).length
            }
          </h1>

        </div>

        <div className="bg-purple-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Urgent
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            {
              notifications.filter(
                (item) => item.priority === "Urgent"
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
            : "Send Notification"}

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
            type="text"
            placeholder="Labour Name / All Labour"
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
            placeholder="Notification Title"
            value={formData.title}
            onChange={(e) =>
              set <FormData({
                ...formData,
                title: e.target.value,
              })
            }
            className="border p-3 rounded"
            />
            <textarea
            rows="4"
            placeholder="Notification Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({
                ...formData,
                message: e.target.value,
              })
            }
            className="border p-3 rounded-lg md:col-span-2"
          />

          <select
            value={formData.priority}
            onChange={(e) =>
              setFormData({
                ...formData,
                priority: e.target.value,
              })
            }
            className="border p-3 rounded-lg"
          >
            <option>Normal</option>
            <option>Urgent</option>
          </select>

        </div>

        <button
          onClick={handleSaveNotification}
          className="bg-blue-700 text-white px-6 py-3 rounded-lg mt-5"
        >
          {editIndex !== null
            ? "Update Notification"
            : "Send Notification"}
        </button>

      </div>

      )}

      {/* Search */}

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <input
          type="text"
          placeholder="Search Notification..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full border p-3 rounded-lg"
        />

      </div>
        {/* Notifications List */}

      <div className="bg-white rounded-xl shadow p-5">

        <h2 className="text-xl font-semibold mb-4">
          Sent Notifications
        </h2>

        <div className="space-y-4">

          {filteredNotifications.length > 0 ? (

            filteredNotifications.map((item, index) => (

              <div
                key={index}
                className="border rounded-lg p-4 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4"
              >

                <div>

                  <h3 className="font-semibold text-lg">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-1">
                    {item.message}
                  </p>

                  <p className="text-sm text-blue-600 mt-2">
                    Labour : {item.labour}
                  </p>

                  <div className="flex gap-2 mt-3">

                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        item.priority === "Urgent"
                          ? "bg-red-100 text-red-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {item.priority}
                    </span>

                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        item.status === "Read"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {item.status}
                    </span>

                  </div>

                </div>

                <div className="flex flex-wrap gap-2">

                  {item.status === "Unread" && (

                    <button
                      onClick={() => {

                        const updated = [...notifications];

                        updated[index].status = "Read";

                        setNotifications(updated);

                      }}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg"
                    >
                      Mark Read
                    </button>

                  )}

                  <button
                    onClick={() =>
                      handleEditNotification(index)
                    }
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      handleDeleteNotification(index)
                    }
                    className="bg-red-600 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>

                </div>

              </div>

            ))

          ) : (

            <div className="text-center py-10 text-gray-500">

              No Notifications Found

            </div>

          )}

        </div>

      </div>

    </SupervisorLayout>

  );

};

export default SupervisorNotifications;