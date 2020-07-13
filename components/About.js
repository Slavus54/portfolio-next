import React from 'react'
import './About.css';

const About = () => {
    return (
        <div className="container">
            <div className="about-headline"><span className="sign__word">Biography</span></div>
            <div className="about-description">I'm 15 yo programmer from Novosibirsk, Russia,<br />
            was interested in CS when I was 13, at the beginning was making pages with HTML and CSS,
            <br />now I have been learning CS and programming on JS, React Framework and TS already 8 mounths.
            </div>
            <div className="about-headline"><span className="sign__word">Qualities</span></div>
            <div className="about-qualities">
            Responsibility to the customer<br />
            Good job performance<br />
            Ability to solve many problems<br />
            Attention to detail<br />
            </div>
            <div className="about-headline"><span className="sign__word">Services</span></div>
            <div className="about-services">
            Creating templates for sites with PhotoShop CS6<br />
            Making pages with HTML CSS<br />
            SPA and PWA Development<br />
            Mobile Application Development
            </div>
            <div className="about-headline"><span className="sign__word">Skills</span></div>
            <div className="about-skills">
            <span className="main">HTML, CSS, JS(ES6), TS, React Framework(Webpack and Babel 7), Redux, <br />Router, NextJS, Gatsby, Electron, NodeJS, Express, MongoDB, GraphQL,<br /> Apollo, React Native, Deno<br /></span>
            <span className="not-main">React/Redux libraries and JS-tools: 
            Redux Saga, Redux-Persist, MobX,<br /> Reselect, Flow, Jest, React Intl, React-modal, React-say, Material-UI, <br />React-bootstrap, Ant-Design,
            Lodash, Fetch, Axios, REST API,<br /> Websockets (Socket.io), Nedb, MySQL, Patterns(Addy Osmani) <br />and Solid principles, algorithms.
            </span>
            </div>
        </div>
    );
}

export default About;