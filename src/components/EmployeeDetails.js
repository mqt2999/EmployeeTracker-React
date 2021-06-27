import React from "react";
import { format } from 'date-fns'

function EmpRow (props) {
    return (
        
     <tbody>
      {props.resultsFilter.map(results => (
        <tr key={results.email}>
          <td><img alt="Employee" src={results.picture.thumbnail} /></td> 
          <td>{results.name.first} {results.name.last}</td>
          <td>{results.phone}</td>
          <td><a href={"mailto:" + results.email}>{results.email}</a></td>
          <td>{ format(new Date(results.dob.date), 'MM/dd/yyyy')}</td>
        </tr>
      ))}
    </tbody>
    )
}
export default EmpRow;