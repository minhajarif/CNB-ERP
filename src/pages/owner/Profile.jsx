import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";

const Profile = () => {

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    image: "",
    totalLabour: 0,
    departments: 0,
    supervisors: 0,
    experience: "",
  });

  const handleUpdateProfile = () => {

    if (
      !profile.name ||
      !profile.email ||
      !profile.mobile ||
      !profile.designation
    ) {
      alert("Please fill all required fields");
      return;
    }

    alert("Profile Updated Successfully");

  };

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
            {profile.totalLabour}
          </h1>

        </div>

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Departments
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            {profile.departments}
          </h1>

        </div>

        <div className="bg-yellow-500 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Supervisors
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            {profile.supervisors}
          </h1>

        </div>

        <div className="bg-purple-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Experience
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            {profile.experience || "-"}
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
                : "https://via.placeholder.com/120?text=Profile"
            }
            alt="profile"
            className="w-32 h-32 rounded-full object-cover border"
          />

          <div>

            <h2 className="text-3xl font-bold">
              {profile.name || "No Name"}
            </h2>

            <p className="text-gray-500 mt-1">
              {profile.designation || "No Designation"}
            </p>

            <p className="text-gray-600 mt-3">
              {profile.email || "No Email"}
            </p>

            <p className="text-gray-600 mt-1">
              {profile.mobile || "No Mobile"}
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
            value={profile.name}
            onChange={(e) =>
              setProfile({
                ...profile,
                name: e.target.value,
              })
            }
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
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Experience"
            value={profile.experience}
           /> 
         <input
  type="text"
  placeholder="Experience"
  value={profile.experience}
  onChange={(e) =>
    setProfile({
      ...profile,
      experience: e.target.value,
    })
  }
  className="border p-3 rounded-lg"
/>
          <input
            type="file"
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

        <button
          onClick={handleUpdateProfile}
          className="bg-blue-700 text-white px-6 py-3 rounded-lg mt-5"
        >
          Update Profile
        </button>

      </div>

    </MainLayout>

  );

};

export default Profile;