var window_href = window.location.href;

var  $j = jQuery.noConflict();     

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


var table = null;
  
var first_name, last_name, patientID,node_date, started_art, refused, died, unknown;


$j(document).ready(function(){

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
        if(key == 'patient_id'){
          patientID =  obj[key];
        }
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
                // console.log(first_name + " " + last_name);
                // console.log(patientID);
                
                });  
              });
            
            }
            
          });
        }
        
      });
      if(first_name != "Dummy"){
      populateRows();
      }
 // break;
  }
}

 function populateRows(){
      var table = document.getElementById("referral_tbody");
    
      var new_row = document.createElement("tr");
      new_row.style.fontSize = "14px";
      new_row.style.backgroundColor = "rgb(204, 204, 204)";
      new_row.style.height = "75px";

      var td_name = document.createElement("td");
      td_name.style.borderRight = "1px solid rgb(51, 51, 51)";
  
      var node_name = document.createTextNode(first_name + " " + last_name);  

      td_name.appendChild(node_name);
      new_row.appendChild(td_name);

      var td_entry_code = document.createElement("td");
      td_entry_code.style.borderRight = "1px solid rgb(51, 51, 51)";
      td_entry_code.style.textAlign = "center";

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
        td1_outcome.style.borderRight = "1px solid rgb(51, 51, 51)";
      }
      var div_outcome = document.createElement("div");
      div_outcome.className = "refNormal";
      div_outcome.id = "outcome"+k;

      node_outcome = document.createTextNode(name);
      div_outcome.appendChild(node_outcome);
      td1_outcome.appendChild(div_outcome);
      
      new_row.appendChild(td1_outcome);
      div_outcome.onclick = function () {  

        switch(this.id) {
            case "outcome1":  
              $j('#outcome1').addClass("circled");
              $j('#outcome2').removeClass("circled");
              $j('#outcome3').removeClass("circled");
              $j('#outcome4').removeClass("circled");
              node_outcome = "Started";
              break;
            case "outcome2":
            $j('#outcome2').addClass("circled");
            $j('#outcome1').removeClass("circled");
            $j('#outcome3').removeClass("circled");
            $j('#outcome4').removeClass("circled");
              node_outcome = "Refused";
              break;
            case "outcome3":
            $j('#outcome3').addClass("circled");
            $j('#outcome2').removeClass("circled");
            $j('#outcome1').removeClass("circled");
            $j('#outcome4').removeClass("circled");
                node_outcome = "Died";
                break;
              case "outcome4":
              $j('#outcome4').addClass("circled");
              $j('#outcome2').removeClass("circled");
              $j('#outcome3').removeClass("circled");
              $j('#outcome1').removeClass("circled");
                node_outcome = "Unknown";
                  break;
            default:
          } 
    }; 
    }
      
    var td_date = document.createElement("td");
    td_date.style.textAlign = "center";
    td_date.style.borderRight = "1px solid rgb(51, 51, 51)";
    td_date.style.padding = "0px";


    var div_date = document.createElement("div");
    div_date.id = "";
    div_date.className = "refText";
    div_date.style.border = "2px solid rgb(136, 136, 136)";
    div_date.style.fontSize = "16px";
    div_date.style.textAlign = "center";
    div_date.style.height = "30px";

    node_outcome_date = document.createTextNode(" ");   
    div_date.appendChild(node_outcome_date);
    td_date.appendChild(div_date);

    new_row.appendChild(td_date);

    var td_art = document.createElement("td");
    td_art.style.textAlign = "center";
    td_art.style.borderRight = "1px solid rgb(51, 51, 51)";
    td_art.style.padding = "0px";


    var div_art = document.createElement("div");
    div_art.id = "";
    div_art.className = "refText";
    div_art.style.border = "2px solid rgb(136, 136, 136))";
    div_art.style.fontSize = "16px";
    div_art.style.textAlign = "center";
    div_art.style.height ="30px";

    node_art = document.createTextNode("");   
    div_art.appendChild(node_art);
    td_art.appendChild(div_art);

    new_row.appendChild(td_art);

    var td_reg = document.createElement("td");
    td_reg.style.textAlign = "center";
    td_reg.style.borderRight = "1px solid rgb(51, 51, 51)";
    td_reg.style.padding = "0px";


    var div_reg = document.createElement("div");
    div_reg.id = "";
    div_reg.className = "refText";
    div_reg.style.border = "2px solid rgb(136, 136, 136)";
    div_reg.style.fontSize = "16px";
    div_reg.style.textAlign = "center";
    div_reg.style.height = "30px";

    node_reg = document.createTextNode("");   
    div_reg.appendChild(node_reg);
    td_reg.appendChild(div_reg);

    new_row.appendChild(td_reg);

    var td_save = document.createElement("td");
    td_save.style.textAlign = "center";
    td_save.style.borderRight = "1px solid rgb(51, 51, 51)";
    td_save.style.padding = "0px";

    var btn_save = document.createElement("button");
    btn_save.className = "gray_save";
    btn_save.id = "btnSave";

    node_save = document.createTextNode("Save");  
    btn_save.appendChild(node_save);
    td_save.appendChild(btn_save);
    new_row.appendChild(td_save);

    table.appendChild(new_row); 
    loadPopup(new_row);
    
    
    div_date.onclick = function () { 
      outcome_date = 1;

      //css
      div_date.style.border = "2px solid rgb(197, 0, 0)";
      div_art.style.border = "2px solid rgb(136, 136, 136)";
      div_reg.style.border = "2px solid rgb(136, 136, 136)";
      $j("#btnSave").removeClass("gray_save");
      $j("#btnSave").addClass("blue_save");

      $j("#popup").html("");
      showDate("popup");
    };

    div_art.onclick = function () {
      art = 1; 

      //css 
      div_art.style.border = "2px solid rgb(197, 0, 0)";
      div_date.style.border = "2px solid rgb(136, 136, 136)";
      div_reg.style.border = "2px solid rgb(136, 136, 136)";
      $j("#btnSave").removeClass("gray_save");
      $j("#btnSave").addClass("blue_save");

      $j("#popup").html("");
      displayKeyboard("popup");
    };
    div_reg.onclick = function () {
      reg = 1;  

      div_reg.style.border = "2px solid rgb(197, 0, 0)";
      div_art.style.border = "2px solid rgb(136, 136, 136)";
      div_date.style.border = "2px solid rgb(136, 136, 136)";
      $j("#btnSave").removeClass("gray_save");
      $j("#btnSave").addClass("blue_save");

      $j("#popup").html("");
      displayKeyboard("popup");
    };
    btn_save.onclick = function () {

      postArtReferral();
    
    };
  }

    

  function postArtReferral(){
    var currentTime = moment().format(' HH:mm:ss');
    var encounter_datetime = moment(sessionStorage.sessionDate).format('YYYY-MM-DD');
    encounter_datetime += currentTime;

    var encounter = {
        encounter_type_name: 'PART_FOLLOWUP',
        encounter_type_id:  12,
        patient_id: patientID,
        encounter_datetime: encounter_datetime
    };

    submitParameters(encounter, "/encounters", "postArtReferralObs");
  }


  function postArtReferralObs(encounter){
    var conceptAnswers = [
      /*ART Referral*/
      {
      "startedArt": 8883,
      "refused":3580,
      "died": 1742,
      "unknown": 1067
        }
    ];

    var referralAnswer;
    switch (node_outcome) {
      case 'Started':
          referralAnswer = conceptAnswers[0].startedArt;
          break;
      case 'Refused':
          referralAnswer = conceptAnswers[0].refused;
          break;
      case 'Died':
          referralAnswer = conceptAnswers[0].died;
          break;
      case 'UNknown':
          referralAnswer = conceptAnswers[0].unknown;
      break;
      default:
          break;
    }

    var obs = {
      encounter_id: encounter["encounter_id"],
      observations: [
          //{ concept_id: 9794, value_text: node_date.nodeValue },
          { concept_id: 9518, value_text: referralAnswer}
              ]
      };

      if(node_art.nodeValue !== '') {
        obs.observations.push({ concept_id: 7054, value_text: node_art.nodeValue });
      }

      if(node_reg.nodeValue !== '') {
        obs.observations.push({ concept_id: 7014, value_text: node_reg.nodeValue });
      }
      submitParameters(obs, "/observations", "nextPage")    
  }

  function nextPage(){
    window.location.href = "/apps/HTS/views/encounters/referral.html?start_date=" + start_date +"&end_date=" + end_date;

    }


