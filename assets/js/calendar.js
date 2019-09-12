
  // Building calendar
  var obj = {};
  today = sessionStorage.sessionDate;
  obj.appointment_date = moment(addWeeks(new Date(today), 4)).format("YYYY-MM-DD");
  obj.drugs_run_out_date = moment(today).format("YYYY-MM-DD");

  suggestedYear  = parseInt(obj.appointment_date.split("-")[0]);
  suggestedMonth = parseInt(obj.appointment_date.split("-")[1]);
  suggestedDay   = parseInt(obj.appointment_date.split("-")[2]);
      
  currentSetDate = new Date(suggestedYear, (suggestedMonth - 1), 1);

  function addWeeks(date, n) { 
    return new Date(date.setDate(date.getDate() + (n * 7))); 
  }

  function changeMonth(e) {
    if(e.id == "forward"){
      currentSetDate = new Date(currentSetDate.setTime(currentSetDate.getTime() + 35 * 86400000 ));
      var month = (currentSetDate.getMonth() + 1);
    }else{
      currentSetDate = new Date(currentSetDate.setTime(currentSetDate.getTime() - 1 * 86400000 ));
      var month = (currentSetDate.getMonth() + 1);
    }

    if(month.length < 2)
      month = "0" + month;

    var set_date = currentSetDate.getFullYear()  + "-" + month + "-01";
    currentSetDate = new Date(set_date);

    var cell = document.getElementById("calendar-table-cell-left");
    cell.innerHTML = null;
    buildCalendarCells(currentSetDate);
  
    var currentDate = document.getElementById("currentDate");
    currentDate.innerHTML = getFullMonthName(currentSetDate.getMonth());
    var currentYear = document.getElementById("currentYear");
    currentYear.innerHTML = currentSetDate.getFullYear();
  }

  function changeYear(e) {
    if(e.id == "forward-year"){
      currentSetDate = new Date(currentSetDate.setFullYear(currentSetDate.getFullYear() + 1));
    }else{
      currentSetDate = new Date(currentSetDate.setFullYear(currentSetDate.getFullYear() - 1));
    }

    var cell = document.getElementById("calendar-table-cell-left");
    cell.innerHTML = null;
    buildCalendarCells(currentSetDate);
  
    var currentYear = document.getElementById("currentYear");
    currentYear.innerHTML = currentSetDate.getFullYear();
  }

  function buildControls() {
    var frame = document.getElementById("inputFrame" + tstCurrentPage);
    var controller = document.createElement("div");
    controller.setAttribute("class","controller")
    frame.appendChild(controller);

    var controllerRow = document.createElement("div");
    controllerRow.setAttribute("class","controller-row")
    controller.appendChild(controllerRow);

    var cells = ["left","right"];

    for(var i = 0 ; i < cells.length ; i++){
      var controllerCell = document.createElement("div");
      controllerCell.setAttribute("class","controller-cell");
      controllerCell.setAttribute("id","controller-cell-" + cells[i]);
      controllerRow.appendChild(controllerCell);
    }

    monthController();
    yearController();
  }

  function yearController() {
    var table = document.createElement("table");
    table.style = "float: right;";
    tr = document.createElement("tr");
    table.appendChild(tr);

    var td = document.createElement("td");
    var btn = document.createElement("button");
    btn.setAttribute("class","btn btn-primary");
    btn.innerHTML = "-";
    btn.setAttribute("id","previous-year");
    btn.setAttribute("onmousedown", "changeYear(this);");
    td.appendChild(btn);
    tr.appendChild(td);

    var td    = document.createElement("td");
    td.style = "width: 130px; text-align: center; font-weight: bold;";
    var label = document.createElement("label");
    label.setAttribute("id","currentYear");
    label.innerHTML = currentSetDate.getFullYear();
    td.appendChild(label);
    tr.appendChild(td);

    var td = document.createElement("td");
    var btn = document.createElement("button");
    btn.setAttribute("class","btn btn-primary");
    btn.setAttribute("id","forward-year");
    btn.innerHTML = "+";
    btn.setAttribute("onmousedown", "changeYear(this);");
    td.appendChild(btn);
    tr.appendChild(td);

    var container = document.getElementById("controller-cell-right");
    container.appendChild(table);
  }

  function monthController() {
    var table = document.createElement("table");
    table.style = "float: left;";
    tr = document.createElement("tr");
    table.appendChild(tr);

    var td = document.createElement("td");
    var btn = document.createElement("button");
    btn.setAttribute("class","btn btn-primary");
    btn.innerHTML = "-";
    btn.setAttribute("id","previous");
    btn.setAttribute("onmousedown", "changeMonth(this);");
    td.appendChild(btn);
    tr.appendChild(td);

    var td    = document.createElement("td");
    td.style = "width: 130px; text-align: center; font-weight: bold;";
    var label = document.createElement("label");
    label.setAttribute("id","currentDate");
    label.innerHTML = getFullMonthName(currentSetDate.getMonth());
    td.appendChild(label);
    tr.appendChild(td);

    var td = document.createElement("td");
    var btn = document.createElement("button");
    btn.setAttribute("class","btn btn-primary");
    btn.setAttribute("id","forward");
    btn.innerHTML = "+";
    btn.setAttribute("onmousedown", "changeMonth(this);");
    td.appendChild(btn);
    tr.appendChild(td);

    var container = document.getElementById("controller-cell-left");
    container.appendChild(table);
  }

