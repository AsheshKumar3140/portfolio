export type ThemeTokens = {
  name: "light" | "dark";
  colors: {
    primary: string;
    secondary: string;
    background: string;
    textPrimary: string;
    textSecondary: string;
    border: string;
    textOnPrimary: string;
  };
};

export const darkTheme: ThemeTokens = {
  name: "dark",
  colors: {
    primary: "#6366f1",
    secondary: "#1f2937",
    background: "#111827",
    textPrimary: "#f9fafb",
    textSecondary: "#9ca3af",
    border: "#1f2937",
    textOnPrimary: "#ffffff",
  },
};

export const lightTheme: ThemeTokens = {
  name: "light",
  colors: {
    primary: "#4f46e5",
    secondary: "#f3f4f6",
    background: "#ffffff",
    textPrimary: "#111827",
    textSecondary: "#4b5563",
    border: "#e5e7eb",
    textOnPrimary: "#ffffff",
  },
};


