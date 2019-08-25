

console.log(window.location.href);
console.log(window.location);
// HTTP get request
$.get(window.location.href, (data) => {
    data = {
        "title": data.title,
        "admin": data.admin,
        "sessionUserLimit": data.sessionUserLimit
    }
    console.log(data);
    
});
