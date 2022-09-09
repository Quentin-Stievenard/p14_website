import { SetStateAction } from "react"
/**
 * Used to standardize the style and usage of input texts in all our forms.
 */
export default function TextInput({name, setFunction, required}:Props) {
  return(
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>{name}</label>
      <input type="text" id={name} name={name} 
        onChange={(event) => {setFunction(event.target.value)}} 
        className="border-2 border-black p-1 text-sm"
        required={required ? true : false}>
      </input>
    </div>
  )
}
interface Props {
  name: string,
  setFunction: React.Dispatch<SetStateAction<string>>,
  required?: boolean
}