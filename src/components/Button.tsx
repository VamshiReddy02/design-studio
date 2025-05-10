import React from 'react'

type ButtonProps = {
  label? : string;
  onClick?: () => void;
  className?: string; 
}

const Button: React.FC<ButtonProps> = ({
  label = "",
  onClick,
  className = "",
}) => {
  return (
    <button onClick={onClick} className={`bg-white text-neutral-950 border border-white h-10 rounded-full px-6 font-normal ${className}`}>
      {label}
    </button>
  )
}

export default Button