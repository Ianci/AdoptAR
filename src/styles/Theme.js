import { createMuiTheme } from '@material-ui/core/styles';


const mainColor = "#0B020B";
const secondaryColor =  "#370D32";

const white = "#FFF";
const pinkColor = "#9C0D38";
const creamColor = "#F2F6D0";
const orangeRed = "#EE2E31";
const violet = "#34113F";
const darkViolet = "#370D32"

export const theme = createMuiTheme({
    palette: {
        common: {
            black: `${mainColor}`,
            white: `${secondaryColor}`
        },
        primary: {
            main: `${white}`,
            light: `${creamColor}`,
            dark: `${darkViolet}`
        },
        secondary: {
            main: `${pinkColor}`,
            dark: `${violet}`,
            light: `${orangeRed}`,
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            s: 350,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        }
    },
    typography: {
        fontSize: "1.6rem",
        tab: {
            fontWeigth: 700,
            textTransform: "uppercase",
            
        }
    },
    spacing: 16
});


