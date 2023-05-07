import React from "react";

const CourseForm = (props) => {
     
const {AddCourse , handleChange , currentValue} = props

    return(
            <form onSubmit={AddCourse}>
                 <input  type="text" onChange={handleChange} value={currentValue} id="name"/>
                 <button type="submit" className="addBtn">Add Course</button>
            </form> 
          
    )
}
export default CourseForm;

