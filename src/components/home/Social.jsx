import React from "react";
import { FiGithub, FiLinkedin} from "react-icons/fi";
import { LuFolderTree } from "react-icons/lu";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://linktr.ee/devjamesnguyen" className="home__social-icon" target="_blank">
                <LuFolderTree />
            </a>
            <a href="https://www.github.com/jamesnguyen-dev" className="home__social-icon" target="_blank">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/devjamesn/" className="home__social-icon" target="_blank">
                <FiLinkedin />
            </a>
        </div> 
    ); 
}

export default Social;