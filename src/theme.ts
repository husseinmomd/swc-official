// import { createTheme } from "@mui/material/styles";

// // Light mode colors
// const lightPrimaryBackgroundColor = "#ffff";
// const lightPrimaryTextColor = "#222";

// // Dark mode colors
// const darkPrimaryBackgroundColor = "#1b1b1b";
// const darkPrimaryTextColor = "#ffff";

// // Create the theme
// const theme = createTheme({
//   palette: {
//     // mode: "light", // Default mode is light mode
//     primary: {
//       main: lightPrimaryBackgroundColor,
//       contrastText: lightPrimaryTextColor,
//     },
//     text: {
//       primary: lightPrimaryTextColor,
//     },
//     background: {
//       default: lightPrimaryBackgroundColor,
//     },
//   },
// });

// // Override the theme for dark mode
// theme.components = {
//   MuiCssBaseline: {
//     styleOverrides: `
//       body {
//         background-color: ${darkPrimaryBackgroundColor};
//         color: ${darkPrimaryTextColor};
//       }
//     `,
//   },
//   MuiAppBar: {
//     styleOverrides: {
//       colorPrimary: {
//         backgroundColor: darkPrimaryBackgroundColor,
//         color: darkPrimaryTextColor,
//       },
//     },
//   },
// };

// export default theme;

import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: "#556cd6",
  //   },
  //   secondary: {
  //     main: "#19857b",
  //   },
  //   error: {
  //     main: red.A400,
  //   },
  // },

  palette: {
    mode: "dark",
  },
});

export default theme;
