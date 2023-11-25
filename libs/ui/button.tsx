export type ButtonProps = {
  onClick: () => void
  children: React.ReactNode
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className="bg-blue-500 p-4 text-white" {...props}>
      {children}
    </button>
  )
}
