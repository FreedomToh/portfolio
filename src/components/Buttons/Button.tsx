import {ButtonType} from "./buttonParams.ts"
import * as React from "react";
import cn from "classnames";
import styles from "./button.module.less";

interface Props extends React.PropsWithChildren {
    type?: ButtonType
    href?: string
    rightIcon?: React.ReactNode
    leftIcon?: React.ReactNode
    className?: string
    onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

export const Button = React.forwardRef<HTMLButtonElement, Props>(
    (
        {
            children,
            onClick,
            rightIcon,
            leftIcon,
            href,
            className,
            type = ButtonType.primary,
        },
        ref
    ) => {

        const button = (
            <button
                ref={ref}
                type="button"
                onClick={onClick}
                className={cn(
                    styles.root,
                    styles[type],
                    className,
                )}>
                {leftIcon && leftIcon}
                {children && children}
                {rightIcon && rightIcon}
            </button>
        )

        if (href) {
            return (
                <a href={href} onClick={onClick}>
                    {button}
                </a>
            )
        }
        return button
    }
)
