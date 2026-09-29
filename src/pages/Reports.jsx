import React from "react";

const Reports = () => {
  const reportData = [
    {
      name: "User Activity",
      value: "84%",
      description: "Users actively accessing the system",
    },
    {
      name: "Team Performance",
      value: "76%",
      description: "Overall team productivity",
    },
    {
      name: "System Usage",
      value: "91%",
      description: "Available system features being used",
    },
  ];

  return (
    <div className="max-w-6xl">
      <div className="mb-8">
        <p className="text-sm font-medium text-blue-600">
          Reports
        </p>

        <h1 className="mt-1 text-3xl font-bold text-slate-800">
          Analytics & Reports
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Monitor system activity and performance.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <p className="text-sm text-slate-400">
            Total Users
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-800">
            128
          </h2>

          <p className="mt-2 text-xs text-emerald-600">
            ↑ 12% this month
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <p className="text-sm text-slate-400">
            Active Sessions
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-800">
            64
          </h2>

          <p className="mt-2 text-xs text-blue-600">
            Currently active
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <p className="text-sm text-slate-400">
            System Health
          </p>

          <h2 className="mt-2 text-3xl font-bold text-emerald-600">
            98%
          </h2>

          <p className="mt-2 text-xs text-emerald-600">
            All systems operational
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6">
          <h2 className="font-semibold text-slate-800">
            Performance Overview
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Current system performance indicators.
          </p>
        </div>

        <div className="space-y-6">
          {reportData.map((report) => (
            <div key={report.name}>
              <div className="mb-2 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-700">
                    {report.name}
                  </p>

                  <p className="text-xs text-slate-400">
                    {report.description}
                  </p>
                </div>

                <span className="text-sm font-bold text-blue-700">
                  {report.value}
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-700 to-blue-400"
                  style={{ width: report.value }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default Reports;

