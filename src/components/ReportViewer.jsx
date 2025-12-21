/**
 * ReportViewer Component
 * - Displays generated compliance report
 * - Handles empty and populated states
 * - Mobile responsive
 */

export default function ReportViewer({ report }) {
  if (!report) {
    return (
      <div className="card">
        <p className="text-sm text-slate-500">
          Select a portfolio and regulation to generate a compliance report.
        </p>
      </div>
    );
  }

  return (
    <div className="card space-y-3">
      <h2 className="text-md font-semibold text-slate-800">
        Compliance Report Summary
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
        <div>
          <span className="text-slate-500">Portfolio ID</span>
          <p className="font-medium">{report.portfolioId}</p>
        </div>

        <div>
          <span className="text-slate-500">Regulation</span>
          <p className="font-medium">{report.regulationType}</p>
        </div>

        <div>
          <span className="text-slate-500">Compliance Status</span>
          <p className="font-medium">
            {report.complianceStatus === "COMPLIANT" ? (
              <span className="badge-success">Compliant</span>
            ) : (
              <span className="badge-danger">Non-Compliant</span>
            )}
          </p>
        </div>

        <div>
          <span className="text-slate-500">Audit Date</span>
          <p className="font-medium">{report.date}</p>
        </div>
      </div>

      <div>
        <span className="text-slate-500 text-sm">Findings</span>
        <p className="mt-1 text-sm text-slate-700">
          {report.findings}
        </p>
      </div>
    </div>
  );
}
