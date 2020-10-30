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
        "main-background": "#b6a3ce",
        "header-background": "#d5c0e7",
        "main-color": "#f1a7f1",
      },
      backgroundImage: {
        "main-gradient": "linear-gradient(315deg, #F7C2D3 0%, #F4B5E2 74%)",
        "main-header": "linear-gradient(315deg, #F7C2D3 0%, #F4B5E2 74%)",
      },
      borderColor: {
        header: "#483475",
      },
      textColor: {
        signup: "#F4B5E2",
      },
    },
  },
  variants: {},
  plugins: [],
};
