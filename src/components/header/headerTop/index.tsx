import React, {useMemo} from "react";
import styles from "@components/header/headerTop/index.module.scss";
import {
    Box,
    Button,
    ButtonGroup,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    IconButton,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Select,
    useColorMode,
    useDisclosure,
    useMediaQuery,
} from "@chakra-ui/react";

import logo from "@assets/images/Logo.png";

import {MoonIcon, SearchIcon} from "@chakra-ui/icons";

import WrapperBorder from "@components/common/WrapperBorder";

import TagIcon from "@components/common/TagIcon";

import {
    FiUser,
    FiRefreshCw,
    FiHeart,
    FiShoppingCart,
    FiMenu,
} from "react-icons/fi";

interface Props {
    iconTheme?: React.ComponentProps<any>;
}

const menu = [
    {
        key: "A",
        title: "Account",
        icon: FiUser,
        actionFunction: () => {
            console.log("1111");
            console.log("222");
        },
        isApper: true,
    },
    {
        key: "C",
        title: "Compare",
        icon: FiRefreshCw,
        actionFunction: () => console.log("AAAAA"),
        isApper: true,
    },
    {
        key: "W",
        title: "Wishlist",
        icon: FiHeart,
        actionFunction: () => console.log("AAAAA"),
        isApper: true,
    },
    {
        key: "Crt",
        title: "Cart",
        icon: FiShoppingCart,
        actionFunction: () => console.log("AAAAA"),
        isApper: true,
    },
];

const HeaderContent: React.FC<Props> = () => {
    const {toggleColorMode} = useColorMode();

    const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
    const {isOpen, onOpen, onClose} = useDisclosure();

    const DrawerMenu = () => {
        return (
            <>
                <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Create your account</DrawerHeader>

                        <DrawerBody>
                            <Input placeholder="Type here..." />
                        </DrawerBody>

                        <DrawerFooter>
                            <Button variant="outline" mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme="blue">Save</Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </>
        );
    };
    const GroupMenuIcon = useMemo(() => {
        return (
            <>
                {isLargerThan1280 ? (
                    <>
                        {menu.map((i, index) => {
                            return (
                                <TagIcon
                                    key={index}
                                    title={i.title}
                                    icon={i.icon}
                                    actionFunction={i.actionFunction}
                                />
                            );
                        })}
                    </>
                ) : (
                    <>
                        <IconButton
                            variant="ghost"
                            aria-label="Menu"
                            fontSize="24px"
                            onClick={onOpen}
                            icon={<FiMenu />}
                        />
                    </>
                )}
            </>
        );
    }, [isLargerThan1280]);

    return (
        <>
            <WrapperBorder mt={isLargerThan1280 ? "2rem" : "0rem"}>
                <Box
                    mx={{sm: "1rem", md: "6rem", lg: "9rem", xl: "10rem"}}
                    className={styles.content}
                >
                    <Box flexDirection={"row"}>
                        <Flex alignItems={"center"}>
                            <Box p={1}>
                                <Image
                                    objectFit="cover"
                                    w={{
                                        base: "120px",
                                        sm: "120px",
                                        md: "150px",
                                        lg: "215px",
                                    }}
                                    src={logo}
                                    alt="Logo"
                                />
                            </Box>
                            <Box
                                w={{
                                    lg: "400px",
                                    xl: "600px",
                                    "2xl": "700px",
                                }}
                                p={2}
                            >
                                {isLargerThan1280 ? (
                                    <>
                                        <InputGroup size="lg">
                                            <InputLeftElement
                                                width="10.2rem"
                                                children={
                                                    <div
                                                        className={
                                                            styles.select
                                                        }
                                                    >
                                                        <Select
                                                            variant="unstyled"
                                                            placeholder="All caregories"
                                                            size="md"
                                                        >
                                                            <option value="option1">
                                                                Option 1
                                                            </option>
                                                            <option value="option2">
                                                                Option 2
                                                            </option>
                                                            <option value="option3">
                                                                Option 3
                                                            </option>
                                                        </Select>
                                                    </div>
                                                }
                                            />

                                            <Input
                                                type="tel"
                                                placeholder="Search items"
                                                pl="11rem"
                                            />

                                            <InputRightElement pointerEvents="none">
                                                <SearchIcon color="gray.300" />
                                            </InputRightElement>
                                        </InputGroup>
                                    </>
                                ) : (
                                    <></>
                                )}
                            </Box>
                        </Flex>
                    </Box>

                    <ButtonGroup gap="2" alignItems={"center"}>
                        {GroupMenuIcon}
                        <DrawerMenu />
                        {isLargerThan1280 ? (
                            <IconButton
                                aria-label=""
                                icon={<MoonIcon />}
                                size="sm"
                                onClick={toggleColorMode}
                            ></IconButton>
                        ) : null}
                    </ButtonGroup>
                </Box>
            </WrapperBorder>
        </>
    );
};

export default HeaderContent;
