import React from 'react'
import CourseHeadingComponent from "../components/CourseHeadingComponent";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import CourseService from "../services/CourseService";
import ModuleList from "../components/ModuleList";
import CourseEditorComponent from "../components/CourseEditorComponent";
import {createCourse, deleteCourse, findAllCourses} from "../services/CourseService";


class CourseManagerContainer extends React.Component {
    state = {
        layout: 'table',
        newCourseTitle: 'New Course',
        courses: [],
        showEditor: false
    }

    componentDidMount = async () => {
        const courses = await findAllCourses();
        this.setState({
            courses: courses
        })
        // courseService.findAllCourses()
        //     .then(courses => {
        //         this.setState({
        //             courses: courses
        //         })
        //     })
    }

    deleteCourse = async (deletedToCourse) => {
        const status = await deleteCourse(deletedToCourse._id);
        const courses = await findAllCourses();
        this.setState({
            courses: courses
        })
        // courseService.deleteCourse(deletedToCourse._id)
        //     .then(status => {
        //         return courseService.findAllCourses()
        //     })
        //     .then(courses => {
        //         this.setState({
        //             courses: courses
        //         })
        //     })

        // this.setState(prevState => ({
        //         courses: prevState.courses.filter(course =>
        //             course._id !== deletedToCourse._id
        //         )
        //     })
        // )
    }

    addCourse = async () => {
        const status = await createCourse({title : this.state.newCourseTitle});
        const courses = await findAllCourses();
        this.setState({
            courses: courses
        })
        // courseService.createCourse({
        //     title: this.state.newCourseTitle
        // }).then(actual => {
        //     return courseService.findAllCourses()
        // })
        // .then(courses => {
        //     this.setState({
        //         courses: courses
        //     })
        // })

        // this.setState(prevState => ({
        //     courses: [
        //         ...prevState.courses,
        //         {
        //             _id: (new Date()).getTime() + '',
        //             title: prevState.newCourseTitle
        //         }
        //     ]
        // })
        // )
    }

    toggle = () => {
        this.setState(prevState => ({
            layout: prevState.layout === 'grid' ? 'table': 'grid'
        }))
    }

    updateFormState = (event) => {
        console.log(event.target.value)
        this.setState({
            newCourseTitle: event.target.value
        })
    }

    editCourse = (course) => {
        this.setState(prevState => ({
            courses: prevState.courses.map(c => {
                c.editing = false
                if(c._id === course._id) {
                    c.editing = true
                } else {
                    c.editing = false
                }
                return c
        })}))
    }

    showEditor = () => {
        this.setState({
            showEditor : true
        })
    }

    hideEditor = () => {
        this.setState({
            showEditor : false
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <h1>Course Manager</h1>
                {
                    this.state.showEditor &&
                    <CourseEditorComponent hideEditor={this.hideEditor}/>
                }
                {
                    !this.state.showEditor &&
                        <div>
                            <CourseHeadingComponent/>
                            <input
                            onChange={this.updateFormState}
                            value={this.state.newCourseTitle}
                            placeholder="New Course Title"/>
                            <button onClick={this.addCourse}>Add</button>
                            <button onClick={this.toggle}>Toggle</button>
                        {
                            this.state.layout === "grid" &&
                            <CourseGridComponent
                            deleteCourse={this.deleteCourse}
                            courses={this.state.courses}/>
                        }
                        {
                            this.state.layout === "table"  &&
                            <CourseTableComponent
                                showEditor={this.showEditor}
                                editCourse={this.editCourse}
                                deleteCourse={this.deleteCourse}
                                courses={this.state.courses}/>
                        }
                        </div>
                }
            </div>
        );
    }
}

export default CourseManagerContainer
