module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-green": "#1d2a20",
        "ciri-for": "#dde4d5",
        "profile-bg": "#d9decd",
        "card-bg": "#e9efe1",
        "status-card": "#cfc4b1",
        "status-bg": "#e0e8d9",
        "worker-bg": "#d9dece",
        "worker-card": "#4e6b5a",
      },
      backgroundImage: {
        "hero-pattern": "url('/public/images/bg.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
