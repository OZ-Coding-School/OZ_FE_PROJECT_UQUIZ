import { CustomCard, PageContainer } from "../components/_common";
import { QUIZ } from "../components/Quiz";
import { useQuiz } from "../hooks";

export const Quiz = () => {
  const { selected, questionIndex, handleQuestionIndex, handleOptionSelected } =
    useQuiz();

  return (
    <PageContainer>
      <CustomCard>
        <QUIZ.Title />
        <QUIZ.Questions
          questionIndex={questionIndex}
          handleOptionSelected={handleOptionSelected}
          selected={selected}
        />
        <QUIZ.NextButton handleQuestionIndex={handleQuestionIndex} />
      </CustomCard>
    </PageContainer>
  );
};
