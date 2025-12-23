import { useState } from "react";
import { complianceLogs } from "../data/complianceData";
import jsPDF from "jspdf";

const ComplianceReports = () => {
  const [selectedPortfolio, setSelectedPortfolio] = useState("");
  const [selectedRegulation, setSelectedRegulation] = useState("");
  const [reportData, setReportData] = useState(null);

  const uniquePortfolios = [
    ...new Set(complianceLogs.map((log) => log.portfolioId)),
  ];

  const regulations = ["SEBI", "MiFID II"];

  const handleGenerateReport = () => {
    if (!selectedPortfolio || !selectedRegulation) {
      setReportData(null);
      return;
    }

    const report = complianceLogs.find(
      (log) =>
        log.portfolioId === Number(selectedPortfolio) &&
        log.regulationType === selectedRegulation
    );

    if (report) {
      setReportData(report);
    } else {
      setReportData({
        portfolioId: selectedPortfolio,
        regulationType: selectedRegulation,
        complianceStatus: "COMPLIANT",
        findings: `No ${selectedRegulation} compliance violations detected`,
        date: new Date().toISOString().split("T")[0],
      });
    }
  };

  const handleExportPDF = () => {
    if (!reportData) return;

    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("PortSure – Compliance Report", 20, 20);

    doc.setFontSize(12);
    doc.text(`Portfolio ID: ${reportData.portfolioId}`, 20, 40);
    doc.text(`Regulation: ${reportData.regulationType}`, 20, 50);
    doc.text(`Compliance Status: ${reportData.complianceStatus}`, 20, 60);
    doc.text(`Audit Date: ${reportData.date}`, 20, 70);

    doc.text("Findings:", 20, 90);
    doc.text(reportData.findings, 20, 100, { maxWidth: 170 });

    doc.save(
      `Compliance_Report_${reportData.portfolioId}_${reportData.regulationType}.pdf`
    );
  };

  return (
    <div className="page-content">
      <h1 className="text-2xl font-semibold text-slate-800 mb-6">
        Compliance Reports
      </h1>

      {/* Selection Panel */}
      <div className="bg-white/90 backdrop-blur border border-slate-200 rounded-xl shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          <div>
            <label className="block text-sm text-slate-600 mb-1">
              Portfolio ID
            </label>
            <select
              className="w-full border border-slate-300 rounded-lg px-3 py-2"
              value={selectedPortfolio}
              onChange={(e) => setSelectedPortfolio(e.target.value)}
            >
              <option value="">Select Portfolio</option>
              {uniquePortfolios.map((id) => (
                <option key={id} value={id}>
                  {id}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-slate-600 mb-1">
              Regulation Type
            </label>
            <select
              className="w-full border border-slate-300 rounded-lg px-3 py-2"
              value={selectedRegulation}
              onChange={(e) => setSelectedRegulation(e.target.value)}
            >
              <option value="">Select Regulation</option>
              {regulations.map((reg) => (
                <option key={reg} value={reg}>
                  {reg}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleGenerateReport}
            className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-2 rounded-lg"
          >
            Generate Report
          </button>
        </div>
      </div>

      {/* Report Output */}
      <div className="bg-white/90 backdrop-blur border border-slate-200 rounded-xl shadow-lg p-6">
        {!reportData ? (
          <p className="text-slate-500">
            Select a portfolio and regulation to generate a compliance report.
          </p>
        ) : (
          <>
            <h2 className="text-lg font-semibold text-slate-800 mb-4">
              Compliance Report Summary
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Portfolio ID
                </p>
                <p className="font-semibold text-slate-800">
                  {reportData.portfolioId}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Regulation
                </p>
                <p className="font-semibold text-slate-800">
                  {reportData.regulationType}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Compliance Status
                </p>
                <span
                  className={`inline-block mt-1 px-3 py-1 rounded-full text-sm font-medium ${
                    reportData.complianceStatus === "COMPLIANT"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {reportData.complianceStatus}
                </span>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Audit Date
                </p>
                <p className="font-semibold text-slate-800">
                  {reportData.date}
                </p>
              </div>
            </div>

            <div className="h-px bg-slate-200 my-6"></div>

            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500 mb-1">
                Findings
              </p>
              <p className="text-slate-700">{reportData.findings}</p>
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={handleExportPDF}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg"
              >
                Export Report (PDF)
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ComplianceReports;
