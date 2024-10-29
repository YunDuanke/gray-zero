import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import classNames from "classnames";

// 定义按钮尺寸和类型
export type ButtonSize = "lg" | "sm";
export type ButtonType = "primary" | "default" | "danger" | "link";

// 定义props接口
interface BaseButtonProps {
  className?: string;
  /**设置 Button 的禁用 */
  disabled?: boolean;
  /**设置 Button 的尺寸 */
  size?: ButtonSize;
  /**设置 Button 的类型 */
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>; //定义button的类型 联合React自带的button属性
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>; //定义a标签的类型 联合React自带的a标签属性
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>; // ts高级类型Partial: 用于将对象类型中的所有属性变为可选属性

export const Button: FC<ButtonProps> = (props) => {
  const { btnType, className, size, children, href, disabled, ...restProps } =
    props;
  // btn, btn-lg, btn-primary
  const classes = classNames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === "link" && disabled,
  });
  if (btnType === "link" && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: "default",
};

export default Button;
