import { Link } from "react-router-dom";

const DEFAULT_CLASS_NAME = "";

export const CustomButton = ({ mode, children, className, ...rest }) => {
  switch (mode) {
    case "link":
      return (
        <Link className={className ?? DEFAULT_CLASS_NAME} {...rest}>
          {children}
        </Link>
      );
    case "button":
      return (
        <button
          type="button"
          className={className ?? DEFAULT_CLASS_NAME}
          {...rest}
        >
          {children}
        </button>
      );
    case "submit":
      return (
        <button
          type="submit"
          className={className ?? DEFAULT_CLASS_NAME}
          {...rest}
        >
          {children}
        </button>
      );
    default:
      throw new Error("Button 타입이 잘못되었습니다.");
  }
};
