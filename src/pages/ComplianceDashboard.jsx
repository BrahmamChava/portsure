import { useEffect, useState } from "react";
import SummaryCard from "../components/SummaryCard";
import { complianceLogs } from "../data/complianceData";

/**
 * Compliance Dashboard Page
 * Displays high-level compliance metrics and alerts
 */

export default function ComplianceDashboard() {
  const [metrics, setMetrics] = useState({
    totalPortfolios: 0,
    compliant: 0,
    nonCompliant: 0
  });

  useEffect(() => {
    const uniquePortfolios = new Set(
      complianceLogs.map((log) => log.portfolioId)
    );

    const compliantCount = complianceLogs.filter(
      (log) => log.complianceStatus === "COMPLIANT"
    ).length;

    const nonCompliantCount = complianceLogs.filter(
      (log) => log.complianceStatus === "NON-COMPLIANT"
    ).length;

    setMetrics({
      totalPortfolios: uniquePortfolios.size,
      compliant: compliantCount,
      nonCompliant: nonCompliantCount
    });
  }, []);

  const recentAlerts = complianceLogs.filter(
    (log) => log.complianceStatus === "NON-COMPLIANT"
  );

  return (
    <div className="space-y-6">
      <h1 className="section-title">Compliance Dashboard</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <SummaryCard
          title="Total Portfolios"
          value={metrics.totalPortfolios}
        />
        <SummaryCard
          title="Compliant Portfolios"
          value={metrics.compliant}
          variant="success"
        />
        <SummaryCard
          title="Non-Compliant Portfolios"
          value={metrics.nonCompliant}
          variant="danger"
        />
      </div>

      {/* Recent Compliance Alerts */}
      <div className="card">
        <h2 className="text-md font-semibold text-slate-800 mb-4">
          Recent Compliance Alerts
        </h2>

        {recentAlerts.length === 0 ? (
          <p className="text-sm text-slate-500">
            No compliance issues detected.
          </p>
        ) : (
          <ul className="space-y-3">
            {recentAlerts.map((alert) => (
              <li
                key={alert.logId}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between
                           border-l-4 border-red-500 bg-red-50 p-3 rounded"
              >
                <div>
                  <p className="text-sm font-medium text-slate-800">
                    Portfolio ID: {alert.portfolioId}
                  </p>
                  <p className="text-sm text-slate-600">
                    {alert.findings}
                  </p>
                </div>

                <span className="mt-2 sm:mt-0 badge-danger">
                  {alert.regulationType}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
