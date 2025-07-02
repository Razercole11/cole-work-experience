import React, { ReactNode } from "react";

export function Title({children}:{children:ReactNode}){
    return(
        <h1 className="bg-[#3f3f3f] p-4 text-white w-fit justify-self-center mb-4 min-w-5/6 text-center rounded-full font-bold outline-[0.5px] outline-black shadow-2xl text-4xl" >{children}</h1>
    )
};