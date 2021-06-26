import React from "react";
const styles = {
    center: {
        margin: 20,
        textAlign:"center",
    },
};

function Header() {
  

  return(
    <div style={styles.center} class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1  class="display-4">Employee Tracker</h1>
    
  </div>
 
</div>


  )
}

export default Header;