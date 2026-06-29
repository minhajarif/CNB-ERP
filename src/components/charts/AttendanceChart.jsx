import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = [
  "#22c55e",
  "#ef4444",
  "#f59e0b",
];

const AttendanceChart = () => {

  const [data] = useState([]);

  const [showFilter, setShowFilter] = useState(false);

  const [showCustomRange, setShowCustomRange] =
    useState(false);

  const [filter, setFilter] =
    useState("This Month");

  const [fromDate, setFromDate] =
    useState("");

  const [toDate, setToDate] =
    useState("");

  const present =
    data.find(
      (item) => item.name === "Present"
    )?.value || 0;

  const absent =
    data.find(
      (item) => item.name === "Absent"
    )?.value || 0;

  const late =
    data.find(
      (item) => item.name === "Late"
    )?.value || 0;

  return (

    <div className="bg-white rounded-xl shadow p-5">

      <div className="flex justify-between items-center mb-4">

        <h2 className="text-xl font-semibold">
          Attendance Overview
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

            <div className="absolute right-0 top-14 bg-white border rounded-xl shadow-xl w-80 p-4 z-50">

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
                  className="px-4 py-2 rounded-lg border"
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

            <PieChart>

              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={1}
                outerRadius={100}
                paddingAngle={4}
                dataKey="value"
              >

                {data.map((entry, index) => (

                  <Cell
                    key={index}
                    fill={
                      COLORS[
                        index % COLORS.length
                      ]
                    }
                  />

                ))}

              </Pie>

              <Tooltip />

              <Legend />

            </PieChart>

          </ResponsiveContainer>

        ) : (

          <div className="flex items-center justify-center h-full text-gray-500">

            No Attendance Data Available

          </div>

        )}

      </div>

      <div className="grid grid-cols-3 gap-3 mt-5 text-center">

        <div className="bg-green-50 rounded-lg p-3">

          <h4 className="text-2xl font-bold text-green-600">
            {present}
          </h4>

          <p className="text-sm text-gray-600">
            Present
          </p>

        </div>

        <div className="bg-red-50 rounded-lg p-3">

          <h4 className="text-2xl font-bold text-red-600">
            {absent}
          </h4>

          <p className="text-sm text-gray-600">
            Absent
          </p>

        </div>

        <div className="bg-yellow-50 rounded-lg p-3">

          <h4 className="text-2xl font-bold text-yellow-500">
            {late}
          </h4>

          <p className="text-sm text-gray-600">
            Late
          </p>

        </div>

      </div>

    </div>

  );

};

export default AttendanceChart;