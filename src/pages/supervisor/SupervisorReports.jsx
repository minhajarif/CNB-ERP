import { useState } from "react";
import SupervisorLayout from "../../layouts/SupervisorLayout";

const SupervisorReports = () => {

  const [reports, setReports] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState({
    reportType: "",
    date: "",
    status: "Pending",
  });

  const handleGenerateReport = () => {

    if (
      !formData.reportType ||
      !formData.date
    ) {
      alert("Please fill all required fields");
      return;
    }

    const newReport = {
      reportId: `REP${String(reports.length + 1).padStart(3, "0")}`,
      generatedBy: "Supervisor",
      ...formData,
    };

    setReports([
      ...reports,
      newReport,
    ]);

    setFormData({
      reportType: "",
      date: "",
      status: "Pending",
    });

    setShowForm(false);

  };

  const filteredReports = reports.filter((item) =>
    item.reportType
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (

    <SupervisorLayout>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

        <h1 className="text-3xl font-bold">
          Reports Management
        </h1>

        <button
          onClick={() => {
            setShowForm(true);
            setFormData({
              reportType: "",
              date: "",
              status: "Pending",
            });
          }}
          className="bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          + Generate Report
        </button>

      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
               <div className="bg-blue-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Total Reports
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            {reports.length}
          </h1>

        </div>

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Completed
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            {
              reports.filter(
                (item) => item.status === "Completed"
              ).length
            }
          </h1>

        </div>

        <div className="bg-yellow-500 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Pending
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            {
              reports.filter(
                (item) => item.status === "Pending"
              ).length
            }
          </h1>

        </div>

        <div className="bg-purple-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Generated Today
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            {reports.length}
          </h1>

        </div>

      </div>

      {showForm && (

        <div className="bg-white rounded-xl shadow p-5 mb-6">

          <h2 className="text-xl font-semibold mb-4">
            Generate Report
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <select
              value={formData.reportType}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  reportType: e.target.value,
                })
              }
              className="border p-3 rounded-lg"
            >
              <option value="">
                Select Report Type
              </option>

              <option value="Attendance Report">
                Attendance Report
              </option>

              <option value="Production Report">
                Production Report
              </option>

              <option value="Labour Report">
                Labour Report
              </option>

            </select>

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
              <option value="Pending">
                Pending
              </option>

              <option value="Completed">
                Completed
              </option>

            </select>

          </div>

          <button
            onClick={handleGenerateReport}
            className="bg-blue-700 text-white px-6 py-3 rounded-lg mt-5"
          >
            Generate Report
          </button>

        </div>

      )}

      {/* Search */}

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <input
          type="text"
          placeholder="Search Reports..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full border p-3 rounded-lg"
        />

      </div>

      {/* Reports Table */}

      <div className="bg-white rounded-xl shadow p-5">

        <h2 className="text-xl font-semibold mb-4">
          Reports History
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="p-3 text-left">
                  Report ID
                </th>

                <th className="p-3 text-left">
                  Report Type
                </th>

                <th className="p-3 text-left">
                  Generated By
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

              {filteredReports.length > 0 ? (

                filteredReports.map((item, index) => (
                                <tr
                    key={index}
                    className="border-b"
                  >

                    <td className="p-3">
                      {item.reportId}
                    </td>

                    <td className="p-3">
                      {item.reportType}
                    </td>

                    <td className="p-3">
                      {item.generatedBy}
                    </td>

                    <td className="p-3">
                      {item.date}
                    </td>

                    <td className="p-3">

                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
  item.status === "Completed"
    ? "bg-green-100 text-green-700"
    : "bg-yellow-100 text-yellow-700"
}`}
                      >
                        {item.status}
                      </span>

                    </td>

                    <td className="p-3">

                      <div className="flex gap-2">

                        <button
                          className="bg-blue-600 text-white px-3 py-2 rounded-lg"
                        >
                          View
                        </button>

                        <button
                          className="bg-green-600 text-white px-3 py-2 rounded-lg"
                        >
                          Print
                        </button>

                      </div>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="6"
                    className="text-center py-6 text-gray-500"
                  >
                    No Reports Found
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

export default SupervisorReports;