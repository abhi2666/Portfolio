import React from "react";


// function Greet() {
//     let currentHour = new Date().getHours;
//     let greeting;

//     if (currentHour < 12) {
//         greeting = "Good morning!";
//     } else if (currentHour < 18) {
//         greeting = "Good afternoon!";
//     } else {
//         greeting = "Good evening!"; 
//     }
//     return greeting;
// }

const IMPORTANT = () => alert("This website is under developement phase and is not yet responsive. Please use a PC/Laptop to proceed !");
IMPORTANT();    

function Navbar() {

    return (
        <div className="navbar">
            <p className="greet">Namaste</p>
            <div className="navbar-compo">
                <p className = "compo"><a href="https://www.linkedin.com/in/abhishekgairola26/" rel="noreferrer" target = "_blank">LinkedIn</a></p>
                <p className = "compo"><a href="#projects">Projects</a></p>
                <p className = "compo"><a href="#ac">Achievements</a></p>
                <p className = "compo"><a href="https://drive.google.com/drive/folders/1uK1xzz8ozRqs6r9iiodJc7JJ25vl_CkD?usp=sharing" target="_blank" rel="noreferrer">Certifications</a></p>
            </div>
        </div>
    );

};

export {Navbar};