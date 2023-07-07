import {useColorModeValue} from "@chakra-ui/react";
import styles from "@pages/home/index.module.scss";
import HeaderContent from "@components/header/headerTop/index";

import HeaderMain from "@components/header/headerMain/inded";
import PopoperModal from "@components/popoper/PopoperModal";

const Home = () => {
    return (
        <div className={styles.content}>
            <HeaderContent />

            <HeaderMain />
        </div>
    );
};

export default Home;
