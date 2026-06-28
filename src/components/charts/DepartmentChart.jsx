
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  {
    department: "Stitching",
    workers: 35,
  },
  {
    department: "Packing",
    workers: 25,
  },
  {
    department: "Finishing",
    workers: 20,
  },
  {
    department: "Quality",
    workers: 15,
  },
];

const DepartmentChart = () => {
  return (
    <div className="bg-white rounded-xl shadow p-5">

      <h2 className="text-xl font-semibold mb-4">
        Department Performance
      </h2>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart
            data={data}
            layout="vertical"
          >

            <XAxis type="number" />

            <YAxis
              type="category"
              dataKey="department"
            />

            <Tooltip />

            <Bar
              dataKey="workers"
              fill="#9333ea"
              radius={[0, 10, 10, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default DepartmentChart;