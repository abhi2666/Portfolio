import React from "react";


function getResume() {
    const resumeAdd = '/Documents/AbhishekGairola-SoftwareEngineer.pdf';
    window.open(resumeAdd, '_blank');
}


function MainPage() {
    return (
        <div className="main">
            <div className="main-first">
                <h1 className="main-heading">Hi !</h1>
            </div>
            <div className="main-first">
                <h3>Iam Abhishek Gairola, a guy with a knack for programming and developing software projects which incorporate technologies ranging from React to Node to Machine Learning to  Databases and sometimes core C++ too ! I have the curiosity to always develop something from various tech-stack. </h3>
                <button className="resume-but" onClick={getResume} type="submit">Resume</button>
            </div>
        </div>
    );
};

export { MainPage };