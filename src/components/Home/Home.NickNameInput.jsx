import { CustomInput } from "../_common";

const HomeNickNameInput = ({ nickname, handleNickname }) => {
  return (
    <CustomInput
      type="text"
      className="block w-full px-4 py-3 text-base border border-gray-300 rounded-lg transition duration-200 ease-in-out focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/25"
      placeholder="닉네임을 입력하세요."
      value={nickname}
      onChange={handleNickname}
    />
  );
};

export default HomeNickNameInput;
