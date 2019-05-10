
 var  $j = jQuery.noConflict();     

 var current_popup = "Enter value";
 var frame; 
 var node_date;
 var node_provider;
 var node_age;
 var node_time;
 var age,time;
function addRow(){
    var table = document.getElementById("backdata");
   
    var new_row = document.createElement("tr");
    new_row.style.border = "4px solid orange";
    //Entry field

    var td_entry = document.createElement("td");
    td_entry.className = "bdcell boldRight ";
    td_entry.style.width = "150px";
    td_entry.style.color = "color: rgb(197, 0, 0)";
    td_entry.style.fontSize = "14px";
    td_entry.style.textAlign = "center";
    
    var  span_entry = document.createElement("span");
    var node_entry = document.createTextNode("");   
    span_entry.appendChild(node_entry);
    td_entry.appendChild(span_entry);
    new_row.appendChild(td_entry);

    // Date field
    var td_date = document.createElement("td");
    td_date.className = "bdcell boldRight";
    td_date.id = "cell_0";

    var div_date = document.createElement("div");
    div_date.id = "cirle1_0";
    div_date.style.color = "rgb(197, 0, 0)";
    div_date.style.fontSize = "16px";
    div_date.style.textAlign = "center"
    div_date.style.backgroundColor = "#fff";
    div_date.style.width = "130px";
     node_date = document.createTextNode("8 Mar 2019");   
    div_date.appendChild(node_date);
    td_date.appendChild(div_date);

    new_row.appendChild(td_date);
    //HTS Provider
    var td_provider = document.createElement("td");
    td_provider.className = "bdcell boldRight";
    td_provider.id = "cell_1";

    var div_provider = document.createElement("div");
    div_provider.id = "circle_1";
    div_provider.className ="inactive";
    div_provider.style.color = "rgb(197, 0, 0)";
    div_provider.style.fontSize = "16px";
    div_provider.style.textAlign = "center";
    div_provider.style.width = "70px";
    node_provider = document.createTextNode(" ");
    div_provider.appendChild(node_provider);
    td_provider.appendChild(div_provider);
    new_row.appendChild(td_provider);

    //Sex/Pregnancy
    //Male
    var td_male = document.createElement("td");
    td_male.className = "bdcell 2";
    td_male.id = "cell1_2";
   // td_male.style.backgroundColor = "rgba(200, 200, 200, 0.3)";
    
    var div_male = document.createElement("div");
    div_male.className = "normal";
    div_male.id = "circle1_2";
    var node_male = document.createTextNode("M");
    div_male.appendChild(node_male);
    td_male.appendChild(div_male);

    new_row.appendChild(td_male);

    //Female Non Preg
    var td_fnpreg = document.createElement("td");
    td_fnpreg.className = "bdcell 2";
    td_fnpreg.id = "cell1_2";
  //  td_fnpreg.style.backgroundColor = "rgba(200, 200, 200, 0.3)";

    var div_fnpreg = document.createElement("div");
    div_fnpreg.className = "normal";
    div_fnpreg.id = "circle1_3";
    var node_fnpreg = document.createTextNode("FNP");
    div_fnpreg.appendChild(node_fnpreg);

    td_fnpreg.appendChild(div_fnpreg);
    new_row.appendChild(td_fnpreg);

    //Female preg
    var td_preg = document.createElement("td");
    td_preg.className = "bdcell boldRight 2";
    td_preg.id = "cell1_3";
    //td_preg.style.backgroundColor = "rgba(200, 200, 200, 0.3)";

    var div_fpreg = document.createElement("div");
    div_fpreg.className = "normal";
    div_fpreg.id ="circle1_3";
    var node_fpreg = document.createTextNode("FP");
    div_fpreg.appendChild(node_fpreg);

    td_preg.appendChild(div_fpreg);
    new_row.appendChild(td_preg);

    //Age
    var td_age = document.createElement("td");
    td_age.className = "bdcell boldRight";
    td_age.id = "cell_1";

    var div_age = document.createElement("div");
    div_age.id = "circle_1";
    div_age.className ="inactive";
    div_age.style.color = "rgb(197, 0, 0)";
    div_age.style.fontSize = "16px";
    div_age.style.textAlign = "center";
    div_age.style.width = "70px";
     node_age = document.createTextNode(" ");
    div_age.appendChild(node_age);
    td_age.appendChild(div_age);
    new_row.appendChild(td_age);

    //Age group
    //Option A
    var td_age_a = document.createElement("td");
    td_age_a.className = "bdcell";
    td_age_a.id = "cell_6";

    var div_age_a = document.createElement("div");
    div_age_a.className = "normal";
    div_age_a.id = "circle1_6";
    var node_age_a = document.createTextNode("A");
    div_age_a.appendChild(node_age_a);
    td_age_a.appendChild(div_age_a);
    new_row.appendChild(td_age_a);

    //Option B
    var td_age_b = document.createElement("td");
    td_age_b.className = "bdcell";
    td_age_b.id = "cell_6";

    var div_age_b = document.createElement("div");
    div_age_b.className = "normal";
    div_age_b.id = "circle1_6";
    var node_age_b = document.createTextNode("B");
    div_age_b.appendChild(node_age_b);
    td_age_b.appendChild(div_age_b);
    new_row.appendChild(td_age_b);

    //Option C
    var td_age_c = document.createElement("td");
    td_age_c.className = "bdcell";
    td_age_c.id = "cell_6";

    var div_age_c = document.createElement("div");
    div_age_c.className = "normal";
    div_age_c.id = "circle1_6";
    var node_age_c = document.createTextNode("C");
    div_age_c.appendChild(node_age_c);
    td_age_c.appendChild(div_age_c);
    new_row.appendChild(td_age_c);

     //Option D
     var td_age_d = document.createElement("td");
     td_age_d.className = "bdcell boldRight";
     td_age_d.id = "cell_6";
 
     var div_age_d = document.createElement("div");
     div_age_d.className = "normal";
     div_age_d.id = "circle1_6";
     var node_age_d = document.createTextNode("D");
     div_age_d.appendChild(node_age_d);
     td_age_d.appendChild(div_age_d);
     new_row.appendChild(td_age_d);

     //HTS ACCESS TYPE

     //PITC
     var td_pitc = document.createElement("td");
     td_pitc.className = "bdcell";
     td_pitc.id = "cell_6";
 
     var div_pitc = document.createElement("div");
     div_pitc.className = "normal";
     div_pitc.id = "circle1_6";
     var node_pitc = document.createTextNode("PITC");
     div_pitc.appendChild(node_pitc);
     td_pitc.appendChild(div_pitc);
     new_row.appendChild(td_pitc);

     //FRS
     var td_frs = document.createElement("td");
     td_frs.className = "bdcell";
     td_frs.id = "cell_6";
 
     var div_frs = document.createElement("div");
     div_frs.className = "normal";
     div_frs.id = "circle1_6";
     var node_frs = document.createTextNode("FRS");
     div_frs.appendChild(node_frs);
     td_frs.appendChild(div_frs);
     new_row.appendChild(td_frs);

     //Oth
     var td_oth = document.createElement("td");
     td_oth.className = "bdcell boldRight";
     td_oth.id = "cell_6";
 
     var div_oth = document.createElement("div");
     div_oth.className = "normal";
     div_oth.id = "circle1_6";
     var node_oth = document.createTextNode("Oth");
     div_oth.appendChild(node_oth);
     td_oth.appendChild(div_oth);
     new_row.appendChild(td_oth);
    
     // LAst HIV Test
     var ltest = ["LNev","L-", "L+", "LEx","LIn"];
     var k =0;
     for (var i = 0; i < ltest.length; i++) {
        k++;
        var name = ltest[i];
        var td1_ltest = document.createElement("td");

        td1_ltest.className = "bdcell";
        td1_ltest.id = "cell_6";
        if(ltest[i] == "LIn"){
            td1_ltest.className = "bdcell boldRight";
        }
        var div_ltest = document.createElement("div");
        div_ltest.className = "normal";
        div_ltest.id = "ltest"+k;
        var node_ltest = document.createTextNode(name);
        div_ltest.appendChild(node_ltest);
        td1_ltest.appendChild(div_ltest);
        
        new_row.appendChild(td1_ltest);
        console.log(div_ltest.id);
        
        div_ltest.onclick = function () {  
            console.log(div_ltest.id); 
            var ele = document.getElementById(div_ltest.id);
            $j(ele).className = "circled";
            
        };    }  

      //Time since last test
      var td_time = document.createElement("td");
      td_time.className = "bdcell boldRight";
      td_time.id = "cell_18";
  
      var div_time = document.createElement("div");
      div_time.id = "circle_1";
      div_time.className ="inactive";
      div_time.style.color = "rgb(197, 0, 0)";
      div_time.style.fontSize = "16px";
      div_time.style.textAlign = "center";
      div_time.style.width = "70px";
       node_time = document.createTextNode(" ");
      div_time.appendChild(node_time);
      td_time.appendChild(div_time);
      new_row.appendChild(td_time);
  
    // Partner present
    var partner = ["N","Y"];
    var k =0;
    for (var i = 0; i < partner.length; i++) {
    k++;
    var name = partner[i];
    var td1_partner = document.createElement("td");

    td1_partner.className = "bdcell";
    td1_partner.id = "cell_6";
    if(partner[i] == "Y"){
        td1_partner.className = "bdcell boldRight";
    }
    var div_partner = document.createElement("div");
    div_partner.className = "normal";
    div_partner.id = "partner"+k;
    var node_ltest = document.createTextNode(name);
    div_partner.appendChild(node_ltest);
    td1_partner.appendChild(div_partner);
    
    new_row.appendChild(td1_partner);
    
    div_partner.onclick = function () {  
        var ele = document.getElementById(div_partner.id);
        $j(ele).className = "circled";
        
    };    }  

    // Test 1
    var test = ["-","+"];
    var k =0;
    for (var i = 0; i < test.length; i++) {
    k++;
    var name = test[i];
    var td1_test = document.createElement("td");

    td1_test.className = "bdcell";
    td1_test.id = "cell_6";
    if(test[i] == "+"){
        td1_test.className = "bdcell boldRight";
    }
    var div_test = document.createElement("div");
    div_test.className = "normal";
    div_test.id = "test"+k;
    var node_test = document.createTextNode(name);
    div_test.appendChild(node_test);
    td1_test.appendChild(div_test);
    
    new_row.appendChild(td1_test);

    div_test.onclick = function () {  
        // var ele = document.getElementById(div_test.id);
        // $j(ele).className = "circled";
        
    };    }  

    // Test 2
    var test_two = ["-","+"];
    var k =0;
    for (var i = 0; i < test_two.length; i++) {
    k++;
    var name = test_two[i];
    var td1_test_two = document.createElement("td");

    td1_test_two.className = "bdcell";
    td1_test_two.id = "cell_6";
    if(test_two[i] == "+"){
        td1_test_two.className = "bdcell boldRight";
    }
    var div_test_two = document.createElement("div");
    div_test_two.className = "normal";
    div_test_two.id = "test"+k;
    var node_test_two = document.createTextNode(name);
    div_test_two.appendChild(node_test_two);
    td1_test_two.appendChild(div_test_two);
    
    new_row.appendChild(td1_test_two);

    div_test_two.onclick = function () {  
        // var ele = document.getElementById(div_test.id);
        // $j(ele).className = "circled";
        
    };    }  

 // Test 3
 var test_three = ["-","+"];
 var k =0;
 for (var i = 0; i < test_three.length; i++) {
 k++;
 var name = test_three[i];
 var td1_test_t = document.createElement("td");

 td1_test_two.className = "bdcell";
 td1_test_two.id = "cell_6";
 if(test_three[i] == "+"){
     td1_test_two.className = "bdcell boldRight";
 }
 var div_test_two = document.createElement("div");
 div_test_two.className = "normal";
 div_test_two.id = "test"+k;
 var node_test_two = document.createTextNode(name);
 div_test_two.appendChild(node_test_two);
 td1_test_two.appendChild(div_test_two);
 
 new_row.appendChild(td1_test_two);

 div_test_two.onclick = function () {  
     // var ele = document.getElementById(div_test.id);
     // $j(ele).className = "circled";
     
 };    }  



    table.appendChild(new_row);
    loadPopup(new_row);

    //onclick functions
    div_date.onclick = function () {        
      div_date.className = "active";
         $j("#popup").html("");
      showDate("popup");
  };

  div_provider.onclick = function () {        
    div_provider.className = "active";
          $j("#popup").html("");

        displayKeyboard("popup");
    };

    div_male.onclick = function () {        
        div_male.className = "circled";
              $j("#popup").html("");
              div_fnpreg.className = "normal";
              div_fpreg.className = "normal";

        };
    div_fnpreg.onclick = function () {        
        div_fnpreg.className = "circled";
                $j("#popup").html("");
                div_male.className = "normal";
                div_fpreg.className = "normal";
        };
    div_fpreg.onclick = function () {        
        div_fpreg.className = "circled";
                div_fnpreg.className = "normal";
                div_male.className = "normal";
        };
    div_age.onclick = function () {        
        div_age.className = "active";
        age = 1;
                $j("#popup").html("");
                showAge("popup");
        };
    div_age_a.onclick = function () {        
        div_age_a.className = "circled";
                $j("#popup").html("");
                div_age_b.className = "normal";
                div_age_c.className = "normal";
                div_age_d.className = "normal";
        };
    div_age_b.onclick = function () {        
        div_age_b.className = "circled";
                $j("#popup").html("");
                div_age_a.className = "normal";
                div_age_c.className = "normal";
                div_age_d.className = "normal";
        };
    div_age_c.onclick = function () {        
        div_age_c.className = "circled";
                $j("#popup").html("");
                div_age_a.className = "normal";
                div_age_b.className = "normal";
                div_age_d.className = "normal";
        };
    div_age_d.onclick = function () {        
        div_age_d.className = "circled";
                $j("#popup").html("");
                div_age_a.className = "normal";
                div_age_b.className = "normal";
                div_age_c.className = "normal";
        };

    div_pitc.onclick = function () {        
        div_pitc.className = "circled";
                $j("#popup").html("");
                div_frs.className = "normal";
                div_oth.className = "normal";
        };
    div_frs.onclick = function () {        
        div_frs.className = "circled";
                $j("#popup").html("");
                div_pitc.className = "normal";
                div_oth.className = "normal";
        };
    div_oth.onclick = function () {        
        div_oth.className = "circled";
                $j("#popup").html("");
                div_pitc.className = "normal";
                div_frs.className = "normal";
        };
    div_time.onclick = function () {  
        time =1;      
        div_time.className = "active";
                $j("#popup").html("");
                showAge("popup");
            };
    }

