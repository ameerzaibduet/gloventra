"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "next/navigation";

interface Consultation {
  id: number;
  name: string;
  email: string;
  phone: string;
  country: string;
  message: string;
  done: boolean;
  created_at: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);

  // Check if admin is logged in
  useEffect(() => {
    const auth = localStorage.getItem("admin-auth");
    if (!auth) router.push("/admin/login");
  }, []);

  useEffect(() => {
    fetchConsultations();
  }, []);

  const fetchConsultations = async () => {
    const { data, error } = await supabase
      .from("consultations")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setConsultations(data as Consultation[]);
  };

  const markAsDone = async (id: number) => {
    await supabase.from("consultations").update({ done: true }).eq("id", id);
    fetchConsultations();
  };

  const deleteConsultation = async () => {
    if (!selectedId) return;
    await supabase.from("consultations").delete().eq("id", selectedId);
    setShowConfirm(false);
    setSelectedId(null);
    fetchConsultations();
  };

  const handleLogout = () => {
    localStorage.removeItem("admin-auth");
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold mt-30">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 mt-30 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
        >
          Logout
        </button>
      </div>

      <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="p-4">Name</th>
            <th className="p-4">Email</th>
            <th className="p-4">Phone</th>
            <th className="p-4">Country</th>
            <th className="p-4">Message</th>
            <th className="p-4">Submitted</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {consultations.map((c) => (
            <tr
              key={c.id}
              className={`border-b last:border-b-0 transition-all duration-500 ${
                c.done
                  ? "bg-gradient-to-r from-green-50 via-green-100 to-green-50"
                  : ""
              }`}
            >
              <td className="p-4">{c.name}</td>
              <td className="p-4">{c.email}</td>
              <td className="p-4">{c.phone}</td>
              <td className="p-4">{c.country}</td>
              <td className="p-4">{c.message}</td>
              <td className="p-4">{new Date(c.created_at).toLocaleString()}</td>

              <td className="p-4 flex gap-2">
                {!c.done && (
                  <button
                    onClick={() => markAsDone(c.id)}
                    className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Done
                  </button>
                )}

                <button
                  onClick={() => {
                    setSelectedId(c.id);
                    setShowConfirm(true);
                  }}
                  className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Confirmation Popup */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-[350px] text-center">
            <h2 className="text-xl font-bold mb-4">Are you sure?</h2>
            <p className="mb-6">This action cannot be undone.</p>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={deleteConsultation}
                className="px-4 py-2 bg-red-600 text-white rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
