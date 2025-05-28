import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json({ error: "Data tidak valid" }, { status: 400 });
  }

  // Simulasikan penyimpanan user
  return NextResponse.json({ message: "Registrasi berhasil" }, { status: 201 });
}
