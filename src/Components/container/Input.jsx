import React, { forwardRef, useId } from "react";

const Input = forwardRef(
  (
    { label, type = "text", name, placeholder, className = "", ...props },
    ref
  ) => {
    const id = useId();
    return <div className="w-full">
        {label &&<label className="inline-block mb-1 pl-1" htmlFor={id}>{label}</label>}
        <input
          id={id}
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
          {...props}
        />
    </div>;
  }
);

export default Input;
