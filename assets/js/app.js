htmllink = document.getElementById("htmllink")
jslink = document.getElementById("jslink")
csslink = document.getElementById("csslink")

htmllink.onclick = function(e){
    localStorage.setItem('linkid', "htmllink");
    window.location = "game.html"
}

jslink.onclick = function(e){
    localStorage.setItem('linkid', "jslink");
    window.location = "game.html"
}

csslink.onclick = function(e){
    localStorage.setItem('linkid', "csslink");
    window.location = "game.html"
}

