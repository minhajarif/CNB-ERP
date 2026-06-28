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

const data = [
  { day: "Mon", production: 120 },
  { day: "Tue", production: 180 },
  { day: "Wed", production: 150 },
  { day: "Thu", production: 220 },
  { day: "Fri", production: 190 },
  { day: "Sat", production: 260 },
  { day: "Sun", production: 330 },
];

const ProductionChart = () => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="bg-white rounded-xl shadow p-5">

      <div className="flex justify-between items-center mb-4">

          <h2 className="text-xl font-semibold">
              Production Trend
          </h2>

          <div className="relative">

              <button
                 onClick={() => setShowFilter(!showFilter)}
                 className="border border-gray-300 rounded-lg p-2 hover:bg-gray-100"
              >
                📅
              </button>

              {showFilter && (
                 <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">

                     <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                       Today
                     </button>

                     <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                       Yesterday
                     </button>

                     <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                       This Week
                     </button>

                     <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                       Last Week
                     </button>

                     <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                       This Month
                     </button>

                     <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                       Last Month
                     </button>

                     <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                       Custom Range
                     </button>

                  </div>
            )}

          </div>

      </div>
      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="production"
              stroke="#2563eb"
              strokeWidth={4}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default ProductionChart;

