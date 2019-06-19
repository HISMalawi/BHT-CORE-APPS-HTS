var window_href = window.location.href;

window_url = new URL(window_href);

var start_date = window_url.searchParams.get("start_date");

var end_date = window_url.searchParams.get("end_date");

var apiProtocol = sessionStorage.apiProtocol;

var apiPort = sessionStorage.apiPort;

var apiURL = sessionStorage.apiURL;

var url = apiProtocol + "://" + apiURL + ":" + apiPort + "/api/v1";

var months = {0: "January", 1: "February",
    2: "March",3: "April",4: "May",5: "June",
    6: "July",7: "August",8: "September",
    9: "October",10: "November",11: "December"}

var monthdiff = monthDiff(new Date(start_date), new Date(end_date));

var table = null;
  
var count = 1;

var first_name, last_name;
console.log("Start date is "+start_date);
$(document).ready(function(){
 populateTable(start_date,end_date);

});

function populateTable(start_date,end_date){
  
  var url = apiProtocol + "://" + apiURL + ":" + apiPort;

  url += "/api/v1/programs/"+ sessionStorage.programID + "/reports/find_all_patients?name=find_all_patients&patient";

  url += "&start_date=" + start_date;

  url += "&end_date=" + end_date;

  console.log("Link is " + url);

  var xhttp = new XMLHttpRequest();
  
  xhttp.onreadystatechange = function() {
    
    if (this.readyState == 4 && (this.status == 201 || this.status == 200)) {
      
      var obj = JSON.parse(this.responseText);
      addRows(obj);
    }
  
  };
  
  xhttp.open("GET", url, true);
  
  xhttp.setRequestHeader('Authorization', sessionStorage.getItem("authorization"));
  
  xhttp.setRequestHeader('Content-type', "application/json");
  
  xhttp.send();
    
}

function addRows(data){
    
  for(var i = 0; i < data.length; i++){
   var  obj = data[i];
    Object.keys(obj).forEach(function(key) {
      if(key == 'person'){
        var person_obj = obj[key];
        Object.keys(person_obj).forEach(function(key) {
          if(key == 'names'){
            var names = person_obj[key];
            Object.keys(names).forEach(function(key) {
              var names_obj = names[key];
              Object.keys(names_obj).forEach(function(key) {
               first_name = names_obj["given_name"]; 
               last_name  = names_obj["family_name"]; 
              });  
            });
           
          }
          
        });
      }
      
    });
    var table = document.getElementById("referral_tbody");
   
    var new_row = document.createElement("tr");
    new_row.style.fontSize = "14px";
    new_row.style.backgroundColor = "rgb(204, 204, 204)";
    new_row.style.height = "75px";

    var td_name = document.createElement("td");
    td_name.style.borderRight = "1px solid rgb(51, 51, 51);";
 
    var node_name = document.createTextNode(first_name + " " + last_name);  

    td_name.appendChild(node_name);
    new_row.appendChild(td_name);

    var td_entry_code = document.createElement("td");
    td_entry_code.style.borderRight = "1px solid rgb(51, 51, 51);";
 
    var node_entry_code = document.createTextNode("EC30-3");  

    td_entry_code.appendChild(node_entry_code);
    new_row.appendChild(td_entry_code);

    var outcome = ["ART","REF","D","UNK"];
    var k =0;
    for (var i = 0; i < outcome.length; i++) {
     k++;
    var name = outcome[i];
    var td1_outcome = document.createElement("td");

    td1_outcome.className = "refValue";
    td1_outcome.style.textAlign = "center";
    if(outcome[i] == "UNK"){
      //td1_outcome.className = "bdcell boldRight";
    }
    var div_outcome = document.createElement("div");
    div_outcome.className = "refNormal";

     node_outcome = document.createTextNode(name);
     div_outcome.appendChild(node_outcome);
     td1_outcome.appendChild(div_outcome);
    
    new_row.appendChild(td1_outcome);

    table.appendChild(new_row);   
  }
  break;
  }

}

function getData(current_date){
  
  populateTable(current_date)
  
  if(current_date < moment(end_date).add(-1, 'months').format("YYYY-MM-DD")){
    
    setTimeout(function(){
    
      current_date = moment(current_date).add(1, 'months').format("YYYY-MM-DD");
          
      getData(current_date);
    
    }, 1000)
  
  }

}

function monthDiff(d1, d2) {
  
  var months;
  
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  
  months -= d1.getMonth() + 1;
  
  months += d2.getMonth();
  
  return months <= 0 ? 0 : months;

}








function addRow(){
    
}

