import MainLayout from "../../layouts/MainLayout";

const Profile = () => {
  return (
    <MainLayout>

      <h1 className="text-3xl font-bold mb-6">
        My Profile
      </h1>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">
          <h3 className="text-lg">
            Total Labour
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            125
          </h1>
        </div>

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">
          <h3 className="text-lg">
            Departments
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            6
          </h1>
        </div>

        <div className="bg-yellow-500 text-white p-5 rounded-xl shadow">
          <h3 className="text-lg">
            Supervisors
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            12
          </h1>
        </div>

        <div className="bg-purple-600 text-white p-5 rounded-xl shadow">
          <h3 className="text-lg">
            Experience
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            5+
          </h1>
        </div>

      </div>

      {/* Profile Card */}

      <div className="bg-white rounded-xl shadow p-6 mb-6">

        <div className="flex flex-col md:flex-row items-center gap-6">

          <img
            src="https://i.pravatar.cc/120"
            alt="profile"
            className="w-32 h-32 rounded-full"
          />

          <div>

            <h2 className="text-3xl font-bold">
              Owner
            </h2>

            <p className="text-gray-500 mt-1">
              Administrator
            </p>

            <p className="text-gray-600 mt-3">
              CNB ERP Factory Management System
            </p>

          </div>

        </div>

      </div>

      {/* Edit Profile */}

      <div className="bg-white rounded-xl shadow p-5">

        <h2 className="text-xl font-semibold mb-4">
          Edit Profile
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <input
            type="text"
            placeholder="Full Name"
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

          <input
            type="text"
            placeholder="Designation"
            defaultValue="Administrator"
            className="border p-3 rounded-lg"
          />

        </div>

        <button className="bg-blue-700 text-white px-6 py-3 rounded-lg mt-5">
          Update Profile
        </button>

      </div>

    </MainLayout>
  );
};

export default Profile;