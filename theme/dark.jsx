import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import { purple } from '@mui/material/colors';

// Create a Roboto font with specified settings
// eslint-disable-next-line new-cap
export const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a dark theme with Material-UI
export const themeDark = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: purple[400],
        },
        background: {
            default: "#171717",
        }
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
});
