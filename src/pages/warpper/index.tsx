import React, { ReactNode } from "react";
import styles from "@pages/warpper/index.module.scss";
import { Box } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}
const Warpper: React.FC<Props> = ({ children }) => {
  return (
    
      <div className={styles.container}>
          <Box className={styles.content}>
        {children}

  
        </Box>
      </div>
  
  );
};

export default Warpper;
