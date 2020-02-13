import React from "react";
import ModuleListItem from "../components/courseEditor/ModuleListItem";
import {connect} from 'react-redux'
import {COURSES_MODULES_API_URL} from "../common/constants";
import {createModule, findModuleForCourse} from "../services/ModuleService";
import {FIND_MODULES_FOR_COURSE} from "../actions/moduleActions";
import ModuleListComponent from "../components/courseEditor/ModuleListComponent";

const stateToPropertyMapper = (state) => ({
    modules: state.modules.modules
})

const dispatchToPropertyMapper =(dispatch) => ({
    createModule: (courseId) => {
        createModule(courseId, {title: 'New Module'})
            .then(actualModule => dispatch(createModule(actualModule)))
    },
    findModulesForCourse: (courseId) => {


        findModuleForCourse(courseId)
            .then(modules => dispatch(findModuleForCourse(courseId)))

    }

})

const ModuleListContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(ModuleListComponent)

export default ModuleListContainer