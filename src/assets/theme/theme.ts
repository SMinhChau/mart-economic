import {defineStyle, extendTheme, type ThemeConfig} from "@chakra-ui/react";
import {buttonTheme} from "@components/common/button/ButtonStyle";
import {selectTheme} from "@components/common/button/SelectedThem";

const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: false,
};

const brandPrimary = defineStyle({
    background: "orange.500",
    color: "white",
    fontFamily: "serif",
    fontWeight: "normal",

    // let's also provide dark mode alternatives
    _dark: {
        background: "orange.300",
        color: "orange.800",
    },
});

const breakpoints = {
    sm: "30em", // 480px
    md: "48em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280px
    "2xl": "96em", // 1536px
};
const theme = extendTheme({
    config,
    breakpoints,
    fonts: {
        heading: `'Quicksand', sans-serif`,
        body: `'Quicksand', sans-serif`,
    },
    fontSizes: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
    },
    colors: {
        brand: {
            50: "#F7FAFC",
            100: "#EDF2F7",
            200: "#E2E8F0",
            300: "#CBD5E0",
            400: "#A0AEC0",
            500: "#718096",
            600: "#4A5568",
            700: "#2D3748",
            800: "#1A202C",
            900: "#F7FAFC",
            bg: "#9747FF",
            text: "#fff",
            card: "#0A99FF",
        },
    },
    components: {Button: buttonTheme, Select: selectTheme},
    variants: {brandPrimary},
});

export default theme;
