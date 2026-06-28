import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      email === "owner@gmail.com" &&
      password === "123456"
    ) {
      localStorage.setItem("userRole", "owner");
     navigate("/owner/dashboard");
    }

    else if (
      email === "supervisor@gmail.com" &&
      password === "123456"
    ) {
      localStorage.setItem("userRole", "supervisor");
      navigate("/supervisor/dashboard");
    }

    else if (
      email === "labour@gmail.com" &&
      password === "123456"
    ) {
      localStorage.setItem("userRole", "labour");
      navigate("/labour/dashboard");
    }

    else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-center">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          CNB ERP Login
        </p>

        <form
          onSubmit={handleLogin}
          className="space-y-4"
        >

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg"
          >
            Login
          </button>

        </form>

        <div className="mt-6 text-sm text-gray-500 border-t pt-4">

          <p className="font-semibold mb-2">
            Demo Credentials
          </p>

          <p>
            Owner:
            owner@gmail.com / 123456
          </p>

          <p>
            Supervisor:
            supervisor@gmail.com / 123456
          </p>

          <p>
            Labour:
            labour@gmail.com / 123456
          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;