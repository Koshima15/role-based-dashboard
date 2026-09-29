import React from "react";

const Settings = () => {
  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <p className="text-sm font-medium text-blue-600">
          Administration
        </p>

        <h1 className="mt-1 text-3xl font-bold text-slate-800">
          Settings
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Manage application preferences and access settings.
        </p>
      </div>

      <div className="space-y-6">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 px-6 py-5">
            <h2 className="font-semibold text-slate-800">
              Account Settings
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Configure basic account preferences.
            </p>
          </div>

          <div className="space-y-5 p-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Application Name
              </label>

              <input
                type="text"
                value="RoleBase Dashboard"
                readOnly
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Default Language
              </label>

              <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100">
                <option>English</option>
                <option>Hindi</option>
              </select>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 px-6 py-5">
            <h2 className="font-semibold text-slate-800">
              Security
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Control authentication and account security.
            </p>
          </div>

          <div className="divide-y divide-slate-100">
            <div className="flex items-center justify-between gap-6 px-6 py-5">
              <div>
                <p className="text-sm font-medium text-slate-700">
                  Role-Based Access Control
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Restrict pages and features according to user roles.
                </p>
              </div>

              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                Enabled
              </span>
            </div>

            <div className="flex items-center justify-between gap-6 px-6 py-5">
              <div>
                <p className="text-sm font-medium text-slate-700">
                  Protected Routes
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Prevent unauthorized users from accessing restricted pages.
                </p>
              </div>

              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                Enabled
              </span>
            </div>

            <div className="flex items-center justify-between gap-6 px-6 py-5">
              <div>
                <p className="text-sm font-medium text-slate-700">
                  Session Persistence
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Keep the user's login state available after page refresh.
                </p>
              </div>

              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
