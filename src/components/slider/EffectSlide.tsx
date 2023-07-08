import React from "react";
import bg_01 from "@assets/images/background_01.png";
import image_01 from "@assets/images/slide_01.png";
import {Box, Container, Flex, Image} from "@chakra-ui/react";

const EffectSlide = () => {
    const SLIDE = [
        {
            background: bg_01,
            title: "Don’t miss amazing grocery deals",
            subTitle: "Sign up for the daily newsletter ",
            imageContent: image_01,
            bottomLeft: <Box> Bottom</Box>,
        },
    ];

    return (
        <>
            {SLIDE.map((i, index) => {
                return (
                    <Container key={index} maxW="container.sm">
                        <Image
                            objectFit="cover"
                            src={i.background}
                            alt="Logo"
                        />
                        <Flex flexDirection={"row"}>aszcf</Flex>
                    </Container>
                );
            })}
        </>
    );
};

export default EffectSlide;
