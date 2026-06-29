import { useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const SalaryChart = () => {

  // Backend Data
  const [data] = useState([]);

  // Filter
  const [showFilter, setShowFilter] = useState(false);

  const [showCustomRange, setShowCustomRange] =
    useState(false);

  const [filter, setFilter] =
    useState("This Month");

  const [fromDate, setFromDate] =
    useState("");

  const [toDate, setToDate] =
    useState("");

  return (

    <div className="bg-white rounded-xl shadow p-5">

      <div className="flex justify-between items-center mb-4">

        <h2 className="text-xl font-semibold">
          Salary Trend
        </h2>

        <div className="relative">

          <button
            onClick={() =>
              setShowFilter(!showFilter)
            }
            className="border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100"
          >
            📅 {filter}
          </button>

          {showFilter && (

            <div className="absolute right-0 mt-2 w-52 bg-white border rounded-xl shadow-lg z-50">

              {[
                "Today",
                "Yesterday",
                "This Week",
                "Last Week",
                "This Month",
                "Last Month",
              ].map((item) => (

                <button
                  key={item}
                  onClick={() => {
                    setFilter(item);
                    setShowFilter(false);
                  }}
                  className="block w-full text-left px-4 py-3 hover:bg-gray-100"
                >
                  {item}
                </button>

              ))}

              <button
                onClick={() => {
                  setShowFilter(false);
                  setShowCustomRange(true);
                }}
                className="block w-full text-left px-4 py-3 hover:bg-gray-100 border-t"
              >
                Custom Range
              </button>

            </div>

          )}

          {showCustomRange && (

            <div className="absolute right-0 top-14 w-80 bg-white border rounded-xl shadow-xl p-4 z-50">

              <h3 className="font-semibold mb-4">
                Select Date Range
              </h3>

              <label className="text-sm font-medium">
                From Date
              </label>

              <input
                type="date"
                value={fromDate}
                onChange={(e) =>
                  setFromDate(e.target.value)
                }
                className="w-full border rounded-lg p-2 mt-1 mb-4"
              />

              <label className="text-sm font-medium">
                To Date
              </label>

              <input
                type="date"
                value={toDate}
                onChange={(e) =>
                  setToDate(e.target.value)
                }
                className="w-full border rounded-lg p-2 mt-1"
              />

              <div className="flex justify-end gap-3 mt-5">

                <button
                  onClick={() =>
                    setShowCustomRange(false)
                  }
                  className="border px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>

                <button
                  onClick={() => {
                    setFilter("Custom Range");
                    setShowCustomRange(false);

                    // Backend API Call
                  }}
                  className="bg-blue-700 text-white px-5 py-2 rounded-lg"
                >
                  Apply
                </button>

              </div>

            </div>

          )}

        </div>

      </div>

      <div className="h-80">
              {data.length > 0 ? (

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <LineChart data={data}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="salary"
                stroke="#9333ea"
                strokeWidth={4}
              />

            </LineChart>

          </ResponsiveContainer>

        ) : (

          <div className="flex items-center justify-center h-full text-gray-500">

            No Salary Data Available

          </div>

        )}

      </div>

    </div>

  );

};

export default SalaryChart;  