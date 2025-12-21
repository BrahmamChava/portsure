/**
 * SummaryCard Component
 * Used to display KPI metrics on Compliance Dashboard
 * Fully responsive and reusable
 */

export default function SummaryCard({ title, value, variant = "default" }) {
  const variantStyles = {
    default: "text-slate-800",
    success: "text-green-700",
    danger: "text-red-700",
    warning: "text-amber-600"
  };

  return (
    <div className="card flex flex-col justify-between min-h-[90px]">
      <span className="text-sm text-slate-500">{title}</span>

      <span
        className={`text-2xl font-bold mt-2 ${
          variantStyles[variant] || variantStyles.default
        }`}
      >
        {value}
      </span>
    </div>
  );
}
