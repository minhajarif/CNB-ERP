import MainLayout from "../../layouts/MainLayout";

const Production = () => {
  return (
    <MainLayout>

      <h1 className="text-3xl font-bold mb-6">
        Production Management
      </h1>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">
          <h3 className="text-lg">
            Today's Production
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            850
          </h1>
        </div>

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">
          <h3 className="text-lg">
            Total Amount
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            ₹18,500
          </h1>
        </div>

        <div className="bg-purple-600 text-white p-5 rounded-xl shadow">
          <h3 className="text-lg">
            Active Workers
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            72
          </h1>
        </div>

      </div>

      {/* Production Entry Form */}

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <h2 className="text-xl font-semibold mb-4">
          Add Production Entry
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <select className="border p-3 rounded-lg">
            <option>Select Labour</option>
            <option>Rahman</option>
            <option>Ahmed</option>
          </select>

          <select className="border p-3 rounded-lg">
            <option>Select Department</option>
            <option>Stitching</option>
            <option>Packing</option>
          </select>

          <input
            type="text"
            placeholder="Work Type"
            className="border p-3 rounded-lg"
          />

          <input
            type="number"
            placeholder="Quantity"
            className="border p-3 rounded-lg"
          />

          <input
            type="number"
            placeholder="Piece Rate"
            className="border p-3 rounded-lg"
          />

          <input
            type="date"
            className="border p-3 rounded-lg"
          />

          <input
            type="file"
            className="border p-3 rounded-lg md:col-span-2"
          />

        </div>

        <button className="mt-5 bg-blue-700 text-white px-6 py-3 rounded-lg">
          Save Production
        </button>

      </div>

      {/* Production History */}

      <div className="bg-white rounded-xl shadow p-4">

        <h2 className="text-xl font-semibold mb-4">
          Production History
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>
              <tr className="border-b">

                <th className="p-3 text-left">Labour</th>
                <th className="p-3 text-left">Department</th>
                <th className="p-3 text-left">Work Type</th>
                <th className="p-3 text-left">Quantity</th>
                <th className="p-3 text-left">Rate</th>
                <th className="p-3 text-left">Amount</th>
                <th className="p-3 text-left">Date</th>

              </tr>
            </thead>

            <tbody>

              <tr className="border-b">

                <td className="p-3">Rahman</td>
                <td className="p-3">Stitching</td>
                <td className="p-3">Wallet</td>
                <td className="p-3">50</td>
                <td className="p-3">₹10</td>
                <td className="p-3">₹500</td>
                <td className="p-3">12-06-2026</td>

              </tr>

              <tr>

                <td className="p-3">Ahmed</td>
                <td className="p-3">Packing</td>
                <td className="p-3">Box Packing</td>
                <td className="p-3">100</td>
                <td className="p-3">₹5</td>
                <td className="p-3">₹500</td>
                <td className="p-3">12-06-2026</td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </MainLayout>
  );
};

export default Production;