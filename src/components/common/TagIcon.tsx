import {
    Box,
    Button,
    Center,
    Flex,
    Icon,
    SystemStyleObject,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import {IconType} from "react-icons";

interface Props {
    title?: String;
    icon?: IconType;
    colorIcon?: string;
    frontSize?: string;
    colorText?: string;
    actionFunction?: React.FormEventHandler<HTMLButtonElement>;
    iconRight?: IconType;
    titleBold?: String;
    _hover?: SystemStyleObject;
    _hoverIconLeft?: SystemStyleObject;
    _hoverIconRight?: SystemStyleObject;
}

const TagIcon: React.FC<Props> = ({
    title,
    icon,
    frontSize,
    colorText,
    colorIcon,
    titleBold,
    actionFunction,
    iconRight,
    _hover,
    _hoverIconLeft,
    _hoverIconRight,
}) => {
    const colorTheme = useColorModeValue("#253D4E", "white");

    return (
        <Button
            variant="ghost"
            colorScheme="brand"
            onClick={actionFunction}
            textColor={colorText}
            _hover={_hover}
        >
            <Flex>
                {icon && (
                    <Center>
                        <Icon
                            viewBox="0 0 200 200"
                            as={icon}
                            color={colorIcon ? colorIcon : colorTheme}
                            fontSize={24}
                            _hover={_hover}
                        />
                    </Center>
                )}

                <Center pl={2}>
                    <Text
                        fontSize={frontSize ? frontSize : "1rem"}
                        fontWeight={titleBold ? "700" : "normal"}
                    >
                        {title}
                    </Text>
                </Center>
                {iconRight && (
                    <Center>
                        <Icon
                            pl={1}
                            as={iconRight}
                            color={colorIcon ? colorIcon : colorTheme}
                            fontSize={24}
                            _hover={_hover}
                        />
                    </Center>
                )}
            </Flex>
        </Button>
    );
};
export default TagIcon;
