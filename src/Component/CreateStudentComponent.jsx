import React, { Component } from 'react';
import StudentService from './StudentService'; // meka kalin thibbada meka kwe service eka?oo ko dn?
class CreateStudentComponent extends Component {
    constructor(props){
        super(props);
        
        this.state={//step-2
            // id: this.props.match.params.id,
            firstName:'',
            lastName:'',
            emailId:''
        }

        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.saveStudent=this.saveStudent.bind(this);
        }
        //step-3
    // componentDidMount(){

    //     //step-4
    //     if(this.state.id==-1){
    //         return //what is returning here? student list page
    //     }
    //     else{
    //         StudentService.getStudentById(this.state.id).then((res)=>{
    //             let student=res.data;
    //             this.setState({firstName:student.firstName,
    //             lastName:student.lastName,
    //             emailId:student.emailId});
    //         });
    //     }
            
    // }

    saveStudent=(e)=>{
        e.preventDefault();
        let student={firstName:this.state.firstName,lastName:this.state.lastName,emailId:this.state.emailId};
        console.log('student =>' + JSON.stringify(student));

        //step-5
        //if(this.state.id==-1){
            StudentService.createStudent(student).then(res=>{
            this.props.history.push('/students');
            });
        //});

        // }
        // else{
        //     StudentService.updateStudent(student,this.state.id).then(res=>{
        //         this.props.history.push('/students');
        //     });
        }  
    //}

    changeFirstNameHandler=(event)=>{
        this.setstate({firstName:event.target.value});
    }

    changeLastNameHandler=(event)=>{
        this.setstate({lastName:event.target.value});
    }

    changeEmailHandler=(event)=>{
        this.setstate({emailId:event.target.value});
    }
    //Cancel :D meh lassana balan natuwa oka hadala denko issellama podi de idala igena gena hitapn
    cancel(){
        this.props.history.push('/students');
    } 

    // getTitle(){
    //     if(this.state.id==-1){
    //         <h3 className="text-center"> Add Student</h3>
    //     }
    //     else{
    //         return <h3 className="text-center"> Update Student</h3>
    //     }
    // }

    render(){
        return (
            <div>
              <div className="container">
                 <div className="row">
                     <div className="card col-md-6 offset-md-3 offset-md-3">
                         {/* {
                             this.getTitle()
                         } */}
                         <h3 className='text-center'> Add Student</h3>
                         <div className="card-body">
                             <form>
                                 <div className="form-group">
                                     <label>First Name</label>
                                    <input placeholder='First Name' name='firstName' className="form-control"  
                                    value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                 </div>
                                 <div className="form-group">
                                     <label>Last Name</label>
                                    <input placeholder='Last Name' name='lastName' className="form-control"  
                                    value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                 </div>
                                 <div className="form-group">
                                     <label>Email Id</label>
                                    <input placeholder='Email Address' name='emailId' className="form-control"  
                                    value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                 </div>
                                 <button className="btn btn-success" onClick={this.saveStudent}>Save</button>  
                                 <button className="btn btn-danger" onClick={this.cancel.bind(this)}style={{marginLeft:"10px"}}>cancle</button>                        
                                 </form>
                         </div>
                     </div>
                     

                 </div>

             </div>
            </div>
        );
    }
}

export default CreateStudentComponent;