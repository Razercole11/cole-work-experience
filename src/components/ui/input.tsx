type InputPropsType =  React.InputHTMLAttributes<HTMLInputElement> &{
	placeholder: string;
	id: string;
	classname?: string;
	inputType: string;
};

export function Input({ placeholder, id, classname, inputType, ...props }: InputPropsType) {
	return (
		<label
			className={`w-full ${classname}`}
			htmlFor={id}>
			<input type={inputType}
			{...props}
				placeholder={placeholder}
				className='px-4 py-2 bg-[#2d2d2d] rounded-full placeholder:text-white/60 w-full'
				id={id}
			/>
		</label>
	);
}
