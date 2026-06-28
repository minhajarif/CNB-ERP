
import SupervisorLayout from "../../layouts/SupervisorLayout";

const SupervisorProduction = () => {
  return (
    <SupervisorLayout>

      <h1 className="text-3xl font-bold mb-6">
        Production Management
      </h1>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Today's Production
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            450
          </h1>

        </div>

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Total Amount
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            ₹12,500
          </h1>

        </div>

        <div className="bg-purple-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Active Labour
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            32
          </h1>

        </div>

        <div className="bg-red-500 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Monthly Production
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            9,850
          </h1>

        </div>

      </div>

      {/* Production Entry */}

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

        </div>

        <button className="mt-5 bg-blue-700 text-white px-6 py-3 rounded-lg">
          Save Production
        </button>

      </div>

      {/* Search */}

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <input
          type="text"
          placeholder="Search Production..."
          className="w-full border p-3 rounded-lg"
        />

      </div>

      {/* Production Table */}

      <div className="bg-white rounded-xl shadow p-5">

        <h2 className="text-xl font-semibold mb-4">
          Production Records
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="p-3 text-left">Labour</th>
                <th className="p-3 text-left">Work Type</th>
                <th className="p-3 text-left">Quantity</th>
                <th className="p-3 text-left">Rate</th>
                <th className="p-3 text-left">Amount</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Action</th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-b">

                <td className="p-3">Rahman</td>
                <td className="p-3">Wallet Stitching</td>
                <td className="p-3">50</td>
                <td className="p-3">₹10</td>
                <td className="p-3">₹500</td>
                <td className="p-3">12-06-2026</td>

                <td className="p-3">

                  <div className="flex gap-2">

                    <button className="bg-blue-600 text-white px-3 py-2 rounded-lg">
                      View
                    </button>

                    <button className="bg-yellow-500 text-white px-3 py-2 rounded-lg">
                      Edit
                    </button>

                  </div>

                </td>

              </tr>

              <tr>

                <td className="p-3">Ahmed</td>
                <td className="p-3">Packing</td>
                <td className="p-3">100</td>
                <td className="p-3">₹5</td>
                <td className="p-3">₹500</td>
                <td className="p-3">12-06-2026</td>

                <td className="p-3">

                  <div className="flex gap-2">

                    <button className="bg-blue-600 text-white px-3 py-2 rounded-lg">
                      View
                    </button>

                    <button className="bg-yellow-500 text-white px-3 py-2 rounded-lg">
                      Edit
                    </button>

                  </div>

                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </SupervisorLayout>
  );
};

export default SupervisorProduction;