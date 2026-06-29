import { useState } from "react";
import LabourLayout from "../../layouts/LabourLayout";

const LabourNotifications = () => {

  const [notifications, setNotifications] = useState([]);

  const [search, setSearch] = useState("");

  const filteredNotifications = notifications.filter((item) =>
    item.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const handleMarkAllRead = () => {

    setNotifications(
      notifications.map((item) => ({
        ...item,
        status: "Read",
      }))
    );

  };

  const handleDeleteNotification = (index) => {

    setNotifications(
      notifications.filter((_, i) => i !== index)
    );

  };

  return (

    <LabourLayout>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

        <h1 className="text-3xl font-bold">
          Notifications
        </h1>

        <button
          onClick={handleMarkAllRead}
          className="bg-blue-700 text-white px-5 py-3 rounded-lg"
        >
          Mark All Read
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
            Today
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            {notifications.length}
          </h1>

        </div>

      </div>
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

      {/* Notifications List */}

      <div className="bg-white rounded-xl shadow p-5">

        <h2 className="text-xl font-semibold mb-4">
          Recent Notifications
        </h2>

        <div className="space-y-4">

          {filteredNotifications.length > 0 ? (

            filteredNotifications.map((item, index) => (

              <div
                key={index}
                className={`border rounded-lg p-4 flex justify-between items-center ${
                  item.status === "Unread"
                    ? "bg-blue-50"
                    : "bg-white"
                }`}
              >

                <div>

                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm mt-1">
                    {item.message}
                  </p>

                  <p className="text-xs text-gray-500 mt-2">
                    {item.time}
                  </p>

                  <span
                    className={`inline-block mt-2 px-3 py-1 rounded-full text-sm ${
                      item.status === "Read"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.status}
                  </span>

                </div>

                <div className="flex gap-2">

                  {item.status === "Unread" && (

                    <button
                      onClick={() => {

                        const updated = [...notifications];

                        updated[index].status = "Read";

                        setNotifications(updated);

                      }}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                    >
                      Read
                    </button>

                  )}

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

    </LabourLayout>

  );

};

export default LabourNotifications;