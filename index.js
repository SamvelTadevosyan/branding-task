var user    = document.getElementById("user");
var gb      = document.getElementById("gb");
var project = document.getElementById("project");

function hover(element){
    switch(element.id){
        case "basic":
            progressUpdate(5, 5, 5)
            break;
        case "pro":
            progressUpdate(55, 65, 60)
            break;
        case "premium":
            progressUpdate(90, 100, 99)
            break;
    }
}

function mouseOut(){
    user.style.width = "0";
    gb.style.width = "0";
    project.style.width = "0";
}

function progressUpdate(userProgress, gbProgress, projectProgress){
    user.style.width = userProgress+"%";
    gb.style.width = gbProgress+"%";
    project.style.width = projectProgress+"%";
}