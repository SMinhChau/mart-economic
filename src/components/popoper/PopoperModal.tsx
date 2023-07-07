import {
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
} from "@chakra-ui/react";
import SelectedOption from "@components/select";
import React, {ReactElement, ReactNode} from "react";

interface Props {
    children?: ReactNode;
    buttonClose?: true;
    title?: String;
    contentMenuHeader?: true;
}
const PopoperModal: React.FC<Props> = ({
    children,
    buttonClose,
    title,
    contentMenuHeader,
}) => {
    return (
        <Popover>
            <PopoverTrigger>{children}</PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                {buttonClose && <PopoverCloseButton />}

                {title && <PopoverHeader>{title}</PopoverHeader>}
                <PopoverBody>{contentMenuHeader && "Hellolllll"}</PopoverBody>
            </PopoverContent>
        </Popover>
    );
};

export default PopoperModal;
