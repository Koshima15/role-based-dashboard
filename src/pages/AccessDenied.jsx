import { useNavigate } from "react-router-dom";

const AccessDenied = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-xl">
        {/* Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-4xl text-red-500">
          !
        </div>

        {/* Content */}
        <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-red-500">
          Access Denied
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-800">
          You don't have permission
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-slate-500">
          Your current role does not have permission to access
          this page. Please return to your dashboard or contact
          an administrator if you need access.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            onClick={() => navigate("/dashboard")}
            className="rounded-xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 hover:shadow-md"
          >
            Back to Dashboard
          </button>

          <button
            onClick={() => navigate(-1)}
            className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccessDenied;
