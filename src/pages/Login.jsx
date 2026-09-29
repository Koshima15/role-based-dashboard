import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login } from "../features/auth/authSlice";
import { mockUsers } from "../config/mockUsers";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const user = mockUsers.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    if (!user) {
      setError("Invalid email or password");
      return;
    }

    dispatch(
      login({
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
        role: user.role,
      })
    );

    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <div className="hidden w-1/2 flex-col justify-between bg-gradient-to-br from-[#172554] via-[#1e3a8a] to-[#2563eb] p-12 text-white lg:flex">
        <div>
          <h1 className="text-3xl font-bold tracking-wide">
            Role<span className="text-blue-300">Base</span>
          </h1>

          <p className="mt-2 text-sm text-blue-200">
            Smart Role-Based Access Management
          </p>
        </div>

        <div className="max-w-lg">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-300">
            Secure • Simple • Scalable
          </p>

          <h2 className="text-5xl font-bold">
            One dashboard.
            <br />
            Different access.
          </h2>

          <p className="mt-6 max-w-md text-lg text-blue-100">
            Manage users, teams, reports and settings
            with a simple role-based access system.
          </p>
        </div>

        <p className="text-sm text-blue-300">
          RoleBase Dashboard, 2026
        </p>
      </div>

      <div className="flex w-full items-center justify-center px-6 py-12 lg:w-1/2">
        <div className="w-full max-w-md">
          <div className="mb-10 text-center lg:hidden">
            <h1 className="text-3xl font-bold text-blue-800">
              Role<span className="text-blue-500">Base</span>
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Access Management
            </p>
          </div>

          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Welcome back
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-800">
              Sign in to your account
            </h2>

            <p className="mt-2 text-slate-500">
              Enter your credentials to continue.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-blue-100/50">
            <form
              onSubmit={handleLogin}
              className="space-y-5"
            >
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Password
                </label>

                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  required
                />
              </div>

              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 py-3.5 font-semibold text-white shadow-lg shadow-blue-200 transition-all duration-200 hover:-translate-y-0.5 hover:from-blue-800 hover:to-blue-600 hover:shadow-xl active:translate-y-0"
              >
                Sign In
              </button>
            </form>
            <div className="mt-7 border-t border-slate-100 pt-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Demo Accounts
              </p>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between rounded-lg bg-blue-50 px-3 py-2">
                  <span className="font-medium text-blue-700">
                    Admin
                  </span>

                  <span className="text-slate-500">
                    admin@test.com
                  </span>
                </div>

                <div className="flex justify-between rounded-lg bg-slate-50 px-3 py-2">
                  <span className="font-medium text-slate-700">
                    Manager
                  </span>

                  <span className="text-slate-500">
                    manager@test.com
                  </span>
                </div>

                <div className="flex justify-between rounded-lg bg-slate-50 px-3 py-2">
                  <span className="font-medium text-slate-700">
                    User
                  </span>

                  <span className="text-slate-500">
                    user@test.com
                  </span>
                </div>

                <p className="mt-3 text-center text-xs text-slate-400">
                  Password for all accounts:{" "}
                  <span className="font-semibold text-slate-500">
                    role@123
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

