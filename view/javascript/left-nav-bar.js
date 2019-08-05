class LeftNavBar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        var title = '';
        if (window.location.pathname == '/freeWrites') {
            title = 'Free Writes';
        }
        else if (window.location.pathname == '/prewriteWorksheets') {
            title = 'Pre-Write Worksheets';
        }
        else if (window.location.pathname == '/peerReview') {
            title = 'Peer Reviews';
        }
        console.log(title);
        this.innerHTML = `
            <div class="mainBody" style="padding-top: 60px; width: 100%; height: 93vh;">
                <div class="left-nav-bar">
                    <div class="left-nav-bar header">
                        ${title}
                    </div>
                    <div class="left-nav-bar tab inactive" onclick="activate(0)">
                        <b>D</b>escription
                    </div>
                    <div class="left-nav-bar tab inactive" onclick="activate(1)">
                        <b>M</b>y <b>A</b>rtifact
                    </div>
                    <div class="left-nav-bar tab inactive" onclick="activate(2)">
                        Lorem Ipsum
                    </div>
                    <div class="left-nav-bar tab inactive" onclick="activate(3)">
                        Lorem Ipsum
                    </div>
                    <div class="left-nav-bar tab inactive" onclick="activate(4)">
                        Lorem Ipsum
                    </div>
                    <div class="left-nav-bar tab inactive" onclick="activate(5)">
                        Lorem Ipsum
                    </div>
                    <div class="left-nav-bar tab inactive" onclick="activate(6)">
                        Lorem Ipsum
                    </div>
                </div>
            </div>
        `;
    }
}

var title = '';
if (window.location.pathname == '/freeWrites') {
    title = 'Free Writes';
}
else if (window.location.pathname == '/prewriteWorksheets') {
    title = 'Pre-Write Worksheets';
}
else if (window.location.pathname == '/peerReview') {
    title = 'Peer Reviews';
}

function deactivate() {
    if (document.getElementsByClassName('left-nav-bar tab active')[0]) {
        document.getElementsByClassName('left-nav-bar tab active')[0].setAttribute('class', 'left-nav-bar tab inactive');
        while (document.getElementsByClassName('mainBody')[0].childNodes.length > 2) {
            document.getElementsByClassName('mainBody')[0].removeChild(document.getElementsByClassName('mainBody')[0].lastChild);
        }
    }
}

