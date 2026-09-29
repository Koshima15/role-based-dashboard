import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { roleConfig } from "../config/roleConfig";
import { logout } from "../features/auth/authSlice";

function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { role, user } = useSelector(
    (state) => state.auth
  );

  const navigation = roleConfig[role]?.navigation || [];

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <aside className="fixed left-0 top-0 flex h-screen w-64 flex-col bg-[#1e3a8a] text-white shadow-xl">

      <div className="border-b border-blue-400/30 px-6 py-6">
        <h2 className="text-xl font-bold ">
          Role<span className="text-blue-300">Base</span>
        </h2>

        <p className="mt-1 text-sm text-blue-200">
          Access Management
        </p>
      </div>

      <div className="mx-4 mt-6 rounded-xl bg-blue-800/50 p-4">
        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-300 font-bold text-blue-900">
            {user?.name?.charAt(0)}
          </div>

          <div className="min-w-0">
            <p className="text-sm font-semibold text-white">
              {user?.name}
            </p>

            <p className="text-xs text-blue-200">
              {user?.email}
            </p>
          </div>

        </div>

        <div className="mt-4 border-t border-blue-400/20 pt-3">
          <p className="text-xs uppercase  text-blue-300">
            Current Role
          </p>

          <p className="mt-1 font-semibold capitalize text-white">
            {role}
          </p>
        </div>

      </div>

      <nav className="mt-8 flex-1 px-4">

        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-blue-300">
          Navigation
        </p>

        <div className="space-y-2">

          {navigation.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="group flex items-center rounded-xl px-4 py-3 text-blue-100 transition-all duration-200 hover:bg-white/15 hover:pl-5 hover:text-white"
            >
              <span className="mr-3 h-2 w-2 rounded-full bg-blue-300 transition-all group-hover:bg-white" />

              {item.name}
            </Link>
          ))}

        </div>

      </nav>

      <div className="border-t border-blue-400/30 p-4">

        <button
          onClick={handleLogout}
          className="w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-blue-100 transition-all duration-200 hover:bg-red-500/20 hover:text-white"
        >
          ↪ Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;