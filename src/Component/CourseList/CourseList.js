import React, { Component } from "react";
import { MdDeleteForever, MdEditSquare, MdOutlineUpdate } from "react-icons/md";

class CourseList extends Component{
    
   state={
    isEdite: false
}

//renderCourse
renderCourse = () => {
    const { DeleteCourse , index } = this.props
   return(
        <li>
            <span>{this.props.details.name} </span>
			 <button className="editBtn" onClick={() => this.ToggleState()}> <MdEditSquare /></button>
			 <button className="deleteBtn" onClick={() => { DeleteCourse(index) }}> <MdDeleteForever /> </button>
        </li>
      )
    }
// Toggle State
ToggleState = () => {
    let {isEdite} = this.state;
    this.setState({
        isEdite : !isEdite
    })
}
//  UpdateForm
UpdateForm = (e) => {
    e.preventDefault();
    this.props. EditeCourse(this.props.index , this.input.value);
    this.ToggleState();

}

//render Update Form
renderUpdateForm= () => {
    return(
        <form onSubmit={this.UpdateForm}>
            <input type="text" ref= {(v) => {this.input = v}} defaultValue={this.props.details.name} />
						<button className="updateBtn"> <MdOutlineUpdate className="updateBtnIcon"/> Update </button>
        </form>
    )
    }


    render(){
        let {isEdite} = this.state
         return(
             
           <React.Fragment> 
               {isEdite ? this.renderUpdateForm() :  this.renderCourse()}

            </React.Fragment> 
         )
    }
}

export default CourseList;