import {
    Box,
    Button,
    Center,
    Flex,
    Icon,
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
}

const TagIcon: React.FC<Props> = ({
    title,
    icon,
    frontSize,
    colorText,
    colorIcon,
    actionFunction,
}) => {
    const colorTheme = useColorModeValue("#253D4E", "white");

    return (
        <Button variant="ghost" colorScheme="brand" onClick={actionFunction}>
            <Flex>
                <Center>
                    <Icon
                        viewBox="0 0 200 200"
                        as={icon}
                        color={colorIcon ? colorIcon : colorTheme}
                        size={24}
                    />
                </Center>
                <Center pl={2}>
                    <Text
                        fontSize={frontSize ? frontSize : "1rem"}
                        color={colorText ? colorText : "#7E7E7E"}
                    >
                        {title}
                    </Text>
                </Center>
            </Flex>
        </Button>
    );
};
export default TagIcon;
