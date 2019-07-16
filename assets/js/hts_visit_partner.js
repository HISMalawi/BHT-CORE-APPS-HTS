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


    frame.appendChild(div);
    buildHTS();
}
function buildHTS(){
    // var form = document.getElementById('form');
    // var input_ht = document.createElement("input");
    // input_ht.id = "hts_access_type";
    // input_ht.setAttribute("name","test_date");
    // input_ht.setAttribute("tt_pageStyleClass","Numeric NumbersOnly");
    // input_ht.setAttribute("helpText","Number of male condoms given");
    // form.appendChild(input_ht);
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    frame.appendChild(clon);
    //input_ht.setAttribute("")
    //  document.getElementById("hts_visit").innerHTML ='<object type="text/html" data="hts_visit.html"> </object>';
}