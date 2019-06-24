class NavBar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <nav class="nav-bar">
                <a class="leftNav" id="aboutMe" href="/aboutMe">About Me</a>
                <a class="leftNav" id="personalProjects" href="/personalProjects">Personal Projects</a>
                <a class="leftNav" id="resume" href="/resume">Resume</a>
                <a id="index" href="/"><img class="nav-bar home-img" src="/assets/homeImage.png" alt="homeImage"></a>
                <a class="rightNav" id="coms101E-Portfolio" href="/coms101E-Portfolio">COMS101 Portfolio</a>
                <a class="rightNav" id="eng134E-Portfolio" href="/eng134E-Portfolio">ENG134 Portfolio</a>
                <a class="rightNav" id="robinhood" href="/robinhood/robinhood">Robinhood</a>
            </nav>
        `;
    }
}

window.customElements.define('nav-bar', NavBar);

if (window.location.pathname == "/aboutMe") {
    document.getElementById('aboutMe').id = 'current';
}
else if (window.location.pathname == "/personalProjects") {
    document.getElementById("personalProjects").id = 'current';
}
else if (window.location.pathname == "/resume") {
    document.getElementById("resume").id = 'current';
}
else if (window.location.pathname == "/coms101E-Portfolio") {
    document.getElementById("coms101E-Portfolio").id = 'current';
}
else if (window.location.pathname == "/eng134E-Portfolio") {
    document.getElementById("eng134E-Portfolio").id = 'current';
}
else if (window.location.pathname == "/robinhood/robinhood") {
    document.getElementById("robinhood").id = 'current';
}