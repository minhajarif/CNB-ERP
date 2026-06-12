
import MainLayout from "../../layouts/MainLayout";

const Profile = () => {
  return (
    <MainLayout>

      <h1 className="text-3xl font-bold mb-6">
        My Profile
      </h1>

      <div className="bg-white rounded-xl shadow p-6">

        <img
          src="https://i.pravatar.cc/120"
          alt="profile"
          className="rounded-full mb-4"
        />

        <h2 className="text-2xl font-bold">
          Owner
        </h2>

        <p className="text-gray-500">
          Administrator
        </p>

      </div>

    </MainLayout>
  );
};

export default Profile;