import React, { useState } from 'react';

const PasswordInput = React.forwardRef(function Input(
  { placeholder, disabled, ...props },
  ref,
) {
  const [show, setShow] = useState(false);

  return (
    <div className="input-wrapper rounded-lg flex items-center justify-between  w-full text-gray-1 text-base py-3 px-2 border border-stroke-black focus-within:border-2 focus-within:border-primary-blue">
      <input
        className="flex-1"
        ref={ref}
        type={show ? 'text' : 'password'}
        placeholder={placeholder}
        disabled={disabled}
        {...props}
      />
      <div
        className="ml-2 cursor-pointer capitalize text-base text-primary-blue"
        onClick={() => setShow(!show)}
      >
        {show ? 'hide' : 'show'}
      </div>
    </div>
  );
});

export default PasswordInput;
