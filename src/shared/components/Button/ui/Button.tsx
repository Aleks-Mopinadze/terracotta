import type {ButtonProps} from "../types";
import {DEFAULT_VARIANT} from "../constants";
import { Link } from "@tanstack/react-router";
import clsx from "clsx";

import styles from './Button.module.css'


export const Button: React.FC<ButtonProps> =
    ({
         variant = DEFAULT_VARIANT,
         icon,
         className,
         children,
         ...props
     }) => {

    const classes = clsx(styles.button, styles[variant], className);


    if(props.as === 'Link') {
        return <Link className={classes} {...props}>
            {icon && <span className={styles.icon}> {icon} </span>}
            {children}
        </Link>
    }

    if(props.as === 'a') {
        return <a className={classes} {...props}>
            {icon && <span className={styles.icon}>{icon}</span>}
            {children}
        </a>
    }

    return <button className={classes} {...props}>
        {icon && <span className={styles.icon}>{icon}</span>}
        {children}
    </button>
}