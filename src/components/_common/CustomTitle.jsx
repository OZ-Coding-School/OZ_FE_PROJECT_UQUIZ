const DEFAULT_CLASS_NAME = "text-[2rem] font-GowunBatang font-bold";

export const CustomTitle = ({ type, children, className, ...rest }) => {
  switch (type) {
    case "h1":
      return (
        <h1 className={className ?? DEFAULT_CLASS_NAME} {...rest}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={className ?? DEFAULT_CLASS_NAME} {...rest}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={className ?? DEFAULT_CLASS_NAME} {...rest}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 className={className ?? DEFAULT_CLASS_NAME} {...rest}>
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5 className={className ?? DEFAULT_CLASS_NAME} {...rest}>
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6 className={className ?? DEFAULT_CLASS_NAME} {...rest}>
          {children}
        </h6>
      );
    default:
      throw new Error("Title 타입이 잘못되었습니다.");
  }
};
