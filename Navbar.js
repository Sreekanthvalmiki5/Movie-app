import { Component } from "react";
import styled from 'styled-components';
const Nav=styled.div`
background: linear-gradient(170deg,#1bc059,#0d47a1);
width:100%;
height:70px;
display:flex;
justify-content: space-between;
`
const Count=styled.div`
       background:${(props)=>props.color};
    padding:3px 6px;
    position:absolute;
    right:2px;
    top:-5px;
    font-size:15px;
    border-radius:30px;
    visibility:${(props)=>props.show?"visible":"hidden"};

      
`
const Title=styled.div`
    
    margin-left:20px;
    font-size:25px;
    font-weight: bold;
    margin-top:5px;
    &:hover{color:#0f0}; 
  

`
class Navbar extends Component{
    render(){
    console.log(this.props);
    const {cartCount}=this.props;
        return <>
        <div>
            <Nav>
                <Title>MOVIE-App</Title>
                <div className="cartContainer">
                    <>
                    <img src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png"alt="image icon" className="cartIcon"/>
                    <Count color="yellow" show="true">{cartCount}</Count>
                   
                    </>
                   
                </div>
            </Nav>
        </div>
        </>
    }
}
export default Navbar;
const styles={
    cart:{
        background:"orange",
        borderRadius: "75%",
        padding:"4px 3px",
        position:"absolute",
        
      right:2,
        top:-5,
        margin:0,
        fontSize:15,
        
    }
}