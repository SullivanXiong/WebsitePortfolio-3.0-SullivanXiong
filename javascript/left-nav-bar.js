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
                    <div class="left-nav-bar tab">
                        Lorem Ipsum
                    </div>
                    <div class="left-nav-bar tab">
                        Lorem Ipsum
                    </div>
                    <div class="left-nav-bar tab">
                        Lorem Ipsum
                    </div>
                    <div class="left-nav-bar tab">
                        Lorem Ipsum
                    </div>
                    <div class="left-nav-bar tab">
                        Lorem Ipsum
                    </div>
                    <div class="left-nav-bar tab">
                        Lorem Ipsum
                    </div>
                    <div class="left-nav-bar tab">
                        Lorem Ipsum
                    </div>
                </div>
            </div>
        `;
    }
}

window.customElements.define('left-nav-bar', LeftNavBar)