import React from "react";

type InputProps = {
  name?: string;
  placeholder?: string;
  type?: string;
  onChange?: any;
  minLength?: any;
  maxLength?: any;
  onClick?: any;
  className?: any;
  errorMessage?: any;
  onBlur?: any;
};

const Input = ({
  name,
  type,
  placeholder,
  onChange,
  maxLength,
  minLength,
  onClick,
  className,
  errorMessage,
  onBlur,
}: InputProps) => {
  return (
    <>
      <div>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          onClick={onClick}
          onChange={onChange}
          minLength={minLength}
          maxLength={maxLength}
          onBlur={onBlur}
          className={`${
            className
              ? className
              : "py-2 border-[2px] px-5 border-blue-500 rounded-md"
          }`}
        />
        {errorMessage && (
          <>
            <div className="text-red-500 font-semibold py-2">
              {errorMessage}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Input;
