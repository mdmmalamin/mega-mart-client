import { ReactNode } from "react";


const Container = ({children}: {children: ReactNode}) => {
  return (
    <div className="max-w-[1200px] mx-auto px-2 xl:px-0">
      {children}
    </div>
  );
};

export default Container;