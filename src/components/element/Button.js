import React from 'react';

const Button = React.forwardRef(function Button(
  {
    text,
    onClick,
    customStyles,
    icon,
    iconSVG,
    iconAlt,
    iconWidth,
    iconHeight,
    disabled,
    href,
    type,
  },
  ref,
) {
  return (
    <button
      type={type}
      href={href}
      ref={ref}
      disabled={disabled}
      className={`${
        customStyles ||
        'text-base rounded-lg bg-primary-blue text-white w-full hover:bg-primary-blue/80 py-3 px-4'
      } flex items-center justify-center`}
      onClick={onClick}
    >
      {icon && (
        <img
          src={icon}
          alt={iconAlt}
          width={iconWidth || 10}
          height={iconHeight || 10}
          priority="true"
        />
      )}

      {iconSVG && iconSVG}

      {text && <span className={icon && 'mx-2'}>{text}</span>}
    </button>
  );
});

export default Button;
