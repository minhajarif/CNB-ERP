import { useState } from "react";
import LabourLayout from "../../layouts/LabourLayout";

const LabourMyProduction = () => {

  const [searchMonth, setSearchMonth] = useState("");

  const [productions] = useState([]);

  const filteredProductions = productions.filter((item) => {

    if (!searchMonth) return true;

    return item.date.startsWith(searchMonth);

  });

  return (

    <LabourLayout>

      <h1 className="text-3xl font-bold mb-6">
        My Production
      </h1>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Today Production
          </h3>

          <h1 className="text-4xl font-bold mt-2">

            {
              productions.reduce(
                (total, item) =>
                  total + Number(item.quantity || 0),
                0
              )
            }

          </h1>

        </div>

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            This Month
          </h3>

          <h1 className="text-4xl font-bold mt-2">

            {
              productions.reduce(
                (total, item) =>
                  total + Number(item.quantity || 0),
                0
              )
            }

          </h1>

        </div>

        <div className="bg-purple-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Earnings
          </h3>

          <h1 className="text-4xl font-bold mt-2">

            ₹{
              productions.reduce(
                (total, item) =>
                  total +
                  Number(item.quantity || 0) *
                  Number(item.rate || 0),
                0
              )
            }

          </h1>

        </div>

        <div className="bg-yellow-500 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Work Types
          </h3>

          <h1 className="text-4xl font-bold mt-2">

            {
              [...new Set(
                productions.map(
                  (item) => item.workType
                )
              )].length
            }

          </h1>

        </div>

      </div>
            {/* Filter */}

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <input
          type="month"
          value={searchMonth}
          onChange={(e) =>
            setSearchMonth(e.target.value)
          }
          className="w-full border p-3 rounded-lg"
        />

      </div>

      {/* Production History */}

      <div className="bg-white rounded-xl shadow p-5">

        <h2 className="text-xl font-semibold mb-4">
          Production History
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="p-3 text-left">
                  Date
                </th>

                <th className="p-3 text-left">
                  Work Type
                </th>

                <th className="p-3 text-left">
                  Quantity
                </th>

                <th className="p-3 text-left">
                  Rate
                </th>

                <th className="p-3 text-left">
                  Amount
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredProductions.length > 0 ? (

                filteredProductions.map((item, index) => (

                  <tr
                    key={index}
                    className="border-b"
                  >

                    <td className="p-3">
                      {item.date}
                    </td>

                    <td className="p-3">
                      {item.workType}
                    </td>

                    <td className="p-3">
                      {item.quantity}
                    </td>

                    <td className="p-3">
                      ₹{item.rate}
                    </td>

                    <td className="p-3 font-semibold">
                      ₹{Number(item.quantity) * Number(item.rate)}
                    </td>

                  </tr>

                ))

              ) : (
                             <tr>

                  <td
                    colSpan="5"
                    className="text-center py-6 text-gray-500"
                  >
                    No Production Records Found
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

export default LabourMyProduction;   