var currentSetDate;

function buildCalendar() {
  var frame = document.getElementById("inputFrame" + tstCurrentPage);
  frame.setAttribute("style","height: 90%; width: 96%;");
  document.getElementById("clearButton").style = "display: none;";

  var calendar = document.createElement("div");
  calendar.setAttribute("class","calendar-table");
  frame.appendChild(calendar);

  var calendarRow = document.createElement("div");
  calendarRow.setAttribute("class","calendar-table-row");
  calendar.appendChild(calendarRow);

  var cells = ["left","right"];
  for(var i = 0 ; i < cells.length ; i++){
    var calendarCell = document.createElement("div");
    calendarCell.setAttribute("class","calendar-table-cell");
    calendarCell.setAttribute("id","calendar-table-cell-" + cells[i]);
    calendarRow.appendChild(calendarCell);
  }

  buildDisplayArea();
  buildCalendarCells(currentSetDate);

  buildControls();

  if ((parseInt(programID) !== 12) || (parseInt(programID !== 21))){

    systemDate = document.getElementById("medication-runout-date");
    systemDate.innerHTML = medication_runout_date;
    
    systemDate = document.getElementById("system-selected-date");
    systemDate2 = document.getElementById("selected-date");
    systemDate.innerHTML = systemDate2.innerHTML;

  }
  
}

function buildDisplayArea() {
  var container = document.getElementById("calendar-table-cell-right");
  var table = document.createElement("table");

  table.setAttribute("id","display-table");
  container.appendChild(table);

  var tds = [
    ["Medication run-out date","medication-runout-date"],
    ["User set appointment date","selected-date"],
    ["Appointment(s)","appointments"],
    ["Appointment Limit (per/day)","appointment-limit"],
    ["&nbsp;","system-selected-date"]
  ];

  if ((parseInt(programID) == 12) || (parseInt(programID) == 21)){
    tds.shift();
  }

  for(var i = 0 ; i < tds.length ; i++){
    var tr = document.createElement("tr");
    table.appendChild(tr);

    var th = document.createElement("th")
    th.innerHTML = tds[i][0];
    tr.appendChild(th);

    var tr = document.createElement("tr");
    tr.id = tds[i][1];
    tr.style.textAlign = "center";
    tr.style.fontWeight= "bold";
    table.appendChild(tr);

    var td = document.createElement("td")
    var label = document.createElement("label");
    label.setAttribute("id", tds[i][1]);
    td.appendChild(label);
    tr.appendChild(td);

    var tr = document.createElement("tr");
    table.appendChild(tr);

    var td = document.createElement("td")
    td.innerHTML = "&nbsp;";
    td.setAttribute("class","separator");
    tr.appendChild(td);

    if(i == 4)
      tr.setAttribute('style','visibility: collapse;');
  
  } 

  getLimit();
  getNextAppointment();
}

function getNextAppointment(){


    var obj = {};
    today = sessionStorage.sessionDate;
    obj.appointment_date = moment(addWeeks(new Date(today), 4)).format("YYYY-MM-DD");
    obj.drugs_run_out_date = moment(today).format("YYYY-MM-DD");

    suggestedYear  = parseInt(obj.appointment_date.split("-")[0]);
    suggestedMonth = parseInt(obj.appointment_date.split("-")[1]);
    suggestedDay   = parseInt(obj.appointment_date.split("-")[2]);

  var selected_date = document.getElementById("selected-date");
  var day = suggestedDay;
  if(day < 10)
    day = ("0" + day);

  var month = getFullMonthName((suggestedMonth - 1));  
  selected_date.innerHTML = day + "/" + month + "/" + suggestedYear;
}

var systemSuggestedDate;

