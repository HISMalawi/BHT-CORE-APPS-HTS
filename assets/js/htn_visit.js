
var testResultOne;
var testResultTwo;
function buildTest(){
    var frame = document.getElementById('inputFrame' + tstCurrentPage);
    frame.style.height = "90%";
    var div = document.createElement("div");
    div.height ="90%";
    div.style.paddingTop = "15%";
    div.style.paddingLeft = "25%";

    var table = document.createElement("table");
    table.style.marginLeft = "150px";

    
    var tr = document.createElement("tr");

    var td = document.createElement("td");
    var p = document.createElement("p");
    var node = document.createTextNode("Determine HIV 1/2 Result - 15 Minutes");
    p.appendChild(node);
    td.appendChild(p);
    tr.appendChild(td)

    var td = document.createElement("td");
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Non-Reactive"));
    btn.className = "btn btn-success buttons";
    btn.id = "btnNonReactive";
    btn.style.border = "1px";
    td.appendChild(btn);
    tr.appendChild(td);

    var td = document.createElement("td");
    var btn2 = document.createElement("button");
    btn2.appendChild(document.createTextNode("Reactive"));
    btn2.className = "btn";
    btn2.id = "btnReactive";
    btn2.style.border = "1px";
    td.appendChild(btn2);
    tr.appendChild(td);
    btn.onclick = function () {        
        btn.className = "btn-yellow";
        btn2.className = "btn";
        testResultOne = "Non reactive";
    };

    btn2.onclick = function () {        
        btn2.className = "btn-yellow";
        btn.className = "btn";
        testResultOne = "reactive";
    };

    table.appendChild(tr);
    div.appendChild(table);
    frame.appendChild(div);
}

function buildTestTwo(){
    var frame = document.getElementById('inputFrame' + tstCurrentPage);
    frame.style.height = "90%";
    var div = document.createElement("div");
    div.height ="90%";
    div.style.paddingTop = "15%";
    div.style.paddingLeft = "25%";

    var table = document.createElement("table");
    table.style.marginLeft = "150px";

    
    var tr = document.createElement("tr");

    var td = document.createElement("td");
    var p = document.createElement("p");
    var node = document.createTextNode("Uni-Gold Result - 10 Minutes");
    p.appendChild(node);
    td.appendChild(p);
    tr.appendChild(td)

    var td = document.createElement("td");
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Non-Reactive"));
    btn.className = "btn btn-success buttons";
    btn.id = "btnNonReactive";
    btn.style.border = "1px";
    td.appendChild(btn);
    tr.appendChild(td);

    var td = document.createElement("td");
    var btn2 = document.createElement("button");
    btn2.appendChild(document.createTextNode("Reactive"));
    btn2.className = "btn";
    btn2.id = "btnReactive";
    btn2.style.border = "1px";
    td.appendChild(btn2);
    tr.appendChild(td);
    btn.onclick = function () {        
        btn.className = "btn-yellow";
        btn2.className = "btn";
        testResultTwo = "Non reactive";
    };

    btn2.onclick = function () {        
        btn2.className = "btn-yellow";
        btn.className = "btn";
        testResultTwo = "reactive";
    };

    table.appendChild(tr);
    div.appendChild(table);
    frame.appendChild(div);
}

function buildParallelTest(){
    var frame = document.getElementById('inputFrame' + tstCurrentPage);
    frame.style.height = "90%";
    var div = document.createElement("div");
    div.height ="90%";
    div.style.paddingTop = "15%";
    div.style.paddingLeft = "25%";

    var table = document.createElement("table");
    table.style.marginLeft = "150px";

    
    var tr = document.createElement("tr");

    var td = document.createElement("td");
    var p = document.createElement("p");
    var node = document.createTextNode("Determine HIV 1/2 Result - 15 Minutes");
    p.appendChild(node);
    td.appendChild(p);
    tr.appendChild(td)

    var td = document.createElement("td");
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Non-Reactive"));
    btn.className = "btn btn-success buttons";
    btn.id = "btnNonReactive";
    btn.style.border = "1px";
    td.appendChild(btn);
    tr.appendChild(td);

    var td = document.createElement("td");
    var btn2 = document.createElement("button");
    btn2.appendChild(document.createTextNode("Reactive"));
    btn2.className = "btn";
    btn2.id = "btnReactive";
    btn2.style.border = "1px";
    td.appendChild(btn2);
    tr.appendChild(td);
    btn.onclick = function () {        
        btn.className = "btn-yellow";
        btn2.className = "btn";
        testResultOne = "Non reactive";
    };

    btn2.onclick = function () {        
        btn2.className = "btn-yellow";
        btn.className = "btn";
        testResultOne = "reactive";
    };

    var tr2 = document.createElement("tr");

    var td = document.createElement("td");
    var p = document.createElement("p");
    var node = document.createTextNode("Uni-Gold Result - 10 Minutes");
    p.appendChild(node);
    td.appendChild(p);
    tr2.appendChild(td)

    var td = document.createElement("td");
    var btn_second = document.createElement("button");
    btn_second.appendChild(document.createTextNode("Non-Reactive"));
    btn_second.className = "btn btn-success buttons";
    btn_second.id = "btnNonReactive2";
    btn_second.style.border = "1px";
    td.appendChild(btn_second);
    tr2.appendChild(td);

    var td = document.createElement("td");
    var btn2_second = document.createElement("button");
    btn2_second.appendChild(document.createTextNode("Reactive"));
    btn2_second.className = "btn";
    btn2_second.id = "btnReactive2";
    btn2_second.style.border = "1px";
    td.appendChild(btn2_second);
    tr2.appendChild(td);
    btn_second.onclick = function () {        
        btn_second.className = "btn-yellow";
        btn2_second.className = "btn";
        testResultTwo = "Non reactive";
    };

    btn2_second.onclick = function () {        
        btn2_second.className = "btn-yellow";
        btn_second.className = "btn";
        testResultTwo = "reactive";
    };


    table.appendChild(tr);
    table.appendChild(tr2);
    div.appendChild(table);
    frame.appendChild(div);
}
function checkResult(){
    if(testResultOne == "reactive" && testResultTwo == "reactive"){
        showMessage("Confirmatory test and start ART");
    }else{
        showMessage("Repeat test in 4 weeks to rule out new infection");
    }
}
