   function displayKeyboard(id){
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


          $j("#btnSave"+num).removeClass("gray_save");
          $j("#btnSave"+num).addClass("blue");
          $j("#spanSave"+num).removeClass("gray_save");


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
              
            $j("#shield, #popup").css("display", "none");

            
            $j("#btnSave"+num).removeClass("gray_save");
            $j("#btnSave"+num).addClass("blue");
            $j("#spanSave"+num).removeClass("gray_save");

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