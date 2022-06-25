import React, {useState} from 'react'

export default function Darkmode(){
    const [isDark, setIsDark] = useState(false)

    function handleClick(){
        setIsDark(prevState => {
            return !prevState
        })
        if (isDark === true){
            document.body.style = 'background: white';
            
        } else{
            document.body.style = 'background: black';
        }
    }
    return (
        <button className="darkmode" style={isDark === true ? {backgroundColor: "white", color: "black"} : {backgroundColor: "black", color: "white"}} onClick={handleClick}>{isDark ? "Lightmode" : "Darkmode"}</button>
    )
}