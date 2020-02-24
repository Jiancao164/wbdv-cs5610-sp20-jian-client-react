import React from 'react'
import ModuleListItem from "./ModuleListItem";

const ModuleList = ({modules}) =>
    <ul>
        <ModuleListItem module={{title: "Cs201"}}/>
        {
            modules.map(module =>
            <ModuleListItem module={module}/>)
        }
    </ul>


export default ModuleList