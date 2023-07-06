import React, {ReactNode} from "react";
import styles from "@components/common/wrapperBorder.module.scss";
import Warpper from "@pages/warpper";
import {Box} from "@chakra-ui/react";

interface Props {
    children: ReactNode;
    mt?: string;
}
const WrapperBorder: React.FC<Props> = ({children, mt}) => {
    return (
        <Warpper>
            <Box className={styles.content}>{children}</Box>
        </Warpper>
    );
};

export default WrapperBorder;
