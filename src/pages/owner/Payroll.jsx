import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";

const Payroll = () => {

  const [payrolls, setPayrolls] = useState([]);

  const [editIndex, setEditIndex] = useState(null);

  const [search, setSearch] = useState("");

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    labour: "",
    department: "",
    grossSalary: "",
    advance: "",
    netSalary: "",
    status: "Pending",
  });

  const handleSavePayroll = () => {

    if (
      !formData.labour ||
      !formData.department ||
      !formData.grossSalary
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (editIndex !== null) {

      const updated = [...payrolls];

      updated[editIndex] = formData;

      setPayrolls(updated);

      setEditIndex(null);

    } else {

      setPayrolls([
        ...payrolls,
        formData,
      ]);

    }

    setFormData({
      labour: "",
      department: "",
      grossSalary: "",
      advance: "",
      netSalary: "",
      status: "Pending",
    });

    setShowForm(false);

  };

  const handleDeletePayroll = (index) => {

    setPayrolls(
      payrolls.filter((_, i) => i !== index)
    );

  };

  const handleEditPayroll = (index) => {

    setFormData(payrolls[index]);

    setEditIndex(index);

    setShowForm(true);

  };

  const handlePay = (index) => {

    const updated = [...payrolls];

    updated[index].status = "Paid";

    setPayrolls(updated);

  };

  const filteredPayrolls = payrolls.filter((item) =>
    item.labour.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <MainLayout>
           {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Payroll Management
        </h1>

        <button
          onClick={() => {
            setShowForm(true);
            setEditIndex(null);
            setFormData({
              labour: "",
              department: "",
              grossSalary: "",
              advance: "",
              netSalary: "",
              status: "Pending",
            });
          }}
          className="bg-blue-700 text-white px-5 py-3 rounded-xl"
        >
          + Generate Payroll
        </button>

      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">
          <h3>Total Salary</h3>
          <h1 className="text-4xl font-bold mt-2">
            ₹{
              payrolls.reduce(
                (t, item) => t + Number(item.grossSalary || 0),
                0
              )
            }
          </h1>
        </div>

        <div className="bg-yellow-500 text-white p-5 rounded-xl shadow">
          <h3>Total Advance</h3>
          <h1 className="text-4xl font-bold mt-2">
            ₹{
              payrolls.reduce(
                (t, item) => t + Number(item.advance || 0),
                0
              )
            }
          </h1>
        </div>

        <div className="bg-red-500 text-white p-5 rounded-xl shadow">
          <h3>Pending Salary</h3>
          <h1 className="text-4xl font-bold mt-2">
            {
              payrolls.filter(
                (item) => item.status === "Pending"
              ).length
            }
          </h1>
        </div>

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">
          <h3>Paid Salary</h3>
          <h1 className="text-4xl font-bold mt-2">
            {
              payrolls.filter(
                (item) => item.status === "Paid"
              ).length
            }
          </h1>
        </div>

      </div>

      {showForm && (

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <h2 className="text-xl font-semibold mb-4">

          {editIndex !== null
            ? "Edit Payroll"
            : "Generate Payroll"}

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
            type="number"
            placeholder="Gross Salary"
            value={formData.grossSalary}
            onChange={(e) =>
              setFormData({
                ...formData,
                grossSalary: e.target.value,
                netSalary:
                  Number(e.target.value) -
                  Number(formData.advance || 0),
              })
            }
            className="border p-3 rounded-lg"
          />

          <input
            type="number"
            placeholder="Advance"
            value={formData.advance}
            onChange={(e) =>
              setFormData({
                ...formData,
                advance: e.target.value,
                netSalary:
                  Number(formData.grossSalary || 0) -
                  Number(e.target.value),
              })
            }
            className="border p-3 rounded-lg"
          />

          <input
            type="number"
            placeholder="Net Salary"
            value={formData.netSalary}
            readOnly
            className="border p-3 rounded-lg bg-gray-100"
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
            <option value="Pending">Pending</option>
            <option value="Paid">Paid</option>
          </select>

        </div>

        <button
          onClick={handleSavePayroll}
          className="bg-blue-700 text-white px-6 py-3 rounded-lg mt-5"
        >
          {editIndex !== null
            ? "Update Payroll"
            : "Save Payroll"}
        </button>

      </div>

      )}

      {/* Search */}

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <input
          type="text"
          placeholder="Search Payroll..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full border p-3 rounded-lg"
        />

      </div>

      {/* Payroll Table */}

      <div className="bg-white rounded-xl shadow p-5">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b">
                <th className="p-3 text-left">Labour</th>
                <th className="p-3 text-left">Department</th>
                <th className="p-3 text-left">Gross Salary</th>
                <th className="p-3 text-left">Advance</th>
                <th className="p-3 text-left">Net Salary</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Action</th>
              </tr>

            </thead>

            <tbody>
                            {filteredPayrolls.map((item, index) => (

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
                    ₹{item.grossSalary}
                  </td>

                  <td className="p-3">
                    ₹{item.advance}
                  </td>

                  <td className="p-3 font-semibold">
                    ₹{item.netSalary}
                  </td>

                  <td className="p-3">

                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        item.status === "Paid"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {item.status}
                    </span>

                  </td>

                  <td className="p-3">

                    <div className="flex gap-2">

                      {item.status === "Pending" && (

                        <button
                          onClick={() => handlePay(index)}
                          className="bg-green-600 text-white px-4 py-2 rounded-lg"
                        >
                          Pay
                        </button>

                      )}

                      <button
                        onClick={() =>
                          handleEditPayroll(index)
                        }
                        className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          handleDeletePayroll(index)
                        }
                        className="bg-red-600 text-white px-4 py-2 rounded-lg"
                      >
                        Delete
                      </button>

                      <button
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                      >
                        View
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

export default Payroll;