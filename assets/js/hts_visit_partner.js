function buildSplit(){
    var frame = document.getElementById('inputFrame' + tstCurrentPage);
    frame.style.height = "90%";

    var div = document.createElement("div");
    div.style.height ="calc(-224px + 100vh)";
    div.style.width = "calc(-12px + 50vw)";
    div.style.cssFloat = "left";
    div.style.borderBottom = "2px solid red";
    div.style.backgroundColor = "rgb(255, 255, 255)";
    div.style.borderLeft = "2px solid red";
    div.style.borderRight = "2px solid red";
    div.id = "hts_visit";

    var ifrm = document.createElement('iframe');
    ifrm.setAttribute('id', 'ifrm'); // assign an id
    ifrm.setAttribute('src', 'consent.html');
    div.appendChild(ifrm);

    frame.appendChild(div);
    bildHTS();
}
function buildHTS(){
    
}