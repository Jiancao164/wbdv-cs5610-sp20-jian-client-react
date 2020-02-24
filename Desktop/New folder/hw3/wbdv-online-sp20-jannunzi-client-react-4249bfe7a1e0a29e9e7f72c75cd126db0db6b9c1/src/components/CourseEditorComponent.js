import React from 'react'
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";

const CourseEditorComponent = ({hideEditor}) =>
    <div>
        <button onClick={hideEditor}>Close</button>
        <h3>Course Editor</h3>
        <div className={"row"}>
            <div className={"col-3"}>
                <ModuleList modules={[
                    {title: "Course A"}
                ]}/>
            </div>
            <div className={"col-9"}>
                <LessonTabs lessons={[
                    {_id:123, title: "Lesson 1"},
                    {_id:234, title: "Lesson 2"}
                ]}/>
            </div>
        </div>
    </div>

export default CourseEditorComponent