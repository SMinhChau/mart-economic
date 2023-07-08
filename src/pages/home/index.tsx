import styles from "@pages/home/index.module.scss";
import HeaderContent from "@components/header/headerTop/index";

import HeaderMain from "@components/header/headerMain/inded";
import Warpper from "@pages/warpper";
import {Box} from "@chakra-ui/react";
import EffectSlide from "@components/slider/EffectSlide";

const Home = () => {
    return (
        <div className={styles.content}>
            <HeaderContent />

            <HeaderMain />
            <Warpper>
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
                >
                    <EffectSlide />
                </Box>
            </Warpper>
        </div>
    );
};

export default Home;
