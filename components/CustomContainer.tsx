"use client"
interface Props {
  children: React.ReactNode
}
const CustomContainer = ({ children }: Props) => {
  return (
    <div className="h-full container mx-auto max-w-5xl flex-grow px-6">
      {children}
    </div>
  )
}

export default CustomContainer
