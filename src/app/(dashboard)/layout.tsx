import NavBar from "../_components/navbar/navbar";

import "../globals.css";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 to-purple-600">
        <NavBar />
        <main className="pt-16 p-4">{children}</main>
      </div>
    </>
  );
}
