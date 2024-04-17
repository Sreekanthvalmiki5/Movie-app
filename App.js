import {Component}from "react";
import Movielist from "./Movielist";
import Navbar from "./Navbar";
import {movies} from './moviesData';
 class App extends Component{
  constructor(){
    super();
    this.state={
        movies:movies,
        cartCount:0,
        
   
    }

}
hadleIncStars=(movie)=>{
    const{movies}=this.state;
    
//   this.setState({
//     stars:this.state.stars+0.5,
//   },()=>console.log("callback inside setState",this.state.stars));
const mid=movies.indexOf(movie);

if(movies[mid].stars>=5){
return;
}
movies[mid].stars+=0.5;
this.setState({
movies:movies,
})

  
}
handledecStars=(movie)=>{
    const {movies}=this.state;
    const mid=movies.indexOf(movie);
    if(movies[mid].stars<=0){
        return;
    }
    movies[mid].stars-=0.5;
    this.setState({
        movies:movies,
    })
}
handleFav=(movie)=>{
    const{movies}=this.state;
    const mid=movies.indexOf(movie);
  movies[mid].fav=!movies[mid].fav;
  this.setState({
    movies,
  })

    }
    handleCart=(movie)=>{
        const {movies}=this.state;
        let {cartCount}=this.state;
        const mid=movies.indexOf(movie);
        movies[mid].cart=!movies[mid].cart;
        if(movies[mid].cart){
          cartCount+=1;
        }
        else{
          if(cartCount<0){
            return;
          }
          cartCount-=1;
        }
        this.setState(

            {
                movies,
                cartCount,
            }
        )
        console.log(cartCount);
    }
  render(){
    const {movies,cartCount}=this.state;
    return (
      <>
      <Navbar cartCount={cartCount}/>
     
     <Movielist movies={movies}
     addStars={this.hadleIncStars}
     decStars={this.handledecStars}
     toggleFav={this.handleFav}
     toggleCart={this.handleCart}
     CartCount={this.state.cartCount}/>
     </>
    )
  

   
  }
}
export default App;
