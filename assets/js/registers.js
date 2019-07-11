function buildRegisterPage(){
    var frame = document.getElementById('inputFrame' + tstCurrentPage);
    frame.style.height = "90%";
    var div = document.createElement("div");
    div.height ="50%";


    var table = document.createElement("table");
    //table.style.marginLeft = "150px";
    table.width = "100%";
    table.style.borderCollapse = "collapse";
    table.style.fontSize = "18px";
    table.cellPadding = "20";

    var tbody = document.createElement("tbody");
    var tr_heading = document.createElement("tr");
    tbody.appendChild(tr_heading);

    var th_register = document.createElement("th");
    th_register.colSpan = "2";
    th_register.style.fontSize = "24px";
    var node_registers = document.createTextNode("Registers Management");
    th_register.appendChild(node_registers);
    
    tr_heading.appendChild(th_register);
    tbody.appendChild(tr_heading);
    var tr = document.createElement("tr");

    var td = document.createElement("td");
    var node_td = document.createTextNode("Registers in Use: ");
    td.style.width = "55%";
    td.style.paddingLeft = "43%";
    //td.style.textAlign = "center";
    td.appendChild(node_td);
    tr.appendChild(td);

    var td_two = document.createElement("td");
    var node_td = document.createTextNode("4");
    td_two.appendChild(node_td);

    td_two.appendChild(node_td);
    tr.appendChild(td_two);
    tbody.appendChild(tr);

    var tr_close = document.createElement("tr");

    var td_close = document.createElement("td");
    var node_td = document.createTextNode("Closed Registers: ");
    td_close.style.width = "55%";
    td_close.style.paddingLeft = "43%";
    td_close.appendChild(node_td);

    tr_close.appendChild(td_close);

    var td_close_two = document.createElement("td");
    var node_td_two = document.createTextNode("0");
    td_close_two.appendChild(node_td_two);

    tr_close.appendChild(td_close_two);
    tbody.appendChild(tr_close);

    var tr_btn = document.createElement("tr");
    var td_btn = document.createElement("td");
    td_btn.colSpan = "2";
    td_btn.style.textAlign = "center";

    var btn_one = document.createElement("button");
    btn_one.className = "blue";
    btn_one.style.display = "inline";

    var span_one = document.createElement("span");
    span_one.className = "blue";
    node_one = document.createTextNode("Add Register"); 
    span_one.appendChild(node_one); 
    btn_one.appendChild(span_one);
    td_btn.appendChild(btn_one);


    var btn_two = document.createElement("button");
    btn_two.className = "blue";
    btn_two.style.display = "inline";

    var span_two = document.createElement("span");
    span_two.className = "blue";
    node_one = document.createTextNode("Close Register"); 
    span_two.appendChild(node_one); 
    btn_two.appendChild(span_two);
    td_btn.appendChild(btn_two);

    tr_btn.appendChild(td_btn);
    tbody.appendChild(tr_btn);

    table.appendChild(tbody);
    div.appendChild(table);
    frame.appendChild(div);

    btn_one.onclick = function () { 

        window.location.href = "add_register.html";

    }
    btn_two.onclick = function () { 
        
        window.location.href = "close_register.html";

    }
}

