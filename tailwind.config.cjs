module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0b0c",
        charcoal: "#111114",
        gold: "#caa24a",
        offwhite: "#f5f2ea"
      },
      boxShadow: {
        glow: "0 0 45px rgba(202, 162, 74, 0.15)"
      },
      backgroundImage: {
        "radial-glow": "radial-gradient(80% 80% at 20% 10%, rgba(202, 162, 74, 0.12) 0%, rgba(202, 162, 74, 0) 60%)"
      }
    }
  },
  plugins: []
};