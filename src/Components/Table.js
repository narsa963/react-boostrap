
import {Table } from "react-bootstrap";
import CheckBoxes from "./CheckBoxes";


const TableData=() =>{
return (
  <Table responsive>
   <thead >
    <tr>
      <th>Date</th>
      <th>Check</th>
      <th>Isuue Amount</th>
      <th>Paid Amount</th>
      <th>Isuued Payee</th>
      <th>Imaged Payee</th>
      <th>Reason</th>
      <th>Previous Instructions</th>
      <th>Instructions</th>
    </tr>
    HEADER.map(vaue => {
        return <th> </th>
    })
  </thead>
  <tbody>
  Data.map(rowdata => {
    <tr>
        <td>rowdata.date</td> 
        <td>101</td> 
        <td>$1,000.00</td>
        <td>$1,000.00</td>
        <td>Not Enrolled</td>
        <td>Not Enrolled</td>
        <td>DUPLPDITEM</td>
        <td>Pay</td>
        <td><CheckBoxes/></td>
      </tr>
  })
      
  </tbody>
  </Table>
)
}
export default TableData;