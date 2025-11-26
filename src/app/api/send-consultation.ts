import type { NextApiRequest, NextApiResponse } from "next";
import { supabase} from "../lib/supabaseClient";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, country, message } = req.body;

  if (!name || !email || !phone || !country || !message) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  const { data, error } = await supabase
    .from("consultations")
    .insert([{ name, email, phone, country, message }]);

  if (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Database error" });
  }

  return res.status(200).json({ success: true, data });
}
