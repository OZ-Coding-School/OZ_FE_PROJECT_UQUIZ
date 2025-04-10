import { RouteName } from "../../routes";
import { CustomButton } from "../_common";

const ResultsResetButton = () => {
  return (
    <CustomButton
      mode="link"
      to={RouteName.home}
      className="block mx-auto px-8 py-[0.8rem] text-base border-none rounded-[10px] bg-green-600 text-white cursor-pointer transition-colors duration-300 hover:bg-green-700"
    >
      다시 하기
    </CustomButton>
  );
};

export default ResultsResetButton;
