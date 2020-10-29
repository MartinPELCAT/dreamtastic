module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === "production",
    mode: "all",
    content: ["./pages/**/*.html", "./pages/**/*.tsx"],
  },
  theme: {
    extend: {
      backgroundColor: {
        "main-background": "#2B2F77",
        "header-background": "#141852",
      },
      borderColor: {
        header: "#483475",
      },
    },
  },
  variants: {},
  plugins: [],
};
