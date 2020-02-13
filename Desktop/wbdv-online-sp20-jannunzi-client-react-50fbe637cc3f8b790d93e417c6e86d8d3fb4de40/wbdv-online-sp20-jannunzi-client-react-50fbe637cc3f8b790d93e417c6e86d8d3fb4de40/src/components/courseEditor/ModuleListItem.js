import React from "react";
import {connect} from 'react-redux'
import {MODULES_API_URL} from '../../common/constants'
const ModuleListItem = ({save, edit, editing, module, select, deleteModule, active}) =>
    <li
        onClick={select}
        className={`list-group-item ${active? 'active': ""}`}>
        {module.title}
        {editing &&
        <span><botton onClick={() => deleteModule(module._id)} className="float-right">
            Delete
        </botton >
            <button onClick={save}>
                Save
            </button>
        </span>}
        {!editing &&<button onClick={edit}>
            Edit
        </button>}
    </li>

const stateToPropertyMapper =(state) => {}
const dispatchToPropertyMapper =(dispatch) => {
    return ({
        deleteModule: (moduleId) => {
            fetch(`${MODULES_API_URL}/${moduleId}`, {
                method: 'DELETE'
            }).then(response => response.json())
                .then(status => dispatch({
                    type: 'DELETE_MODULE',
                    moduleId: moduleId
                }))
        }
    });
}

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper

)
(ModuleListItem)
