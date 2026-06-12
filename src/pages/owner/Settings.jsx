
import MainLayout from "../../layouts/MainLayout";

const Settings = () => {
  return (
    <MainLayout>

      <h1 className="text-3xl font-bold mb-6">
        Settings
      </h1>

      <div className="bg-white rounded-xl shadow p-5">

        <label className="block mb-2">
          Factory Name
        </label>

        <input
          type="text"
          className="w-full border p-3 rounded-lg"
          placeholder="CNB Leathers"
        />

      </div>

    </MainLayout>
  );
};

export default Settings;