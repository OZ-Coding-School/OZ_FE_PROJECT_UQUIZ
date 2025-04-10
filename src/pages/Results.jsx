import { useParams } from "react-router-dom";
import { CustomCard, PageContainer } from "../components/_common";
import { RESULT } from "../components/Results";

export const Results = () => {
  const params = useParams();
  return (
    <PageContainer>
      <CustomCard>
        <RESULT.Title />
        <RESULT.CurrentResult nickname={params.nickname} />
        <RESULT.RankTable />
        <RESULT.ResetButton />
      </CustomCard>
    </PageContainer>
  );
};
