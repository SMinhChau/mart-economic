import {createIcon} from "@chakra-ui/react";
import React from "react";

interface Props {
    iconName: string;
    color?: string;
}

const IconView = createIcon({
    displayName: "UpDownIcon",
    viewBox: "0 0 200 200",

    // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
    path: (
        <path
            fill="currentColor"
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
        />
    ),
});

export default IconView;
