/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs:"380px",
        sm: "640px",
        md: "768px",
        lg: "992px",
        xl: "1199px",
        "2xl": "1536px",
      },
      colors: {
        sidebarColor: {
          DEFAULT: "#252b36",
          hover: "#454b54",
          header: "#212731",
          headerIcon: "#303741",
        },
        textColor: "#1f2937",
        borderColor: "#D1D5DB",
        upgradeCardColor: "rgb(36, 114, 151)",
      },
      boxShadow: {
        DEFAULT: "0px 1px 3px rgba(0, 0, 0, 0.125)",
        sm: "0 1px 2px rgba(0, 0, 0, 0.1)",
        lg: "0 6px 12px rgba(0, 0, 0, 0.15)",
      },
      width: {
        sidebar: "15.25rem",
        sidebarCollapsed: "3.7rem",
      },
      spacing: {
        sidebarLeft: "15.35rem",
        sidebarCollapsedLeft: "3.7rem",
      },
      margin: {
        sidebarWidth: "15.35rem",
        sidebarCollapsedWidth: "3.7rem",
      },
    },
  },
  plugins: [],
};
