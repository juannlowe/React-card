import React from "react"
import ReatDOM from "react-dom"


export default function Card(){
    return (
        <div className="Box">        
            <img className="Img-Juan" src="./images/juan.jpeg" />
            <h1 className="Box--name">Juan Branca</h1>
            <p className="Box--title">Frontend developer</p>
            <div className="wrapper-buttons">
                <button className="Email"><span></span>Email</button>
                <button className="Linkedin">Linkedin</button>
            </div>
                <div className="Bottom-Text">
                    <h3>About</h3>
                    <p>Passionate coder, always on the lookout for chances to innovate, enhance, and create. Coding serves as both a creative and a never-ending adventure.</p>
                    <h3>Interest</h3>
                    <p>An aspiring Front-End Developer</p>
                </div>
            <footer className="Box--Icons">Social Media Icons will update this part!</footer>
            </div>
        
    )
}
