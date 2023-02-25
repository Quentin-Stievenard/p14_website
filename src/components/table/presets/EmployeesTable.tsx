import { useGlobalState } from "../../../GlobalState"
import {TableWrapper} from "@metyx/typescript-table";
/**
 * 
 */
export default function EmployeesTable() {
  //
  const cols: Array<string> = 
    ["First Name", "Last Name", "Start Date", "Date of Birth",
    "Street", "City", "State", "Zip Code",  "Department"]
  //
  const { state } = useGlobalState()
  const items:Array<Array<string>> = state.map(employee => { 
    if(employee !== undefined) {
      return Object.values(employee)
    }else return []
  })
  return(
    <TableWrapper id="currentEmployeesTable" cols={cols} items={items} />
  )
}