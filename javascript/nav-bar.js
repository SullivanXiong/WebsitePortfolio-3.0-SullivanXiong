class NavBar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <nav class="nav-bar">
                <a class="leftNav" href="/aboutMe"><div class="nav-bar li" id="aboutMe">ABOUT ME</div></a>
                <a class="leftNav" href="/personalProjects"><div class="nav-bar li" id="personalProjects">PERSONAL PROJECTS</div></a>
                <a class="leftNav" href="/resume"><div class="nav-bar li" id="resume">RESUME</div></a>
                <a href="/"><div class="nav-bar li" style="line-height: 0;"><img class="nav-bar home-img" src="/assets/homeImage.png" alt="homeImage"></div></a>
                <a class="rightNav" href="/coms101E-Portfolio"><div class="nav-bar li" id="coms101E-Portfolio">COMS101 PORTFOLIO</div></a>
                <a class="rightNav" href="/eng134E-Portfolio"><div class="nav-bar li" id="eng134E-Portfolio">ENG134 PORTFOLIO</div></a>
                <a><div class="nav-bar li">WIP</div></a>
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