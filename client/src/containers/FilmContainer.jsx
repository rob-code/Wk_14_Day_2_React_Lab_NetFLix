import React from 'react'
import FilmSelector from '../components/FilmSelector.jsx'
import FilmDetails from '../components/FilmDetails.jsx'

class FilmContainer extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      films: [],
      selectedFilm: null
    }
  }

setSelectedFilm(film){
  this.setState({selectedFilm: film})
}

  componentDidMount(){
     const url = "http://netflixroulette.net/api/api.php?actor=Nicolas%20Cage";
     const request = new XMLHttpRequest();
     request.open("GET", url)

     request.onload = () => {
       if(request.status ===200){
         console.log(request.responseText)
         const jsonString = request.responseText;
         const data = JSON.parse(jsonString)
         this.setState({films: data, selectedFilm: data[0]})
       }
     }
     request.send()
   }


   render(){
      return (
        <div>
          <h2>Films Starring Nicolas Cage</h2>
           <FilmSelector films={this.state.films} setSelectedFilm={this.setSelectedFilm.bind(this)}/>
           <FilmDetails film={this.state.selectedFilm}/>
        </div>
      );
    }

}







export default FilmContainer