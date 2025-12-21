import { useState, useMemo } from "react";
import { complianceLogs } from "../data/complianceData";
import Filters from "../components/Filters";
import ComplianceTable from "../components/ComplianceTable";

/**
 * Compliance Logs Page
 * - Displays audit & compliance logs
 * - Supports filtering & searching
 * - Fully responsive
 */

export default function ComplianceLogs() {
  const [regulation, setRegulation] = useState("");
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");

  // Filter logic (computed dynamically)
  const filteredLogs = useMemo(() => {
    return complianceLogs.filter((log) => {
      const matchesRegulation =
        !regulation || log.regulationType === regulation;

      const matchesStatus =
        !status || log.complianceStatus === status;

      const matchesSearch =
        !search || log.portfolioId.toString().includes(search);

      return matchesRegulation && matchesStatus && matchesSearch;
    });
  }, [regulation, status, search]);

  return (
    <div className="space-y-6">
      <h1 className="section-title">Compliance Logs & Audit Trail</h1>

      {/* Filters */}
      <Filters
        regulation={regulation}
        status={status}
        search={search}
        onRegulationChange={setRegulation}
        onStatusChange={setStatus}
        onSearchChange={setSearch}
      />

      {/* Logs Table */}
      <ComplianceTable logs={filteredLogs} />
    </div>
  );
}
