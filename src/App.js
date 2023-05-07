import React,{ Component } from 'react';
// import './App.css';
import CourseForm from './Component/CourseForm/CourseForm';
import CourseList from './Component/CourseList/CourseList';
class App extends Component {
   state= {
    Courses :[
     {name: "Html5"},
     {name: "Css3"},
     {name: "JavaScript"},
     {name: "React js"},
    ],
    Current: ""
  }
 
// preventDefault
  handleChange = (e) => {
  this.setState({
    Current : e.target.value
  })
  }
// Add Course
  AddCourse =(e) => {
    e.preventDefault();
   if (e.target.name.value === ""){
      return false;
   }else{
    let {Courses , Current} = this.state;
    Courses.push({name : Current});
    this.setState({Courses : Courses,
                   Current: ""});
   }
  }
  //Delete Course
 DeleteCourse = (index) => {
    console.log(index)
    let {Courses} = this.state;
    Courses.splice(index, 1)
    this.setState({
      Courses : Courses
    })
  }
  EditeCourse = (index, value) => {
    let {Courses} = this.state;
    let course = Courses[index];
    course["name"] = value;
    this.setState({
      Courses : Courses
    })
  }


  render() {
const {Courses} = this.state;
    const ListCourse = Courses.map( (course, index) => {
      return <CourseList details = {course} key={index} index= {index}  DeleteCourse={this. DeleteCourse}  EditeCourse={this.EditeCourse} />
    })
  
  return (
      <div className='App'>
        <h2>Add Course</h2>
        <CourseForm AddCourse={this.AddCourse} handleChange={this.handleChange} currentValue={this.state.Current} />
        <ul>
          {ListCourse }
        </ul>
       </div> 
    )
  }
  
}

export default App;
