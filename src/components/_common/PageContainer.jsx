export const PageContainer = ({ children, ...rest }) => {
  return (
    <main
      className="min-h-dvh flex flex-col justify-center items-center"
      {...rest}
    >
      {children}
    </main>
  );
};
