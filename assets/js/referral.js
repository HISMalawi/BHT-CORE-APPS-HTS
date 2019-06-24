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
var new_date, art_id, reg_id, save,art,reg;
var art_input =  reg_input =0;

$j(document).ready(function(){

   populateTable(start_date,end_date);
  //   table = $j("#referral").DataTable({
  //     pageLength: 3
  //     // pagination: true,
  //     // lengthMenu: [5, 10, 30]
  // });

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
                  }
                break;
                }
              break;
              }
              break;
      }
      // if(c==3){
      //   break;
      // }
      
 //break;
  }
}

 function populateRows(c){
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
      div_outcome.id = "outcome"+k+c;

      node_outcome = document.createTextNode(name);
      div_outcome.appendChild(node_outcome);
      td1_outcome.appendChild(div_outcome);
      
      new_row.appendChild(td1_outcome);
      div_outcome.onclick = function () {  

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

  //  node_outcome_date = document.createTextNode(" "); 
    //node_outcome.id = "outcomedate" +c;  
   // div_date.appendChild(node_outcome_date);
    td_date.appendChild(div_date);

    new_row.appendChild(td_date);

    var td_art = document.createElement("td");
    td_art.style.textAlign = "center";
    td_art.style.borderRight = "1px solid rgb(51, 51, 51)";
    td_art.style.padding = "0px";


    var div_art = document.createElement("div");
    div_art.id = "art"+c;
    div_art.className = "refText";
    div_art.style.border = "2px solid rgb(136, 136, 136))";
    div_art.style.fontSize = "16px";
    div_art.style.textAlign = "center";
    div_art.style.height ="30px";

    // node_art = document.createTextNode(""); 
    // node_art.id = "nodeArt"+c;
    // console.log(node_art.id);  
    // div_art.appendChild(node_art);
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

    node_save = document.createTextNode("Save");  
    btn_save.appendChild(node_save);
    td_save.appendChild(btn_save);
    new_row.appendChild(td_save);

    table.appendChild(new_row); 
    
    
    div_date.onclick = function () { 
      outcome_date = document.getElementById(this.id);
      
      //css
      div_date.style.border = "2px solid rgb(197, 0, 0)";
      div_art.style.border = "2px solid rgb(136, 136, 136)";
      div_reg.style.border = "2px solid rgb(136, 136, 136)";
      $j("#btnSave").removeClass("gray_save");
      $j("#btnSave").addClass("blue_save");

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
      $j("#btnSave"+num).removeClass("gray_save");
      $j("#btnSave"+num).addClass("blue_save");

      $j("#popup").html("");
      displayKeyboard2("popup");
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
      $j("#btnSave"+num).removeClass("gray_save");
      $j("#btnSave"+num).addClass("blue_save");

      $j("#popup").html("");
      displayKeyboard2("popup");
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


    function showDate2(id){
      $j("#shield, #popup").css("display", "block");
      $j("#popup").html("");
    
      var holder = document.createElement("div");
      holder.id = "dateselector";
      holder.className = "dateselector";
      var dateNext = "dateselector_nextDay";
      holder.innerHTML = "<table><tbody><tr><td><div style='display: inline;'><button id='dateselector_nextDay' onmousedown='incrementDay();'><span>+</span></button>"+
          "<input id='dateselector_day' type='text'><button id='dateselector_preDay' onmousedown='decrementDay();'><span>-</span></button></div></td><td><div style='display: inline;'>"+
          "<button id='dateselector_nextMonth' onmousedown='incrementMonth();'><span>+</span></button><input id='dateselector_month' type='text'>"+
          "<button id='dateselector_preMonth' onmousedown='decrementMonth();'><span>-</span></button>	</div> 			</td><td> <div style='display: inline;''>"+
          "<button id='dateselector_nextYear' onmousedown='incrementYear();'><span>+</span></button>	<input id='dateselector_year' type='text'> <button id='dateselector_preYear' onmousedown='decrementYear();'>"+
          "<span>-</span></button></div></td><td><button id='today' class='red' onmousedown='displayToday()' style= 'width: 150px;'><span>Today</span></button> <!--button id='num' onmousedown='updateKeyColor(this);press(this.id);' style='width: 150px;'><span>Num</span></button--> "+
          "<button id='Unknown' onmousedown='updateKeyColor(this);press(this.id);' style='width: 150px;'><span>Unknown</span></button> 			</td></tr></tbody></table> 			</div>";
    
      $j(holder).css({
    
          "width": "100%",
    
          "border": "hidden"
    
      });
      var footer = document.createElement("div");
            
      footer.innerHTML = "<table style='width: 100%; background-color:#000000;'><tr><td id = 'left' style='width: 35%; float: left;'></td><td id='right' style='width: 100%;' rowspan='2'></td></tr>" +
          "<tr><td id = ''></td></tr><tr><td id='btns' colspan='2' style='padding-top: 8px; border-top:1px solid black; background-color: black;'>" +
          "</td></tr></table>"
    
      $j(footer).css({
    
          "width": "100%",
    
          "border": "hidden"
    
      });
        
        
        var day = node_date.nodeValue.split(" ")[0];
        var mon = node_date.nodeValue.split(" ")[1];
        var year = node_date.nodeValue.split(" ")[2];
    
     
    
      var table = document.createElement("table");
      table.style.marginLeft = "150px";
    
      //Upper control
      var tr = document.createElement("tr");
      table.appendChild(tr);
    
    
      //Control
      var tr = document.createElement("tr");
      table.appendChild(tr);
    
      var td = document.createElement("td");
      tr.appendChild(td);
      var input = document.createElement("select");
      input.id = "days";
      //input.style.width = "69px";
      input.style.marginLeft = "10px";
      td.appendChild(input);
    
      //Adding options to select
    
      var td = document.createElement("td");
      tr.appendChild(td);
      var input = document.createElement("input");
      input.id = "minutes";
      input.style.width = "69px";
      input.style.marginLeft = "10px";
      td.appendChild(input);
    
      var td = document.createElement("td");
      tr.appendChild(td);
      var input = document.createElement("input");
      input.id = "seconds";
      input.style.width = "69px";
      input.style.marginLeft = "10px";
      td.appendChild(input);
    
      //Upper control
    
    
      var tr3 = document.createElement("tr");
      var cl = document.createElement("div");
    
      cl.className = "button_red cancel";
    
      cl.innerHTML = "Cancel";
    
      cl.onclick = function () {
    
          $j('#backButton, #nextButton').attr("disabled", false);
          $j("#shield, #popup").css("display", "none");
          appointment = 0;
          hts_date =0;
          
      };
    
      $j(cl).css({
    
          "float": "left",
    
          "margin-top": "0px",
    
          "margin-left": "150px"
    
      });
    
      var ok = document.createElement('div');
    
      ok.className = "button_green ok";
    
      ok.innerHTML = "Ok";
    
      $j(ok).css({
    
    
          'margin-right': '2px'
    
      });
    
      // tr3.appendChild(cl);
      table.appendChild(tr3);
      ok.onclick = function () {
        var dob_day  =  __$("dateselector_day").value;
        var dob_month = __$("dateselector_month").value;
        var dob_year = __$("dateselector_year").value;
        var month = moment().month(dob_month).format("M");
    
        if(month < 10){
            d_date = dob_day + " " + dob_month + " " +dob_year;
        }else{
            d_date = dob_day + " " +dob_month + " " +dob_year;
        }
    
 
             new_date = __$("dateselector_day").value + " " + __$("dateselector_month").value + " " +__$("dateselector_year").value;
            outcome_date.innerHTML = new_date;
          
           // node_outcome_date.nodeValue= new_date;
    
            $j("#shield, #popup").css("display", "none");
        
        appointment = 0;
        hts_date =0;
    
      };
      $j("#popup").css({
    
        "width": "550px",
    
        "min-width": "550px"
    
    });
    
         $j("#popup").append(holder);
         $j("#popup").append(footer);
      __$("btns").appendChild(cl);
        
      __$("btns").appendChild(ok);
    
      __$("dateselector_day").value = day;
    
      __$("dateselector_month").value = mon;
    
      __$("dateselector_year").value = year;
    }

    function displayKeyboard2(id){
      $j('#backButton, #nextButton').attr("disabled", true);
  
      var row1 = ["0","1", "2", "3","4","5","6","7","8","9"];
  
      var row2 = ["A", "B", "C", "D", "E", "F","G","H","J","I"];
  
      var row3 = ["J", "K", "L","M", "N","O", "P", "Q", "R", "S"];
  
      var row4 = ["T","U","V","W","X","Y","Z","Del", "Clear", "Space"];
  
  
      var cl = document.createElement("div");
  
      cl.className = "button_red cancel";
  
      cl.innerHTML = "Cancel";
  
      cl.onclick = function () {
  
          $j('#backButton, #nextButton').attr("disabled", false);
  
          $j("#shield, #popup").css("display", "none");
          $j("#popup").html("");
          provider = 0;
          comment = 0;
          reg_input = 0;
          art_input = 0;
      };
  
      $j(cl).css({
  
          "float": "left",
  
          "margin-top": "0px",
  
          "margin-left": "200px"
  
      });
      var ok = document.createElement('div');
  
      ok.className = "button_green ok";
  
      ok.innerHTML = "Ok";
  
      $j(ok).css({
  
         // 'margin-left': '360px',
  
          'margin-right': '2px'
  
      });
  
      ok.onclick = function () {
  
          $j('#backButton, #nextButton').attr("disabled", false);
  
          $j("#shield, #popup").css("display", "none");
          $j("#popup").html("");
          comment = 0;
          provider = 0;
          art_input = 0;
          reg_input = 0;
      }
      var holder = document.createElement("div");
  
      holder.innerHTML = "<table style='width: 100%;'><tr><td id = 'left' style='width: 35%; float: left;'></td><td id='right' style='width: 100%;' rowspan='2'></td></tr>" +
          "<tr><td id = ''></td></tr><tr><td id='btns' colspan='2' style='padding-top: 8px; padding-bottom: 3px;border-top:1px solid black; background-color: black;'>" +
          "</td></tr></table>"
  
      $j(holder).css({
  
          "width": "100%",
  
          "border": "hidden"
  
      });
  
      $j("#popup").css({
          
           "width": "630px",
  
          "min-width": "630px"
  
      });
         var tbl = document.createElement("table");
  
      tbl.className = "keyBoardTable";
  
      tbl.cellSpacing = 0;
  
      tbl.cellPadding = 3;
  
      tbl.id = "tblKeyboard";
  
      tbl.style.minWidth = 0.20 * screen.width + "px";
  
      $j(tbl).css({
  
          "border-left": "1.5px dotted black"
  
      });
  
      tbl.style.margin = "auto";
  
      var tr1 = document.createElement("tr");
  
      for (var i = 0; i < row1.length; i++) {
  
          var td1 = document.createElement("td");
  
          td1.align = "center";
  
          td1.vAlign = "middle";
  
          td1.style.cursor = "pointer";
  
          td1.bgColor = "#ffffff";
  
          td1.width = "10px";
  
          tr1.appendChild(td1);
  
          var btn = document.createElement("div");
  
          btn.className = "button_blue keyboard_button";
  
          btn.innerHTML = row1[i];
  
          btn.onmousedown = function () {

          if(art_input ==1){
           var v = this.innerHTML;
            art.innerHTML += v;
          }else if(reg_input){
            var v = this.innerHTML;
            reg.innerHTML += v;
          }
        
          }
  
          td1.appendChild(btn);
  
      }
      tbl.appendChild(tr1);
      var tr2 = document.createElement("tr");
  
      for (var i = 0; i < row2.length; i++) {
  
          var td2 = document.createElement("td");
  
          td2.align = "center";
  
          td2.vAlign = "middle";
  
          td2.style.cursor = "pointer";
  
          td2.bgColor = "#ffffff";
  
          td2.width = "10px";
  
          tr2.appendChild(td2);
  
          var btn = document.createElement("div");
  
          btn.className = "button_blue keyboard_button";
  
          btn.innerHTML = row2[i];
  
          btn.onmousedown = function () {
              var v = this.innerHTML;
               if(art_input ==1){
                var v = this.innerHTML;
                art.innerHTML += v;
               }else if(reg_input ==1){
                var v = this.innerHTML;
                reg.innerHTML += v;
               }
          }
  
          td2.appendChild(btn);
  
      }
      tbl.appendChild(tr2);
  
      var tr3 = document.createElement("tr");
      for (var i = 0; i < row3.length; i++) {
  
          var td3 = document.createElement("td");
  
          td3.align = "center";
  
          td3.vAlign = "middle";
  
          td3.style.cursor = "pointer";
  
          td3.bgColor = "#ffffff";
  
          td3.width = "10px";
  
          tr3.appendChild(td3);
  
          var btn = document.createElement("div");
  
          btn.className = "button_blue keyboard_button";
  
          btn.innerHTML = row3[i];
  
          btn.onmousedown = function () {
              var v = this.innerHTML;
            if(art_input ==1){
              art.innerHTML += v;
               }else if(reg_input ==1){
                reg.innerHTML += v; 
               }
          }
  
          td3.appendChild(btn);
  
      }
  
          td3.appendChild(btn);
  
     
          tbl.appendChild(tr3);
  
          var tr4 = document.createElement("tr");
      
          for (var i = 0; i < row4.length; i++) {
      
              var td4 = document.createElement("td");
      
              td4.align = "center";
      
              td4.vAlign = "middle";
      
              td4.style.cursor = "pointer";
      
              td4.bgColor = "#ffffff";
      
              td4.width = "10px";
      
              tr4.appendChild(td4);
      
              var btn = document.createElement("div");
      
              btn.innerHTML = row4[i];
      
              btn.className = "button_blue keyboard_button";
      
              btn.onmousedown = function () {
                  var str = this.innerHTML;
                 if(art_input == 1){
                  switch(str){
                      case "Clear":
                      art.innerHTML = " ";
                        break;
                      case "Del":
                      $j('#' + art_id).text(function (_,txt) {
                        return txt.slice(0, -1);
                      }); 
                        break;
                      case "Space":
                      art.innerHTML += " "
                      break;
                      default:
                      art.innerHTML += str;
                      break;
                      }
              }else if(reg_input == 1){
                switch(str){
                  case "Clear":
                  reg.innerHTML = " ";
                    break;
                  case "Del":
                  $j('#' + reg_id).text(function (_,txt) {
                    return txt.slice(0, -1);
                  });                
                  break;
                  case "Space":
                  reg.innerHTML += " "
                  break;
                  default:
                  reg.innerHTML += str;
                  break;
                  }
              }
              }
      
          td4.appendChild(btn);
      
      
          tbl.appendChild(tr4);
  
      
          } 
      
          var input = document.createElement("div");
      
          input.id = "input";
      
          input.innerHTML = "";
      
          $j(input).css({
      
              "font-size": "28px",
      
              "font-style": "italic",
      
              "float": "left",
      
              "height": "50px",
      
              "padding-top": "13%",
      
              "padding-left": "2%"
      
          });
  
            __$(id).appendChild(holder);
      
      
         __$("right").appendChild(tbl);
      
          __$("btns").appendChild(cl);
      
          __$("btns").appendChild(ok);
      
          // __$("popup-header").innerHTML = current_popup;
      
           $j("#shield, #popup").css("display", "block");
      
      }