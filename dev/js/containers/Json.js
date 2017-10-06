import React ,  { Component } from 'react';
// import {map} from '../containers/map'




var data =[{
  "id": 1,
  "first_name": "Jeanette",
  "last_name": "Penddreth",
  "email": "jpenddreth0@census.gov",
  "gender": "Female",
  "ip_address": "26.58.193.2"
}, {
  "id": 2,
  "first_name": "Giavani",
  "last_name": "Frediani",
  "email": "gfrediani1@senate.gov",
  "gender": "Male",
  "ip_address": "229.179.4.212"
}, {
  "id": 3,
  "first_name": "Noell",
  "last_name": "Bea",
  "email": "nbea2@imageshack.us",
  "gender": "Female",
  "ip_address": "180.66.162.255"
}, {
  "id": 4,
  "first_name": "Willard",
  "last_name": "Valek",
  "email": "wvalek3@vk.com",
  "gender": "Male",
  "ip_address": "67.76.188.26"
}];

class JSON_Test extends Component  {
    constructor(props){
    super(props);
    this.state = {data};
console.log("data");
console.log(this.state.data[0].id + "---"+this.state.data[0].first_name);
console.log(this.state.data[1].id+ "---"+this.state.data[1].first_name);
console.log(this.state.data[2].id+ "---"+this.state.data[2].first_name);
console.log(this.state.data[3].id+ "---"+this.state.data[3].first_name);
  }
//--start
render(){
  return (
  <div>
    Value of the input : {this.state.data[0].first_name}
  </div>
);
}
//--end
}
export default JSON_Test;
