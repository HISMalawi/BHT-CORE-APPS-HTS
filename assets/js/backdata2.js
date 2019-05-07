function addBackData(){
    var frame = document.getElementById('inputFrame' + tstCurrentPage);
    frame.style.height = "90%";
    frame.style = 'width: 1000%; height:100%; overflow-x: scroll';
    var table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    table.style.color = "rgb(51, 51, 51);";
    table.cellPadding = "5px"

    table.appendChild(tr);
    //    div.appendChild(table);
        frame.appendChild(table);
}