import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AccessDenied from "./pages/AccessDenied";

import Users from "./pages/Users";
import Team from "./pages/Team";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/protextedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute permission="dashboard">
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Admin */}
        <Route
          path="/users"
          element={
            <ProtectedRoute permission="users">
              <Users />
            </ProtectedRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedRoute permission="settings">
              <Settings />
            </ProtectedRoute>
          }
        />

        {/* Manager */}
        <Route
          path="/team"
          element={
            <ProtectedRoute permission="team">
              <Team />
            </ProtectedRoute>
          }
        />

        {/* Admin + Manager */}
        <Route
          path="/reports"
          element={
            <ProtectedRoute permission="reports">
              <Reports />
            </ProtectedRoute>
          }
        />

        {/* User */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute permission="profile">
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Access Denied */}
        <Route
          path="/access-denied"
          element={<AccessDenied />}
        />

        {/* Unknown URL */}
        <Route
          path="*"
          element={<Navigate to="/login" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;