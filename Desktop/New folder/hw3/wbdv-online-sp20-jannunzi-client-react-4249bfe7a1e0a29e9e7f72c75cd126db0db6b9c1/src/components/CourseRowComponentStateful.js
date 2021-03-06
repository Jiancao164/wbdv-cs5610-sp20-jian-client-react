import React from "react";

class CourseRowComponentStateful extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        active: false,
        course: this.props.course
    }
    editCourse = () => {
        this.setState(prevState => ({
            active: !prevState.active
        }))
    }
    saveCourse = () => {
        this.setState(prevState => ({
            active: !prevState.active
        }))
    }
    updateForm = (event) => {
        this.setState({
            course: {
                title: event.target.value
            }
        })
    }
    render() {
        return(
            <li className={`list-group-item ${this.state.active?'active':''}`}
                >
                {
                    !this.state.active &&
                    <a onClick={this.props.showEditor} href={"#"}>
                        {this.state.course.title}
                    </a>
                }
                {this.state.active && <input onChange={this.updateForm} value={this.state.course.title}/>}
                {
                    !this.state.active && <button onClick={() => this.editCourse()}>edit</button>}
                {
                    this.state.active && <span>

                        <button onClick={(event) => this.props.deleteCourse(this.props.course)}>Delete</button>
                        <button onClick={() => this.saveCourse()}>save</button>
                    </span>
                }
            </li>
        )
    }
}
    
export default CourseRowComponentStateful
