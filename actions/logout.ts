"use server";

import { signOut } from "@/auth"; // Add missing import statement

export const logout = async () => {
    await signOut();
};