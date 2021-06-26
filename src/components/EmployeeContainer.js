import React from "react";
import EmpRow from "./EmployeeDetails"
const styles ={
    space:{
        marginTop: "5%",
    }
}
function EmpContainer () {
    return (
        <div style={styles.space}>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">DOB</th>
    </tr>
  </thead>
  <EmpRow/>
</table>
</div>
    )
}

export default EmpContainer;