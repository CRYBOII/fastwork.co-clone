const plugin = require("tailwindcss/plugin")

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addVariant, e }) => {
      addVariant("before", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`before${separator}${className}`)}::before`
        })
      })
      addVariant("after", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`after${separator}${className}`)}::after`
        })
      })
    }),
    plugin(({ addUtilities }) => {
      const contentUtilities = {
        ".content": {
          content: "attr(data-content)",
        },
        ".content-before": {
          content: "attr(data-before)",
        },
        ".content-after": {
          content: "attr(data-after)",
        },
      }

      addUtilities(contentUtilities, ["before", "after"])
    }),
  ],
}
