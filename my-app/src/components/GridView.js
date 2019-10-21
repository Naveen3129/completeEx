import React, {Component} from 'react';

class GridView extends Component{
render(){
    const {employees, deleteRecord, nameHandler, salaryHandler, jobHandler, handleSubmit,
            name, salary, job} = this.props;
    const newEmployees = (employees.length > 0)? employees.map(emp=>{
        return (
            <div key={emp.id} className="card">
            <div className="container">
                <h4>NAME: {emp.name}</h4>
                <h5>JOB: {emp.job}</h5>
                <h5>SALARY: {emp.salary}</h5>
                <input onClick={() => {deleteRecord(emp.id)}} type="button" value="DELETE"/>
                <input type="button" value="EDIT"/>
                </div>
            </div>
        )
    }) : (<div><h3> NO RECORDS FOUND </h3></div>);
    return(
        <div>
           
           <form onSubmit={handleSubmit} className="form">
               <label className="label">ENTER NAME:</label>
               <input type="text" onChange={nameHandler} value={name}></input><br></br>
               <label className="label">ENTER SALARY:</label>
               <input type="number" onChange={salaryHandler} value={salary} ></input><br></br>
               <label className="label">ENTER JOB:</label>
               <input type="text" onChange={jobHandler} value={job} ></input><br></br>
               <input type="submit" value="SUBMIT"/>
           </form>
           {newEmployees}
        </div>
    );
}
}

export default GridView;