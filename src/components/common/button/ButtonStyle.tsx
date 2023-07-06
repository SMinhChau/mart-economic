import {defineStyle, defineStyleConfig} from "@chakra-ui/react";

const brandPrimary = defineStyle({
    background: "#f8f9fa",
    color: "#7E7E7E",

    // let's also provide dark mode alternatives
    _dark: {
        background: "#343a40",
        color: "white",
    },
});

const xl = defineStyle({
    fontSize: "xl",
    px: "2",
    h: "16",
    borderRadius: "md",
});

export const buttonTheme = defineStyleConfig({
    variants: {brandPrimary},
    sizes: {xl},
});