function activate(n) {
    if (document.getElementsByClassName('left-nav-bar tab active')[0]) {
        document.getElementsByClassName('left-nav-bar tab active')[0].setAttribute('class', 'left-nav-bar tab inactive');
        while (document.getElementsByClassName('mainBody')[0].childNodes.length > 2) {
            document.getElementsByClassName('mainBody')[0].removeChild(document.getElementsByClassName('mainBody')[0].lastChild);
        }
    }
    document.getElementsByClassName('left-nav-bar tab inactive')[n].setAttribute('class', 'left-nav-bar tab active');
    if (n == 0) {
        div = document.createElement('div');
        div.setAttribute('class', 'left-nav-bar info');
        if (title == 'Free Writes') {
            div.innerHTML = `
                <div style="float: left; margin-bottom: 5%; font-weight: 700;">Free Writes Description</div>
                <div class="closeInfoBox" onclick="deactivate()">
                    x
                </div>
                <div style="float: left; line-height: 250%;">
                    <b>F</b>ree writes were a great warm-up exercise to help with reflection as a writer. Professor Hamblin always has a great reflection question to help me think critically about what I'm writing, 
                    how I feel about writing it, and it helps me answer my question of "WHY" am I writing it. 
                    <br>
                    <br>
                </div>
            `;
        }
        else if (title == 'Pre-Write Worksheets') {
            div.innerHTML = `
                <div style="float: left; margin-bottom: 5%; font-weight: 700;">Pre-Write Worksheets Description</div>
                <div class="closeInfoBox" onclick="deactivate()">
                    x
                </div>
                <div style="float: left; line-height: 250%;">
                    <b>P</b>re-writes were foreign territory for me. Everytime I wrote a paper it was always based on a 
                    formulaic outlined format and even now I still carry it a little with me because it’s just become a habit. 
                    However, taking this class has shown me that there are more than one way to prep for an essay and that has 
                    broaden my literary and rhetorical abilities. From free writes to exercises and discussions to pre-writes, 
                    I noticed that I commonly got writer’s block and could not figure out how to start. 
                    <br>
                    <br>
                </div>
            `;
        }
        else if (title == 'Peer Reviews') {
            div.innerHTML = `
                <div style="float: left; margin-bottom: 5%; font-weight: 700;">Peer Reviews Description</div>
                <div class="closeInfoBox" onclick="deactivate()">
                    x
                </div>
                <div style="float: left; line-height: 250%;">
                    <b>T</b>he Peer Review Workshops were always very useful because of the level of maturity and respect for one another 
                    that was shown and decided early on in the class. I felt very comfortable constructively criticizing other people's 
                    essays and having other people criticize my essays. There were some cases where I completely went off on a tangent with my essay 
                    and from my biased perspective I didn't see it, however my partners help steer me on the right path. 
                    <br>
                    <br>
                </div>
            `;
        }
        document.getElementsByClassName('mainBody')[0].appendChild(div);
    }
    else if (n == 1) {
        div = document.createElement('div');
        div.setAttribute('class', 'left-nav-bar info');
        if (title == 'Free Writes') {
            div.innerHTML = `
                <div style="float: left; margin-bottom: 5%; font-weight: 700;">Free Write Artifact</div>
                <div class="closeInfoBox" onclick="deactivate()">
                    x
                </div>
                <div style="float: left; line-height: 250%;">
                    <b>I don't have visual aids because I forgot to take pictures of my free-writes, pre-writes, and peer reviews and left
                    them at Cal Poly for Spring Break.</b> <br><br>
                    <b>T</b>he most impactful Free Write was the one where Professor Hamblin asked us to write about, "How do you feel about 
                    the topic you're writing about. Why are you writing about it?" Reflecting upon these questions I realized that I wasn't 
                    happy with what I was writing about. Instead of writing about Rubik's cubes I changed the topic of choice to Cryptocurrency, 
                    something I was actually passionate about, and I instantly noticed the difference because I enjoyed what I was writing about 
                    and I didn't have writer's block. As soon as I got to work I was a machine and I didn't stop until the task at hand was complete. 
                    <br>
                    <br>
                </div>
            `;
        }
        else if (title == 'Pre-Write Worksheets') {
            div.innerHTML = `
                <div style="float: left; margin-bottom: 5%; font-weight: 700;">Pre-Write Artifact</div>
                <div class="closeInfoBox" onclick="deactivate()">
                    x
                </div>
                <div style="float: left; line-height: 250%;">
                    <b>A</b>lthough I had never done anything like this before, it was surprisingly effective. I think the cause of this was because 
                    the questions were things that I considered when I was writing the actual essay. Therefore, the majority of the time when I was actually 
                    writing the essay, I had already written it through me answering the questions on the pre-write.
                    <br>
                    <br>
                </div>
            `;
        }
        else if (title == 'Peer Reviews') {
            div.innerHTML = `
                <div style="float: left; margin-bottom: 5%; font-weight: 700;">Peer Reviews Artifact</div>
                <div class="closeInfoBox" onclick="deactivate()">
                    x
                </div>
                <div style="float: left; line-height: 250%;">
                    <b>I</b> went to two out of the three workshops because I overslept and didn't make it to the third and 
                    final workshop, which I truly regret. However, from my experience of the two workshops that I did attend it was 
                    a very helpful and supporting environment. Some of my most memorable moments from the Peer Review workshop was when I read 
                    Kyle's comment guiding me because I was veering off the prompt. To be precise Kyle's comment was "Although you have a great topic 
                    and visual descriptions, you lack the 'WHY' factor. If you did have the lack the 'WHY' factor, make it more apparent for the audience. 
                    <br>
                    <br>
                </div>
            `;
        }
        document.getElementsByClassName('mainBody')[0].appendChild(div);
    }
}

window.customElements.define('left-nav-bar', LeftNavBar)