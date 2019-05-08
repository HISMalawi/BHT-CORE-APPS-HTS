function addRow(){
    var frame = document.getElementById('inputFrame' + tstCurrentPage);
    frame.style.height = "90%";
    frame.style = 'width: 1000%; height:100%; overflow-x: scroll';
    var table = document.createElement("table");
    table.style.width = "100%";
    var div = document.createElement("div");
    div.style.width = "180px";
    div.styl3.height = "height: calc(-222px + 100vh);";

    var tr = document.getElementById("main_row");
    var tr_sub = document.createElement("tr");
    var td = document.createElement("td");
    td.style.height = "258px";
    td.style.borderBottom = "1px solid rgb(51, 51, 51)";
    tr_sub.appendChild(td);
    
    var tr_sub2 = document.createElement("tr");
    var td2 = document.createElement("tr");
    td2.style.height = "66px";
    td2.style.borderBottom = "3px solid orange";
    tr_sub2.appendChild(td2);
    
    var button = document.createElement("button");

    
    //table.appendChild(tr);
    //    div.appendChild(table);
      //  frame.appendChild(table);
}