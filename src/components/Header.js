import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFaceLaughWink} from '@fortawesome/free-solid-svg-icons/faFaceLaughWink';

export default function Header(){
    return (
        <nav className="navbar">
            <div className="navbar--title">
            <p><FontAwesomeIcon className="navbar--icon" icon={faFaceLaughWink} /></p>
            <h1 className="title"> MemeGenerator</h1>
            </div>
            <p className="navbar--detail">React Course - Project 3</p>
            
        </nav>
    )
}