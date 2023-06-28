import React from "react";

function InputBasic({
  register,
  className,
  inputClassName,
  placeholder,
  type,
  name,
  label,
}) {
  return (
    <label className={`font-mulish text-lg my-2 ${className}`}>
      {label}
      <input
        {...register(name)}
        type={type}
        min={2}
        required
        placeholder={placeholder}
        className={`input rounded-full shadow-custom w-full font-roboto font-normal p-4 ${inputClassName}`}
      />
    </label>
  );
}

export default InputBasic;
