
import React, { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Admin User",
      email: "admin@test.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Manager User",
      email: "manager@test.com",
      role: "Manager",
      status: "Active",
    },
    {
      id: 3,
      name: "Normal User",
      email: "user@test.com",
      role: "User",
      status: "Active",
    },
   
  ]);

  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "User",
    status: "Active",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleAddUser = (e) => {
    e.preventDefault();

    const newUser = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      role: formData.role,
      status: formData.status,
    };

    setUsers((previous) => [...previous, newUser]);

    setFormData({
      name: "",
      email: "",
      role: "User",
      status: "Active",
    });

    setShowModal(false);
  };

  const filteredUsers = users.filter((user) => {
    const searchText = search.toLowerCase();

    return (
      user.name.toLowerCase().includes(searchText) ||
      user.email.toLowerCase().includes(searchText) ||
      user.role.toLowerCase().includes(searchText)
    );
  });

  return (
    <div className="max-w-6xl">
      <div className="mb-8">
        <p className="text-sm font-medium text-blue-600">
          Administration
        </p>

        <h1 className="mt-1 text-3xl font-bold text-slate-800">
          User Management
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Manage users, roles and account access.
        </p>
      </div>

      <div className="mb-8 grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-400">
            Total Users
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-800">
            {users.length}
          </h2>

          <p className="mt-2 text-xs text-blue-600">
            Registered accounts
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-400">
            Active Users
          </p>

          <h2 className="mt-2 text-2xl font-bold text-emerald-600">
            {users.filter(
              (user) => user.status === "Active"
            ).length}
          </h2>

          <p className="mt-2 text-xs text-emerald-600">
            Currently active
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-400">
            Administrators
          </p>

          <h2 className="mt-2 text-2xl font-bold text-blue-700">
            {users.filter(
              (user) => user.role === "Admin"
            ).length}
          </h2>

          <p className="mt-2 text-xs text-slate-400">
            Users with admin access
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-4 border-b border-slate-100 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-semibold text-slate-800">
              All Users
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              View and manage registered users.
            </p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="rounded-xl bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            + Add User
          </button>
        </div>

        <div className="border-b border-slate-100 px-6 py-4">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search users..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold uppercase  text-slate-400">
                  User
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase  text-slate-400">
                  Role
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-400">
                  Status
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-400">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="transition hover:bg-blue-50/40"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                          {user.name.charAt(0)}
                        </div>

                        <div>
                          <p className="font-medium text-slate-700">
                            {user.name}
                          </p>

                          <p className="text-xs text-slate-400">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                        {user.role}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          user.status === "Active"
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <button className="text-sm font-semibold text-blue-600 hover:text-blue-800">
                        View
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="px-6 py-10 text-center text-sm text-slate-400"
                  >
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-800">
                  Add New User
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  Create a new user account.
                </p>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-lg text-slate-500 transition hover:bg-slate-200"
              >
                ×
              </button>
            </div>

            <form
              onSubmit={handleAddUser}
              className="space-y-4"
            >
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter full name"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter email address"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Role
                </label>

                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                >
                  <option value="Admin">Admin</option>
                  <option value="Manager">Manager</option>
                  <option value="User">User</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Status
                </label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-xl bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;

