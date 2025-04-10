import { useEffect, useState } from "react";
import { useRank } from "../../contexts/RankContext";
import { CustomTitle } from "../_common";

const ResultsCurrentResult = ({ nickname }) => {
  const { rankItems } = useRank();
  const [myEntry, setMyEntry] = useState({ id: nickname, score: 0, total: 0 });

  useEffect(() => {
    const entry = rankItems.find((r) => r.id === nickname);
    if (entry) {
      setMyEntry(entry);
    }
  }, [rankItems, nickname]);

  return (
    <>
      <CustomTitle type="h2">📊 퀴즈 결과</CustomTitle>
      <p className="text-[1.2rem] text-center my-4">
        내 점수: {myEntry.score} / {myEntry.total}
      </p>
    </>
  );
};

export default ResultsCurrentResult;
