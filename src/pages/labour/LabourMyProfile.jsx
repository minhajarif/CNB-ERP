import { useState } from "react";
import LabourLayout from "../../layouts/LabourLayout";

const LabourMyProfile = () => {

  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    employeeId: "",
    fullName: "",
    department: "",
    mobile: "",
    joiningDate: "",
    status: "Active",
    address: "",
    photo: "",
  });

  const handleSaveProfile = () => {

    alert("Profile Updated Successfully");

    setIsEditing(false);

  };

  return (

    <LabourLayout>
          <h1 className="text-3xl font-bold mb-6">
        My Profile
      </h1>

      <div className="bg-white rounded-xl shadow p-6">

        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">

          <div className="flex flex-col items-center">

            <img
              src={
                profile.photo ||
                "https://via.placeholder.com/150"
              }
              alt="Profile"
              className="w-36 h-36 rounded-full border object-cover"
            />

            {isEditing && (

              <input
                type="file"
                className="mt-4"
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    photo: URL.createObjectURL(
                      e.target.files[0]
                    ),
                  })
                }
              />

            )}

            <span
              className={`mt-4 px-4 py-1 rounded-full text-sm font-medium ${
                profile.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {profile.status || "Active"}
            </span>

          </div>

          <div className="flex-1 w-full">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           <div>

                <label className="block mb-2 font-medium">
                  Employee ID
                </label>

                <input
                  type="text"
                  value={profile.employeeId}
                  readOnly
                  className="w-full border p-3 rounded-lg bg-gray-100"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  value={profile.fullName}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      fullName: e.target.value,
                    })
                  }
                  readOnly={!isEditing}
                  className="w-full border p-3 rounded-lg"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Department
                </label>

                <input
                  type="text"
                  value={profile.department}
                  readOnly
                  className="w-full border p-3 rounded-lg bg-gray-100"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Mobile Number
                </label>

                <input
                  type="text"
                  value={profile.mobile}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      mobile: e.target.value,
                    })
                  }
                  readOnly={!isEditing}
                  className="w-full border p-3 rounded-lg"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Joining Date
                </label>

                <input
                  type="date"
                  value={profile.joiningDate}
                  readOnly
                  className="w-full border p-3 rounded-lg bg-gray-100"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Status
                </label>

                <input
                  type="text"
                  value={profile.status}
                  readOnly
                  className="w-full border p-3 rounded-lg bg-gray-100"
                />

              </div>

              <div className="md:col-span-2">

                <label className="block mb-2 font-medium">
                  Address
                </label>

                <textarea
                  rows="3"
                  value={profile.address}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      address: e.target.value,
                    })
                  }
                  readOnly={!isEditing}
                  className="w-full border p-3 rounded-lg"
                />

              </div>

            </div> 
                        <div className="mt-6 flex gap-4">

              {isEditing ? (

                <>
                  <button
                    onClick={handleSaveProfile}
                    className="bg-green-600 text-white px-6 py-3 rounded-lg"
                  >
                    Save Changes
                  </button>

                  <button
                    onClick={() => setIsEditing(false)}
                    className="bg-gray-500 text-white px-6 py-3 rounded-lg"
                  >
                    Cancel
                  </button>
                </>

              ) : (

                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-blue-700 text-white px-6 py-3 rounded-lg"
                >
                  Edit Profile
                </button>

              )}

            </div>

          </div>

        </div>

      </div>

    </LabourLayout>

  );

};

export default LabourMyProfile;