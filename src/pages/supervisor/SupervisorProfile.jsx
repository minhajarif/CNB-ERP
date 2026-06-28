
import SupervisorLayout from "../../layouts/SupervisorLayout";

const SupervisorProfile = () => {
  return (
    <SupervisorLayout>

      <h1 className="text-3xl font-bold mb-6">
        My Profile
      </h1>

      <div className="bg-white rounded-xl shadow p-6">

        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">

          <img
            src="https://i.pravatar.cc/150"
            alt="profile"
            className="w-36 h-36 rounded-full"
          />

          <div className="flex-1 w-full">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div>

                <label className="block mb-2 font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  value="Ahmad Khan"
                  className="w-full border p-3 rounded-lg"
                  readOnly
                />

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Employee ID
                </label>

                <input
                  type="text"
                  value="SUP001"
                  className="w-full border p-3 rounded-lg"
                  readOnly
                />

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Department
                </label>

                <input
                  type="text"
                  value="Stitching"
                  className="w-full border p-3 rounded-lg"
                  readOnly
                />

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Mobile Number
                </label>

                <input
                  type="text"
                  value="9876543210"
                  className="w-full border p-3 rounded-lg"
                  readOnly
                />

              </div>

              <div className="md:col-span-2">

                <label className="block mb-2 font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  value="supervisor@cnb.com"
                  className="w-full border p-3 rounded-lg"
                  readOnly
                />

              </div>

            </div>

            <button className="mt-6 bg-blue-700 text-white px-6 py-3 rounded-lg">
              Edit Profile
            </button>

          </div>

        </div>

      </div>

    </SupervisorLayout>
  );
};

export default SupervisorProfile;