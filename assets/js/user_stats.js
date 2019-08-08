var window_href = window.location.href;

var  $j = jQuery.noConflict();     


var start_date = window_url.searchParams.get("start_date");

var end_date = window_url.searchParams.get("end_date");

var apiProtocol = sessionStorage.apiProtocol;

var apiPort = sessionStorage.apiPort;

var apiURL = sessionStorage.apiURL;
//
var url = apiProtocol + "://" + apiURL + ":" + apiPort + "/api/v1";

var userDate, firstName, lastName, username, total;
var locationName = "";
var populate = 0;
var loc =0;
$j(document).ready(function(){

    populateTable(start_date,end_date);
    
  });
 
  function populateTable(start_date,end_date){

     var url = apiProtocol + "://" + apiURL + ":" + apiPort;
 
     url += "/api/v1/programs/"+ sessionStorage.programID + "/reports/user_stats?name=all&";
 
     url += "&start_date=" + start_date;
 
     url += "&end_date=" + end_date;
  
     var xhttp = new XMLHttpRequest();
     
     xhttp.onreadystatechange = function() {
       
       if (this.readyState == 4 && (this.status == 201 || this.status == 200)) {
         if(populate == 0){
         var obj = JSON.parse(this.responseText);
         for(let i in obj) {
           var patient_obj = obj[i];
           getLocationName(obj[i]);
                                                                                                                
         }
         populate++;
         }      
       }
     
     };
     
     xhttp.open("GET", url, true);
     
     xhttp.setRequestHeader('Authorization', sessionStorage.getItem("authorization"));
     
     xhttp.setRequestHeader('Content-type', "application/json");
     
     xhttp.send();    
       
   } 

   function getRow(data){
     var k =0;
      userDate = data['date'];
      lastName = data['family_name'];
      firstName = data['given_name'];
      total = data['total_visits'];
      username = data['username'];
      populateRow();
   }

   function getLocationName(data){
    var location_id = data['location_id'];
    var url = apiProtocol + "://" + apiURL + ":" + apiPort + "/api/v1/locations/"+location_id;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && (this.status == 201 || this.status == 200)) {
        var obj = JSON.parse(this.responseText);
        locationName = obj['name']; 
        getRow(data);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.setRequestHeader('Authorization', sessionStorage.getItem("authorization"));
    xhttp.setRequestHeader('Content-type', "application/json");
    xhttp.send();
  }


  function populateRow(){
    var table = document.getElementById("user_stats");
    
    var new_row = document.createElement("tr");
    new_row.style.fontSize = "14px";
    new_row.style.fontWeight = "400px";
    new_row.style.height = "55px";

    var td_date = document.createElement("td");
    td_date.style.width = "200px";
  
    var node_date = document.createTextNode(userDate);
    td_date.appendChild(node_date);
    new_row.appendChild(td_date);

    var td_first = document.createElement("td");
    td_first.style.width = "200px";

    var node_first = document.createTextNode(firstName);
    td_first.appendChild(node_first);
    new_row.appendChild(td_first);

    var td_last = document.createElement("td");
    td_last.style.width = "200px";
    
    var node_last = document.createTextNode(lastName);
    td_last.appendChild(node_last);
    new_row.appendChild(td_last);

    var td_user = document.createElement("td");
    td_date.style.width = "200px";

    var node_user = document.createTextNode(username);
    td_user.appendChild(node_user);
    new_row.appendChild(td_user);

    var td_total = document.createElement("td");
    td_total.style.width = "200px";
    
    var node_total = document.createTextNode(total);
    td_total.appendChild(node_total);
    new_row.appendChild(td_total);

    var td_location = document.createElement("td");
    td_location.style.width = "200px";

    var node_location = document.createTextNode(locationName);
    td_location.appendChild(node_location);
    new_row.appendChild(td_location);


    table.appendChild(new_row);
   }