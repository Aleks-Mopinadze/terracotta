import type {ComponentProps, ReactNode} from "react";
import type {LinkProps} from "@tanstack/react-router";



export type ButtonVariant = 'primary' | 'secondary' | 'transparent';

export interface CommonButtonProps {
    variant?: ButtonVariant;
    icon?: ReactNode;
    className?: string;
    children?: ReactNode;
}

interface ButtonAsButtonProps extends CommonButtonProps, ComponentProps<'button'> {
    as?: 'button',
}

interface ButtonAsAnchorProps extends CommonButtonProps, ComponentProps<'a'> {
    as: 'a',
}

interface ButtonAsLinkProps extends CommonButtonProps, Omit<LinkProps, 'children'> {
    as: 'Link';
}

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps | ButtonAsLinkProps;

