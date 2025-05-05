const Main = ({ children }: { children: React.ReactNode }) => {
  console.log("hello");
  return (
    <div className="flex flex-col items-center justify-center h-full">
      {children}
    </div>
  );
};

export default Main;
