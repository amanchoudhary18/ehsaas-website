import React,{useState,useeffect, useEffect} from "react";
import "./Footer.css";
const Footer = () => {
  const aboutus= "All the world’s a stage, And all the men and women merely players; They have their exits and their entrances; And one man in his time plays many partsRight from scripting and staging plays to performing Mimes on stage, from making short movies to shouting heart out in Nukkads, this is what fills the vein of every Dramchee in our beloved Dramatics Club. The cooperative process and methodical practice with individuals full of zeal makes the Ehsaas Dramatics Club the most prestigious and rewarding cultural Club of BIT Mesra.We provide a plethora of opportunities to inculcate and foster theatre, creativity and social responsibility among its members and develop intellectual spirit to take initiative in changing perspectives. For Acting has the power to make people believe in things they know aren’t true.";

  const [viewmore,setViewMore]=useState(false);
  window.addEventListener('resize', (event) => {
    console.log(event.target.innerWidth)
    if(event.target.innerWidth<550){
      setViewMore(true);
      console.log(viewmore);
    }
    if(event.target.innerWidth>550){
      setViewMore(false);
      console.log(viewmore);
    }
  });
  useEffect(()=>{
    if(window.innerWidth<550){
      setViewMore(true)
    }
  },[])
  return (
    <div className="text-center footer py-3">
      <div className="aboutUs_container" id="about_us"> 
      <h4 className="text-center" >ABOUT US</h4>
      <br/>
      <span className=" about text-center">
      {(viewmore)?(`${aboutus.slice(0,355)}`):aboutus}
      </span>
      </div>
      <div className="line"></div>
      <div className="Copyright my-5 message">
        <p style={{ fontFamily: "monospace" }}>
          <i className="px-3 fa fa-copyright" aria-hidden="true"></i>
          Copyright <span>Ehsaas Dramatic Society</span>. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