function highlightSuggestedDay() {
  var cells = document.getElementsByClassName("calendar-boxes");
  var selDate = (suggestedYear + "-" + suggestedMonth + "-" + suggestedDay);
  selDate = moment(selDate).format('YYYY-MM-DD'); 
   
  for(var i = 0 ; i < cells.length ; i++){
    if(cells[i].getAttribute("date") == selDate){
      selectDate(cells[i]);
      if(systemSuggestedDate == undefined){
        var cellClass = cells[i].getAttribute('class');
        cells[i].setAttribute('class', cellClass + ' system-suggested-date');
        systemSuggestedDate = selDate;
      }
    }

    /* ................... */
    if(systemSuggestedDate != undefined && cells[i].getAttribute("date") == systemSuggestedDate){
      var cellClass = cells[i].getAttribute('class');
      if(!cellClass.match(/system-suggested-date/i)){
        cells[i].setAttribute('class', cellClass + ' system-suggested-date');
      }
    }
    /* ................... */

  }

}

function buildCalendarCells(current_date) {
  var container = document.getElementById("calendar-table-cell-left");

  var calendar = document.createElement("div");
  calendar.setAttribute("class","calendar");
  container.appendChild(calendar);

  var calendarRow = document.createElement("div");
  calendarRow.setAttribute("class","calendar-row");
  calendar.appendChild(calendarRow);


  var weekDays = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
  for(var i = 0 ; i < weekDays.length ; i++){
    var calendarCell = document.createElement("div");
    calendarCell.setAttribute("class","calendar-cell weekdays");
    calendarCell.innerHTML = weekDays[i];
    calendarRow.appendChild(calendarCell);
  }

  count = 1;

  for(var i = 0 ; i < weekDays.length ; i++){
    var j = 0;
    var calendarRow = document.createElement("div");
    calendarRow.setAttribute("class","calendar-row");
    calendar.appendChild(calendarRow);

    while(j < 7){
      var calendarCell = document.createElement("div");
      calendarCell.setAttribute("class","calendar-cell calendar-boxes");
      calendarCell.setAttribute("id","calendar-cell-box-" + count++);
      calendarCell.setAttribute("weekDay", weekDays[j]);
      calendarCell.setAttribute("weekDayNum", j);
      calendarCell.innerHTML = "&nbsp;";
      calendarRow.appendChild(calendarCell);

      j++;
    }
  }
 
  //var current_date = new Date(current_date); 
  var dates = getMonthDates(current_date);

  setDates(dates);
  highlightSuggestedDay();
}
function changeNextButton() {
  var bnt = document.getElementById("nextButton")
  bnt.setAttribute("onmousedown","setAppointmentDate()");
}

function setAppointmentDate() {
  var currentTime = moment().format(' HH:mm:ss');
  var encounter_datetime = moment(sessionStorage.sessionDate).format('YYYY-MM-DD'); 
  encounter_datetime += currentTime; 

  var encounter = {
    encounter_type_name: 'APPOINTMENT',
    encounter_type_id:  7,
    patient_id: sessionStorage.patientID,
    encounter_datetime: encounter_datetime
  }

  submitParameters(encounter, "/encounters", "postAppointmentObs");

}

function postAppointmentObs(encounter) {
  var appointment = document.getElementById("selected-date").innerHTML;
  var sysDate = document.getElementById("system-selected-date").innerHTML;


  var day   = appointment.split("/")[0];
  var year  = appointment.split("/")[2];
  var month = getMonthInNum(appointment.split("/")[1]);
  if(month < 10)
    month = "0" + month;

  appointment = year + "-" + month + "-" + day;

  var day   = sysDate.split("/")[0];
  var year  = sysDate.split("/")[2];
  var month = getMonthInNum(sysDate.split("/")[1]);
  if(month < 10)
    month = "0" + month;

  sysDate = year + "-" + month + "-" + day;

  if ((parseInt(programID) == 12) || (parseInt(programID) == 21)){

    var value = (appointment)
    var obs = {
      encounter_id: encounter["encounter_id"],
      observations: []
    }

    if (waitingForDelivery == true){
      obs.observations.push({ concept_id: 5096, value_coded: 1107 })
    }else{
      obs.observations.push({ concept_id: 5096, value_datetime: appointment })
    }

    submitParameters(obs, "/observations", "red"); 

  }else{
    
    var obs = {
      encounter_id: encounter["encounter_id"],
      observations: [
        { 
          concept_id: 5096, value_datetime: appointment
        },
        { 
          concept_id: 7437, value_datetime: sysDate
        }
      ]
    }; 
  
    submitParameters(obs, "/observations", "nextPage"); 

  }

}

