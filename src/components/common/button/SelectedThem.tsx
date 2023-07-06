import {selectAnatomy} from "@chakra-ui/anatomy";
import {createMultiStyleConfigHelpers, defineStyle} from "@chakra-ui/react";

const {definePartsStyle, defineMultiStyleConfig} =
    createMultiStyleConfigHelpers(selectAnatomy.keys);

const brandPrimary = definePartsStyle({
    // define the part you're going to style
    field: {
        background: "white",
        border: "1px dashed",
        borderColor: "#e5e5e5",
        borderRadius: "full",
        fontFamily: `"Quicksand", sans-serif`,
    },

    icon: {
        color: "#7E7E7E",
    },
});

const xl = defineStyle({
    fontSize: "lg",
    px: "4",
    h: "54px",
});

const sizes = {
    xl: definePartsStyle({field: xl, icon: xl}),
};
export const selectTheme = defineMultiStyleConfig({
    variants: {brandPrimary},
    sizes,
});
