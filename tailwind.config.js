/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "wwwmaxaime-nero": "#fff",
        "wwwmaxaime-black-12": "rgba(0, 0, 0, 0.12)",
        "wwwmaxaime-black-8": "rgba(0, 0, 0, 0.08)",
        "wwwmaxaime-black-87": "rgba(0, 0, 0, 0.87)",
        "wwwmaxaime-wisteria": "#9065b0",
        "wwwmaxaime-athens-gray": "#f9fafb",
        "wwwmaxaime-wisteria-24": "rgba(144, 101, 176, 0.24)",
        "wwwmaxaime-chateau-green": "#34a853",
        "wwwmaxaime-dodger-blue": "#248ffa",
        "wwwmaxaime-turbo": "#dfdcff",
        "wwwmaxaime-black-60": "rgba(0, 0, 0, 0.6)",
        plum: "#a880c9",
        "wwwmaxaime-turbo1": "#f4ebff",
        "wwwmaxaime-pattens-blue": "#e0f2fe",
        "wwwmaxaime-chartreuse-yellow": "#e6f0ff",
        "wwwmaxaime-mercury": "#eaeaea",
        "wwwmaxaime-bright-turquoise": "#fff6d6",
        "wwwmaxaime-blue-romance": "#d3f8df",
        "wwwmaxaime-bright-turquoise1": "#ffebeb",
        "wwwmaxaime-wisteria-50": "rgba(144, 101, 176, 0.5)",
      },
      spacing: {},
      fontFamily: {
        "wwwmaxaime-mulish-regular-14-underline": "Mulish",
      },
      borderRadius: {
        xl: "20px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      xl: "20px",
      "5xl": "24px",
      lgi: "19px",
      xs: "12px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      lg: "18px",
      "17xl": "36px",
      "3xl": "22px",
      "37xl": "56px",
      "15xl": "34px",
      "26xl": "45px",
      "21xl": "40px",
      "13xl": "32px",
      "7xl": "26px",
      inherit: "inherit",
    },
    screens: {
      mq1400: {
        raw: "screen and (max-width: 1400px)",
      },
      lg: {
        max: "1200px",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
