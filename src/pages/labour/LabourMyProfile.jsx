
import LabourLayout from "../../layouts/LabourLayout";

const LabourMyProfile = () => {
  return (
    <LabourLayout>

      <h1 className="text-3xl font-bold mb-6">
        My Profile
      </h1>

      <div className="bg-white rounded-xl shadow p-6">

        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">

          <img
            src="https://i.pravatar.cc/150"
            alt="profile"
            className="w-36 h-36 rounded-full border"
          />

          <div className="flex-1 w-full">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div>

                <label className="block mb-2 font-medium">
                  Employee ID
                </label>

                <input
                  type="text"
                  value="LAB001"
                  readOnly
                  className="w-full border p-3 rounded-lg"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  value="Rahman"
                  readOnly
                  className="w-full border p-3 rounded-lg"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Department
                </label>

                <input
                  type="text"
                  value="Stitching"
                  readOnly
                  className="w-full border p-3 rounded-lg"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Mobile Number
                </label>

                <input
                  type="text"
                  value="9876543210"
                  readOnly
                  className="w-full border p-3 rounded-lg"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Joining Date
                </label>

                <input
                  type="text"
                  value="01-01-2026"
                  readOnly
                  className="w-full border p-3 rounded-lg"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Status
                </label>

                <input
                  type="text"
                  value="Active"
                  readOnly
                  className="w-full border p-3 rounded-lg"
                />

              </div>

              <div className="md:col-span-2">

                <label className="block mb-2 font-medium">
                  Address
                </label>

                <textarea
                  rows="3"
                  readOnly
                  className="w-full border p-3 rounded-lg"
                  value="Kanpur, Uttar Pradesh, India"
                />

              </div>

            </div>

            <button className="mt-6 bg-blue-700 text-white px-6 py-3 rounded-lg">
              Edit Profile
            </button>

          </div>

        </div>

      </div>

    </LabourLayout>
  );
};

export default LabourMyProfile;