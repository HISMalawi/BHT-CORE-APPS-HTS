function buildBackdataTable(){
    var frame = document.getElementById('inputFrame' + tstCurrentPage);
    frame.style.height = "90%";
    frame.style = 'width: 1000%; height:100%; overflow-x: scroll';
  //  var div = document.createElement("div");

    var table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    table.style.color = "rgb(51, 51, 51);";
    table.cellPadding = "5px";
    
    var tr = document.createElement("tr");

    var th = document.createElement("th");
    var node = document.createTextNode("Entry Code");   
    th.style.width = "100px";
    th.rowSpan = "4";
    th.className = "boldRight";
    th.style.borderRight = " 1px solid rgb(51, 51, 51)";
    th.style.verticalAlign ="top";
    th.style.height = "50px";
    th.style.width = "20px";
    th.appendChild(node);
    tr.appendChild(th);

    var th = document.createElement("th");
    th.style.width = "150px";
    th.className = "boldRight";
    th.rowSpan = "4";
    th.style.borderRight = " 1px solid rgb(51, 51, 51)";
    th.style.verticalAlign ="top";
    th.style.height = "50px";
    th.style.fontSize = "14px";
    var node = document.createTextNode("Date");
    th.appendChild(node);
    tr.appendChild(th);

    var th = document.createElement("th");
    th.style.width = "10px";
    th.className = "boldRight";
    th.rowSpan = "4";
    th.style.borderRight = " 1px solid rgb(51, 51, 51)";
    th.style.verticalAlign ="top";
    th.style.height = "50px";
    th.style.fontSize = "14px";
    th.style.backgroundColor = "rgba(200, 200, 200, 0.3)";
    var node = document.createTextNode("HTS  Provider ID");
    th.appendChild(node);
    tr.appendChild(th);

    var th = document.createElement("th");
    th.className = "boldRight";
    th.rowSpan = "4";
    th.colSpan = "3";
    th.style.borderRight = " 1px solid rgb(51, 51, 51)";
    th.style.verticalAlign ="top";
    th.style.height = "50px";
    th.style.fontSize = "14px";
    var node = document.createTextNode("Sex/Pregnancy");
    th.style.width = "250px";
    th.appendChild(node);
    tr.appendChild(th);

    var th = document.createElement("th");
    th.className = "boldRight";
    th.rowSpan = "4";
    th.colSpan = "3";
    th.style.borderRight = " 1px solid rgb(51, 51, 51)";
    th.style.verticalAlign ="top";
    th.style.height = "50px";
    th.style.fontSize = "14px";
    var node = document.createTextNode("Age");
    th.appendChild(node);
    tr.appendChild(th);


    var th = document.createElement("th");
    th.className = "boldRight";
    th.rowSpan = "4";
    th.colSpan = "4";
    th.style.borderRight = " 1px solid rgb(51, 51, 51)";
    th.style.verticalAlign ="top";
    th.style.height = "50px";
    th.style.fontSize = "14px";
    var node = document.createTextNode("Age Group");
    th.style.width = "250px";
    th.appendChild(node);
    tr.appendChild(th);

    var th = document.createElement("th");
    th.className = "boldRight";
    th.rowSpan = "4";
    th.colSpan = "3";
    th.style.borderRight = " 1px solid rgb(51, 51, 51)";
    th.style.verticalAlign ="top";
    th.style.height = "50px";
    th.style.fontSize = "14px";
    var node = document.createTextNode("HTS Access Type");
    th.style.width = "120px";
    th.appendChild(node);
    tr.appendChild(th);

    var th = document.createElement("th");
    th.className = "boldRight";
    th.rowSpan = "4";
    th.colSpan = "5";
    th.style.borderRight = " 1px solid rgb(51, 51, 51)";
    th.style.verticalAlign ="top";
    th.style.height = "50px";
    th.style.fontSize = "14px";
    //th.style.backgroundColor = "rgba(200, 200, 200, 0.3)";
    var node = document.createTextNode("Last HIV Test");
   th.style.width = "290px";
    th.appendChild(node);
    tr.appendChild(th);

    var th = document.createElement("th");
    th.className = "boldRight";
    th.style.width = "65px";
    th.rowSpan = "4";
    th.colSpan = "6";
    th.style.borderRight = " 1px solid rgb(51, 51, 51)";
    th.style.verticalAlign ="top";
    th.style.height = "50px";
    th.style.fontSize = "14px";
    //th.style.backgroundColor = "rgba(200, 200, 200, 0.3)";
    var node = document.createTextNode("Time Since Last Test");
    th.appendChild(node);
    tr.appendChild(th);


    var th = document.createElement("th");
    th.className = "boldRight";
    th.style.width = "60px";
    th.rowSpan = "4";
    th.colSpan = "2";
    th.style.borderRight = " 1px solid rgb(51, 51, 51)";
    th.style.verticalAlign ="top";
    th.style.height = "50px";
    th.style.fontSize = "14px";
    //th.style.backgroundColor = "rgba(200, 200, 200, 0.3)";
    var node = document.createTextNode("Partner Present");
    th.appendChild(node);
    tr.appendChild(th);

    var th = document.createElement("th");
    th.className = "boldRight";
    th.rowSpan = "4";    th.style.width = "60px";
    th.rowSpan = "4";
    th.colSpan = "2";
    th.style.borderRight = " 1px solid rgb(51, 51, 51)";
    th.style.verticalAlign ="top";
    th.style.height = "50px";
    th.style.fontSize = "14px";
    //th.style.backgroundColor = "rgba(200, 200, 200, 0.3)";
    var node = document.createTextNode("Partner Present");  
    th.style.width = "60px";
    th.rowSpan = "4";
    th.colSpan = "2";
    th.style.borderRight = " 1px solid rgb(51, 51, 51)";
    th.style.verticalAlign ="top";
    th.style.height = "50px";
    th.style.fontSize = "14px";
    //th.style.backgroundColor = "rgba(200, 200, 200, 0.3)";
    th.colSpan = "8";
    th.style.borderRight = " 1px solid rgb(51, 51, 51)";
    th.style.verticalAlign ="top";
    th.style.height = "50px";
    th.style.fontSize = "14px";
    //th.style.backgroundColor = "rgba(200, 200, 200, 0.3)";
    var node = document.createTextNode("HIV Rapid Test Outcomes");
    th.appendChild(node);
    tr.appendChild(th);

    var th = document.createElement("th");
    th.className = "boldRight";
    th.rowSpan = "4";
    th.colSpan = "8";
    th.style.borderRight = " 1px solid rgb(51, 51, 51)";
    th.style.verticalAlign ="top";
    th.style.height = "50px";
    th.style.fontSize = "14px";
    //th.style.backgroundColor = "rgba(200, 200, 200, 0.3)";
    var node = document.createTextNode("Result given to client");
    th.appendChild(node);
    tr.appendChild(th);


    var th = document.createElement("th");
    th.className = "boldRight";
    th.rowSpan = "4";
    th.colSpan = "8";
    th.style.borderRight = " 1px solid rgb(51, 51, 51)";
    th.style.verticalAlign ="top";
    th.style.height = "50px";
    th.style.fontSize = "14px";
    //th.style.backgroundColor = "rgba(200, 200, 200, 0.3)";
    var node = document.createTextNode("Outcome Summary");
    th.appendChild(node);
    tr.appendChild(th);


    var th = document.createElement("th");
    th.className = "boldRight";
    th.rowSpan = "4";
    th.colSpan = "5";
    th.style.borderRight = " 1px solid rgb(51, 51, 51)";
    th.style.verticalAlign ="top";
    th.style.height = "50px";
    th.style.fontSize = "14px";
    //th.style.backgroundColor = "rgba(200, 200, 200, 0.3)";
    var node = document.createTextNode("Client Risk Category");
    th.appendChild(node);
    tr.appendChild(th);


    var th = document.createElement("th");
    th.className = "boldRight";
    th.rowSpan = "4";
    th.colSpan = "4";
    th.style.borderRight = " 1px solid rgb(51, 51, 51)";
    th.style.verticalAlign ="top";
    th.style.height = "50px";
    th.style.fontSize = "14px";
    //th.style.backgroundColor = "rgba(200, 200, 200, 0.3)";
    var node = document.createTextNode("Partner HIV Status");
    th.appendChild(node);
    tr.appendChild(th);


    var th = document.createElement("th");
    th.className = "boldRight";
    th.rowSpan = "4";
    th.colSpan = "4";
    th.style.borderRight = " 1px solid rgb(51, 51, 51)";
    th.style.verticalAlign ="top";
    th.style.height = "50px";
    th.style.fontSize = "14px";
    //th.style.backgroundColor = "rgba(200, 200, 200, 0.3)";
    var node = document.createTextNode("Referral for Re - Testing");
    th.appendChild(node);
    tr.appendChild(th);


    var th = document.createElement("th");
    th.className = "boldRight";
   // th.style.width = "60px";
    th.rowSpan = "4";
    th.colSpan = "3";
    th.style.borderRight = " 1px solid rgb(51, 51, 51)";
    th.style.verticalAlign ="top";
    th.style.height = "50px";
    th.style.fontSize = "14px";
    //th.style.backgroundColor = "rgba(200, 200, 200, 0.3)";
    var node = document.createTextNode("Number of items Given");
    th.appendChild(node);
    tr.appendChild(th);


    var th = document.createElement("th");
    th.className = "boldRight";
//    th.style.width = "60px";
    th.rowSpan = "4";
    th.colSpan = "3";
    th.style.borderRight = " 1px solid rgb(51, 51, 51)";
    th.style.verticalAlign ="top";
    th.style.height = "50px";
    th.style.fontSize = "14px";
    //th.style.backgroundColor = "rgba(200, 200, 200, 0.3)";
    var node = document.createTextNode("Comments");
    th.appendChild(node);
    tr.appendChild(th);

    table.appendChild(tr);
//    div.appendChild(table);
    frame.appendChild(table);
}