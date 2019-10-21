import React, { Component } from 'react';
import axios from 'axios';
import GridView from './GridView';
import * as constants from '../Constants/MyConstants';

class GridMain extends Component{
    state = {
        employees: [],
        id:null,
        name:'',
        salary:'',
        job:''
      }

componentDidMount = () =>{
    axios.get(constants.FETCH_URL).then(res=>res.data).then((data) =>{
        this.setState({ 
            employees: data
        });
    });
}

nameHandler = (e) =>{
    this.setState({
        name:e.target.value
    })
}

salaryHandler = (e) =>{
    this.setState({
        salary:e.target.value
    })
}

jobHandler = (e) =>{
    this.setState({
        job:e.target.value
    })
}

handleSubmit = (e) =>{
    e.preventDefault();
    if(this.state.name){
    let id = this.state.employees.length + 1;
    let emp = {
        id:id,
        name:this.state.name,
        salary:this.state.salary,
        job:this.state.job
    }
    axios.post(constants.ADD_URL, emp);
    let empList = this.state.employees;
    empList.push(emp);
    this.setState({
        employees:empList,
        id:null,
        name:'',
        salary:'',
        job:''
    });
}
else alert("ENTER DETAILS");
}

deleteRecord = (id) =>{
    axios.get(constants.DELETE_URL+'/'+id);
    let emp = this.state.employees;
    for(let i = 0; i<emp.length; i++){
        if(emp[i].id === id){
            emp.splice(i,1);
        }
    }
    this.setState({
        employees:emp
    })
}

    render(){
        return(
            <GridView 
            employees={this.state.employees} 
            deleteRecord={this.deleteRecord}
            nameHandler={this.nameHandler}
            salaryHandler={this.salaryHandler}
            jobHandler={this.jobHandler}
            handleSubmit={this.handleSubmit}
            name={this.state.name}
            salary={this.state.salary}
            job={this.state.job}
            />
        )
    }
}
export default GridMain;