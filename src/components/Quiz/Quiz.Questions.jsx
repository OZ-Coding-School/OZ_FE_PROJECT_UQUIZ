import QUESTIONS from "../../assets/data/questions.json";
import { CustomInput, CustomTitle } from "../_common";

const QuizQuestions = ({ questionIndex, handleOptionSelected, selected }) => {
  return (
    <div onClick={handleOptionSelected}>
      <CustomTitle
        type="h2"
        className="text-[1.3rem] font-bold text-[#333] mb-4"
      >
        {questionIndex + 1}. {QUESTIONS[questionIndex].question}
      </CustomTitle>
      {QUESTIONS[questionIndex].options.map((element, idx) => (
        <label
          key={idx}
          id={idx}
          className="block mb-3 px-4 py-[0.8rem] rounded-lg bg-[#f1f3f5] cursor-pointer transition duration-200 ease-in-out hover:bg-[#e9ecef] hover:scale-[1.01]"
        >
          <CustomInput
            type="radio"
            className="mr-2"
            value={idx}
            checked={idx === selected}
            name="answer"
            onChange={() => {}}
          />{" "}
          {element}
        </label>
      ))}
    </div>
  );
};

export default QuizQuestions;
