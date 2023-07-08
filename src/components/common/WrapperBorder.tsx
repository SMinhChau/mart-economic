import React, {ReactNode} from "react";
import styles from "@components/common/WrapperBorder.module.scss";
import Warpper from "@pages/warpper";
import {Box, ResponsiveValue, SystemStyleObject} from "@chakra-ui/react";

interface Props {
    children: ReactNode;
    mt?: string;
    borderNon?: true;
}
const WrapperBorder: React.FC<Props> = ({children, mt, borderNon}) => {
    return (
        <Warpper>
            <Box
                className={styles.content}
                mt={mt}
                borderTop={borderNon ? "none" : "-moz-initial"}
            >
                {children}
            </Box>
        </Warpper>
    );
};

export default WrapperBorder;
