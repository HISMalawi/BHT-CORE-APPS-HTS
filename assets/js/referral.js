var window_href = window.location.href;

var  $j = jQuery.noConflict();     

window_url = new URL(window_href);

var start_date = window_url.searchParams.get("start_date");

var end_date = window_url.searchParams.get("end_date");

var apiProtocol = sessionStorage.apiProtocol;

var apiPort = sessionStorage.apiPort;

var apiURL = sessionStorage.apiURL;

var url = apiProtocol + "://" + apiURL + ":" + apiPort + "/api/v1";

var table = null;
  
var first_name, last_name, patientID,node_date, started_art, refused, died, unknown;
var new_date, art_id, reg_id, save,art,reg,date_id;
var art_input =  reg_input = outcome_input = count = 0;
var pageNum = dummy_patients = 0;
var pageStart = 1;
var pageEnd, totalSize,patient_num;
$j(document).ready(function(){

   populateTable(start_date,end_date,pageNum);

});


  function populateTable(start_date,end_date,pageNum){
    
    var url = apiProtocol + "://" + apiURL + ":" + apiPort;

    url += "/api/v1/programs/"+ sessionStorage.programID + "/reports/patients?name=patients&patient";

    url += "&start_date=" + start_date;

    url += "&end_date=" + end_date;

    url += "&page=" + pageNum;

    url += "&page_size=3";

    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
      
      if (this.readyState == 4 && (this.status == 201 || this.status == 200)) {
        
        var obj = JSON.parse(this.responseText);
        
        for(let i in obj) {
             var  patient_obj = obj['patients'];
              pageEnd = obj['total_pages'];
              break;
           }
           Object.size = function(patient_num) {
            var size = 0, key;
            for (key in patient_num) {
                if (patient_num.hasOwnProperty(key)) size++;
                }
                return size;
            };
            totalSize = Object.size(patient_num);
           addRows(patient_obj);
           if(count == 0){
           buildPagination();
           }
      }
    
    };
    
    xhttp.open("GET", url, true);
    
    xhttp.setRequestHeader('Authorization', sessionStorage.getItem("authorization"));
    
    xhttp.setRequestHeader('Content-type', "application/json");
    
    xhttp.send();
      
  }

