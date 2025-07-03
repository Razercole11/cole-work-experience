import React, { ReactNode } from "react";

export function Title({ children }: { children: ReactNode }) {
  return (
    <h1 className="bg-[#3f3f3f] m-auto p-4 text-white mb-4 text-center w-5/6 rounded-full font-bold outline-[0.5px] outline-black shadow-2xl text-4xl">
      {children}
    </h1>
  );
}
