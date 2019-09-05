// socket code
const socket = io('https://localhost:3000')

socket.on("watch", data => {
    console.log(data)
});

socket.on("video", data => {
    var player = new YT.Player('player', {
        height: '25vh',
        width: '100%',
        videoId: data,
        events: {
            'onStateChange': onPlayerStateChange
        }
    });

    function onPlayerStateChange() {
        var state = player.getPlayerState();
        socket.emit('stateChange', {state: state});
    }

    socket.on('stateChange', (data) => {
        if (data.state == 1) {
            player.playVideo();
        }
        else if (data.state == 2) {
            player.pauseVideo();
        }
    });
});

// iframe code
function parse(url) {
    for (i = 0; i < url.length; i++) {
        var parseKeyword = url.slice(i, i+5);
        if (parseKeyword == "watch")
            return url.slice(i+8, i+19);
        }
}

function iframeOnClick() {
    var url = document.getElementById("url").value;
    var parsedURL = parse(url);
    document.getElementById("url").value = "";
    var player = new YT.Player('player', {
        height: '66%',
        width: '100%',
        videoId: parsedURL,
        events: {
            'onStateChange': onPlayerStateChange
        }
    });

    function onPlayerStateChange() {
        var state = player.getPlayerState();
        socket.emit('stateChange', {state: state})
    }

    socket.on('stateChange', (data) => {
        if (data.state == 1) {
            player.playVideo();
        }
        else if (data.state == 2) {
            player.pauseVideo();
        }
    });
    socket.emit("watch", {videoId: parsedURL})
}

// Initialize data from database
var title = $("#title");
var admin = $("#adminName");
var userCapacity = $("#capacityNumber");

$.get(window.location.href, (data) => {
    console.log(data);
    title.text(data.title);
    admin.text(data.admin);
    userCapacity.text(data.sessionUserLimit);
});

