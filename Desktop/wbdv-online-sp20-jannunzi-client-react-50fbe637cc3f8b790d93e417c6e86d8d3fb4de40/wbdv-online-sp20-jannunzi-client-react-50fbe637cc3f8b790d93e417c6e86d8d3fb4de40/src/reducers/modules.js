import {DELETE_MODULE, FIND_MODULES_FOR_COURSE} from "../actions/moduleActions";

const modules = [
    {title: 'Course A'},
    {title: 'Course B'},
    {title: 'Course C'},
    {title: 'Course Dd'}
]

const moduleReducer = (state, action) => {
    switch (action.type) {
        case 'CREATE_MODULE':
            return {
                modules: [
                    ...state.modules,
                    action.modules
                ]
            }
        case FIND_MODULES_FOR_COURSE:
            return {
                modules: action.modules
            }
            break;

        case DELETE_MODULE:
            return {
                modules: state.modules.filter(
                    modules => module._id !== action.moduleId
                )
            }
            break;
        default:
            return {
                modules: []
            }
    }
}

export default moduleReducer