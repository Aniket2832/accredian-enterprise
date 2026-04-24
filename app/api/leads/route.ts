import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, phone, size, program } = body;

    // Basic validation
    if (!name || !company || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const lead = {
      id: Date.now(),
      name,
      company,
      email,
      phone,
      size: size || "Not specified",
      program: program || "Not specified",
      submittedAt: new Date().toISOString(),
    };

    // Persist to leads.json in project root
    const filePath = path.join(process.cwd(), "leads.json");
    let leads: typeof lead[] = [];

    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, "utf-8");
      leads = JSON.parse(raw);
    }

    leads.push(lead);
    fs.writeFileSync(filePath, JSON.stringify(leads, null, 2));

    console.log("✅ New lead captured:", lead);

    return NextResponse.json(
      { success: true, message: "Lead captured successfully", lead },
      { status: 201 }
    );
  } catch (err) {
    console.error("Lead API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "leads.json");
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ leads: [], total: 0 });
    }
    const raw = fs.readFileSync(filePath, "utf-8");
    const leads = JSON.parse(raw);
    return NextResponse.json({ leads, total: leads.length });
  } catch {
    return NextResponse.json({ error: "Could not read leads" }, { status: 500 });
  }
}
