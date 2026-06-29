import { useState } from "react";
import LabourLayout from "../../layouts/LabourLayout";

const LabourAdvanceHistory = () => {

  const [advances, setAdvances] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    amount: "",
    date: "",
    reason: "",
    status: "Pending",
  });

  const handleSubmitRequest = () => {

    if (
      !formData.amount ||
      !formData.date ||
      !formData.reason
    ) {
      alert("Please fill all required fields");
      return;
    }

    const newAdvance = {
      requestId: `ADV${String(advances.length + 1).padStart(3, "0")}`,
      ...formData,
    };

    setAdvances([
      ...advances,
      newAdvance,
    ]);

    setFormData({
      amount: "",
      date: "",
      reason: "",
      status: "Pending",
    });

    setShowForm(false);

  };

  return (

    <LabourLayout>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

        <h1 className="text-3xl font-bold">
          Advance History
        </h1>

        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-700 text-white px-5 py-3 rounded-lg"
        >
          + Request Advance
        </button>

      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Total Advance
          </h3>

          <h1 className="text-4xl font-bold mt-2">

            ₹{
              advances.reduce(
                (total, item) =>
                  total + Number(item.amount || 0),
                0
              )
            }

          </h1>

        </div>

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Approved
          </h3>

          <h1 className="text-4xl font-bold mt-2">

            ₹{
              advances
                .filter(
                  (item) => item.status === "Approved"
                )
                .reduce(
                  (total, item) =>
                    total + Number(item.amount || 0),
                  0
                )
            }

          </h1>

        </div>

        <div className="bg-yellow-500 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Pending
          </h3>

          <h1 className="text-4xl font-bold mt-2">

            ₹{
              advances
                .filter(
                  (item) => item.status === "Pending"
                )
                .reduce(
                  (total, item) =>
                    total + Number(item.amount || 0),
                  0
                )
            }

          </h1>

        </div>

        <div className="bg-red-500 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Rejected
          </h3>

          <h1 className="text-4xl font-bold mt-2">

            ₹{
              advances
                .filter(
                  (item) => item.status === "Rejected"
                )
                .reduce(
                  (total, item) =>
                    total + Number(item.amount || 0),
                  0
                )
            }

          </h1>

        </div>

      </div>
            {showForm && (

        <div className="bg-white rounded-xl shadow p-5 mb-6">

          <h2 className="text-xl font-semibold mb-4">
            New Advance Request
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <input
              type="number"
              placeholder="Advance Amount"
              value={formData.amount}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  amount: e.target.value,
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
              rows="4"
              placeholder="Reason for Advance"
              value={formData.reason}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  reason: e.target.value,
                })
              }
              className="border p-3 rounded-lg md:col-span-2"
            />

          </div>

          <button
            onClick={handleSubmitRequest}
            className="mt-5 bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            Submit Request
          </button>

        </div>

      )}

      {/* Advance History */}

      <div className="bg-white rounded-xl shadow p-5">

        <h2 className="text-xl font-semibold mb-4">
          Advance Records
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="p-3 text-left">
                  Request ID
                </th>

                <th className="p-3 text-left">
                  Amount
                </th>

                <th className="p-3 text-left">
                  Request Date
                </th>

                <th className="p-3 text-left">
                  Reason
                </th>

                <th className="p-3 text-left">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {advances.length > 0 ? (

                advances.map((item, index) => (

                  <tr
                    key={index}
                    className="border-b"
                  >

                    <td className="p-3">
                      {item.requestId}
                    </td>

                    <td className="p-3">
                      ₹{item.amount}
                    </td>

                    <td className="p-3">
                      {item.date}
                    </td>

                    <td className="p-3">
                      {item.reason}
                    </td>

                    <td className="p-3">

                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          item.status === "Approved"
                            ? "bg-green-100 text-green-700"
                            : item.status === "Rejected"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {item.status}
                      </span>

                    </td>

                  </tr>

                ))

              ) : (
                               <tr>

                  <td
                    colSpan="5"
                    className="text-center py-6 text-gray-500"
                  >
                    No Advance Records Found
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </LabourLayout>

  );

};

export default LabourAdvanceHistory; 