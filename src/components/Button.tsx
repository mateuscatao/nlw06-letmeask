import { ButtonHTMLAttributes, ReactNode } from 'react'

import '../styles/button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
  children?: ReactNode;
};

export function Button({
   isOutlined = false,
   ...props
  }: ButtonProps) {
  return (
      <button
        className={`button ${isOutlined ? 'outlined' : ''}`}
        {...props}
      />
  )
}
