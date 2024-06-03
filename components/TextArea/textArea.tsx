import React from "react";

type textAreaProps = {
  placeholder?: string;
  className?: string;
  name?: string;
  onChange?: any;
  errorMessage?: any;
  onBlur?: any;
};
const TextArea = ({
  placeholder,
  className,
  name,
  onChange,
  errorMessage,
  onBlur,
}: textAreaProps) => {
  return (
    <>
      <div>
        <textarea
          onChange={onChange}
          name={name}
          placeholder={placeholder}
          onBlur={onBlur}
          rows={8}
          cols={25}
          className={
            className
              ? className
              : "border-[2px] border-blue-500 rounded-md focus:outline-none p-2"
          }
          id=""
        ></textarea>
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

export default TextArea;