function addRows(data){

  loadPopup("row");
  var c=0;
  for(var i = 0; i < data.length; i++){
     var  obj = data[i];
    for(let i in obj) {
      c++;
          patientID =  obj['patient_id'];     
          var person_obj = obj["person"];
              var names = person_obj["names"];
              for(let i in names) {
                var names_obj = names[i];
                for(let i in names_obj) {
                first_name = names_obj["given_name"]; 
                last_name  = names_obj["family_name"]; 
               if(first_name != "Dummy"){
                  populateRows(c);
                  }else{
                  first_name = "--";
                  last_name = "";
                  populateRows(c);
                 }
                break;
                }
              break;
              }
              break;
      }
  }

}

 function populateRows(c){
      var table = document.getElementById("referral_tbody");
    
      var new_row = document.createElement("tr");
      new_row.style.fontSize = "14px";
      new_row.style.height = "75px";

      if ( c % 2 == 0) {
        new_row.style.backgroundColor = "#fff";

      }else{
        new_row.style.backgroundColor = "rgb(204, 204, 204)";

      }

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
      div_outcome.id = "outcome"+k+c;

      node_outcome = document.createTextNode(name);
      div_outcome.appendChild(node_outcome);
      td1_outcome.appendChild(div_outcome);
      
      new_row.appendChild(td1_outcome);
      div_outcome.onclick = function () {  
        outcome_input++;
        switch(this.id) {
            case "outcome1"+c:  
              $j('#outcome1'+c).addClass("circled");
              $j('#outcome2'+c).removeClass("circled");
              $j('#outcome3'+c).removeClass("circled");
              $j('#outcome4'+c).removeClass("circled");
              node_outcome = "Started";
              break;
            case "outcome2"+c:
            $j('#outcome2'+c).addClass("circled");
            $j('#outcome1'+c).removeClass("circled");
            $j('#outcome3'+c).removeClass("circled");
            $j('#outcome4'+c).removeClass("circled");
              node_outcome = "Refused";
              break;
            case "outcome3"+c:
            $j('#outcome3'+c).addClass("circled");
            $j('#outcome2'+c).removeClass("circled");
            $j('#outcome1'+c).removeClass("circled");
            $j('#outcome4'+c).removeClass("circled");
                node_outcome = "Died";
                break;
              case "outcome4"+c:
              $j('#outcome4'+c).addClass("circled");
              $j('#outcome2'+c).removeClass("circled");
              $j('#outcome3'+c).removeClass("circled");
              $j('#outcome1'+c).removeClass("circled");
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
    div_date.id = "outcomedate"+c;
    div_date.className = "refText";
    div_date.style.border = "2px solid rgb(136, 136, 136)";
    div_date.style.fontSize = "16px";
    div_date.style.textAlign = "center";
    div_date.style.height = "30px";

    td_date.appendChild(div_date);

    new_row.appendChild(td_date);

    var td_art = document.createElement("td");
    td_art.style.textAlign = "center";
    td_art.style.borderRight = "1px solid rgb(51, 51, 51)";
    td_art.style.padding = "0px";


    var div_art = document.createElement("div");
    div_art.id = "art"+c;
    div_art.className = "refText";
    div_art.style.border = "2px solid rgb(136, 136, 136)";
    div_art.style.fontSize = "16px";
    div_art.style.textAlign = "center";
    div_art.style.height ="30px";

    td_art.appendChild(div_art);

    new_row.appendChild(td_art);

    var td_reg = document.createElement("td");
    td_reg.style.textAlign = "center";
    td_reg.style.borderRight = "1px solid rgb(51, 51, 51)";
    td_reg.style.padding = "0px";


    var div_reg = document.createElement("div");
    div_reg.id = "reg"+c;
    div_reg.className = "refText";
    div_reg.style.border = "2px solid rgb(136, 136, 136)";
    div_reg.style.fontSize = "16px";
    div_reg.style.textAlign = "center";
    div_reg.style.height = "30px";

    
    td_reg.appendChild(div_reg);

    new_row.appendChild(td_reg);

    var td_save = document.createElement("td");
    td_save.style.textAlign = "center";
    td_save.style.borderRight = "1px solid rgb(51, 51, 51)";
    td_save.style.padding = "0px";

    var btn_save = document.createElement("button");
    btn_save.className = "gray_save";
    btn_save.id = "btnSave"+c;
    btn_save.style.display = "inline";

    var spanLast = document.createElement("span");
    spanLast.className = "gray";
    spanLast.id = "spanSave"+c;
    node_save = document.createTextNode("Save"); 
    spanLast.appendChild(node_save); 
    btn_save.appendChild(spanLast);
    td_save.appendChild(btn_save);
    new_row.appendChild(td_save);

    table.appendChild(new_row); 
    
    
    div_date.onclick = function () { 
      outcome_input++;
      outcome_date = document.getElementById(this.id);
      date_id = this.id;

      regex = new RegExp('([0-9]+)|([WDMY]+)','g');
      splittedArray = date_id.match(regex);
      num = splittedArray[0];

      //css
      div_date.style.border = "2px solid rgb(197, 0, 0)";
      div_art.style.border = "2px solid rgb(136, 136, 136)";
      div_reg.style.border = "2px solid rgb(136, 136, 136)";

      $j("#popup").html("");
      showDate2("popup");

    };

    div_art.onclick = function () {
      art = document.getElementById(this.id);
      art_input = 1;
      art_id = this.id;

      regex = new RegExp('([0-9]+)|([WDMY]+)','g');
      splittedArray = art_id.match(regex);
      num = splittedArray[0];
      //css 
      div_art.style.border = "2px solid rgb(197, 0, 0)";
      div_date.style.border = "2px solid rgb(136, 136, 136)";
      div_reg.style.border = "2px solid rgb(136, 136, 136)";

      $j("#popup").html("");
      displayKeyboard("popup");
    };
    div_reg.onclick = function () {
      reg = document.getElementById(this.id);  
      reg_input = 1;
      reg_id = this.id;

      regex = new RegExp('([0-9]+)|([WDMY]+)','g');
      splittedArray = reg_id.match(regex);
      num = splittedArray[0];

      //css
      div_reg.style.border = "2px solid rgb(197, 0, 0)";
      div_art.style.border = "2px solid rgb(136, 136, 136)";
      div_date.style.border = "2px solid rgb(136, 136, 136)";

      $j("#popup").html("");
      displayKeyboard("popup");
    };
    $j('#btnSave'+c).click(function(){
      if(node_outcome == ''){
          showMessage("Enter outcome");
      }else{
      postArtReferral();
      }
  });
  
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

      if(art_input == 1) {
        obs.observations.push({ concept_id: 7054, value_text: art.innerHTML });
      }

      if(reg_input == 1) {
        obs.observations.push({ concept_id: 7014, value_text: reg.innerHTML });
      }
      submitParameters(obs, "/observations", "nextPage")    
  }

  function nextPage(){
    window.location.href = "/apps/HTS/views/encounters/referral.html?start_date=" + start_date +"&end_date=" + end_date;

    }
 
function previousPage(){
  window.location.href = "refferal.html";
}
function buildPagination(){
  count =1;
  var div = document.getElementById('pagination');

  var btnFirst = document.createElement("button");
  btnFirst.id = "btnNavPrev";
  btnFirst.className = "blue";
  btnFirst.style.display = "inline";

  var spanFirst = document.createElement("span");
  var nodeFirst = document.createTextNode("|<");
  spanFirst.appendChild(nodeFirst);

  btnFirst.appendChild(spanFirst);
  div.appendChild(btnFirst);


  var btnPrev = document.createElement("button");
  btnPrev.id = "btnNavPrev";
  btnPrev.className = "blue";
  btnPrev.style.display = "inline";

  var spanPrev = document.createElement("span");
  var nodePrev = document.createTextNode("<");
  spanPrev.appendChild(nodePrev);

  btnPrev.appendChild(spanPrev);
  div.appendChild(btnPrev);

  var divNum = document.createElement("div");
  divNum.style.border = "1px inset rgb(153, 153, 153)";
  divNum.style.borderRadius = "5px";
  divNum.style.textAlign = "center";
  divNum.style.width = "380px";
  divNum.style.display = "inline";
  divNum.style.padding = "15px";
  divNum.style.fontSize = "20px";
  divNum.style.marginLeft = "10px";
  divNum.style.marginRight = "10px";

  var nodeNum = document.createTextNode(pageStart +" - of - " + pageEnd);
  divNum.appendChild(nodeNum);

  div.appendChild(divNum);

  var btnNext = document.createElement("button");
  btnNext.id = "btnNavPrev";
  btnNext.className = "blue";
  btnNext.style.display = "inline";

  var spanNext = document.createElement("span");
  var nodeNext = document.createTextNode(">");
  spanNext.appendChild(nodeNext);

  btnNext.appendChild(spanNext);
  div.appendChild(btnNext);

  var btnLast = document.createElement("button");
  btnLast.id = "btnNavPrev";
  btnLast.className = "blue";
  btnLast.style.display = "inline";

  var spanLast = document.createElement("span");
  var nodeLast = document.createTextNode(">|");
  spanLast.appendChild(nodeLast);

  btnLast.appendChild(spanLast);
  div.appendChild(btnLast);

  btnNext.onclick = function () { 
    var last = pageEnd - 1;
    if(pageNum < last){
    pageNum++;
    pageStart++;
    nodeNum.nodeValue = pageStart +" - of - " + pageEnd;
    $j("#referral_tbody tr").remove(); 
    populateTable(start_date,end_date,pageNum);
    }
  }
  btnPrev.onclick = function () { 
    if(pageNum >= 1){
      pageNum--;
      pageStart--;
      nodeNum.nodeValue = pageStart +" - of - " + pageEnd;
      $j("#referral_tbody tr").remove(); 
      populateTable(start_date,end_date,pageNum);
      }
  }
  btnFirst.onclick = function () { 
    pageNum = 0;
    pageStart = 1;
    nodeNum.nodeValue = pageStart +" - of - " + pageEnd;
    $j("#referral_tbody tr").remove(); 
    populateTable(start_date,end_date,pageNum);
  }
  btnLast.onclick = function () { 
    var last = pageEnd - 1;
    pageNum = last;
    pageStart = pageEnd;
    nodeNum.nodeValue = pageStart +" - of - " + pageEnd;
    $j("#referral_tbody tr").remove(); 
    populateTable(start_date,end_date,pageNum);
  
}
}