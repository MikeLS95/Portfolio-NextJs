import NavBar from "../_components/navbar/navbar";

import "../globals.css";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        <NavBar />
        <main className="pt-16 p-4">{children}</main>
      </div>
    </>
  );
}
