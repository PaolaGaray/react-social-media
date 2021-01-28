import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const App = () =>{

    const [developerInfo, setDeveloperInfo] = useState({
        language: "python",
        yearsExperience: 0,
        isEmployed: false
    });



    const handleButtonClick = () => {
        setDeveloperInfo({
            language: 'javascript',
            yearsExperience: 0
        })
    }

    const handleInputChange = (event) => {
        setDeveloperInfo({
            ...developerInfo,
            yearsExperience: event.target.value
        })
    }

    const handleToggleEmployment = () => {
        setDeveloperInfo((prevState) => ({
            ...prevState,
            isEmployed: !prevState.isEmployed
        }))
    }

return (
    <div>
        <button onClick={handleToggleEmployment}>Toggle Employment Status</button>
        <button onClick={handleButtonClick}>Change Language</button>
        <p>I am learning {developerInfo.language}</p>
        <input
            type="number"
            onChange={handleInputChange}
        />
        <p>I have {developerInfo.yearsExperience} years of experience</p>
        <p>Employment status: {developerInfo.isEmployed ? "Employed" : "Unemployed"}</p>
    </div>
)

}
const rootNode = document.getElementById('root')

ReactDOM.render(<App />, rootNode);
