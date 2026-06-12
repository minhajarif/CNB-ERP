
import MainLayout from "../../layouts/MainLayout";

const Notifications = () => {
  return (
    <MainLayout>

      <h1 className="text-3xl font-bold mb-6">
        Notifications
      </h1>

      <div className="bg-white rounded-xl shadow p-5">

        <p className="border-b pb-3">
          Salary Generated Successfully
        </p>

        <p className="border-b py-3">
          New Labour Added
        </p>

        <p className="pt-3">
          Production Updated
        </p>

      </div>

    </MainLayout>
  );
};

export default Notifications;