import { CustomButton } from "../_common";

const QuizNextButton = ({ handleQuestionIndex }) => {
  return (
    <CustomButton
      mode="button"
      className="mt-8 w-full py-[0.9rem] text-base font-bold bg-blue-500 text-white rounded-[10px] cursor-pointer transition-colors duration-300 hover:bg-blue-700"
      onClick={handleQuestionIndex}
    >
      다음
    </CustomButton>
  );
};

export default QuizNextButton;
