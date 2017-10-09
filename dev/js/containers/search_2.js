// this example of using search


import React, {Component} from 'react'
import SearchInput, {createFilter} from 'react-search-input'
import emails from './items'//Json file

//JSON
// id: 1,
// user: {
//   name: 'Mathieu',
//   job: 'Software Engineer',
//   company: 'Enki'
// },
// subject: 'Hi!',
// dest: [
//   {
//     name: 'Bruno',
//     job: 'CTO',
//     company: 'Enki'
//   },
//end
const KEYS_TO_FILTERS = ['item_name', 'item_color']
// const KEYS_TO_FILTERS = ['user.name', 'subject', 'dest.name']

class App2 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
      // , data:{emails}
      // , data_1:{dataEx}
    };
    //update state for Term whenver user type somthing
    this.searchUpdated = this.searchUpdated.bind(this)
    // console.log("----ttttttt11----");
    // console.log(this.state.data);
    // console.log(this.state.data[0].item.item_color);
    // console.log(this.state.data.item_color);
    // console.log(dataEx[0].first_name);

// this.state.data[2].id+ "---"+this.state.data[2].first_name);

    // console.log(emails);
  // console.log("----ttttttt222----");
  }
  //render ----- return-----
  render () {
    const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
//input box with CSS style (search-input)
// print out the result
    return (
      <div>
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        {filteredEmails.map(email => {
          return (
            <div className="mail" key={email.Id}>
            <div className="from">{email.item_color}--{email.item_name}--{email.item_weight}---{email.avilable_store_name}--{email.avilable_Item}</div>

            </div>
          )
        })}

      </div>
    )
  }
    //end binding the result ..
//function--------- searchUpdated(term)
  searchUpdated (term) {
    this.setState({searchTerm: term})
  }
}

var dataEx =[{
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

export default App2;
