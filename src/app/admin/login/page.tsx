"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Replace with your real credentials or Supabase auth check
    if (email === "gloventraconsultancy@gmail.com" && password === "admin123") {
      localStorage.setItem("admin-auth", "true");
      router.push("/admin");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left side */}
      <div className="hidden md:flex w-1/2 flex-col justify-center items-center p-12">
        <img
          src="/logo.png" // replace with your logo
          alt="Logo"
          className="w-32 mb-6"
        />
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Gloventra Admin</h1>
        <p className="text-gray-600 text-lg text-center max-w-xs">
          Manage consultations, mark them as done, and keep track of all your users. Stay organized and efficient.
        </p>
      </div>

      {/* Right side */}
      <div className="flex w-full md:w-1/2 justify-center items-center p-12">
        <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Admin Login</h2>

          {error && (
            <p className="text-red-600 mb-4 text-center font-medium">{error}</p>
          )}

          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-900 outline-none"
                placeholder="admin@example.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-900 outline-none"
                placeholder="********"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gray-900 text-white rounded-xl font-semibold shadow-lg hover:bg-gray-800 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
