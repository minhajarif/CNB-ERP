
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white">

      <h1 className="text-5xl font-bold">
        CNB ERP
      </h1>

      <p className="mt-3 text-slate-300">
        Factory Management System
      </p>

      <div className="w-64 h-2 bg-slate-700 rounded-full mt-8 overflow-hidden">
        <div className="h-full bg-blue-500 animate-pulse w-full"></div>
      </div>

    </div>
  );
};

export default SplashScreen;