import React from "react";

const styles = {
    center: {
        textAlign: "center"
    }
}
function Search(props) {
    return (
        <form className="form-inline d-flex justify-content-center">
            <input
                value={props.Search}
                onChange={e => props.handleFormSubmit(e)}
                name="search"
                type="search"
                placeholder="Search"
                aria-label="Search"
            />
        </form>
    )
}

export default Search;