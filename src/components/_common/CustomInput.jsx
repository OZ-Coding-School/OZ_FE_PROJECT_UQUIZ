const DEFUALT_CLASS_NAME = "";

export const CustomInput = ({ type, className, ...rest }) => {
  switch (type) {
    case "radio":
      return (
        <input
          type="radio"
          className={className ?? DEFUALT_CLASS_NAME}
          {...rest}
        />
      );

    default:
      return (
        <input
          type="text"
          className={className ?? DEFUALT_CLASS_NAME}
          {...rest}
        />
      );
  }
};
