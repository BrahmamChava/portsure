/**
 * Filters Component
 * - Regulation Type filter
 * - Compliance Status filter
 * - Portfolio ID search
 * - Mobile responsive (stacked layout)
 */

export default function Filters({
  regulation,
  status,
  search,
  onRegulationChange,
  onStatusChange,
  onSearchChange
}) {
  return (
    <div className="card">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Regulation Filter */}
        <div>
          <label className="block text-sm text-slate-600 mb-1">
            Regulation Type
          </label>
          <select
            value={regulation}
            onChange={(e) => onRegulationChange(e.target.value)}
            className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm"
          >
            <option value="">All</option>
            <option value="SEBI">SEBI</option>
            <option value="MiFID II">MiFID II</option>
          </select>
        </div>

        {/* Compliance Status Filter */}
        <div>
          <label className="block text-sm text-slate-600 mb-1">
            Compliance Status
          </label>
          <select
            value={status}
            onChange={(e) => onStatusChange(e.target.value)}
            className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm"
          >
            <option value="">All</option>
            <option value="COMPLIANT">Compliant</option>
            <option value="NON-COMPLIANT">Non-Compliant</option>
          </select>
        </div>

        {/* Portfolio Search */}
        <div>
          <label className="block text-sm text-slate-600 mb-1">
            Search Portfolio ID
          </label>
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="e.g. 201"
            className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm"
          />
        </div>
      </div>
    </div>
  );
}
