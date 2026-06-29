import { useState } from "react";
import SupervisorLayout from "../../layouts/SupervisorLayout";

const SupervisorProfile = () => {

  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "",
    employeeId: "",
    department: "",
    mobile: "",
    email: "",
    designation: "",
    image: "",
  });

  const handleSaveProfile = () => {

    if (
      !profile.name ||
      !profile.employeeId ||
      !profile.department ||
      !profile.mobile ||
      !profile.email
    ) {
      alert("Please fill all required fields");
      return;
    }

    alert("Profile Updated Successfully");

    setIsEditing(false);

  };

  return (

    <SupervisorLayout>

      <h1 className="text-3xl font-bold mb-6">
        My Profile
      </h1>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Department
          </h3>

          <h1 className="text-xl font-bold mt-2">
            {profile.department || "-"}
          </h1>

        </div>

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Employee ID
          </h3>

          <h1 className="text-xl font-bold mt-2">
            {profile.employeeId || "-"}
          </h1>

        </div>

        <div className="bg-yellow-500 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Designation
          </h3>

          <h1 className="text-xl font-bold mt-2">
            {profile.designation || "-"}
          </h1>

        </div>

        <div className="bg-purple-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Status
          </h3>

          <h1 className="text-xl font-bold mt-2">
            Active
          </h1>

        </div>

      </div>
            {/* Profile Card */}

      <div className="bg-white rounded-xl shadow p-6 mb-6">

        <div className="flex flex-col md:flex-row items-center gap-6">

          <img
            src={
              profile.image
                ? profile.image
                : "https://via.placeholder.com/150?text=Profile"
            }
            alt="profile"
            className="w-36 h-36 rounded-full object-cover border"
          />

          <div>

            <h2 className="text-3xl font-bold">
              {profile.name || "No Name"}
            </h2>

            <p className="text-gray-500 mt-2">
              {profile.designation || "No Designation"}
            </p>

            <p className="text-gray-600 mt-2">
              {profile.department || "No Department"}
            </p>

            <p className="text-gray-600 mt-1">
              {profile.email || "No Email"}
            </p>

            <p className="text-gray-600 mt-1">
              {profile.mobile || "No Mobile"}
            </p>

          </div>

        </div>

      </div>

      {/* Profile Form */}

      <div className="bg-white rounded-xl shadow p-6">

        <h2 className="text-xl font-semibold mb-5">
          Profile Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <input
            type="text"
            placeholder="Full Name"
            value={profile.name}
            onChange={(e) =>
              setProfile({
                ...profile,
                name: e.target.value,
              })
            }
            disabled={!isEditing}
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Employee ID"
            value={profile.employeeId}
            onChange={(e) =>
              setProfile({
                ...profile,
                employeeId: e.target.value,
              })
            }
            disabled={!isEditing}
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Department"
            value={profile.department}
            onChange={(e) =>
              setProfile({
                ...profile,
                department: e.target.value,
              })
            }
            disabled={!isEditing}
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Designation"
            value={profile.designation}
            onChange={(e) =>
              setProfile({
                ...profile,
                designation: e.target.value,
              })
            }
            disabled={!isEditing}
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Mobile Number"
            value={profile.mobile}
            onChange={(e) =>
              setProfile({
                ...profile,
                mobile: e.target.value,
              })
            }
            disabled={!isEditing}
            className="border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={profile.email}
            onChange={(e) =>
              setProfile({
                ...profile,
                email: e.target.value,
              })
            }
            disabled={!isEditing}
            className="border p-3 rounded-lg"
          />

          <input
            type="file"
            disabled={!isEditing}
            onChange={(e) =>
              setProfile({
                ...profile,
                image: URL.createObjectURL(
                  e.target.files[0]
                ),
              })
            }
            className="border p-3 rounded-lg md:col-span-2"
          />

        </div>

        <div className="flex gap-3 mt-6">
                  {!isEditing ? (

            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-700 text-white px-6 py-3 rounded-lg"
            >
              Edit Profile
            </button>

          ) : (

            <>
              <button
                onClick={handleSaveProfile}
                className="bg-green-600 text-white px-6 py-3 rounded-lg"
              >
                Save Profile
              </button>

              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-500 text-white px-6 py-3 rounded-lg"
              >
                Cancel
              </button>
            </>

          )}

        </div>

      </div>

    </SupervisorLayout>

  );

};

export default SupervisorProfile;  