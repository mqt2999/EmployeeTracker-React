import React from "react";

const styles ={
    center:{
        textAlign:"center"
    }
}
function Search(props){
    return(
        <div style={styles.center}> 
              <input type="search" placeholder="Search"  />
        </div>
                  
        
    );
}

export default Search;