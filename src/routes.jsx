import { Routes, Route } from "react-router-dom";
import ComplianceDashboard from "./pages/ComplianceDashboard";
import ComplianceLogs from "./pages/ComplianceLogs";
import ComplianceReports from "./pages/ComplianceReports";

/**
 * Application Routes
 * Handles navigation between Compliance Module screens
 */

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ComplianceDashboard />} />
      <Route path="/logs" element={<ComplianceLogs />} />
      <Route path="/reports" element={<ComplianceReports />} />
    </Routes>
  );
}
