import {
  Box,
 
  useColorModeValue,
} from "@chakra-ui/react";


import HeaderContent from "@components/header";
import styles from  '@pages/home/index.module.scss'

const Home = ( ) => {
  const colorRed = useColorModeValue('red', 'yellow.800')


  return (
    <>
      
        <HeaderContent/>
        <Box mb={4} color={colorRed} >
       l change based on the color mode.
      </Box>
        <div className={styles.content}>
      
          home</div>

       
 
    </>
  );
};


export default Home;
