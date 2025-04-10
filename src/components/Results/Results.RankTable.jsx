import { useRank } from "../../contexts/RankContext";

const ResultsRankTable = () => {
  const { rankItems } = useRank();
  return (
    <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden text-center">
      <thead className="bg-gray-100">
        <tr>
          <th className="py-3 px-4 border-b">순위</th>
          <th className="py-3 px-4 border-b">ID</th>
          <th className="py-3 px-4 border-b">점수</th>
        </tr>
      </thead>
      <tbody>
        {rankItems
          .sort((a, b) => b.score / b.total - a.score / a.total)
          .map((item, idx) => (
            <tr key={item.id} className="hover:bg-gray-50 transition">
              <td className="py-2 px-4 border-b">{idx + 1}</td>
              <td className="py-2 px-4 border-b">{item.id}</td>
              <td className="py-2 px-4 border-b">
                {item.score} / {item.total}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default ResultsRankTable;
