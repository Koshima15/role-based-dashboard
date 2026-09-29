import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user, role } = useSelector(
    (state) => state.auth
  );

  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <p className="text-sm font-medium text-blue-600">
          Account
        </p>

        <h1 className="mt-1 text-3xl font-bold text-slate-800">
          My Profile
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          View your account information and access details.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="bg-gradient-to-r from-[#172554] via-[#1e3a8a] to-[#2563eb] px-6 py-8 text-white">
          <div className="flex items-center gap-5">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-3xl font-bold uppercase text-blue-700 shadow-lg">
              {user?.name?.charAt(0)}
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                {user?.name}
              </h2>

              <p className="mt-1 text-blue-200">
                {user?.email}
              </p>

              <span className="mt-3 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold capitalize text-blue-100">
                {role} Account
              </span>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h2 className="mb-5 font-semibold text-slate-800">
            Account Information
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase  text-slate-400">
                Full Name
              </p>

              <p className="mt-2 font-medium text-slate-700">
                {user?.name}
              </p>
            </div>

            <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercaser text-slate-400">
                Email Address
              </p>

              <p className="mt-2 font-medium text-slate-700">
                {user?.email}
              </p>
            </div>

            <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase  text-slate-400">
                Role
              </p>

              <p className="mt-2 font-medium capitalize text-blue-700">
                {role}
              </p>
            </div>

            <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase  text-slate-400">
                Account Status
              </p>

              <div className="mt-2 flex items-center gap-2">

                <span className="font-medium text-emerald-600">
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="font-semibold text-slate-800">
          Access Information
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Your access to application features is determined by
          your assigned role.
        </p>

        <div className="mt-5 rounded-xl bg-blue-50 p-4">
          <p className="text-sm font-medium text-blue-800">
            Current Role:{" "}
            <span className="capitalize">
              {role}
            </span>
          </p>

          <p className="mt-1 text-xs text-blue-600">
            Role-based permissions are applied automatically.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
