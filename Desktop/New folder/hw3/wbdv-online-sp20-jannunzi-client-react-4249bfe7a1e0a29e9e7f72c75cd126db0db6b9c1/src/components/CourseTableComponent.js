import React from 'react'
import CourseRowComponent from "./CourseRowComponent";
import CourseRowComponentStateful from "./CourseRowComponentStateful";

const CourseTableComponent = ({editCourse, deleteCourse, courses, showEditor}) =>
    <div>
        <h3>Course Table {courses.length}</h3>
        <ul className="list-group">
            {
                courses.map(course =>
                    <CourseRowComponentStateful
                        showEditor={showEditor}
                        editCourse={editCourse}
                        deleteCourse={deleteCourse}
                        key={course._id}
                        course={course}/>
                )
            }
        </ul>
    </div>

export default CourseTableComponent
