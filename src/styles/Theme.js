import { createMuiTheme } from '@material-ui/core/styles';

const mainColor = "#0B020B";
const secondaryColor =  "#370D32";

const white = "#FFFCF7";
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
            main: `${mainColor}`,
            light: `${creamColor}`,
            dark: `${darkViolet}`
        },
        secondary: {
            main: `${pinkColor}`,
            dark: `${violet}`,
            light: `${orangeRed}`,
        }
    },
    typography: {
        fontSize: "1.6rem",
        tab: {
            fontFamily: 'Raleway',
            fontWeigth: 700,
            fontSize: "1rem",
            textTransform: "none"
        }
    }
});