import { cookies } from "next/headers";
import { verifyToken } from "./auth";

export async function getCurrentUserId() {
  const cookieStore = await cookies();

  const token =
    cookieStore.get("token");

  if (!token) {
    return null;
  }

  const decoded: any =
    verifyToken(token.value);

  if (!decoded) {
    return null;
  }

  return decoded.userId;
}