import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";

import AttendanceChart from "../../components/charts/AttendanceChart";
import ProductionChart from "../../components/charts/ProductionChart";
import SalaryChart from "../../components/charts/SalaryChart";

const Reports = () => {

  const [reports, setReports] = useState([]);

  const [editIndex, setEditIndex] = useState(null);

  const [search, setSearch] = useState("");

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    reportType: "",
    department: "",
    date: "",
    records: "",
    status: "Ready",
  });

  const handleSaveReport = () => {

    if (
      !formData.reportType ||
      !formData.department
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (editIndex !== null) {

      const updated = [...reports];

      updated[editIndex] = formData;

      setReports(updated);

      setEditIndex(null);

    } else {

      setReports([
        ...reports,
        formData,
      ]);

    }

    setFormData({
      reportType: "",
      department: "",
      date: "",
      records: "",
      status: "Ready",
    });

    setShowForm(false);

  };

  const handleDeleteReport = (index) => {

    setReports(
      reports.filter((_, i) => i !== index)
    );

  };

  const handleEditReport = (index) => {

    setFormData(reports[index]);

    setEditIndex(index);

    setShowForm(true);

  };

  const filteredReports = reports.filter((item) =>
    item.reportType
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <MainLayout>
           {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

        <h1 className="text-3xl font-bold">
          Reports & Analytics
        </h1>

        <div className="flex flex-wrap gap-2">

          <button
            onClick={() => {
              setShowForm(true);
              setEditIndex(null);
              setFormData({
                reportType: "",
                department: "",
                date: "",
                records: "",
                status: "Ready",
              });
            }}
            className="bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            + Add Report
          </button>

          <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
            PDF
          </button>

          <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
            Excel
          </button>

          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg">
            Print
          </button>

        </div>

      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">

          <h3>Total Reports</h3>

          <h1 className="text-4xl font-bold mt-2">
            {reports.length}
          </h1>

        </div>

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">

          <h3>Ready Reports</h3>

          <h1 className="text-4xl font-bold mt-2">
            {
              reports.filter(
                (item) => item.status === "Ready"
              ).length
            }
          </h1>

        </div>

        <div className="bg-yellow-500 text-white p-5 rounded-xl shadow">

          <h3>Generated</h3>

          <h1 className="text-4xl font-bold mt-2">
            {
              reports.filter(
                (item) => item.status === "Generated"
              ).length
            }
          </h1>

        </div>

        <div className="bg-purple-600 text-white p-5 rounded-xl shadow">

          <h3>Total Records</h3>

          <h1 className="text-4xl font-bold mt-2">
            {
              reports.reduce(
                (total, item) =>
                  total + Number(item.records || 0),
                0
              )
            }
          </h1>

        </div>

      </div>

      {/* Charts */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">

        <AttendanceChart />

        <ProductionChart />

        <SalaryChart />

      </div>

      {showForm && (

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <h2 className="text-xl font-semibold mb-4">

          {editIndex !== null
            ? "Edit Report"
            : "Add Report"}

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <input
            type="text"
            placeholder="Report Type"
            value={formData.reportType}
            onChange={(e) =>
              setFormData({
                ...formData,
                reportType: e.target.value,
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
            type="number"
            placeholder="Records"
            value={formData.records}
            onChange={(e) =>
              setFormData({
                ...formData,
                records: e.target.value,
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
            <option value="Ready">Ready</option>
            <option value="Generated">Generated</option>
            <option value="Active">Active</option>
          </select>

        </div>

        <button
          onClick={handleSaveReport}
          className="mt-5 bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          {editIndex !== null
            ? "Update Report"
            : "Save Report"}
        </button>

      </div>

      )}

      {/* Search */}

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <input
          type="text"
          placeholder="Search Report..."
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
          Generated Reports
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="p-3 text-left">Report Type</th>
                <th className="p-3 text-left">Department</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Records</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Action</th>

              </tr>

            </thead>

            <tbody>
                           {filteredReports.map((item, index) => (

                <tr
                  key={index}
                  className="border-b"
                >

                  <td className="p-3">
                    {item.reportType}
                  </td>

                  <td className="p-3">
                    {item.department}
                  </td>

                  <td className="p-3">
                    {item.date}
                  </td>

                  <td className="p-3">
                    {item.records}
                  </td>

                  <td className="p-3">

                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        item.status === "Ready"
                          ? "bg-green-100 text-green-700"
                          : item.status === "Generated"
                          ? "bg-blue-100 text-blue-700"
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
                          handleEditReport(index)
                        }
                        className="bg-yellow-500 text-white px-3 py-2 rounded-lg"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          handleDeleteReport(index)
                        }
                        className="bg-red-600 text-white px-3 py-2 rounded-lg"
                      >
                        Delete
                      </button>

                      <button
                        className="bg-blue-600 text-white px-3 py-2 rounded-lg"
                      >
                        Download
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

export default Reports; 