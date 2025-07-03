import { ReactNode } from "react";

type buttonPropType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  classname?: string;
};

export function Button({ children, classname, ...props }: buttonPropType) {
  return (
    <>
      <button
        {...props}
        className={`bg-[#242424] w-fit rounded-full p-4 min-w-60 font-bold cursor-pointer hover:bg-amber-700 ${classname}`}
      >
        {children}
      </button>
    </>
  );
}
