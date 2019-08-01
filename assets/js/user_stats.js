var window_href = window.location.href;

var  $j = jQuery.noConflict();     

window_url = new URL(window_href);

var start_date = window_url.searchParams.get("start_date");

var end_date = window_url.searchParams.get("end_date");

var apiProtocol = sessionStorage.apiProtocol;

var apiPort = sessionStorage.apiPort;

var apiURL = sessionStorage.apiURL;

var url = apiProtocol + "://" + apiURL + ":" + apiPort + "/api/v1";

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
         
         var obj = JSON.parse(this.responseText);
         console.log(obj);
            
       }
     
     };
     
     xhttp.open("GET", url, true);
     
     xhttp.setRequestHeader('Authorization', sessionStorage.getItem("authorization"));
     
     xhttp.setRequestHeader('Content-type', "application/json");
     
     xhttp.send();
       
   }