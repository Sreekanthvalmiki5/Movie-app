import {Component}from "react";
import Moviecard from "./Moviecard";

 class Movielist extends Component{
    
  render(){
    // const{title,plot,price,rating,stars,fav,cart}=this.state;
    const {movies, addStars,decStars,toggleCart,toggleFav}=this.props;
    return (
      <>
     <h1>Movielist</h1>

    {this.props.movies.map((movie)=><Moviecard movies={movie} addStars={addStars} toggleFav={toggleFav}
    decStars={decStars} toggleCart={toggleCart}
    cartCount={this.props.cartCount}
   key={movie.id}/>)}
    
     </>
    )
  

   
  }
}
export default Movielist;
