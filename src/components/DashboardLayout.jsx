import Sidebar from "./Sidebar";

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />

      <main className="ml-64 min-h-screen p-8">
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;