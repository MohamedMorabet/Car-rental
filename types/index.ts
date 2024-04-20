import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    hundleClick?: MouseEventHandler<HTMLButtonElement>;
}