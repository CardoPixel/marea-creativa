import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import { purple } from '@mui/material/colors';

// eslint-disable-next-line new-cap
export const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const themeLight = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: purple[400],
        },
        background: {
            default: "#E0E0E0",
            paper: "rgba(255,255,255,0.5)",
        }
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
});