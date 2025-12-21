/**
 * ComplianceTable Component
 * - Displays compliance logs in a table format
 * - Mobile responsive with horizontal scrolling
 * - Status color-coded for clarity
 */

export default function ComplianceTable({ logs }) {
  if (!logs || logs.length === 0) {
    return (
      <div className="card">
        <p className="text-sm text-slate-500">
          No compliance records available.
        </p>
      </div>
    );
  }

  return (
    <div className="card table-container">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-slate-100 text-slate-700 text-sm">
            <th className="text-left p-3">Log ID</th>
            <th className="text-left p-3">Portfolio ID</th>
            <th className="text-left p-3">Regulation</th>
            <th className="text-left p-3">Findings</th>
            <th className="text-left p-3">Status</th>
            <th className="text-left p-3">Date</th>
          </tr>
        </thead>

        <tbody>
          {logs.map((log) => (
            <tr
              key={log.logId}
              className="border-t text-sm hover:bg-slate-50"
            >
              <td className="p-3">{log.logId}</td>
              <td className="p-3">{log.portfolioId}</td>
              <td className="p-3 font-medium">
                {log.regulationType}
              </td>
              <td className="p-3 max-w-xs">
                <span className="block truncate">
                  {log.findings}
                </span>
              </td>
              <td className="p-3">
                {log.complianceStatus === "COMPLIANT" ? (
                  <span className="badge-success">Compliant</span>
                ) : (
                  <span className="badge-danger">Non-Compliant</span>
                )}
              </td>
              <td className="p-3">{log.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
