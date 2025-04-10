import { CustomCard, PageContainer } from "../components/_common";
import { HOME } from "../components/Home";
import { useStart } from "../hooks";

export const Home = () => {
  const { handleNext, handleNickname, nickname } = useStart();
  return (
    <PageContainer>
      <CustomCard>
        <HOME.Title />
        <HOME.NickName nickname={nickname} handleNickname={handleNickname} />
        <HOME.StartButton handleButtonClick={handleNext} />
      </CustomCard>
    </PageContainer>
  );
};