function setDates(dates) {
  var calendarBoxes = document.getElementsByClassName("calendar-boxes");
  var count = 0;

  for(var i = 0 ; i < calendarBoxes.length ; i++){
    var date;
    try{
      date = dates[count];
    }catch(e){
      break;
    }

    if(!date)
      break;

    if(parseInt(calendarBoxes[i].getAttribute("weekDayNum")) == date.getDay() && calendarBoxes[i].innerHTML == "&nbsp;"){
      calendarBoxes[i].innerHTML = date.getDate();
      calendarBoxes[i].setAttribute("onmousedown","selectDate(this);")
      calendarBoxes[i].setAttribute("date", moment(date).format('YYYY-MM-DD'));
      count++;
    }
  }

}

function getMonthDates(current_date){
  original_month = current_date.getMonth();
  var date = new Date(current_date.getFullYear(), original_month, 1);
  
  var duration = 1;
  var dates = [];

  setDate = date;

  while(original_month == setDate.getMonth()) {
    setDate = new Date(date.setTime(date.getTime() + duration * 86400000 ));
    if(original_month != setDate.getMonth()) 
      break;

    dates.push(setDate);
  }


  dates.unshift(current_date);
  return dates.sort(function(a,b){return a.getTime() - b.getTime()});
}

function selectDate(e) {
  console.log(e);
  var selected_date;

  if (e === undefined){ //Do this to return to the system suggested date.
    var e = document.getElementsByClassName("system-suggested-date")[0];
  }

  selected_date = e.getAttribute("date");
  if(((new Date(selected_date)) > (new Date(medication_runout_date))) && 
    (parseInt(programID) !== 12))
  {
    showConfirm("Medication would run out on "+medication_runout_date+".</p>Are you sure about this selected date?", "selectDate");
  } 
  
  if(clinic_holidays.indexOf(selected_date) >= 0){
    showMessage(moment().format('DD/MMM/YYYY') + ' is a clinic holiday');
    return;
  } 
  
  selected_date = selected_date.split("-")[2];
    
  if(selected_date.length < 2)
    selected_date = "0" + selected_date;

  selected_date += "/" + getFullMonthName(e.getAttribute("date").split("-")[1] - 1);
  selected_date += "/" + e.getAttribute("date").split("-")[0];

  document.getElementById("selected-date").innerHTML = selected_date;
  getAppointMents(e);
  var cells = document.getElementsByClassName("calendar-boxes");
  for(var i = 0 ; i < cells.length ; i++){
    cells[i].setAttribute("style","background-color: '';");
  }

  e.setAttribute("style","background-color: green; color: white;");
  suggestedYear = moment(e.getAttribute('date')).format('YYYY'); 
  suggestedMonth = moment(e.getAttribute('date')).format('MM'); 
  suggestedDay = moment(e.getAttribute('date')).format('DD'); 
    
}
  
function getFullMonthName(index) {  
  var months = new Array();
  months[0] = "January";
  months[1] = "February";
  months[2] = "March";
  months[3] = "April";
  months[4] = "May";
  months[5] = "June";
  months[6] = "July";
  months[7] = "August";
  months[8] = "September";
  months[9] = "October";
  months[10] = "November";
  months[11] = "December";

  return months[index].substring(0,3);
}

function getMonthInNum(str) {  
  var months = new Array();
  months["Jan"] = 1;
  months["Feb"] = 2;
  months["Mar"] = 3;
  months["Apr"] = 4;
  months["May"] = 5;
  months["Jun"] = 6;
  months["Jul"] = 7;
  months["Aug"] = 8;
  months["Sep"] = 9;
  months["Oct"] = 10;
  months["Nov"] = 11;
  months["Dec"] = 12;

  return months[str];
}

function nextPage(obs){
  var url = "/programs/"+programID+"/patients/" + patientID + "/labels/visits?date=" + sessionStorage.sessionDate
  url = apiProtocol + "://" + apiURL + ":" + apiPort + "/api/v1" + url;
  document.location = url;
  
  setTimeout('red();', 2000);
  
}

function red() {
  nextEncounter(patientID, programID);
}

function showConfirm(message, returnFunction) {
  
  messageBar.innerHTML = "";

  messageBar.innerHTML += "<p>" + ((message.match(/^Value\s/)) ? (message.replace(/^Value\s/, "")) : message) +
    "</p><div style='display: block;'>" +
    "<button class='button' style='float: none;' onmousedown='this.offsetParent.style.display=\"none\";'" +
    "><span>Yes</span></button><button class='button' " +
    "style='float: none; right: 3px;' onclick='this.offsetParent.style.display=\"none\";" + returnFunction + "();' onmousedown='this.offsetParent.style.display=\"none\";"+ returnFunction +"(); '>" +
    "<span>No</span></button>";

    messageBar.style.display = "block";

}

