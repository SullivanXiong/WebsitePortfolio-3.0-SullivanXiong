class NavBar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <nav class="nav-bar">
                <a id="index" href="/"><img class="nav-bar home-img" src="/assets/homeImage.png" alt="homeImage"></a>
                <div class="dropDownMenu">
                    <button class="dDMIcon"></button>
                    <div class="otherContents">
                        <a class="leftNav" id="aboutMe" href="/aboutMe">About Me</a>
                        <a class="leftNav" id="personalProjects" href="/personalProjects">Personal Projects</a>
                        <a class="leftNav" id="resume" href="/resume">Resume</a>
                        <a class="rightNav" id="coms101E-Portfolio" href="/coms101E-Portfolio">COMS101 Portfolio</a>
                        <a class="rightNav" id="eng134E-Portfolio" href="/eng134E-Portfolio">ENG134 Portfolio</a>
                        <a class="rightNav" id="robinhood" href="/robinhood/robinhood">Robinhood</a>
                    </div>
                </div>
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

var dropDownButton = $("button.dDMIcon");
var dropDownButtonFlag = 0;

$(window).resize(() => {
    if ($(this).width() <= 732) {
        dropDownButtonFlag = 0;
        $("div.otherContents").css("display", "none");
        $("button.dDMIcon").css("border", "0").css("background-color", "rgba(0, 0, 0)");
    }
    else if ($(this).width() > 732) {
        dropDownButtonFlag = 1;
        $("div.otherContents").css("display", "grid");
    }
});

dropDownButton.click(() => {
    var width = $(window).width();
    if (width <= 732) {
        if (dropDownButtonFlag == 0) {
            dropDownButtonFlag = 1;
            $("div.otherContents").css("display", "grid");
            $("button.dDMIcon").css("border", "0.1px #ffffff solid").css("background-color", "rgba(127, 127, 127)");
        }
        else {
            dropDownButtonFlag = 0;
            $("div.otherContents").css("display", "none");
            $("button.dDMIcon").css("border", "0").css("background-color", "rgba(0, 0, 0)");
        }
    }
});
