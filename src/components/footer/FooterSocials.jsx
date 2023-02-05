import React from "react";
import Github from "../../assets/images/socials/github.svg";
import Linkedin from "../../assets/images/socials/linkedin.svg";
import Website from "../../assets/images/socials/portfolio.png";

const socials = [
    {
        id: 1,
        href: "https://github.com/tushar-upadhya",
        img: Github,
        name: Github,
    },
    {
        id: 2,
        href: "https://www.linkedin.com/in/tushar-upadhyay-54029b135/",
        img: Linkedin,
        name: Linkedin,
    },
    {
        id: 3,
        href: "https://portfolio-2023-bice-omega.vercel.app/",
        img: Website,
        name: Website,
    },
];

export default class FooterSocials extends React.Component {
    render() {
        return (
            <ul className="socials">
                {socials.map((social) => (
                    <li key={social.id}>
                        <a
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={social.name}
                        >
                            <span aria-hidden="true">{social.name}</span>
                            <img src={social.img} alt="" aria-hidden="true" />
                        </a>
                    </li>
                ))}
            </ul>
        );
    }
}
