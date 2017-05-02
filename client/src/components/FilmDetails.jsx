import React from 'react'

class FilmDetails extends React.Component{

render(){

if(!this.props.film){
  return null
}

const imgURL = this.props.film.poster
console.log(imgURL)


return(

<div>
<h3>{this.props.film.show_title}</h3>
<img src={imgURL}/>
<p className="leading-actors-title">Leading Actors</p>
<p className="leading-actors">{this.props.film.show_cast}</p>

<p className="summary">{this.props.film.summary}</p>

</div>

  )





}











}

export default FilmDetails