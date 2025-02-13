import React from "react";
import {BsGithub, BsLinkedin} from "react-icons/bs";

const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <a href="https://www.linkedin.com/in/valentin-cadart-d%C3%A9veloppeur-full-stack-js-93762b161/" target="_blank" rel="noreferrer">
                    <BsLinkedin />
                </a>
            </div>
            <div>
                <a href="https://github.com/Tylyfox" target="_blank" rel="noreferrer">
                    <BsGithub />
                </a>

            </div>
        </div>
    )
}

export default SocialMedia;