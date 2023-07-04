
import React from "react";
import styles from '@components/header/index.module.scss'
import { Box, Button, DarkMode, HStack, LightMode, useColorMode, useColorModeValue } from "@chakra-ui/react";



interface Props {
  iconTheme?: React.ComponentProps<any>;
}

const HeaderContent: React.FC<Props> = () => {
  const { toggleColorMode } = useColorMode()

  const bg = useColorModeValue('red.500', 'red.200')
  const color = useColorModeValue('white', 'gray.800')
  const colorRed = useColorModeValue('red', 'yellow.800')

  return (
    <HStack>
    <LightMode>
      <Button size='sm' colorScheme='blue'>
        Light Mode Always
      </Button>
    </LightMode>

    <DarkMode>
      <Button size='sm' colorScheme='blue'>
        Dark Mode Always
      </Button>
    </DarkMode>
    <Box mb={4} bg={bg} color={color}>
        This box's style will change based on the color mode.
      </Box>
      <div className={styles.content}>
      <Box mb={4} color={colorRed} >
       l change based on the color mode.
      </Box>
      </div>

     
    <Button size='sm' colorScheme='blue' onClick={toggleColorMode}>
      Toggle Mode
    </Button>
  </HStack>
  );
};

export default HeaderContent;
