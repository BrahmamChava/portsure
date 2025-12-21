import { useState } from "react";
import { complianceLogs } from "../data/complianceData";
import ReportViewer from "../components/ReportViewer";

/**
 * Compliance Reports Page
 * - Generates compliance reports based on selection
 * - Export action is UI-only (mock)
 * - Fully responsive
 */

export default function ComplianceReports() {
  const [selectedPortfolio, setSelectedPortfolio] = useState("");
  const [selectedRegulation, setSelectedRegulation] = useState("");
  const [generatedReport, setGeneratedReport] = useState(null);

  const portfolioIds = [
    ...new Set(complianceLogs.map((log) => log.portfolioId))
  ];

  const handleGenerateReport = () => {
    const report = complianceLogs.find(
      (log) =>
        log.portfolioId.toString() === selectedPortfolio &&
        log.regulationType === selectedRegulation
    );

    setGeneratedReport(report || null);
  };

  return (
    <div className="space-y-6">
      <h1 className="section-title">Compliance Reports</h1>

      {/* Report Controls */}
      <div className="card">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Portfolio Selector */}
          <div>
            <label className="block text-sm text-slate-600 mb-1">
              Portfolio ID
            </label>
            <select
              value={selectedPortfolio}
              onChange={(e) => setSelectedPortfolio(e.target.value)}
              className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm"
            >
              <option value="">Select Portfolio</option>
              {portfolioIds.map((id) => (
                <option key={id} value={id}>
                  {id}
                </option>
              ))}
            </select>
          </div>

          {/* Regulation Selector */}
          <div>
            <label className="block text-sm text-slate-600 mb-1">
              Regulation Type
            </label>
            <select
              value={selectedRegulation}
              onChange={(e) => setSelectedRegulation(e.target.value)}
              className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm"
            >
              <option value="">Select Regulation</option>
              <option value="SEBI">SEBI</option>
              <option value="MiFID II">MiFID II</option>
            </select>
          </div>

          {/* Generate Button */}
          <div className="flex items-end">
            <button
              onClick={handleGenerateReport}
              className="btn-primary w-full"
              disabled={!selectedPortfolio || !selectedRegulation}
            >
              Generate Report
            </button>
          </div>
        </div>
      </div>

      {/* Report Viewer */}
      <ReportViewer report={generatedReport} />

      {/* Export Button */}
      {generatedReport && (
        <div className="flex justify-end">
          <button
            className="btn-primary"
            onClick={() => alert("Report exported successfully (mock)")}
          >
            Export Report
          </button>
        </div>
      )}
    </div>
  );
}
