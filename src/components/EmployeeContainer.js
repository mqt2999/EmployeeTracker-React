import React from "react";
import EmpRow from "./EmployeeDetails"
const styles ={
    space:{
        marginTop: "5%",
    }
}
function EmpContainer (props) {
    return (
        <div style={styles.space}>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th className="pb-2" scope="col">Name   <button className='btn btn-sm px-0' onClick={props.handleSort}><i className="bi bi-arrow-down-up"></i></button></th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">DOB</th>
    </tr>
  </thead>
  <EmpRow {...props}/>
</table>
</div>
    )
}

export default EmpContainer;