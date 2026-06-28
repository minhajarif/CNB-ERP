import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Present", value: 24 },
  { name: "Absent", value: 2 },
  { name: "Late", value: 1 },
];

const COLORS = [
  "#22c55e",
  "#ef4444",
  "#f59e0b",
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-xl shadow p-5">

      <div className="flex justify-between items-center mb-4">

        <h2 className="text-xl font-semibold">
          Attendance Overview
        </h2>

        <span className="text-sm text-gray-500">
          This Month
        </span>

      </div>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

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
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

      <div className="grid grid-cols-3 gap-3 mt-4 text-center">

        <div>

          <h4 className="font-bold text-green-600">
            24
          </h4>

          <p className="text-xs text-gray-500">
            Present
          </p>

        </div>

        <div>

          <h4 className="font-bold text-red-600">
            2
          </h4>

          <p className="text-xs text-gray-500">
            Absent
          </p>

        </div>

        <div>

          <h4 className="font-bold text-yellow-500">
            1
          </h4>

          <p className="text-xs text-gray-500">
            Late
          </p>

        </div>

      </div>

    </div>
  );
};

export default AttendanceChart;