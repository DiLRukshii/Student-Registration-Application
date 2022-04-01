import React, { Component } from 'react';
import StudentService from './StudentService';

class ListStudentComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            students :[]
        }
        this.addStudent=this.addStudent.bind(this);
        this.updateStudent=this.updateStudent.bind(this);
        this.deleteStudent=this.deleteStudent.bind(this);
    }

    viewStudent(id){
        this.props.history.push(`/view-student/${id}`);
    }

    deleteStudent(id){
        StudentService.deleteStudent(id).then(res=>{
        this.setState({student:this.state.students.filter(student=>student.id!==id)})
        });
    }
    //dakkada? na
    updateStudent(id){
        this.props.history.push(`/update-student/${id}`); 
    }
        
    addStudent(){
        this.props.history.push('/add-student/');
       // console.log(this.state.students);
    }

    componentDidMount(){
        StudentService.getStudents().then((res)=>{
            this.setState({students: res.data});
        });
        //console.log(this.state.students);
    }
    
    render() {
        return (
            <div className='container'>
                <h2 className="text-center"> Student List</h2>
                <div className="row">
                    <button style ={{width:"150px"}}onClick={this.addStudent} className="btn btn-primary">Add Student</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Student First Name</th>
                                <th>Student Last Name</th>
                                <th>Student Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            this.state.students.map(
                                student=>
                                <tr key = {student.id}>
                                    <td>{student.firstName}</td>
                                    <td>{student.lastName}</td>
                                    <td>{student.emailId}</td>
                                    <td>
                                        <button onClick={() => this.updateStudent(student.id)} className="btn btn-info">Update</button>
                                        <button style={{marginLeft:"10px"}} onClick={() => this.deleteStudent(student.id)} className="btn btn-danger">Delete</button>
                                        <button style={{marginLeft:"10px"}} onClick={() => this.viewStudent(student.id)} className="btn btn-info">View</button>
                                    </td>
                                </tr>

                            )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListStudentComponent;