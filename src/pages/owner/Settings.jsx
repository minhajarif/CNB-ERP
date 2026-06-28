import MainLayout from "../../layouts/MainLayout";

const Settings = () => {
  return (
    <MainLayout>

      <h1 className="text-3xl font-bold mb-6">
        Settings
      </h1>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">
          <h3 className="text-lg">
            Factory Profile
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            100%
          </h1>
        </div>

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">
          <h3 className="text-lg">
            Active Users
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            15
          </h1>
        </div>

        <div className="bg-yellow-500 text-white p-5 rounded-xl shadow">
          <h3 className="text-lg">
            Departments
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            6
          </h1>
        </div>

        <div className="bg-purple-600 text-white p-5 rounded-xl shadow">
          <h3 className="text-lg">
            Supervisors
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            12
          </h1>
        </div>

      </div>

      {/* Factory Settings */}

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <h2 className="text-xl font-semibold mb-4">
          Factory Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <input
            type="text"
            placeholder="Factory Name"
            defaultValue="CNB Leathers"
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Owner Name"
            defaultValue="Owner"
            className="border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Mobile Number"
            className="border p-3 rounded-lg"
          />

          <textarea
            rows="4"
            placeholder="Factory Address"
            className="border p-3 rounded-lg md:col-span-2"
          />

        </div>

        <button className="bg-blue-700 text-white px-6 py-3 rounded-lg mt-5">
          Save Settings
        </button>

      </div>

      {/* Security Settings */}

      <div className="bg-white rounded-xl shadow p-5">

        <h2 className="text-xl font-semibold mb-4">
          Security Settings
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <input
            type="password"
            placeholder="Current Password"
            className="border p-3 rounded-lg"
          />

          <input
            type="password"
            placeholder="New Password"
            className="border p-3 rounded-lg"
          />

        </div>

        <button className="bg-green-600 text-white px-6 py-3 rounded-lg mt-5">
          Update Password
        </button>

      </div>

    </MainLayout>
  );
};

export default Settings;