var medication_runout_date;

var programID = sessionStorage.programID;
var apiProtocol = sessionStorage.apiProtocol;
var apiPort = sessionStorage.apiPort;
var apiPort = sessionStorage.apiPort;


function getSuggestedAppointmentDate() {
  var patient_id = sessionStorage.patientID;
  var url = apiProtocol + "://" + apiURL + ":" + apiPort + "/api/v1/programs/"+ sessionStorage.programID +"/patients/";
  url += patient_id + "/next_appointment_date?date=" + sessionStorage.sessionDate;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && (this.status == 201 || this.status == 200)) {
      
      var obj = JSON.parse(this.responseText);
      if ((programID == 12 || programID == 18) && obj.appointment_date == ""){
        today = sessionStorage.sessionDate;
        obj.appointment_date = moment(addWeeks(new Date(today), 4)).format("YYYY-MM-DD");
        obj.drugs_run_out_date = moment(today).format("YYYY-MM-DD");

        suggestedYear  = parseInt(obj.appointment_date.split("-")[0]);
        suggestedMonth = parseInt(obj.appointment_date.split("-")[1]);
        suggestedDay   = parseInt(obj.appointment_date.split("-")[2]);
      }else{
        suggestedYear  = parseInt(obj.appointment_date.split("-")[0]);
        suggestedMonth = parseInt(obj.appointment_date.split("-")[1]);
        suggestedDay   = parseInt(obj.appointment_date.split("-")[2]);
      }
      try {
        medication_runout_date = moment(obj.drugs_run_out_date).format('DD/MMM/YYYY');
      }catch(e){
      }

      currentSetDate = new Date(suggestedYear, (suggestedMonth - 1), 1);
      buildCalendar();
    }
  };
  xhttp.open("GET", url, true);
  xhttp.setRequestHeader('Authorization', sessionStorage.getItem("authorization"));
  xhttp.setRequestHeader('Content-type', "application/json");
  xhttp.send();
}

function getLimit() {
  var url = apiProtocol + "://" + apiURL + ":" + apiPort + "/api/v1/global_properties?property=clinic.appointment.limit";

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && (this.status == 201 || this.status == 200)) {
      var obj = JSON.parse(this.responseText);
     document.getElementById("appointment-limit").innerHTML = obj["clinic.appointment.limit"]; 
    }
  };
  xhttp.open("GET", url, true);
  xhttp.setRequestHeader('Authorization', sessionStorage.getItem("authorization"));
  xhttp.setRequestHeader('Content-type', "application/json");
  xhttp.send();
}

function getAppointMents(date) {
  var url = apiProtocol + "://" + apiURL + ":" + apiPort;
  url += "/api/v1/programs/"+ sessionStorage.programID +"/booked_appointments?date="+date.getAttribute("date");
  url += "&paginate=false"
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && (this.status == 201 || this.status == 200)) {
      var obj = JSON.parse(this.responseText);
      document.getElementById("appointments").innerHTML = obj.length;
      showAppointmentBadge(date, obj.length)
    }
  };
  xhttp.open("GET", url, true);
  xhttp.setRequestHeader('Authorization', sessionStorage.getItem("authorization"));
  xhttp.setRequestHeader('Content-type', "application/json");
  xhttp.send();
}

function showAppointmentBadge(obj, total_appointments){
    var inputID = obj.id;
    //jQuery("#" + inputID).children(".badge").remove();
    jQuery(".badge").remove();
    var badge = '<span class="badge">' + total_appointments + '</span>';
    obj.innerHTML += badge;

}

var clinic_holidays = [];

function getHolidays() {
  var url = apiProtocol + "://" + apiURL + ":" + apiPort + "/api/v1/global_properties?property=clinic.holidays";

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && (this.status == 201 || this.status == 200)) {
      var obj = JSON.parse(this.responseText);
      if(obj['clinic.holidays'].length > 0){
        clinic_holidays = obj['clinic.holidays'].split(',');
      }
    }
  };
  xhttp.open("GET", url, true);
  xhttp.setRequestHeader('Authorization', sessionStorage.getItem("authorization"));
  xhttp.setRequestHeader('Content-type', "application/json");
  xhttp.send();
}

getHolidays();