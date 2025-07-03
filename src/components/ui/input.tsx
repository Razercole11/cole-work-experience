type InputPropsType = React.InputHTMLAttributes<HTMLInputElement> & {
  placeholder: string;
  customError?: string;
  id: string;
  classname?: string;
  inputType: string;
};

export function Input({
  placeholder,
  id,
  classname,
  customError,
  inputType,
  ...props
}: InputPropsType) {
  return (
    <>
      <label className={`w-full ${classname}`} htmlFor={id}>
        <input
          type={inputType}
          {...props}
          placeholder={placeholder}
          className="px-4 py-2 bg-[#2d2d2d] rounded-full placeholder:text-white/60 w-full"
          id={id}
        />
        {customError && (
          <span className="text-red-500 text-xs pl-4">{customError}</span>
        )}
      </label>
    </>
  );
}