function showDate(id){
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
  // var x = document.getElementById("days");
  // var option = document.createElement("option");
  // option.text = "Kiwi";
  // x.add(option);


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

          var new_date = __$("dateselector_day").value + " " + __$("dateselector_month").value + " " +__$("dateselector_year").value;
          node_date.nodeValue= new_date;
          $j('#backButton, #nextButton').attr("disabled", false);

          $j("#shield, #popup").css("display", "none");


  };

  $j("#popup").append(holder);
  $j("#popup").append(cl);
  $j("#popup").append(ok);
}

function loadPopup(row) {

  var popup = document.createElement("div");

  popup.id = "popup";



  $j(popup).css({

      position: "fixed",

      display: "none",

      "min-width": 0.35 * screen.width + "px",

      "min-height": 0.25 * screen.height + "px",

      width: "auto",

      height: "auto",

      "z-index": 100,

      left: 0.325 * screen.width + "px",

      top: 0.18 * screen.height + "px",

      border: "1px solid black",

      background: "white",

      "border-radius": "5px",

      opacity: "1"

  });


  var popupHeader = document.createElement("div");

  popupHeader.id = "popup-header";

  popupHeader.innerHTML = current_popup;

  $j(popupHeader).css({

      "width": "100%",

      "height": 0.055 * screen.height + "px",

      "font-size": "22px",

      "font-weight": "bold",

      "padding-top": "10px",

      "text-align": "center",

      border: "1px dotted white",

      background: "#6D929B",

      color: "white"

  });


  var shield = document.createElement("div");

  shield.id = "shield";

  shield.style.display = "none";

  shield.style.position = "absolute";

  shield.style.width = "100%";

  shield.style.height = "100%";

  shield.style.left = "0px";

  shield.style.top = "0px";

  shield.style.backgroundColor = "#333";

  shield.style.opacity = "0.4";

  shield.style.zIndex = 50;

  var frame = document.getElementById('content');
 frame.appendChild(shield);

popup.appendChild(popupHeader);

 frame.appendChild(popup);
}
function displayToday(){

    var dateObj = new Date();
    locale = "en-us";
    var month = dateObj.toLocaleString(locale, { month: "short" });
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    
    __$("dateselector_year").value = year;
    __$("dateselector_day").value = day;
    __$("dateselector_month").value = month;
}

