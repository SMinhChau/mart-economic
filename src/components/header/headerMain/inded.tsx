import styles from "@components/header/headerMain/index.module.scss";
import WrapperBorder from "@components/common/WrapperBorder";
import {
    Box,
    Button,
    Center,
    Container,
    Flex,
    Grid,
    GridItem,
    Icon,
    SimpleGrid,
    Spacer,
    Text,
    Tooltip,
    Wrap,
    useColorModeValue,
    useMediaQuery,
} from "@chakra-ui/react";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import PopoperModal from "@components/popoper/PopoperModal";
import {AiOutlineAppstore} from "react-icons/ai";
import {HiOutlineFire} from "react-icons/hi";
import {useMemo} from "react";
import TagIcon from "@components/common/TagIcon";
import {TfiHeadphoneAlt} from "react-icons/tfi";
import {color} from "framer-motion";

const HeaderMain = () => {
    const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

    const colorTitleNav = useColorModeValue("#1B1B1B", "white");
    const iconNav = useColorModeValue("#7E7E7E", "white");
    const subTextTColor = useColorModeValue("#7E7E7E", "white");

    const MENU_NAV = [
        {
            iconLeft: HiOutlineFire,
            colorText: colorTitleNav,
            colorIcon: "#3bb77e",
            title: "Hot Deals",

            mr: "2rem",
        },
        {
            colorIcon: iconNav,
            colorText: colorTitleNav,
            title: "Home",
        },
        {
            colorIcon: iconNav,
            colorText: colorTitleNav,
            title: "Food",
            toltip: <Box>toltip</Box>,
            iconRight: MdOutlineKeyboardArrowDown,
        },
        {
            colorIcon: iconNav,
            colorText: colorTitleNav,
            title: "Vegetables",
            toltip: <Box>toltip</Box>,
            iconRight: MdOutlineKeyboardArrowDown,
        },
        {
            colorIcon: iconNav,
            colorText: colorTitleNav,
            title: "Drink",
        },
        {
            colorIcon: iconNav,
            colorText: colorTitleNav,
            title: "Cookies",
        },
        {
            colorIcon: iconNav,
            colorText: colorTitleNav,
            title: "Meat & Seafood",
            toltip: <Box>toltip</Box>,
            iconRight: MdOutlineKeyboardArrowDown,
        },
        {
            colorIcon: iconNav,
            colorText: colorTitleNav,
            title: "Bakery",
            _hover: {colorText: "#3bb77e", cursor: "alias"},
        },
    ];

    const NavBar = useMemo(() => {
        return (
            <>
                {isLargerThan1280 ? (
                    <>
                        {" "}
                        {MENU_NAV.map((item, index) => {
                            let mrItem;
                            if (index === 0) {
                                mrItem = item.mr;
                            }
                            return (
                                <Tooltip label={item.toltip} fontSize="md">
                                    <Center key={index} mr={mrItem} ml={1}>
                                        <TagIcon
                                            key={index}
                                            colorText={item.colorText}
                                            colorIcon={item.colorIcon}
                                            icon={item.iconLeft}
                                            title={item.title}
                                            titleBold={"700"}
                                            iconRight={item.iconRight}
                                            _hover={{
                                                color: "#3bb77e",
                                            }}
                                            actionFunction={() =>
                                                console.log("onClick@")
                                            }
                                        />
                                    </Center>
                                </Tooltip>
                            );
                        })}
                    </>
                ) : (
                    <></>
                )}
            </>
        );
    }, [MENU_NAV]);

    return (
        <>
            <WrapperBorder borderNon>
                <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    mx={{
                        base: "0.5rem",
                        sm: "1rem",
                        md: "6rem",
                        lg: "9rem",
                        xl: "10rem",
                    }}
                    p={"0.5rem"}
                    className={styles.content}
                >
                    <Flex align={"center"}>
                        <PopoperModal contentMenuHeader>
                            <Box>
                                <Button
                                    position={"relative"}
                                    h={"3rem"}
                                    variant="unstyled"
                                    color="white"
                                    fontWeight={"700"}
                                    backgroundColor={"#3bb77e"}
                                    w={{lg: "250px"}}
                                >
                                    <Center px={1}>
                                        <Icon
                                            as={AiOutlineAppstore}
                                            fontSize={24}
                                            position={"relative"}
                                        />
                                        <Text
                                            px={1}
                                            fontSize={{
                                                base: "0.75rem",
                                                md: "1rem",
                                                sm: "1rem",
                                                lg: "1rem",
                                                xl: "1rem",
                                            }}
                                            className={styles.textSelectButton}
                                        >
                                            Browse All Categories
                                        </Text>
                                        <Icon
                                            as={MdOutlineKeyboardArrowDown}
                                            fontSize={24}
                                            position={"relative"}
                                        />
                                    </Center>
                                </Button>
                            </Box>
                        </PopoperModal>

                        <Flex
                            ml={{
                                base: "10 rem",
                                sm: "8rem",
                                md: "6rem",
                                lg: "5rem",
                                xl: "2rem",
                            }}
                            as="nav"
                            wrap="wrap"
                            w="100%"
                        >
                            {NavBar}
                        </Flex>
                    </Flex>
                    <Box
                        w={{
                            base: "35%",
                            sm: "30%",
                            lg: "30%",
                            xl: "30%",
                            "2xl": "13%",
                        }}
                    >
                        <Flex align={"center"} justifyContent={"end"}>
                            <Box>
                                <Center>
                                    <Icon
                                        pr={1}
                                        alignItems={"center"}
                                        as={TfiHeadphoneAlt}
                                        fontSize={{
                                            base: "1.9rem",
                                            sm: "2rem",
                                            lg: "2.1rem",
                                            xl: "2.5rem",
                                        }}
                                        position={"relative"}
                                    />
                                </Center>
                            </Box>
                            <Box>
                                <Flex
                                    flexDirection={"column"}
                                    align={"center"}
                                    justifyContent={"center"}
                                >
                                    <Text
                                        fontSize={{
                                            base: "0.75rem",
                                            md: "1rem",
                                            sm: "1rem",
                                            lg: "1.5rem",
                                            xl: "1.5rem",
                                        }}
                                        className={styles.textBoldGreen}
                                    >
                                        1900 - 8888
                                    </Text>
                                    <Text
                                        color={subTextTColor}
                                        fontSize={{
                                            base: "0.5rem",
                                            md: "0.75rem",
                                            sm: "0.8rem",
                                            lg: "0.9rem",
                                        }}
                                        className={styles.subText}
                                    >
                                        24/7 Support Center
                                    </Text>
                                </Flex>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            </WrapperBorder>
        </>
    );
};

export default HeaderMain;
