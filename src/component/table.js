import React from "react";
import TableHeader from "./table_header";
import TableBody from "./table_body";

const Table =  (props)=>{
    const {characterData,removeCharacter} = props;
    return(
        <table>
            <TableHeader/>
            <TableBody characterData={characterData} removeCharacter= {removeCharacter} />
        </table>
    )
}

export default Table;