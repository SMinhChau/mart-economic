import {Box, Button, Center, Flex, Icon, Text} from "@chakra-ui/react";
import React from "react";
import {AiOutlineAppstore} from "react-icons/ai";
import styles from "@components/select/index.module.scss";
import {Select, chakraComponents} from "chakra-react-select";

const flavorOptions = [
    {
        value: "coffee",
        label: "Coffee",
        icon: (
            <Icon
                as={AiOutlineAppstore}
                color="orange.700"
                mr={2}
                h={5}
                w={5}
            />
        ),
    },
    {
        value: "chocolate",
        label: "Chocolate",
        icon: (
            <Icon
                as={AiOutlineAppstore}
                color="yellow.800"
                mr={2}
                h={5}
                w={5}
            />
        ),
    },
    {
        value: "strawberry",
        label: "Strawberry",
        icon: (
            <Icon as={AiOutlineAppstore} color="red.500" mr={2} h={5} w={5} />
        ),
    },
    {
        value: "cherry",
        label: "Cherry",
        icon: (
            <Icon as={AiOutlineAppstore} color="red.600" mr={2} h={5} w={5} />
        ),
    },
];

const SelectedOption = () => {
    return (
        <>
            <Button
                position={"relative"}
                h={"3rem"}
                leftIcon={
                    <Icon
                        as={AiOutlineAppstore}
                        fontSize={24}
                        position={"relative"}
                        top={1}
                    />
                }
                title="Browse All Categories"
                variant="unstyled"
                color={"white"}
                backgroundColor={"#3bb77e"}
                w={{lg: "250px"}}
                rightIcon={
                    <Icon
                        as={AiOutlineAppstore}
                        fontSize={24}
                        position={"relative"}
                        top={1}
                    />
                }
            />
        </>
    );
};

export default SelectedOption;
