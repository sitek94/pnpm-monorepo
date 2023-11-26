export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className="rounded-md bg-blue-500 px-4 py-2 text-white"
      {...props}
    >
      {children}
    </button>
  )
}

Button.displayName = 'Button'
