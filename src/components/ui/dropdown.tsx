export type dropdownPropsType =
    React.SelectHTMLAttributes<HTMLSelectElement> & {
        className?: string;
        options: readonly { value: string; label: string | number }[];
    };

export function Dropdown({ options, className, ...props }: dropdownPropsType) {
    return (
        <select
            className={`bg-[#2d2d2d] p-2 rounded-full ${className}`}
            {...props}>
            {options.map((option, idx) => {
                return (
                    <option
                        key={idx}
                        value={option.value}>
                        {option.label}
                    </option>
                );
            })}
        </select>
    );
}
