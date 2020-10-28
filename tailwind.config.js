module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      body: ["'Open Sans'", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      syne: ["Syne", "sans-serif"]
    },
    extend: {
      colors: {
        mustard: "#ffd600"
      },
      spacing: {
        n1: "-0.25rem",
        n2: "-0.5rem",
        n3: "-0.75rem",
        n4: "-1rem",
        n5: "-1.25rem",
        n6: "-1.5rem",
        n8: "-2rem",
        n10: "-2.5rem",
        n12: "-3rem"
      }
    }
  },
  variants: {},
  plugins: []
};
