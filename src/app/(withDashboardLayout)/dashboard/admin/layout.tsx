/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import Sidebar from "../../components/Sidebar/Sidebar";
import UserLayout from "../../components/SidebarLayout/SidebarLayout";
import Navbar from "@/app/(commonLayout)/components/shared/Navbar";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Generated by create next app",
};

export default async function userDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      {/* <Navbar></Navbar> */}
      <Sidebar></Sidebar>
      <main className="flex-1 p-6 bg-gray-100">{children}</main>

      {/* <UserLayout>{children}</UserLayout> */}
    </div>
  );
}
