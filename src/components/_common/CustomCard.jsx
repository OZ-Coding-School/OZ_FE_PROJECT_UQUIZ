export const CustomCard = ({ children }) => {
  return (
    <div className="flex flex-col items-center gap-4 bg-white p-10 rounded-xl shadow-lg w-[90%] max-w-[400px] my-20 mx-auto">
      {children}
    </div>
  );
};
