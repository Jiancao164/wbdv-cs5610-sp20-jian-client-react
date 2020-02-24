
export const createCourse = async (course) => {
		let response = await fetch("https://wbdv-generic-server.herokuapp.com/api/jannunzi/courses", {
			method: 'POST',
			body: JSON.stringify(course),
			headers: {
				'content-type': 'application/json'
			}
		})
		return await response.json();
	}
export const findAllCourses = async () => {
		let response = await fetch("https://wbdv-generic-server.herokuapp.com/api/jannunzi/courses")
		return await response.json();
	}
export const deleteCourse = async (courseId) => {
		let response = await fetch(`https://wbdv-generic-server.herokuapp.com/api/jannunzi/courses/${courseId}`, {
			method: 'DELETE'
		})
		return await response.json();
	}


