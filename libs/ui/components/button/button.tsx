export type ButtonProps = {
  onClick: () => void
  children: React.ReactNode
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className="bg-red-500 p-4 uppercase text-white" {...props}>
      {children}
    </button>
  )
}
