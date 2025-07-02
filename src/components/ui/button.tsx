import { ReactNode } from 'react';

type buttonPropType = { children: ReactNode; classname?: string };

export function Button({ children, classname }: buttonPropType) {
	return (
		<>
			<button
				className={`bg-[#242424] w-fit rounded-full p-4 min-w-32 font-bold cursor-pointer hover:bg-amber-700 ${classname}`}>
				{children}
			</button>
		</>
	);
}
