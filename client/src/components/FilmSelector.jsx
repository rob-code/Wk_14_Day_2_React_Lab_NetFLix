import React from 'react'

class FilmSelector extends React.Component{

constructor(props){
super(props)
this.handleChange = this.handleChange.bind(this)
this.state = {selectedIndex: 0}
}

handleChange(event) {
  this.setState({selectedIndex: event.target.value})
  const selectedFilm = this.props.films[event.target.value]
  this.props.setSelectedFilm(selectedFilm)
}

render(){
  const options = this.props.films.map((film,index)=> {
    return <option value={index} key={index}>{film.show_title}</option>
  })
  return (
    <select id="films" value={this.state.selectedIndex} onChange= {this.handleChange}>
      {options}
    </select>

    )
}


}

export default FilmSelector