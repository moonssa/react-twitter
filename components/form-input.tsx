import type { UseFormRegisterReturn } from "react-hook-form";
interface FormInputProps {
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
  errors: string[];
  register: UseFormRegisterReturn;
}

export default function FormInput({
  name,
  type,
  placeholder,
  required,
  register,
  errors,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <input
        className="w-full h-10 transition bg-transparent border-none rounded-md focus:outline-none ring-2 focus:ring-4 ring-neutral-200 focus:ring-blue-500 placeholder:text-neutral-400"
        id={name}
        type={type}
        placeholder={placeholder}
        required={required}
        {...register}
      />
      {errors.map((error, index) => (
        <span key={index} className="font-medium text-red-500">
          {error}
        </span>
      ))}
    </div>
  );
}
