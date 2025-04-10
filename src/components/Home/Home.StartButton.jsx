import { CustomButton } from "../_common";

const HomeStartButton = ({ handleButtonClick }) => {
  return (
    <CustomButton
      mode="button"
      className="py-3 px-8 text-base font-bold text-white bg-blue-500 border-none rounded-[8px] cursor-pointer transition-colors duration-300  hover:bg-blue-700"
      onClick={handleButtonClick}
    >
      시작하기
    </CustomButton>
  );
};

export default HomeStartButton;
