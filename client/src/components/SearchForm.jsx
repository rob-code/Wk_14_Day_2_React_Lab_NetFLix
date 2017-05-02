import React from 'react'

class SearchForm extends React.Component{

constructor(props){
  super(props)
  this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
  this.handleLastNameChange = this.handleLastNameChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
  this.state = {firstName: '', lastName: ''}
}

handleFirstNameChange(event){
this.setState({firstName: event.target.value})
}

handleLastNameChange(event){
  this.setState({lastName: event.target.value})
}

handleSubmit(event){
event.preventDefault()
const firstName = this.state.firstName.trim()
const lastName = this.state.lastName.trim()

if (!firstName || !lastName){ return }
this.props.handleSubmit({firstName: firstName, lastName: lastName})
this.setState({firstName: '', lastName: ''})
}


render(){

return(

  <form className= 'search-form' onSubmit={this.handleSubmit}>
  <input type='text'
  placeholder='first name'
  value={this.state.firstName}
  onChange={this.handleFirstNameChange}
  />
  <input type='text'
  placeholder='second name'
  value={this.state.lastName}
  onChange={this.handleLastNameChange}
  />
  <button type = "submit">Add Actor Name</button>
  </form>


  )
}

}

export default SearchForm
