// this example of using search


import React, {Component} from 'react'
import SearchInput, {createFilter} from 'react-search-input'
import emails from './mails'//Json file

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
const KEYS_TO_FILTERS = ['user.name', 'subject', 'dest.name']
class App2 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    //update state for Term whenver user type somthing
    this.searchUpdated = this.searchUpdated.bind(this)
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
            <div className="mail" key={email.id}>
              <div className="from">{email.user.name}</div>
              <div className="subject">{email.subject}</div>
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
export default App2;
