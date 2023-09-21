import React from "react";
import Marquee from "react-fast-marquee";
import ClientList from '../Data/Marquee.json';
import '../styles/Marquee.css';


export default function Marq() {
  return(
  <>
  <div className="MarqHeading">Our <span style={{color:"#5E1A89"}}>Global & Domestic Clients</span></div>
  <Marquee pauseOnHover speed={50}>
    {ClientList.map((client) => (
      <div className="EachClient">
        <img key={client.id} src={client.img} alt="client" className="MarqueeImgs" style={client.id===10 ?{position:"relative",top:"10px"}:{}  || ((client.id===11 || client.id===13)?{position:"relative",bottom:"40px"}:{})}></img>          
      </div>
        
    ))}
  </Marquee>
  </>
  );
  
}