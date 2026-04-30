function Input({className, type, ...props}: React.ComponentProps<"input">) {
  return (
    <input type={type} className={className} {...props}/>
  )
}

export { Input };