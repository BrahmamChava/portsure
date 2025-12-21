/**
 * Fintech Design Tokens
 * Used across the Compliance Monitoring Module
 */

export const theme = {
  colors: {
    primary: "#0F172A",      // Slate-900 (Navbar, Sidebar)
    secondary: "#1E293B",    // Slate-800
    accent: "#14B8A6",       // Teal-500 (Actions, Highlights)

    background: "#F8FAFC",   // Slate-50
    surface: "#FFFFFF",      // Cards, Tables

    success: "#16A34A",      // Compliant
    danger: "#DC2626",       // Non-compliant
    warning: "#F59E0B",      // Alerts
    info: "#0284C7"          // Info labels
  },

  typography: {
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial',
    headingWeight: 600,
    bodyWeight: 400
  },

  spacing: {
    cardPadding: "1rem",
    sectionGap: "1.5rem"
  },

  borderRadius: {
    card: "0.5rem",
    button: "0.375rem"
  }
};
