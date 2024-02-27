import React from 'react';
import { achievements } from '../Data/achivements';
/// we will have to create a react hook that will keep track of the no. of achievements added and will increase the counter as soon as an achievement in added
// const [count, setCount] = useState(1);



function AchieveCard(props) {
    // increase the value of counter representing addition of new element
    return (
        <h3>{props.id} <a href={props.link} target="_blank" rel="noopener noreferrer">{props.data}</a></h3>
    )

};

function Achievements() {
    return (
        <div id = "ac" className="Achieve-main">
            <div >
                <div className="pro-first-div"><h1>Achievements</h1></div>
            </div>
            <div className="Achieve-content">
                <AchieveCard id = {achievements[0].id} link={achievements[0].link} data={achievements[0].data} />
                <AchieveCard id = {achievements[0].id+1} link={achievements[1].link} data={achievements[1].data} />
                <AchieveCard id = {achievements[0].id+2} link={achievements[2].link} data={achievements[2].data} />
                <AchieveCard id = {achievements[0].id+3} link={achievements[3].link} data={achievements[3].data} />
            </div>
        </div>
    );
}

export { Achievements };