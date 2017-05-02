import React from 'react'
import FilmSelector from '../components/FilmSelector.jsx'
import FilmDetails from '../components/FilmDetails.jsx'
import SearchForm from '../components/SearchForm.jsx'

class FilmContainer extends React.Component{

  constructor(props){
    super(props)
   //  this.firstName = "Nicolas"
   //  this.lastName = "Cage"
     this.state = {
      films: [],
      selectedFilm: null, 
      h2title: 'Films starring Nicolas Cage'
    }
  }

setSelectedFilm(film){
  this.setState({selectedFilm: film})
}

handleSubmit({ firstName, lastName }){
 const newURL = `http://netflixroulette.net/api/api.php?actor=${firstName}%20${lastName}`
 this.getData(newURL)

 const h2title = `Films starring ${firstName} ${lastName}`
 this.setState({h2title: h2title})

 console.log("Film Container hanldeSubmit", newURL)
}

getData(url){
  // const url = "http://netflixroulette.net/api/api.php?actor=Nicolas%20Cage";
  const request = new XMLHttpRequest();
  request.open("GET", url)

  request.onload = () => {
    if(request.status ===200){
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString)
      this.setState({films: data, selectedFilm: data[0]})
    }
  }
  request.send()
}

  componentDidMount(){
     const url = "http://netflixroulette.net/api/api.php?actor=Nicolas%20Cage"
     this.getData(url)
   }


   render(){
      return (

        <div className="container">

        <div className="column1">
        <h2>{this.state.h2title}</h2>
           <FilmSelector films={this.state.films} setSelectedFilm={this.setSelectedFilm.bind(this)}/>
           <FilmDetails film={this.state.selectedFilm}/>

        </div>

        <div className="column2">
          <h2>Search for an Actor</h2>
          <SearchForm handleSubmit={this.handleSubmit.bind(this)}/>
        </div>



   </div>




      );
    }

}







export default FilmContainer