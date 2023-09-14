
const Button = ({btword, newClass}) => {
  const buttonClassName = `btn ${newClass}`
  return (
    <button class= {buttonClassName}>{btword}</button>
  )
}
export default Button