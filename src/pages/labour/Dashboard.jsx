
import MainLayout from "../../layouts/MainLayout";
import StatsCard from "../../components/cards/StatsCard";
import ProductionChart from "../../components/charts/ProductionChart";

const Dashboard = () => {
return ( <MainLayout> <h1 className="text-3xl font-bold mb-6">
Owner Dashboard </h1>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <StatsCard
      title="Total Labour"
      value="125"
    />

    <StatsCard
      title="Today's Production"
      value="850"
    />

    <StatsCard
      title="Monthly Salary"
      value="₹2.5L"
    />

    <StatsCard
      title="Departments"
      value="6"
    />
  </div>

  <div className="mt-8">
    <ProductionChart />
  </div>
</MainLayout>


);
};

export default Dashboard;
