// const lessons = [
//     {_id: "123", title: "Lesson A"},
//     {_id: "234", title: "Lesson B"},
//     {_id: "345", title: "Lesson C"},
//     {_id: "456", title: "Lesson D"}]
const lessonReducer = (state = {lessons : lessons}, action) =>{
    switch (action.type) {
        case 'CREATE_LESSON':
            return {
                lessons: [
                    ...state.lessons,
                    action.lesson
                ]
            }
            break;
        case 'DELETE_LESSON':
            return {
                lessons: state.lessons.filter(lesson => lesson._id !== action.lesson)
            }
            break;
        case 'UPDATE_LESSON':
            return {
                lesson: state.lessons.map(lesson =>
                    lesson._id === action.lessonId ? action.lesson : lesson)
            }
            break;
        case 'FIND_ALL_LESSONS':
            return {
                lesson: action.lessons
            }
        default:
            return state
    }

}


export default lessonReducer