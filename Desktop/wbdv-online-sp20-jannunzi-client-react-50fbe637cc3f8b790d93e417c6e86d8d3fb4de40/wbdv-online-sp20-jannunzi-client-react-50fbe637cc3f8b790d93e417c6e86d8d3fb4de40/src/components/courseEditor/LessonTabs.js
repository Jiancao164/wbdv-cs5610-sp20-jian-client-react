import React from "react";
import {connect} from 'react-redux'

class LessonTabs extends React.Component {
    componentDidMount() {
        this.props.findAllLessons()
    }
    state = {
        editingLessonId: '',
        lesson: {
            title: "",
            _id: ''
        }
    }
    render() {
        return (
            <ul className={'nav nav-tabs'}>
                {
                    this.props.lessons && this.props.lessons.map(lesson =>
                        <li className='nav-item' key={lesson._id}>
                            <a className={'nav-link active'}>
                                {this.state.leeson._id !== lesson._id &&
                                <span>
                                    {lesson.title}
                                </span>}
                                {this.state.lesson._id !== lesson._id && <

                                    input
                                        onChange={(e) => {const newTitle = e.target.value
                                            this.setState({

                                            lesson: {...this.state.lesson, title: newTitle}
                                        })}}
                                    value={this.state.lesson.title}/>}
                                    <button onClick={() => {
                                        this.setState(({
                                            lesson: {
                                                title: '',
                                                _id: ''
                                            }
                                        }))
                                        this.props.updateLesson(this.state.lesson)}
                                    }>
                                        Save
                                    </button>
                                <button onClick={() => this.props.deleteLesson(lesson._id)}>
                                    Delete
                                </button>
                                <button onClick={() => {
                                this.setState({
                                    lesson: lesson
                                })}
                                }>
                                    Edit
                                </button>
                            </a>
                        </li>)
                }
                <li className={'nav-item'}>
                    <button onClick={this.props.addLesson}>
                        Add
                    </button>
                </li>
            </ul>
        )
    }
}


const stateToPropertyMapper =     (state) => ({
    lessons: state.lessons.lessons
})

const dispatherToProptertyMapper = (dispather) => ({
    updateLesson: (lesson) =>
        fetch(`http://localhost:3000/api/jian/lessons/${lesson} `, {
            method: 'PUT',
            body: JSON.stringify(lesson),
            headers: {
                'content-type': 'application/json'
            }}).then(response => response.json())
            .then(actualLesson =>
            dispather({
                type:'UPDATE_LESSON',
                lesson: actualLesson
            })),

    addLesson: () =>
        fetch('http://localhost:3000/api/jian/lessons ', {
            method: 'POST',
            body: JSON.stringify({title: 'new lesson'}),
            headers: {
                'content-type': 'application/json'
            }}).then(response => response.json())
            .then(actualLesson =>
                dispather({
                    type: 'CREATE_LESSON',
                    lesson: actualLesson
                })),
    deleteLesson: (lessonId) =>
        fetch(`http://localhost:3000/api/jian/lessons/${lessonId}`, {
                method: 'DELETE'
            }
        ).then(reponse => reponse.json())
            .then(status =>
                dispather({
                    type: 'DELETE_LESSON'
                })

        ),
    findAllLessons: () =>
        fetch('http://localhost:3000/api/jian/lessons ')
            .then(response => response.json())
            .then(lessons =>     dispather({
                type: 'FIND_ALL_LESSONS',
                lessons: lessons
            }))

})
export default connect(
    stateToPropertyMapper,
    dispatherToProptertyMapper
) (LessonTabs)
