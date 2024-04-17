import { Component } from "react";
import avengers from'./Avengers.jpeg';
class Moviecard extends Component{
   
    // addStars=()=>{
    //     if(this.state.stars>=5){
    //         return;

    //     }
    // //   this.setState({
    // //     stars:this.state.stars+0.5,
    // //   },()=>console.log("callback inside setState",this.state.stars));
    // this.setState((prevState)=>{
    //     return{
    //         stars:prevState.stars+0.5
    //     }

    // })
    // this.setState((prevState)=>{
    //     return{
    //         stars:prevState.stars+0.5
    //     }

    // })
    // this.setState((prevState)=>{
    //     return{
    //         stars:prevState.stars+0.5
    //     }

    // }) 
      
    // }
    // deleteStars=()=>{
    //     if(this.state.stars<=0){
    //         return;
    //     }
    //     this.setState((prevState)=>{
    //         return{
    //            stars:prevState.stars-0.5,
    //         }
    //     }
            
    //     )
    // }
    // handlefav =()=>{
    //     this.setState({
    //         fav:!this.state.fav,
    //     })
    // }
    // handlecart=()=>{
    //     this.setState({
    //         cart:!this.state.cart,
    //     })

    // }
        

    
    render(){
        const {title,plot,price,rating,stars,fav,cart,decStars,addStars}=this.props.movies;

        return (
        <div className="main">
        <div className="movie-card">  
        <div className="left">
            <img alt="poster" src={avengers}/>
        </div>
        <div className="right">
            <div className="title">{title}</div>
            <div className="plot">  {plot}</div>
            <div className="price"> {price}</div>

        
        <div className="footer">
            <div className="rating">{rating}</div>
            <div className="star-dis">
                <img alt="decrease" src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" className="str-btn"onClick={()=>{decStars(this.props.movies)}}/>
               <img alt="star" src="https://t4.ftcdn.net/jpg/00/61/25/93/240_F_61259351_3EL2WAZWZTXSQb1dPEzWu0yFLZNfIzFC.jpg" className="stars"></img>
               <img alt="increase" src="https://cdn-icons-png.flaticon.com/128/748/748113.png" className="str-btn" onClick={()=>{addStars(this.props.movies)}}/>
               <span className="Countstars">{stars}</span>
            </div>
            <div className="footer-btn">
                {/* {fav? <button className="unfavourite-btn" onClick={this.handlefav}>un-favourite</button>: <button className="favourite-btn" onClick={this.handlefav}> favourite</button> } */}

                <button className={fav?"unfavourite-btn":"favourite-btn"} onClick={()=>{this.props.toggleFav(this.props.movies)}}>{fav?"unfavourite":"favourite"}</button>
            




        <button className={cart?"uncart-btn":"cart-btn"} onClick={()=>{this.props.toggleCart(this.props.movies)}}> {cart?"uncart":"Add cart"}</button>

            </div>
       

        </div>
        </div>
        </div>
       </div>)
  
    }
}
export default Moviecard;