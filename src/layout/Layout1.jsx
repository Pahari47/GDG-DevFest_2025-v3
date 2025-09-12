import { Outlet } from "react-router-dom";
import { useState } from "react";
import PixelLoader from "../components/PixelLoader";

export default function Layout1() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white">
      {loading ? (
        <PixelLoader onFinish={() => setLoading(false)} />
      ) : (
        <Outlet />
      )}
    </div>
  );
}
