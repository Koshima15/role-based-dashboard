import { useSelector } from "react-redux";

import { roleConfig } from "../config/roleConfig";

const Dashboard = () => {
  const { user, role } = useSelector(
    (state) => state.auth
  );

  const permissions =
    roleConfig[role]?.permissions || [];

  const permissionDetails = {
    dashboard: {
      name: "Dashboard",
      description: "Main application dashboard",
    },
    users: {
      name: "Users",
      description: "Manage registered users and accounts",
    },
    reports: {
      name: "Reports",
      description: "View system analytics and reports",
    },
    settings: {
      name: "Settings",
      description: "Manage application and security settings",
    },
    team: {
      name: "Team",
      description: "View and manage team members",
    },
    profile: {
      name: "Profile",
      description: "View your account information",
    },
  };

  return (
    <div className="max-w-6xl">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-blue-600">
            Dashboard
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-800">
            Good morning, {user?.name}!
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Manage your workspace and access permissions.
          </p>
        </div>

        <div className="hidden items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm sm:flex">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-semibold uppercase text-blue-700">
            {user?.name?.charAt(0)}
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-700">
              {user?.name}
            </p>

            <p className="text-xs capitalize text-slate-400">
              {role}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">
                Account Status
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-800">
                Active
              </h2>
            </div>

            
          </div>

          <div className="mt-5 flex items-center gap-2 text-xs text-emerald-600">

            Your account is currently active
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">
                Current Role
              </p>

              <h2 className="mt-2 text-2xl font-bold capitalize text-slate-800">
                {role}
              </h2>
            </div>

            
          </div>

          <p className="mt-5 text-xs text-blue-600">
            Permissions are based on your role
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 px-6 py-5">
          <h2 className="font-semibold text-slate-800">
            Your Access
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Pages available to your{" "}
            <span className="font-medium capitalize text-blue-600">
              {role}
            </span>{" "}
            role.
          </p>
        </div>

        <div className=" ">
          {permissions.map((permission) => {
            const page = permissionDetails[permission];

            if (!page) {
              return null;
            }

            return (
              <div
                key={permission}
                className="flex items-center justify-between px-6 py-4 transition hover:bg-blue-50/50"
              >
                <div>
                  <p className="text-sm font-medium text-slate-700">
                    {page.name}
                  </p>

                  <p className="text-xs text-slate-400">
                    {page.description}
                  </p>
                </div>

                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                  Available
                </span>
              </div>
            );
          })}
        </div>

        <div className="border-t border-slate-100 bg-slate-50 px-6 py-4">
          <p className="text-xs text-slate-500">
            Total accessible pages:{" "}
            <span className="font-semibold text-blue-700">
              {permissions.length}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