function displayKeyboard(id){
    $j('#backButton, #nextButton').attr("disabled", true);

    var row1 = ["0","1", "2", "3","4","5","6","7","8","9"];

    var row2 = ["A", "B", "C", "D", "E", "F","G","H","J","K"];

    var row3 = ["L", "M", "N","P", "R","T", "V", "W", "X", "Y"];

    var row4 = ["Del", "Clear"];

    var cl = document.createElement("div");

    cl.className = "button_red cancel";

    cl.innerHTML = "Cancel";

    cl.onclick = function () {

        $j('#backButton, #nextButton').attr("disabled", false);

        $j("#shield, #popup").css("display", "none");
        $j("#popup").html("");

    };

    $j(cl).css({

        "float": "left",

        "margin-top": "0px",

        "margin-left": "10px"

    });

    var ok = document.createElement('div');

    ok.className = "button_green ok";

    ok.innerHTML = "Ok";

    $j(ok).css({

        'margin-left': '360px',

        'margin-right': '2px'

    });

    ok.onclick = function () {

        $j('#backButton, #nextButton').attr("disabled", false);

        $j("#shield, #popup").css("display", "none");
        $j("#popup").html("");

    }
    var holder = document.createElement("div");

    holder.innerHTML = "<table style='width: 100%;'><tr><td id = 'left' style='width: 35%; float: left;'></td><td id='right' style='width: 100%;' rowspan='2'></td></tr>" +
        "<tr><td id = ''></td></tr><tr><td id='btns' colspan='2' style='padding-top: 8px; padding-bottom: 3px;border-top:1px solid black; background-color: black;'>" +
        "</td></tr></table>"

    $j(holder).css({

        "width": "100%",

        "border": "hidden"

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
         var v = this.innerHTML;
        var str = node_provider.nodeValue;
          node_provider.nodeValue = str + v;
            

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
            var str = node_provider.nodeValue;
            node_provider.nodeValue = str + v;

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
            var str = node_provider.nodeValue;
            node_provider.nodeValue = str + v;
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
                if(str == "Clear"){
                    node_provider.nodeValue = " ";
                }else{
                    var v =  node_provider.nodeValue;
                   
                    node_provider.nodeValue = v.slice(0, -1);
                }
            }
    
            td4.appendChild(btn);
    
    
        tbl.appendChild(tr4);
    
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
    
        })
    
    
    
    
    
          __$(id).appendChild(holder);
    
    
        __$("right").appendChild(tbl);
    
        __$("btns").appendChild(cl);
    
        __$("btns").appendChild(ok);
    
        // __$("popup-header").innerHTML = current_popup;
    
         $j("#shield, #popup").css("display", "block");
    
        } }

    
