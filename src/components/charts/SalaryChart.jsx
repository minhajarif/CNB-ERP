
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
  { month: "Jan", salary: 10000 },
  { month: "Feb", salary: 12000 },
  { month: "Mar", salary: 11000 },
  { month: "Apr", salary: 14000 },
  { month: "May", salary: 12500 },
  { month: "Jun", salary: 15000 },
];

const SalaryChart = () => {
  return (
    <div className="bg-white rounded-xl shadow p-5">

      <h2 className="text-xl font-semibold mb-4">
        Salary Trend
      </h2>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

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

      </div>

    </div>
  );
};

export default SalaryChart;