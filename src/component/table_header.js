import React from "react";

const TableHeader =()=>{
    return(
        <thead className ="table_header">
            <tr>
                <th>custname</th>
                <th>City</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Remove</th>
            </tr>
        </thead>
    )
}
export default TableHeader;