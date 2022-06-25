import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons/faImage';

export default function Meme(){
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImg: "https://i.imgflip.com/30b1gx.jpg"
    })
    const [allMemeImages, setAllMemeImages] = useState("")

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then (res => res.json())
            .then (get => setAllMemeImages(get.data))}, [])
    
    function getMeme() {
        let memeArray =  allMemeImages.memes
        let randomIndex = Math.floor(Math.random() * memeArray.length);
        let randomMeme = memeArray[randomIndex].url
        return setMeme(function(prevItem){
            return {...prevItem, randomImg: randomMeme}
        })
    }
    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    return (
        <main>
        <div className="forms">
            <div>
                <input className="form1" type="text" placeholder="Top text" name="topText" onChange={handleChange}></input>
                <input className="form2" type="text" placeholder="Bottom Text" name="bottomText" onChange={handleChange}></input>
                <div className="button-box">
                <button type="button" onClick={getMeme}  className="button">Get a new meme image<FontAwesomeIcon className="button--icon" icon={faImage}/></button>
                </div>
            </div>
        </div>
        <div className="img-box">
        <img src={meme.randomImg} alt="A Meme" className="meme-img"/>
        <div className="topText">{meme.topText}</div>
        <div className="bottomText">{meme.bottomText}</div>
        </div>
        </main>
    )
}
