const iconStyle = { width: 50, height: 50, stroke: "#f0bb62", fill: "none", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export const CupIcon = () => (
  <svg viewBox="0 0 24 24" style={iconStyle}>
    <path d="M8 2h8v10a4 4 0 01-4 4 4 4 0 01-4-4V2z" />
    <path d="M16 4h2a2 2 0 012 2v1a3 3 0 01-3 3h-1" />
    <path d="M8 4H6a2 2 0 00-2 2v1a3 3 0 003 3h1" />
    <path d="M12 16v2" /><path d="M8 20h8" />
  </svg>
);

export const MedalIcon = () => (
  <svg viewBox="0 0 24 24" style={iconStyle}>
    <circle cx="12" cy="8" r="5" />
    <path d="M9 13l-2 8 5-3 5 3-2-8" />
  </svg>
);

export const ImageIcon = () => (
  <svg viewBox="0 0 24 24" style={iconStyle}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 16l5-5 4 4 4-4 5 5" />
    <circle cx="8.5" cy="8.5" r="1.5" />
  </svg>
);

export const CrownIcon = () => (
  <svg viewBox="0 0 24 24" style={iconStyle}>
    <path d="M2 20h20L19 8l-4 4-3-6-3 6-4-4z" />
    <path d="M2 20h20" />
  </svg>
);

export const KeyIcon = () => (
  <svg viewBox="0 0 24 24" style={iconStyle}>
    <circle cx="8" cy="15" r="5" />
    <path d="M12 12l9-9" /><path d="M18 3l3 3" /><path d="M15 6l3 3" />
  </svg>
);

export const HandIcon = () => (
  <svg viewBox="0 0 24 24" style={iconStyle}>
    <path d="M18 11V6a1 1 0 00-2 0v5M16 11V4a1 1 0 00-2 0v7M14 11V5a1 1 0 00-2 0v6M12 11V7a1 1 0 00-2 0v9l-2.8-2.8a1.5 1.5 0 00-2.1 2.1L10 21h8a2 2 0 002-2v-5a1 1 0 00-2 0" />
  </svg>
);

export const CodeIcon = () => (
  <svg viewBox="0 0 24 24" style={iconStyle}>
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    <line x1="14" y1="4" x2="10" y2="20" />
  </svg>
);

export const DesktopIcon = () => (
  <svg viewBox="0 0 24 24" style={iconStyle}>
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

export const ServerIcon = () => (
  <svg viewBox="0 0 24 24" style={iconStyle}>
    <rect x="2" y="2" width="20" height="8" rx="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
);

export const DatabaseIcon = () => (
  <svg viewBox="0 0 24 24" style={iconStyle}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

export const LocationIcon = () => (
  <svg viewBox="0 0 24 24" style={{ ...iconStyle, width: 30, height: 30 }}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" style={{ ...iconStyle, width: 30, height: 30 }}>
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

export const EmailIcon = () => (
  <svg viewBox="0 0 24 24" style={{ ...iconStyle, width: 30, height: 30 }}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="22,4 12,13 2,4" />
  </svg>
);

export const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" style={{ ...iconStyle, width: 30, height: 30, fill: "#f0bb62", stroke: "none" }}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
);
