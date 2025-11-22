import { Link } from "react-router-dom";

function Button({ children, to, className = "", ...rest }) {
  const baseStyles = `
    bg-transparent border-none p-0 m-0 outline-none transition-transform duration-200
    hover:scale-110 hover:underline hover:underline-offset-4
    focus:scale-110 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0C3C34]
    rounded-lg font-poppins font-semibold text-white text-lg px-4 py-2
    ${className}
  `;

  // Si se pasa "to" → el botón actúa como enlace
  if (to) {
    return (
      <Link
        to={to}
        className={baseStyles}
        aria-label={typeof children === "string" ? children : "Enlace"}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  // Si no → es un botón normal
  return (
    <button type="button" className={baseStyles} {...rest}>
      {children}
    </button>
  );
}

export default Button;
