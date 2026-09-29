
import React from "react";

const Team = () => {
  const teamMembers = [
    {
      name: "Rahul Sharma",
      role: "Frontend Developer",
      status: "Active",
    },
    {
      name: "Priya Verma",
      role: "UI/UX Designer",
      status: "Active",
    },
    {
      name: "Aman Kapoor",
      role: "Backend Developer",
      status: "Away",
    },
  ];

  return (
    <div className="max-w-6xl">
      <div className="mb-8">
        <p className="text-sm font-medium text-blue-600">
          Team
        </p>

        <h1 className="mt-1 text-3xl font-bold text-slate-800">
          Team Members
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          View and manage members assigned to your team.
        </p>
      </div>

      <div className="mb-6 grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-400">
            Total Members
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-800">
            {teamMembers.length}
          </h2>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-400">
            Active
          </p>

          <h2 className="mt-2 text-2xl font-bold text-emerald-600">
            2
          </h2>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-400">
            Away
          </p>

          <h2 className="mt-2 text-2xl font-bold text-amber-500">
            1
          </h2>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 px-6 py-5">
          <h2 className="font-semibold text-slate-800">
            Team Members
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold uppercase  text-slate-400">
                  Member
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase  text-slate-400">
                  Role
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase  text-slate-400">
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {teamMembers.map((member) => (
                <tr
                  key={member.name}
                  className="transition hover:bg-blue-50/40"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                        {member.name.charAt(0)}
                      </div>

                      <span className="font-medium text-slate-700">
                        {member.name}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-500">
                    {member.role}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        member.status === "Active"
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-amber-50 text-amber-600"
                      }`}
                    >
                      {member.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Team;
