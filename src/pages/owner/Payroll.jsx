import MainLayout from "../../layouts/MainLayout";

const Payroll = () => {
return ( <MainLayout>

  <h1 className="text-3xl font-bold mb-6">
    Payroll Management
  </h1>

  {/* Summary Cards */}

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">

    <div className="bg-green-600 text-white p-5 rounded-xl shadow">
      <h3 className="text-lg">
        Total Salary
      </h3>

      <h1 className="text-4xl font-bold mt-2">
        ₹2,50,000
      </h1>
    </div>

    <div className="bg-yellow-500 text-white p-5 rounded-xl shadow">
      <h3 className="text-lg">
        Total Advance
      </h3>

      <h1 className="text-4xl font-bold mt-2">
        ₹45,000
      </h1>
    </div>

    <div className="bg-red-500 text-white p-5 rounded-xl shadow">
      <h3 className="text-lg">
        Pending Salary
      </h3>

      <h1 className="text-4xl font-bold mt-2">
        ₹35,000
      </h1>
    </div>

    <div className="bg-blue-600 text-white p-5 rounded-xl shadow">
      <h3 className="text-lg">
        Paid Salary
      </h3>

      <h1 className="text-4xl font-bold mt-2">
        ₹2,15,000
      </h1>
    </div>

  </div>

  {/* Generate Salary */}

  <div className="bg-white rounded-xl shadow p-5 mb-6">

    <h2 className="text-xl font-semibold mb-4">
      Generate Salary
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

      <select className="border p-3 rounded-lg">
        <option>Select Labour</option>
        <option>Rahman</option>
        <option>Ahmed</option>
      </select>

      <input
        type="month"
        className="border p-3 rounded-lg"
      />

      <button className="bg-blue-700 text-white rounded-lg p-3">
        Generate Salary
      </button>

    </div>

  </div>

  {/* Search */}

  <div className="bg-white rounded-xl shadow p-5 mb-6">

    <input
      type="text"
      placeholder="Search Payroll..."
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

          <tr className="border-b">

            <td className="p-3">Rahman</td>
            <td className="p-3">Stitching</td>
            <td className="p-3">₹12,000</td>
            <td className="p-3">₹2,000</td>
            <td className="p-3 font-semibold">₹10,000</td>

            <td className="p-3">

              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                Pending
              </span>

            </td>

            <td className="p-3 flex gap-2">

              <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
                Pay
              </button>

              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                View
              </button>

            </td>

          </tr>

          <tr>

            <td className="p-3">Ahmed</td>
            <td className="p-3">Packing</td>
            <td className="p-3">₹15,000</td>
            <td className="p-3">₹3,000</td>
            <td className="p-3 font-semibold">₹12,000</td>

            <td className="p-3">

              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                Paid
              </span>

            </td>

            <td className="p-3">

              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                View
              </button>

            </td>

          </tr>

        </tbody>

      </table>

    </div>

  </div>

</MainLayout>


);
};

export default Payroll;
