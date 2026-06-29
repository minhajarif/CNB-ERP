import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";

const Settings = () => {

  const [factory, setFactory] = useState({
    factoryName: "CNB Leathers",
    ownerName: "Owner",
    email: "",
    mobile: "",
    address: "",
  });

  const [password, setPassword] = useState({
    current: "",
    newPassword: "",
  });

  const handleSaveSettings = () => {

    alert("Factory settings saved successfully");

  };

  const handleUpdatePassword = () => {

    if (
      !password.current ||
      !password.newPassword
    ) {
      alert("Please fill both password fields");
      return;
    }

    alert("Password updated successfully");

    setPassword({
      current: "",
      newPassword: "",
    });

  };

  return (
    <MainLayout>
           <h1 className="text-3xl font-bold mb-6">
        Settings
      </h1>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">
          <h3>Factory Profile</h3>
          <h1 className="text-4xl font-bold mt-2">
            100%
          </h1>
        </div>

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">
          <h3>Active Users</h3>
          <h1 className="text-4xl font-bold mt-2">
            15
          </h1>
        </div>

        <div className="bg-yellow-500 text-white p-5 rounded-xl shadow">
          <h3>Departments</h3>
          <h1 className="text-4xl font-bold mt-2">
            6
          </h1>
        </div>

        <div className="bg-purple-600 text-white p-5 rounded-xl shadow">
          <h3>Supervisors</h3>
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
            value={factory.factoryName}
            onChange={(e)=>
              setFactory({
                ...factory,
                factoryName:e.target.value,
              })
            }
            className="border p-3 rounded-lg"
          />
                    <input
            type="text"
            placeholder="Owner Name"
            value={factory.ownerName}
            onChange={(e)=>
              setFactory({
                ...factory,
                ownerName:e.target.value,
              })
            }
            className="border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={factory.email}
            onChange={(e)=>
              setFactory({
                ...factory,
                email:e.target.value,
              })
            }
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Mobile Number"
            value={factory.mobile}
            onChange={(e)=>
              setFactory({
                ...factory,
                mobile:e.target.value,
              })
            }
            className="border p-3 rounded-lg"
          />

          <textarea
            rows="4"
            placeholder="Factory Address"
            value={factory.address}
            onChange={(e)=>
              setFactory({
                ...factory,
                address:e.target.value,
              })
            }
            className="border p-3 rounded-lg md:col-span-2"
          />

        </div>

        <button
          onClick={handleSaveSettings}
          className="bg-blue-700 text-white px-6 py-3 rounded-lg mt-5"
        >
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
            value={password.current}
            onChange={(e)=>
              setPassword({
                ...password,
                current:e.target.value,
              })
            }
            className="border p-3 rounded-lg"
          />

          <input
            type="password"
            placeholder="New Password"
            value={password.newPassword}
            onChange={(e)=>
              setPassword({
                ...password,
                newPassword:e.target.value,
              })
            }
            className="border p-3 rounded-lg"
          />
                  </div>

        <button
          onClick={handleUpdatePassword}
          className="bg-green-600 text-white px-6 py-3 rounded-lg mt-5"
        >
          Update Password
        </button>

      </div>

    </MainLayout>

  );

};

export default Settings;


          