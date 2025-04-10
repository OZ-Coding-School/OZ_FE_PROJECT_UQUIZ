import { CustomButton } from "../components/_common";
import QuizIcon from "../assets/icons/uquiz.svg";
import { RouteName } from "../routes";

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800 px-6 text-center">
      <h1 className="text-6xl font-extrabold mb-4 animate-bounce">404</h1>
      <h2 className="text-2xl font-semibold mb-2">
        페이지를 찾을 수 없어요 😢
      </h2>
      <p className="mb-6 text-gray-500">
        존재하지 않는 경로이거나, 이동된 페이지입니다.
      </p>

      <img
        src={QuizIcon}
        alt="Not Found Illustration"
        className="w-72 mb-10 opacity-90"
      />

      <CustomButton
        mode="link"
        to={RouteName.home}
        className="px-6 py-3 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition"
      >
        홈으로 돌아가기
      </CustomButton>
    </div>
  );
};
