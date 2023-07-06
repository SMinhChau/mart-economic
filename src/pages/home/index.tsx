import { useColorModeValue } from "@chakra-ui/react";
import styles from "@pages/home/index.module.scss";
import HeaderContent from "@components/header";

import Warpper from "@pages/warpper";

const Home = () => {
  const colorRed = useColorModeValue("red", "yellow.800");

  return (
    <div className={styles.content}>
      <HeaderContent />
    </div>
  );
};

export default Home;