function showAge(id){
            $j('#backButton, #nextButton').attr("disabled", true);
        
            var row1 = [" ","1", "2", "3"];

            var row2 = [" ","4", "5", "6"];

            var row3 = [" ","7", "8", "9"];

            var row4 = ["Del", "0", "day","week","month","year"];
        
            var cl = document.createElement("div");
        
            cl.className = "button_red cancel";
        
            cl.innerHTML = "Cancel";
        
            cl.onclick = function () {
        
                $j('#backButton, #nextButton').attr("disabled", false);
        
                $j("#shield, #popup").css("display", "none");
                $j("#popup").html("");
        
            };
        
            $j(cl).css({
        
                "float": "left",
        
                "margin-top": "0px",
        
                "margin-left": "10px"
        
            });
        
            var ok = document.createElement('div');
        
            ok.className = "button_green ok";
        
            ok.innerHTML = "Ok";
        
            $j(ok).css({
        
                'margin-left': '',
        
                'margin-right': ''
        
            });
        
            ok.onclick = function () {
        
                $j('#backButton, #nextButton').attr("disabled", false);
        
                $j("#shield, #popup").css("display", "none");
                $j("#popup").html("");
        
            }
            var holder = document.createElement("div");
        
            holder.innerHTML = "<table style='width: 100%;'><tr><td id = 'left' style='width: 35%; float: left;'></td><td id='right' style='width: 100%;' rowspan='2'></td></tr>" +
                "<tr><td id = ''></td></tr><tr><td id='btns' colspan='2' style='padding-top: 8px; padding-bottom: 3px;border-top:1px solid black; background-color: black;'>" +
                "</td></tr></table>"
        
            $j(holder).css({
        
                "width": "100%",
        
                "border": "hidden"
        
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
                if(age ==1){
                 var v = this.innerHTML;
                var str = node_age.nodeValue;
                  node_age.nodeValue = str + v;
                }else if (time ==1){
                    var v = this.innerHTML;
                    var str = node_time.nodeValue;
                      node_time.nodeValue = str + v;
                }
        
                }
                if(i>0){
                    td1.appendChild(btn);
                }
                
        
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
                    if(age == 1){
                    var v = this.innerHTML;
                    var str = node_age.nodeValue;
                    node_age.nodeValue = str + v;
                    age =0;
                    }else if (time == 1){
                        var v = this.innerHTML;
                        var str = node_time.nodeValue;
                        node_time.nodeValue = str + v;
                    }
        
                }
                if(i>0){
                td2.appendChild(btn);}
        
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
                    if(age == 1){
                    var v = this.innerHTML;
                    var str = node_age.nodeValue;
                    node_age.nodeValue = str + v;
                }else if(time == 1){
                    var v = this.innerHTML;
                    var str = node_time.nodeValue;
                    node_time.nodeValue = str + v;
                }
            
            }
                
                if(i>0){
                td3.appendChild(btn);
                }
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
            
                    td4.width = "25px";
            
                    tr4.appendChild(td4);
            
                    var btn = document.createElement("div");
            
                    btn.innerHTML = row4[i];
            
                    btn.className = "button_blue keyboard_button";
            
                    btn.onmousedown = function () {
                        var str = this.innerHTML;
                        if(age == 1){
                        if(str == "Clear"){
                            node_age.nodeValue = " ";
                        }else if(str == "Del"){
                            var v =  node_age.nodeValue;
                           
                            node_age.nodeValue = v.slice(0, -1);
                        } else if (str == "day"){
                        var v = node_age.nodeValue;
                        var str = "D";
                        node_age.nodeValue = v + str;
                        } else if (str == "week"){
                            var v = node_age.nodeValue;
                            var str = "W";
                            node_age.nodeValue = v + str;
                         } else if (str == "month"){
                            var v = node_age.nodeValue;
                            var str = "M";
                            node_age.nodeValue = v + str;
                        } else if (str == "year"){
                            var v = node_age.nodeValue;
                            var str = "Y";
                            node_age.nodeValue = v + str;
                            }
                        }else if(time == 1){
                            if(str == "Clear"){
                                node_time.nodeValue = " ";
                            }else if(str == "Del"){
                                var v =  node_time.nodeValue;
                               
                                node_time.nodeValue = v.slice(0, -1);
                            } else if (str == "day"){
                            var v = node_time.nodeValue;
                            var str = "D";
                            node_time.nodeValue = v + str;
                            } else if (str == "week"){
                                var v = node_time.nodeValue;
                                var str = "W";
                                node_time.nodeValue = v + str;
                             } else if (str == "month"){
                                var v = node_time.nodeValue;
                                var str = "M";
                                node_time.nodeValue = v + str;
                            } else if (str == "year"){
                                var v = node_time.nodeValue;
                                var str = "Y";
                                node_time.nodeValue = v + str;
                                }
                        }
                    }
                    
                    
            
                    td4.appendChild(btn);
            
            
                tbl.appendChild(tr4);
            
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
            
                })
            
            
                 
            $j("#popup").css({
        
                "width": "420px",
        
                "min-width": "420px"
        
            });
            
            
                  __$(id).appendChild(holder);
            
            
                __$("right").appendChild(tbl);
            
                __$("btns").appendChild(cl);
            
                __$("btns").appendChild(ok);
            
                // __$("popup-header").innerHTML = current_popup;
            
                 $j("#shield, #popup").css("display", "block");
            
                } 
            }