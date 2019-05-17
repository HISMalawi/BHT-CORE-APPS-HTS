var tstCurrentDate = moment(tstCurrentDate).format("YYYY-MM-DD");

var apiProtocol = sessionStorage.apiProtocol;

var apiURL = sessionStorage.apiURL;

var apiPort = sessionStorage.apiPort;

var patientID = sessionStorage.patientID;

var patientDOB = sessionStorage.patientDOB;

var patientAge = sessionStorage.patientAge;

var programID = sessionStorage.programID;

var sessionDate = sessionStorage.sessionDate;

var tt_cancel_destination = "/views/patient_dashboard.html?patient_id=" + patientID;

var $$ = {};

var data = {};

var counts = {};

var deliveries = 0;

var max_delivered = 1;

var parity;

var parsedConceptName;

var x = [];
var num_of_babies = 1;
var d_time;
var observations = [];

var last_visit = "";

var birth_date = new Date(patientDOB);

var current_date =  new Date(sessionDate);

var this_year = current_date.getFullYear();

var birth_year = birth_date.getFullYear();

var mother_age = parseInt(patientAge) - 10;

// Minimum birth year of a child = mother birth year plus 13 more years.

var min_birth_year = (parseInt(birth_year) + 13).toString();

// Max birth year of a child = previous year.

var max_birth_year = birth_year;

// Absolute max for birth of a child = this year.

var abs_max_birth_year = this_year;

var current_popup = "Enter Value";





function loadSelections() {
    $("keyboard").style.display = "none";

    $("touchscreenInput" + tstCurrentPage).style.display = "none";

    $("inputFrame" + tstCurrentPage).style.height = 0.72 * screen.height + "px";

    $("inputFrame" + tstCurrentPage).style.marginTop = 0.05 * screen.height + "px";

    $("inputFrame" + tstCurrentPage).style.background = "white";


    var headerHolder = document.createElement("div");

    headerHolder.style.height = "63px";

    headerHolder.style.width = "100%";

    headerHolder.style.borderRadius = "10px";


    var header = document.createElement("div");

    header.id = "header";

    header.style.width = "100%";

    headerHolder.appendChild(header);




    var t2 = document.createElement("div");

    t2.innerHTML = "Baby count";

    t2.setAttribute("class", "h-cell");

    header.appendChild(t2);


    var t3 = document.createElement("div");

    t3.innerHTML = "Details available";

    t3.setAttribute("class", "h-cell");

    header.appendChild(t3);


    $("inputFrame" + tstCurrentPage).appendChild(headerHolder);


    var container = document.createElement("div");

    container.style.height = 0.64 * screen.height + "px";

    container.id = "container";


    $("inputFrame" + tstCurrentPage).appendChild(container);

    var table = document.createElement("div");

    table.id = "table";


    container.appendChild(table);



    var row = document.createElement("div");

    row.setAttribute("class", "data-row");
    p =1;
    row.id = "row_" + p;

    row.style.background = "#F8F8F8";


    table.appendChild(row);




    var cell2 = document.createElement("div");

    cell2.id = "cell_" + p + "_2";

    cell2.setAttribute("class", "data-cell");

    cell2.style.paddingLeft = "7%";


    cell2.innerHTML = "<table class='button-table'><tr><td><button id = 'inc" + p + "' class = 'minus' onmousedown = 'decrement(" + p + ")'></button> </td> <td><input id = 'input_" +
        p + "'  value = '" + (counts[p] == undefined ? 1 : counts[p]) + "' class = 'label' id = 'label" + p + "' >  </input> </td><td> <button  id = 'dec" + p + "' class = 'plus' onmousedown = 'increment(" + p + ")'></button></td></tr></table>"

    row.appendChild(cell2);

    if (counts[p] != undefined && parseInt(counts[p]) > 1) {
        $("inc" + p).style.background = "url('/apps/MATERNITY/assets/images/down_arrow.png')";

        $("inc" + p).style.backgroundRepeat = "no-repeat";

    } else {

        $("inc" + p).style.background = "url('/apps/MATERNITY/assets/images/down_arrow_gray.png')";

        $("inc" + p).style.backgroundRepeat = "no-repeat";

    }

    if (counts[p] != undefined && parseInt(counts[p]) == 13) {

        $("dec" + p).style.background = "url('/apps/MATERNITY/assets/images/up_arrow_gray.png')";

        $("dec" + p).style.backgroundRepeat = "no-repeat";

    } else {

        $("dec" + p).style.background = "url('/apps/MATERNITY/assets/images/up_arrow.png')";

        $("dec" + p).style.backgroundRepeat = "no-repeat";

    }

    var cell3 = document.createElement("div");

    cell3.id = "cell_" + p + "_3";

    cell3.setAttribute("class", "data-cell-img");

    cell3.setAttribute("p", p);

    cell3.innerHTML = '<img class = "dcimg" id = "img_' + p + '" onclick = "checkSelection(' + p + ')" src="/apps/MATERNITY/assets/images/unticked.jpg" height="45" width="45"> ';

    row.appendChild(cell3);

    if (data[p] == undefined)

        data[p] = {};

    data[p]["condition"] = false;

    data[p]["count"] = 1;



    var width = __$("row_1").offsetWidth + "px";

    headerHolder.style.width = width;

    header.style.width = width;

    updateInput(1, false);


}


function loadInputWindow() {

    var myModule = (function (jQ, $) {

        function load() {

            jQ("#touchscreenInput" + tstCurrentPage + ", #keyboard").css("display", "none");

            __$("inputFrame" + tstCurrentPage).style.height = "80%"

            __$("inputFrame" + tstCurrentPage).style.marginTop = 0.05 * screen.height + "px";

            __$("inputFrame" + tstCurrentPage).style.background = "white";

            __$("inputFrame" + tstCurrentPage).style.width = "98%"


            var headerHolder = document.createElement("div");

            headerHolder.id = "hheader"

            headerHolder.style.height = "63px;";

            headerHolder.style.width = "100%";

            headerHolder.style.borderRadius = "10px";


            var header = document.createElement("div");

            header.id = "header";

            header.style.width = "100%";

            headerHolder.appendChild(header);





            var t1 = document.createElement("div");

            t1.innerHTML = "Baby details";

            t1.style.width = "100%";

            t1.setAttribute("class", "h-cell");

            header.appendChild(t1);


            __$("inputFrame" + tstCurrentPage).appendChild(headerHolder);

            __$("inputFrame" + tstCurrentPage).style.zIndex = 7;


            var container = document.createElement("div");

            container.style.height = 0.64 * screen.height + "px";

            container.id = "container2";


            var pTable = document.createElement("div");

            pTable.style.display = "table";

            pTable.style.width = "100%";

            container.appendChild(pTable);


            var pregRow = document.createElement("div");

            pregRow.style.display = "table-row";

            pregRow.style.width = "100%";

            pTable.appendChild(pregRow);



            var dcell = document.createElement("div");

            dcell.innerHTML = "<div id = 'dcell' style='width: 100%; overflow: auto;'><table style='width: 100%;' id = 'details'></table></div>";

            dcell.style.display = "table-cell";

            dcell.style.width = "100%";


            dcell.style.overflow = "hidden";

            pregRow.appendChild(dcell);


            __$("inputFrame" + tstCurrentPage).appendChild(container);


            var table = document.createElement("div");

            table.style.display = "table";


            container.appendChild(pTable);

            jQ("#dcell").css("height", "464px");

            jQ("#details").css("margin-top", "20px");

            jQ("#pcell").css("height", "464px");

            c = 0;


            for (var pos in $) {

                if ($[pos]["condition"] == true) {

                    loadPregnancy(pos, "delivery");

                    details_available.push($[pos]["condition"]);

                }

            }


            var width = (__$("details").parentNode.offsetWidth + __$("pregs").parentNode.offsetWidth - 2) + "px";

            headerHolder.style.width = width;

            header.style.width = width;

        }

        function loadPopup(row) {
            try {

                if (__$("popup") != undefined) {

                    __$("popup").innerHTML = "";

                    __$("popup").parentNode.removeChild(__$("popup"))

                }


                if (__$("popup-header") != undefined) {

                    __$("popup-header").innerHTML = "";

                    __$("popup-header").parentNode.removeChild(__$("popup-header"))

                }

                if (__$("shield") != undefined) {

                    __$("shield").innerHTML = "";

                    __$("shield").parentNode.removeChild(__$("shield"))

                    __$("shield") = null;

                }

            } catch (e) {}

            var popup = document.createElement("div");

            popup.id = "popup";

            var nTuple = row.getAttribute("n-tuple");

            var pTuple = row.getAttribute("p-tuple");

            var aTuple = row.getAttribute("a-tuple");


            popup.setAttribute("n-tuple", nTuple);

            popup.setAttribute("p-tuple", pTuple);

            popup.setAttribute("a-tuple", aTuple);

            popup.setAttribute("row_id", row.id)


            jQ(popup).css({

                position: "absolute",

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

            jQ(popupHeader).css({

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


            __$("inputFrame" + tstCurrentPage).appendChild(shield);

            popup.appendChild(popupHeader);

            __$("inputFrame" + tstCurrentPage).appendChild(popup);

        }


        function loadPregnancy(n, type) {

            var row1 = document.createElement("div");

            row1.id = "preg_row_" + n;

            row1.setAttribute("class", "preg-row");


            var d1 = document.createElement("div");

            d1.id = n;

            d1.innerHTML = " <span style=' color: " + (type == "abortion" ? "red" : "black") + "'> " + "<img height='46' class = 'img-preg-cell' src='/public/touchscreentoolkit/lib/images/unchecked.jpg'>" +

                n + (n == 1 ? "<sup>st</sup>" : ((n == 2 ? "<sup>nd</sup>" : (n == 3 ? "<sup>rd</sup>" : "<sup>th</sup>")))) + " " +

                type + " </span>";

            d1.setAttribute("class", "preg-cell");

            d1.setAttribute("selected", "false");

            d1.onclick = function () {

                if (this.getAttribute("selected") == "false") {

                    var nodes = document.getElementsByClassName("preg-cell");

                    for (var i = 0; i < nodes.length; i++) {

                        var sel = nodes[i].getAttribute("selected");

                        if (this != nodes[i] && sel != undefined && sel == "true") {

                            nodes[i].setAttribute("selected", "false");

                            var image = nodes[i].getElementsByTagName("img")[0];

                            if (image != undefined && image.src.length > 0) {

                                image.src = '/public/touchscreentoolkit/lib/images/unchecked.jpg';

                            }

                        }

                    }

                    var img = this.getElementsByTagName("img")[0];

                    if (img.src.match("unchecked")) {

                        img.src = '/public/touchscreentoolkit/lib/images/checked.jpg'

                    }

                    this.setAttribute("selected", "true");

                    populate(this.id, type)

                }

            }

            row1.appendChild(d1);

            if (c == 0 && $[n] != undefined && $[n]["condition"] == true) {

                var img = d1.getElementsByTagName("img")[0];

                d1.setAttribute("selected", "true");

                img.src = '/public/touchscreentoolkit/lib/images/checked.jpg'

                populate(n, type);

                c += 1;

            }

            __$("pregs").appendChild(row1);

        }

        function populate(id, type) {

            var table = __$("details");

            jQ(table).fadeOut(2);

            table.innerHTML = "";

            if ($[id] == undefined)

                $[id] = {}

            for (var n = 1; n <= $[id]["count"]; n++) {

                if ($[id][n] == undefined)

                    $[id][n] = {}

                for (var i = 0; i < fields.length; i++) {
                    if ($[id]["count"] > 1 && i == 0) {

                        var rowd = document.createElement("div");

                        rowd.setAttribute("class", "demarcation");

                        rowd.id = "p_" + n;

                        var d = document.createElement("div");

                        d.innerHTML = "&nbsp"

                        d.setAttribute("class", "demarcation-td");

                        rowd.appendChild(d);

                        var d = document.createElement("div");

                        d.innerHTML = n + (n == 1 ? "<span><sup>st</sup>" : ((n == 2 ? "<sup>nd</sup>" : (n == 3 ? "<sup>rd</sup>" : "<sup>th</sup>")))) +
                            " baby" + "</span>";

                        d.setAttribute("class", "demarcation-td");
                        num_of_babies++;

                        rowd.appendChild(d);

                        var dd = document.createElement("div");

                        dd.innerHTML = "&nbsp";

                        dd.setAttribute("class", "demarcation-td");

                        rowd.appendChild(dd);

                        table.appendChild(rowd);

                    }

                    var row = document.createElement("div");

                    row.id = id + "_" + n + "_detail_row_" + i;

                    row.setAttribute("n-tuple", n);

                    row.setAttribute("p-tuple", id);

                    row.setAttribute("pos", i);

                    row.setAttribute("class", "detail-row");

                    table.appendChild(row);

                    var td1 = document.createElement("div");

                    td1.innerHTML = fields[i];

                    td1.setAttribute("class", "detail-row-label");

                    row.appendChild(td1);

                    var label = "?";

                    if ($[id][n] != undefined && $[id][n][fields[i]] != undefined) {

                        label = $[id][n][fields[i]];

                    }

                    var td2 = document.createElement("div");

                    td2.innerHTML = "<div style='font-size: 22px;' class = 'display-space'> " + label + "</div>";

                    td2.setAttribute("class", "detail-row-space");

                    row.appendChild(td2);

                    var td3 = document.createElement("div");

                    td3.innerHTML = "<div style='font-size: 22px;' class = 'input-button'> Edit</div>";

                    td3.setAttribute("class", "detail-row-input");

                    row.appendChild(td3);

                    var button = td3.getElementsByClassName("input-button")[0];

                    var display = td2.getElementsByClassName("display-space")[0];

                    var ni = fields.indexOf("Condition at birth");

                    var c_node = jQ("[id^=" + id + "_" + n + "_detail_row_" + ni + "]");

                    var txt = "?";

                    if (c_node.length == 1)

                        txt = c_node[0].childNodes[1].childNodes[0].innerHTML;

                    if (i > (ni + 1) && !txt.match(/Alive/i)) {

                        if (!button.className.match("gray")) {

                            button.className += " button_gray";

                            display.innerHTML = "?";

                        }

                        button.onclick = function () {

                            var ni = fields.indexOf("Condition at birth");

                            var p = this.parentNode.parentNode.getAttribute("p-tuple");

                            var n = this.parentNode.parentNode.getAttribute("n-tuple");

                            var c_node = jQ("[id^=" + p + "_" + n + "_detail_row_" + ni + "]");

                            var text = "?";

                            if (c_node.length == 1)

                                text = c_node[0].childNodes[1].childNodes[0].innerHTML;

                            if (text.trim() == "?") {

                                alertMessage("Select condition at birth");

                            } else if (text.toLowerCase().trim() == "still birth") {

                                alertMessage("Baby was born dead");

                            }

                        }

                    } else {

                        if (button != undefined) {

                            button.onclick = function () {

                                enterData(this.parentNode.parentNode);

                            }

                        }

                    }

                }

            }

            table.scrollTop = 0;

            jQ(table).fadeIn(250);

            var width = (__$("details").parentNode.offsetWidth + __$("pregs").parentNode.offsetWidth - 2) + "px";

            __$("hheader").style.width = width;

            __$("header").style.width = width;


        }


        function showDate(id){
            jQ("#shield, #popup").css("display", "block");


            var holder = document.createElement("div");
            holder.id = "dateselector";
            holder.className = "dateselector";
            var dateNext = "dateselector_nextDay";
            holder.innerHTML = "<table><tbody><tr><td><div style='display: inline;'><button id='dateselector_nextDay' onmousedown='incrementDay();'><span>+</span></button>"+
                "<input id='dateselector_day' type='text'><button id='dateselector_preDay' onmousedown='decrementDay();'><span>-</span></button></div></td><td><div style='display: inline;'>"+
                "<button id='dateselector_nextMonth' onmousedown='incrementMonth();'><span>+</span></button><input id='dateselector_month' type='text'>"+
                "<button id='dateselector_preMonth' onmousedown='decrementMonth();'><span>-</span></button>	</div> 			</td><td> <div style='display: inline;''>"+
                "<button id='dateselector_nextYear' onmousedown='incrementYear();'><span>+</span></button>	<input id='dateselector_year' type='text'> <button id='dateselector_preYear' onmousedown='decrementYear();'>"+
                "<span>-</span></button></div></td><td><button id='today' class='red' onmousedown='setToday()' style= 'width: 150px;'><span>Today</span></button> <!--button id='num' onmousedown='updateKeyColor(this);press(this.id);' style='width: 150px;'><span>Num</span></button--> "+
                "<button id='Unknown' onmousedown='updateKeyColor(this);press(this.id);' style='width: 150px;'><span>Unknown</span></button> 			</td></tr></tbody></table> 			</div>";

            jQ(holder).css({

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

                jQ('#backButton, #nextButton').attr("disabled", false);

                jQ("#shield, #popup").css("display", "none");

            };

            jQ(cl).css({

                "float": "left",

                "margin-top": "0px",

                "margin-left": "150px"

            });

            var ok = document.createElement('div');

            ok.className = "button_green ok";

            ok.innerHTML = "Ok";

            jQ(ok).css({


                'margin-right': '2px'

            });

            // tr3.appendChild(cl);
            table.appendChild(tr3);


            ok.onclick = function () {


                var row = __$(__$("popup").getAttribute("row_id"));

                var name = row.getElementsByClassName("detail-row-label")[0].innerHTML;


                if (row) {

                    var button = row.getElementsByClassName("input-button")[0];

                    var display = row.getElementsByClassName("display-space")[0];

                    var label = row.getElementsByClassName("detail-row-label")[0];

                    var n = __$("popup").getAttribute("n-tuple");

                    var p = __$("popup").getAttribute("p-tuple");

                    var a = __$("popup").getAttribute("a-tuple");

                    var dob_day  =  __$("dateselector_day").value;
                    var dob_month = __$("dateselector_month").value;
                    var dob_year = __$("dateselector_year").value;
                    var month = moment().month(dob_month).format("M");

                    if(month < 10){
                        d_date = dob_day + "-" + "0"+month + "-" +dob_year;
                    }else{
                        d_date = dob_day + "-" +month + "-" +dob_year;
                    }
                    display.innerHTML =   __$("dateselector_day").value + "-" + __$("dateselector_month").value + "-" +__$("dateselector_year").value;
                    jQ('#backButton, #nextButton').attr("disabled", false);

                    jQ("#shield, #popup").css("display", "none");

                } else {

                    alertMessage("Failed to update input!");

                }


            };


            jQ("#popup").append(holder);
            jQ("#popup").append(cl);
            jQ("#popup").append(ok);
        }


        function showTime(id){
            jQ("#shield, #popup").css("display", "block");

            var table = document.createElement("table");

            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
            //Upper control
            var tr = document.createElement("tr");
            table.appendChild(tr);

            var td = document.createElement("td");
            tr.appendChild(td);
            var button = document.createElement("button");
            button.innerHTML = "<span>+</span>";
            button.id = "hour_plus";
            button.className = "time_btn";
            button.setAttribute("onmousedown","timeOperations('"+button.id+"')");
            td.appendChild(button);

            var td = document.createElement("td");
            tr.appendChild(td);
            var button2 = document.createElement("button");
            button2.innerHTML = "<span>+</span>";
            button2.id = "minute_plus";
            button2.className = "time_btn";
            button2.setAttribute("onmousedown","timeOperations('"+button2.id+"')");
            td.appendChild(button2)

            var td = document.createElement("td");
            tr.appendChild(td);
            var button3 = document.createElement("button");
            button3.innerHTML = "<span>+</span>";
            button3.id = "seconds_plus";
            button3.className = "time_btn";
            button3.setAttribute("onmousedown","timeOperations('"+button3.id+"')");
            td.appendChild(button3);

            //Control
            var tr = document.createElement("tr");
            table.appendChild(tr);

            var td = document.createElement("td");
            tr.appendChild(td);
            var input = document.createElement("input");
            input.id = "hour";
            input.value = h;
            input.className = "input_btn";
            input.style.width = "100px";
            input.style.height = "40px";
            input.style.marginLeft = "10px";
            td.appendChild(input);

            var td = document.createElement("td");
            tr.appendChild(td);
            var input = document.createElement("input");
            input.value = m;
            input.id = "minutes";
            input.className = "input_btn";
            input.style.width = "100px";
            input.style.height = "40px";
            input.style.marginLeft = "10px";
            td.appendChild(input);

            var td = document.createElement("td");
            tr.appendChild(td);
            var input = document.createElement("input");
            input.value = s;
            input.id = "seconds";
            input.className = "input_btn";
            input.style.width = "100px";
            input.style.height = "40px";
            input.style.marginLeft = "10px";
            td.appendChild(input);

            //Upper control
            var tr = document.createElement("tr");
            table.appendChild(tr);

            var td = document.createElement("td");
            tr.appendChild(td);
            var button = document.createElement("button");
            button.innerHTML = "<span>-</span>";
            button.id = "hour_minus";
            button.className = "time_btn";
            button.setAttribute("onmousedown","timeOperations('"+button.id+"')");
            td.appendChild(button);

            var td = document.createElement("td");
            tr.appendChild(td);
            var button = document.createElement("button");
            button.innerHTML = "<span>-</span>";
            button.id = "minute_minus";
            button.className = "time_btn";
            button.setAttribute("onmousedown","timeOperations('"+button.id+"')");
            td.appendChild(button)

            var td = document.createElement("td");
            tr.appendChild(td);
            var button = document.createElement("button");
            button.innerHTML = "<span>-</span>";
            button.id = "seconds_minus";
            button.className = "time_btn";
            button.setAttribute("onmousedown","timeOperations('"+button.id+"')");
            td.appendChild(button);

            var tr2 = document.createElement("tr");
            table.appendChild(tr2);

            var tr3 = document.createElement("tr");
            var cl = document.createElement("div");

            cl.className = "button_red cancel";

            cl.innerHTML = "Cancel";

            cl.onclick = function () {

                jQ('#backButton, #nextButton').attr("disabled", false);

                jQ("#shield, #popup").css("display", "none");

            };

            jQ(cl).css({

                "float": "left",

                "margin-top": "0px",

                "margin-left": "150px"

            });

            var ok = document.createElement('div');

            ok.className = "button_green ok";

            ok.innerHTML = "Ok";

            jQ(ok).css({


                'margin-right': '2px'

            });

            // tr3.appendChild(cl);
            table.appendChild(tr3);


            ok.onclick = function () {


                var row = __$(__$("popup").getAttribute("row_id"));

                var name = row.getElementsByClassName("detail-row-label")[0].innerHTML;


                if (row) {

                    var button = row.getElementsByClassName("input-button")[0];

                    var display = row.getElementsByClassName("display-space")[0];

                    var label = row.getElementsByClassName("detail-row-label")[0];

                    var n = __$("popup").getAttribute("n-tuple");

                    var p = __$("popup").getAttribute("p-tuple");

                    var a = __$("popup").getAttribute("a-tuple");


                    d_time =  __$("hour").value + ":" + __$("minutes").value + ":" +__$("seconds").value;

                    display.innerHTML =   __$("hour").value + ":" + __$("minutes").value + ":" +__$("seconds").value;
                    jQ('#backButton, #nextButton').attr("disabled", false);

                    jQ("#shield, #popup").css("display", "none");

                } else {

                    alertMessage("Failed to update input!");

                }


            };


            jQ("#popup").append(table);
            jQ("#popup").append(cl);
            jQ("#popup").append(ok);
        }


        function showNumber(id, global_control, min, max, abs_max, type) {

            jQ('#backButton, #nextButton').attr("disabled", true);

            cn = 9;

            this_id = global_control;

            if (global_control.match(/_row_5/)) {

                m = "Unk"

            } else {

                m = "0"

            }

            global_control = "";

            var row1 = ["1", "2", "3"];

            var row2 = ["4", "5", "6"];

            var row3 = ["7", "8", "9"];

            var row4 = ["Del", m, ":"];

            if (min == undefined) {

                min = 0

            }

            if (max == undefined) {

                max = (new Date()).getFullYear();

            }

            var cl = document.createElement("div");

            cl.className = "button_red cancel";

            cl.innerHTML = "Cancel";

            cl.onclick = function () {

                jQ('#backButton, #nextButton').attr("disabled", false);

                jQ("#shield, #popup").css("display", "none");

            };

            jQ(cl).css({

                "float": "left",

                "margin-top": "0px",

                "margin-left": "10px"

            });

            var ok = document.createElement('div');

            ok.className = "button_green ok";

            ok.innerHTML = "Ok";

            jQ(ok).css({

                'margin-left': '360px',

                'margin-right': '2px'

            });

            ok.onclick = function () {

                var unit = "";

                if (__$("unit")) {

                    unit = __$("unit").value

                }



                var row = __$(__$("popup").getAttribute("row_id"));

                var name = row.getElementsByClassName("detail-row-label")[0].innerHTML;


                if (row) {

                    var button = row.getElementsByClassName("input-button")[0];

                    var display = row.getElementsByClassName("display-space")[0];

                    var label = row.getElementsByClassName("detail-row-label")[0];

                    var n = __$("popup").getAttribute("n-tuple");

                    var p = __$("popup").getAttribute("p-tuple");

                    var a = __$("popup").getAttribute("a-tuple");

                    if (global_control.match(/Unk/) && label.innerHTML == "Birth weight") {

                        enterWeight(row);

                    }

                    display.innerHTML = global_control.match(/Unk/) ? '?' : global_control;

                    if (a != undefined && $$[a] != undefined) {

                        $$[a][label.innerHTML] = global_control;

                    } else {

                        if ($[p][n] == undefined) {

                            $[p][n] = {};

                        }

                        $[p][n][label.innerHTML] = global_control;

                    }

                    if (parseInt(global_control) != abs_max) {

                        __$("input").innerHTML = "";

                        __$("tblKeyboard").parentNode.removeChild(__$("tblKeyboard"));

                        __$("input").parentNode.removeChild(__$("input"));

                    }

                } else {

                    alertMessage("Failed to update input!");

                }

                if (parseInt(global_control) != abs_max) {

                    jQ("#shield, #popup").css("display", "none");

                    jQ('#backButton, #nextButton').attr("disabled", false);

                }



            };

            var d = new Date("2011-04-20T09:30:51.01");
            time = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
            var timeDiv = document.createElement("div");
            timeDiv.innerHTML = "<p> "+time +"</p>";
            var holder = document.createElement("div");

            holder.innerHTML = "<table style='width: 100%;'><tr><td id = 'left' style='width: 35%; float: left;'></td><td id='right' style='width: 65%;' rowspan='2'></td></tr>" +
                "<tr><td id = ''></td></tr><tr><td id='btns' colspan='2' style='padding-top: 8px; padding-bottom: 3px;border-top:1px solid black; background-color: black;'>" +
                "</td></tr></table>"

            jQ(holder).css({

                "width": "100%",

                "border": "hidden"

            });

            var tbl = document.createElement("table");

            tbl.className = "keyBoardTable";

            tbl.cellSpacing = 0;

            tbl.cellPadding = 3;

            tbl.id = "tblKeyboard";

            tbl.style.minWidth = 0.20 * screen.width + "px";

            jQ(tbl).css({

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

                td1.width = "30px";

                tr1.appendChild(td1);

                var btn = document.createElement("div");

                btn.className = "button_blue keyboard_button";

                btn.innerHTML = "<span>" + row1[i] + "</span>";

                btn.onmousedown = function () {

                    if (!this.innerHTML.match(/^__$/)) {

                        if (global_control == 'Unknown') {

                            global_control = this.innerHTML.match(/<span>(.+)<\/span>/)[1];

                        } else {

                            global_control += this.innerHTML.match(/<span>(.+)<\/span>/)[1];

                        }

                        if (global_control != undefined && parseInt(global_control) <= max && parseInt(global_control) >= min) {

                            __$("input").innerHTML = global_control;

                        } else if (global_control != undefined && parseInt(global_control) > max || parseInt(global_control) < min) {

                            var str = global_control.length > cn ? (global_control.substring(0, cn - 2) + "..." + global_control.substring(global_control.length - 2, global_control.length)) : (global_control)

                            __$("input").innerHTML = str + "<div style='color: red; font-size: 24px; padding-top: 0px;'><br />&nbsp<br />" + " Out of range</div>";

                        }

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

                td2.width = "30px";

                tr2.appendChild(td2);

                var btn = document.createElement("div");

                btn.className = "button_blue keyboard_button";

                btn.innerHTML = "<span>" + row2[i] + "</span>";

                btn.onmousedown = function () {

                    if (!this.innerHTML.match(/^$/)) {

                        if (global_control == 'Unknown') {

                            global_control = this.innerHTML.match(/<span>(.+)<\/span>/)[1];

                        } else {

                            global_control += this.innerHTML.match(/<span>(.+)<\/span>/)[1];

                        }

                        global_control = global_control.replace(/^0+/, "");

                        global_control = global_control.replace(/^\.+/, "");

                        if (global_control != undefined && parseInt(global_control) <= max && parseInt(global_control) >= min) {

                            __$("input").innerHTML = global_control;

                        } else if (global_control != undefined && parseInt(global_control) > max || parseInt(global_control) < min) {

                            var str = global_control.length > cn ? (global_control.substring(0, cn - 2) + "..." + global_control.substring(global_control.length - 2, global_control.length)) : (global_control)

                            __$("input").innerHTML = str + "<div style='color: red; font-size: 24px; padding-top: 0px;'><br />&nbsp<br />" + " Out of range</div>";

                        }

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

                td3.width = "30px";

                tr3.appendChild(td3);

                var btn = document.createElement("div");

                btn.className = "button_blue keyboard_button";

                btn.innerHTML = "<span>" + row3[i] + "</span>";

                btn.onmousedown = function () {

                    if (!this.innerHTML.match(/^__$/)) {

                        if (global_control == 'Unknown') {

                            global_control = this.innerHTML.match(/<span>(.+)<\/span>/)[1];

                        } else {

                            global_control += this.innerHTML.match(/<span>(.+)<\/span>/)[1];

                        }

                        global_control = global_control.replace(/^0+/, "");

                        global_control = global_control.replace(/^\.+/, "");

                        if (global_control != undefined && parseInt(global_control) <= max && parseInt(global_control) >= min) {

                            __$("input").innerHTML = global_control;

                        } else if (global_control != undefined && parseInt(global_control) > max || parseInt(global_control) < min) {

                            var str = global_control.length > cn ? (global_control.substring(0, cn - 2) + "..." + global_control.substring(global_control.length - 2, global_control.length)) : (global_control)

                            __$("input").innerHTML = str + "<div style='color: red; font-size: 24px; padding-top: 0px;'><br />&nbsp<br />" + " Out of range</div>";

                        }

                    }

                }

                td3.appendChild(btn);

            }

            tbl.appendChild(tr3);

            var tr4 = document.createElement("tr");

            for (var i = 0; i < row4.length; i++) {

                var td4 = document.createElement("td");

                td4.align = "center";

                td4.vAlign = "middle";

                td4.style.cursor = "pointer";

                td4.bgColor = "#ffffff";

                td4.width = "30px";

                tr4.appendChild(td4);

                var btn = document.createElement("div");

                btn.innerHTML = "<span>" + row4[i] + "</span>";

                btn.className = "button_blue keyboard_button";

                btn.onmousedown = function () {

                    if (this.innerHTML.match(/<span>(.+)<\/span>/)[1] == "Del") {

                        if (global_control.length == 1 || global_control == "Unknown") {

                            global_control = "";

                            __$("input").innerHTML = ""

                        } else {

                            global_control = global_control.split(" ")[0];

                            global_control = global_control.substring(0, global_control.length - 1);

                            global_control = global_control.replace(/^0+/, "");

                            global_control = global_control.replace(/^\.+/, "");

                            if (global_control != undefined && parseInt(global_control) <= max && parseInt(global_control) >= min) {

                                __$("input").innerHTML = global_control;

                            } else if (global_control != undefined && parseInt(global_control) > max || parseInt(global_control) < min) {

                                var str = global_control.length > cn ? (global_control.substring(0, cn - 2) + "..." + global_control.substring(global_control.length - 2, global_control.length)) : (global_control)

                                __$("input").innerHTML = str + "<div style='color: red; font-size: 24px; padding-top: 0px;'><br />&nbsp<br />" + " Out of range</div>";

                            }

                        }

                    } else if (this.innerHTML.match(/<span>Unk<\/span>/)) {

                        global_control = 'Unknown';

                        __$("input").innerHTML = 'Unknown';

                    } else if (!this.innerHTML.match(/^$/)) {

                        global_control += this.innerHTML.match(/<span>(.+)<\/span>/)[1];

                        global_control = global_control.replace(/^0+/, "");

                        global_control = global_control.replace(/^\.+/, "");

                        if (global_control != undefined && (parseInt(global_control) <= abs_max || parseInt(global_control) <= max) && parseInt(global_control) >= min) {

                            __$("input").innerHTML = global_control;

                        } else if (global_control != undefined && (parseInt(global_control) > abs_max || parseInt(global_control) > max) || parseInt(global_control) < min) {

                            var str = global_control.length > cn ? (global_control.substring(0, cn - 2) + "..." + global_control.substring(global_control.length - 2, global_control.length)) : (global_control)

                            __$("input").innerHTML = str + "<div style='color: red; font-size: 24px; padding-top: 0px;'><br />&nbsp<br />" + " Out of range</div>";

                        }

                    }

                }

                td4.appendChild(btn);

            }

            tbl.appendChild(tr4);

            var input = document.createElement("div");

            input.id = "input";

            input.innerHTML = "";

            jQ(input).css({

                "font-size": "28px",

                "font-style": "italic",

                "float": "left",

                "height": "50px",

                "padding-top": "13%",

                "padding-left": "2%"

            })

            __$(id).appendChild(holder);

            __$("left").appendChild(timeDiv);

            __$("right").appendChild(tbl);

            __$("btns").appendChild(cl);

            __$("btns").appendChild(ok);

            __$("popup-header").innerHTML = current_popup;

            if (type && type == "age") {

                var unit = document.createElement("select");

                unit.id = "unit";

                var options = ["Hours", "Days", "Weeks", "Months", "years"]

                unit.className = "button_blue";

                unit.innerHTML = "Months";

                jQ(unit).css({

                    "position": "absolute",

                    "font-style": "italic",

                    "font-size": "22px",

                    "height": "47px",

                    "width": "154px",

                    "max-width": "154px",

                    "top": "126px",

                    "left": "6px",

                    "padding-top": "8px",

                    "-webkit-appearance": "none",

                    "-moz-appearance": "none",

                    "text-indent": "1px",

                    "border": "none",

                    "text-overflow": ''

                });

                __$("left").appendChild(unit);

                for (var i in options) {

                    var option = document.createElement("option");

                    option.value = options[i];

                    option.innerHTML = options[i];

                    unit.appendChild(option);

                }

            }

            // __$("input").style.minWidth = (parseInt(__$("popup").style.minWidth.replace("px", "")) - parseInt(__$("tblKeyboard").style.minWidth.replace("px", ""))) + "px";

            jQ("#shield, #popup").css("display", "block");

        }


        function showList(id, data) {

            jQ('#backButton, #nextButton').attr("disabled", true);

            if (data.length > 1) {

                var ul = document.createElement("ul");

                ul.style.width = __$("popup").style.width;

                ul.id = "listing";

                ul.className = "listing";

                var row = __$(__$("popup").getAttribute("row_id"));

                var button = row.getElementsByClassName("input-button")[0];

                var value = "?";

                if (button != undefined && button.getAttribute("value") != null) {

                    value = button.getAttribute("value");

                }

                var color = "";

                for (var i in data) {

                    if (data[i] != "list") {

                        var li = document.createElement("li");

                        li.innerHTML = data[i];

                        li.setAttribute("class", "select-li");

                        if (value.trim() == li.innerHTML) {

                            li.style.backgroundColor = "lightblue";

                            color = "button_blue keyboard_button ok";

                        } else {

                            li.style.backgroundColor = (i % 2 != 0 ? "#f8f7ec" : "#fff");

                        }

                        li.onclick = function () {

                            var nodes = document.getElementsByClassName("select-li")

                            for (var k = 0; k < nodes.length; k++) {

                                nodes[k].style.backgroundColor = (k % 2 != 0 ? "#f8f7ec" : "#fff");

                            }

                            this.style.backgroundColor = "lightblue";

                            __$("ok").setAttribute("class", "button_blue keyboard_button ok");

                            __$("ok").setAttribute("value", this.innerHTML)

                        };

                        ul.appendChild(li);

                    }

                }

                __$(id).appendChild(ul);

                var footer = document.createElement("div");

                footer.id = "footer";

                footer.setAttribute("class", "footer")

                footer.innerHTML = "<table style='width: 100%;'><tr><td><div class='button_red keyboard_button cancel' id = 'cancel'>Cancel</div></td> <td><div class='button_gray keyboard_button ok' id = 'ok'>OK</div></td></tr></table>";

                footer.style.width = "100%";

                footer.style.marginBottom = "10px";

                __$(id).appendChild(footer);

                if (color != "") {

                    __$("ok").setAttribute("class", color + " nosave");

                }

                __$("ok").onclick = function () {

                    var value = this.getAttribute("value");

                    var row = __$(__$("popup").getAttribute("row_id"));

                    var n = __$("popup").getAttribute("n-tuple");

                    var p = __$("popup").getAttribute("p-tuple");

                    var a = __$("popup").getAttribute("a-tuple");

                    var label = row.getElementsByClassName("detail-row-label")[0];

                    if (__$("ok").className.match(/button\_blue/)) {

                        if (row) {

                            if (!__$("ok").className.match(/nosave/)) {

                                var button = row.getElementsByClassName("input-button")[0];

                                var display = row.getElementsByClassName("display-space")[0];

                                var label = row.getElementsByClassName("detail-row-label")[0];

                                if (a != undefined && $$[a] != undefined) {

                                    display.innerHTML = value;

                                    $$[a][label.innerHTML] = value;

                                } else {

                                    display.innerHTML = value;

                                    if ($[p][n] == undefined) {

                                        $[p][n] = {};

                                    }

                                    $[p][n][label.innerHTML] = value;

                                    var ni = fields.indexOf("Condition at birth");

                                    var pi = __$("popup").getAttribute("row_id").trim().match(/\d+$/)[0];

                                    var leng = fields.length;

                                    if (parseInt(ni) == parseInt(pi)) {

                                        for (var m = (parseInt(pi) + 2); m < leng; m++) {

                                            var baby_rows = jQ("[id^=" + p + "_" + n + "]"); //matches only single baby rows

                                            var lbl = baby_rows[m].getElementsByClassName("detail-row-label")[0];

                                            var but = baby_rows[m].childNodes[2].childNodes[0];

                                            var inputdisplay = baby_rows[m].childNodes[1].childNodes[0];

                                            if (but.parentNode.parentNode.innerHTML.match(/birth weight/i)) {

                                                but.className = but.className.replace(/gray/, "blue").trim();

                                                but.onclick = function () {

                                                    enterData(this.parentNode.parentNode);

                                                }

                                            }

                                            if (display.innerHTML.match(/Still birth/i)) {

                                                if (!but.className.match(/gray/))

                                                    but.className += " button_gray";

                                                $[p][n][lbl.innerHTML] = "?";

                                                inputdisplay.innerHTML = "?"

                                                but.onclick = function () {

                                                    alertMessage("Baby was born dead");

                                                }

                                            } else {

                                                if (but.className.match(/gray/) && m < (fields.length - 1)) {

                                                    but.className = "input-button";

                                                    but.onclick = function () {

                                                        enterData(this.parentNode.parentNode);

                                                    }

                                                } else {

                                                    but.onclick = function () {

                                                        alertMessage("Select if baby is alive now");

                                                    }

                                                }

                                            }

                                        }

                                    }

                                    if (label.innerHTML == "Alive Now") {

                                        var brows = jQ("[id^=" + p + "_" + n + "]"); //matches only single baby rows

                                        var bbut = brows[fields.length - 1].childNodes[2].childNodes[0];

                                        var blbl = brows[fields.length - 1].getElementsByClassName("detail-row-label")[0];

                                        var binputdisplay = brows[fields.length - 1].childNodes[1].childNodes[0];

                                        if ($[p][n][label.innerHTML].trim() == "No") {

                                            bbut.className = "input-button";

                                            bbut.onclick = function () {

                                                enterData(this.parentNode.parentNode);

                                            }

                                        } else if ($[p][n][label.innerHTML].trim() == "Yes") {

                                            bbut.className = "input-button button_gray";

                                            binputdisplay.innerHTML = "?";

                                            $[p][n][blbl.innerHTML] = "?";

                                            bbut.onclick = function () {

                                                alertMessage("Baby is still alive");

                                            }

                                        }

                                    }

                                }

                            }

                        } else {

                            alertMessage("Failed to update input");

                        }

                        jQ("#shield, #popup").css("display", "none");

                        jQ('#backButton, #nextButton').attr("disabled", false);

                    } else {

                        alertMessage("Please select a value");

                    }

                }

                __$("cancel").onclick = function () {

                    jQ('#backButton, #nextButton').attr("disabled", false);

                    jQ("#shield, #popup").css("display", "none");

                }

                __$("popup-header").innerHTML = current_popup.replace("Alive Now", "Alive Now?");

                jQ("#shield, #popup").css("display", "block");

            }

        }


        function enterData(row) {

            if (row != undefined) {

                var fields = {
                    "Baby status": ["list", "Cried", "No cry"],
                    "Time of delivery": ["time"],
                    "Date of delivery": ["date"],
                    "Baby gender": ["list", "Male", "Female"],
                    "Method of delivery": ["list", "Spontaneous Delivery", "Caesarean Section", "Breech Delivery", "Vacuum extraction delivery"],
                    "Condition at birth": ["list", "Alive", "Macerated Still Birth (MSB)", "Fresh Still Birth (FSB)"]
                };


                var field_names = Object.keys(fields);

                var pos = row.getAttribute("pos");

                var type = fields[field_names[pos]][0]

                current_popup = field_names[pos];

                loadPopup(row);

                if (type == "number") {

                    if (row.childNodes[0].innerHTML.match(/Year of birth/i)) {

                        var min = validateMin(row, fields[field_names[pos]][1]);

                        var max = validateMax(row, fields[field_names[pos]][2]);

                        var ab_max = validateMax(row, fields[field_names[pos]][3]);

                    } else if (row.childNodes[0].innerHTML.match(/Gestation/i)) {

                        var min = validateGestation(row, fields[field_names[pos]][1]);

                        var max = validateGestation(row, fields[field_names[pos]][2]);

                        var ab_max = validateGestation(row, fields[field_names[pos]][3]);

                    } else {

                        var min = fields[field_names[pos]][1];

                        var max = fields[field_names[pos]][2];

                    }

                    showNumber("popup", row.id, min, max, ab_max);

                } else if (type == "list") {

                    var listItems = fields[field_names[pos]];

                    showList("popup", listItems);

                } else if (type == "time") {
                    showTime("popup");

                }else if (type == "date") {

                    showDate("popup");

                }

            }

        }

        function validateGestation(r, v) {

            global_value = v;

            var p = parseInt(r.id.match(/^\d+/)[0]);

            var n = parseInt(r.getAttribute("n-tuple"))

            var label = r.childNodes[0].innerHTML;

            if (parseInt($[p]["count"]) > 1) {

                for (var i = 1; i <= parseInt($[p]["count"]); i++) {

                    if (i != n && $[p][i] != undefined && $[p][i][label] != undefined) {

                        global_value = $[p][i][label];

                        break;

                    }

                }

            }

            return global_value;

        }

        function validateMin(r, v, p, label) {

            global_value = "";

            skipNext = false;

            if (r != undefined) {

                var p = parseInt(r.id.match(/^\d+/)[0]);

                var n = parseInt(r.getAttribute("n-tuple"))

                var label = r.childNodes[0].innerHTML;

                if (n >= 1 && parseInt($[p]["count"]) > 1) {

                    var firstY = $[p][1] != undefined ? $[p][1][label] : undefined;

                    if (firstY == undefined && parseInt($[p]["count"]) > n && 2 < n) {

                        firstY = $[p][2] != undefined ? $[p][2][label] : undefined;

                    }

                    if (firstY == undefined && parseInt($[p]["count"]) > n && 3 < n) {

                        firstY = $[p][3] != undefined ? $[p][3][label] : undefined;

                    }

                    if (firstY == undefined && parseInt($[p]["count"]) > n && 4 < n) {

                        firstY = $[p][4] != undefined ? $[p][4][label] : undefined;

                    }

                    if (firstY != undefined && parseInt(firstY) > 1950) {

                        global_value = parseInt(firstY);

                        skipNext = true;

                    } else {

                        var lastY = undefined;

                        if (lastY == undefined && (n + 4) <= parseInt($[p]["count"])) {

                            lastY = $[p][n + 4] != undefined ? $[p][n + 4][label] : undefined;

                        }

                        if (lastY == undefined && (n + 3) <= parseInt($[p]["count"])) {

                            lastY = $[p][n + 3] != undefined ? $[p][n + 3][label] : undefined;

                        }

                        if (lastY == undefined && (n + 2) <= parseInt($[p]["count"])) {

                            lastY = $[p][n + 2] != undefined ? $[p][n + 2][label] : undefined;

                        }

                        if (lastY == undefined && (n + 1) <= parseInt($[p]["count"])) {

                            lastY = $[p][n + 1] != undefined ? $[p][n + 1][label] : undefined;

                        }

                        if (lastY != undefined && parseInt(lastY) > 1950) {

                            global_value = parseInt(lastY) - 1;

                            skipNext = true;

                        }

                    }

                }

            }

            if (!skipNext && $[p - 1] != undefined) {

                var maxN = parseInt($[p - 1]["count"]);

                if (maxN > 0) {

                    var value = undefined;

                    if ($[p - 1][maxN] != undefined) {

                        for (var i = 1; i <= maxN; i++) {

                            if ($[p - 1][i][label] != undefined)

                                value = parseInt($[p - 1][i][label]);

                        }

                    }

                    if (value != undefined && value.toString().match(/^\d+/) && parseInt(v) < parseInt(value)) {

                        global_value = value

                    } else if (value == undefined) {

                        if (p > 1)

                            validateMin(undefined, v, (p - 1), label)

                    }

                }

            }

            return (global_value == "") ? v : global_value;

        }

        function validateMax(r, v, p, label) {

            global_value = "";

            skipNext = false;

            if (r != undefined) {

                var p = parseInt(r.id.match(/^\d+/)[0]);

                var n = parseInt(r.getAttribute("n-tuple"));

                var label = r.childNodes[0].innerHTML;

                if (n >= 1 && parseInt($[p]["count"]) > 1) {

                    var firstY = $[p][1] != undefined ? $[p][1][label] : undefined;

                    if (firstY == undefined && parseInt($[p]["count"]) > n && 2 < n) {

                        firstY = $[p][2] != undefined ? $[p][2][label] : undefined;

                    }

                    if (firstY == undefined && parseInt($[p]["count"]) > n && 3 < n) {

                        firstY = $[p][3] != undefined ? $[p][3][label] : undefined;

                    }

                    if (firstY == undefined && parseInt($[p]["count"]) > n && 4 < n) {

                        firstY = $[p][4] != undefined ? $[p][4][label] : undefined;

                    }

                    if (firstY != undefined && parseInt(firstY) > 1950) {

                        global_value = parseInt(firstY) + 1;

                        skipNext = true;

                    } else {

                        var lastY = $[p][n + 1] != undefined ? $[p][n + 1][label] : undefined;

                        if (lastY == undefined && (n + 2) <= parseInt($[p]["count"])) {

                            lastY = $[p][n + 2] != undefined ? $[p][n + 2][label] : undefined;

                        }

                        if (lastY == undefined && (n + 3) <= parseInt($[p]["count"])) {

                            lastY = $[p][n + 3] != undefined ? $[p][n + 3][label] : undefined;

                        }

                        if (lastY == undefined && (n + 4) <= parseInt($[p]["count"])) {

                            lastY = $[p][n + 4] != undefined ? $[p][n + 4][label] : undefined;

                        }

                        if (lastY != undefined && parseInt(lastY) > 1950) {

                            global_value = parseInt(lastY);

                            skipNext = true;

                        }

                    }

                }

            }

            if (!skipNext && $[p + 1] != undefined) {

                var maxN = parseInt($[p + 1]["count"]);

                if (maxN > 0) {

                    var value = undefined;

                    if ($[p + 1][maxN] != undefined) {

                        for (var i = maxN; i > 0; i--) {

                            if ($[p + 1][i][label] != undefined)

                                value = parseInt($[p + 1][i][label]);

                        }

                    }

                    if (value != undefined && value.toString().match(/^\d+/) && parseInt(v) > parseInt(value)) {

                        global_value = value;

                    } else if (value == undefined) {

                        validateMax(undefined, v, (p + 1), label)

                    }

                }

            }

            return (global_value == "") ? v : global_value;

        }


        function enterWeight(row) {

            if (row != undefined) {

                var fields = {

                    "Birth weight": ["list", "Big baby", "Normal", "Small baby"]

                };

                var field_names = Object.keys(fields);

                var pos = row.getAttribute("pos");

                var type = fields[field_names[0]][0]

                current_popup = field_names[0];

                loadPopup(row);

                if (type == "number") {

                    if (row.childNodes[0].innerHTML.match(/Year of birth/i)) {

                        var min = validateMin(row, fields[field_names[0]][1]);

                        var max = validateMax(row, fields[field_names[0]][2]);

                    } else if (row.childNodes[0].innerHTML.match(/Gestation/i)) {

                        var min = validateGestation(row, fields[field_names[0]][1]);

                        var max = validateGestation(row, fields[field_names[0]][2]);

                    } else {

                        var min = fields[field_names[0]][1];

                        var max = fields[field_names[0]][2];

                    }

                    showNumber("popup", row.id, min, max);

                } else if (type == "list") {

                    var listItems = fields[field_names[0]];

                    showList("popup", listItems);

                } else if (type == "age") {

                    showNumber("popup", row.id, 1, 40, "age");

                }

            }

        }

        function showMeMessage(aMessage, withCancel, timed) {

            __$('popup').style.display = 'none';

            if (typeof (tstMessageBar) == "undefined") {

                __$("content").innerHTML += "<div id='messageBar' class='messageBar'></div>";


                tstMessageBar = __$('messageBar');

            }

            var messageBar = tstMessageBar;

            messageBar.innerHTML = aMessage +
                "<br />" + (typeof (withCancel) != "undefined" ? (withCancel == true ?
                    "<button onmousedown=\"tstMessageBar.style.display = 'none'; __$('popup').style.display = 'block'; " +
                    "clearTimeout(tstTimerHandle);\"><span>Cancel</span></button>" : "") : "") +
                "<button style='width: 200px;' onmousedown=\"__$('popup').style.display = 'none';__$('shield').style.display = 'none';tstMessageBar.style.display = 'none';\"><span>OK</span></button>";

            if (aMessage.length > 0) {

                messageBar.style.display = 'block'

                if ((typeof (timed) == "undefined" ? true : timed) == true) {

                    window.setTimeout("hideMessage()", 3000)

                }

            }

        }

        function alertMessage(aMessage, withCancel, timed) {

            __$('popup').style.display = 'none';

            if (typeof (tstMessageBar) == "undefined") {

                __$("content").innerHTML += "<div id='messageBar' class='messageBar'></div>";

                tstMessageBar = __$('messageBar');

            }

            var messageBar = tstMessageBar;

            messageBar.innerHTML = aMessage +
                "<br />" + (typeof (withCancel) != "undefined" ? (withCancel == true ?
                    "<button onmousedown='tstMessageBar.style.display = \"none\"; " +
                    "clearTimeout(tstTimerHandle);'><span>Cancel</span></button>" : "") : "") +
                "<button style='width: 200px;' onmousedown='tstMessageBar.style.display = \"none\"; " +
                "clearTimeout(tstTimerHandle); eval(tstTimerFunctionCall);__$(\"popup\").style.display = \"block\";'>" +
                "<span>OK</span></button>";

            if (aMessage.length > 0) {

                messageBar.style.display = 'block'

                if ((typeof (timed) == "undefined" ? true : timed) == true) {

                    window.setTimeout("hideMessage()", 3000)

                }

            }

        }

        function hideMessage() {

            tstMessageBar.style.display = 'none'

        }

        return {

            load: load()

        };

    })(jQuery, data);

    //myModule.load();
}

function test_code() {

    result = details_available.length;

    details_available = []

    return result;

}

function buildParams() {

    var keys = Object.keys(data)

    for (var i = 0; i < keys.length; i++) {

        var count = data[keys[i]]["count"];

        for (var c = 1; c <= count; c++) {

            if (data[keys[i]] == undefined)

                data[keys[i]] = {};

            if (data[keys[i]][c] == undefined)

                data[keys[i]][c] = {};

        }

    }


    // update various fields

    __$("data_obj").value = JSON.stringify(data);

    var str = __$("data_obj").value.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s+]/g, ' ')


    if (str.match(/caesarean section/i)) {

        __$("ever_had_c_sections").value = "Yes";

    } else {

        __$("ever_had_c_sections").value = "No";

    }
    if (str.match(/vacuum extraction delivery/i)) {

        __$("ever_had_a_vacuum_extraction").value = "Yes";

    } else {

        __$("ever_had_a_vacuum_extraction").value = "No";

    }
    if (str.match(/still birth/i)) {

        __$("ever_had_still_births").value = "Yes";

    } else {

        __$("ever_had_still_births").value = "No";

    }

}

function loadSplitSelections() {

    //array format [url, input_id, helpText]

    var arr = [

        ["/encounters/yes_no_options", "ever_had_episiotomy"],

        ["/encounters/hemorrhage_options", "hemorrhage"],

        ["/encounters/yes_no_options", "pre_eclampsia"],

        ["/encounters/yes_no_options", "eclampsia"]

    ];

    var count = arr.length;

    var n = Math.floor(Math.sqrt(count));

    var v_count = Math.ceil(count / n);

    var h_count = Math.ceil(count / n);

    var e_count = count % n;


    __$("keyboard").style.display = "none";

    __$("touchscreenInput" + tstCurrentPage).style.display = "none";

    __$("inputFrame" + tstCurrentPage).style.height = (0.72 * screen.height) + "px";

    __$("inputFrame" + tstCurrentPage).style.marginTop = (0.05 * screen.height) + "px";

    //__$("inputFrame" + tstCurrentPage).style.background = "lightblue";

    if (count > 0) {

        var n = 0;

        var holder = document.createElement("div");

        holder.id = 'holder';

        holder.style.height = (0.72 * screen.height) + "px";

        holder.style.width = "100%";

        holder.style.display = "none";

        holder.setAttribute("class", "options");

        holder.style.borderRadius = "5px";

        holder.style.background = "white";

        __$("inputFrame" + tstCurrentPage).appendChild(holder);

        for (var r = 1; r <= v_count; r++) {

            var row = document.createElement("div");

            row.id = r;

            row.style.display = "table-row";

            row.setAttribute("class", "row");

            holder.appendChild(row);

            for (var c = 1; c <= h_count; c++) {

                var cell = document.createElement("div");

                cell.id = r + "_" + c;

                cell.style.display = "table-cell";

                cell.setAttribute("class", "cell");

                cell.style.background = "white";

                var helpText = __$(arr[n][1]).getAttribute("helpText");

                var heada = document.createElement("div");

                heada.style.height = "40px";

                heada.innerHTML = helpText;

                heada.style.marginTop = "5px";

                heada.style.background = "#CFE4CD";

                heada.style.borderRadius = "3px";

                heada.style.border = "2px gray solid";

                heada.style.fontSize = "28px";

                heada.style.marginLeft = "5px";

                heada.style.marginRight = "5px";

                cell.appendChild(heada);

                if (c != 1) {

                    cell.style.borderLeft = "1px solid";

                }

                if (r != 1) {

                    cell.style.borderTop = "1px solid";

                }

                cell.style.height = ((72 / v_count) - 2) * 0.001 * screen.height + "px";

                cell.style.width = ((100 / h_count)) + "%";

                row.appendChild(cell);

                n++;

                if (n != arr.length - 1) {

                    ajaxCustomRequest(arr[n - 1][0], arr[n - 1][1], "", (r + "_" + c));

                } else {

                    ajaxCustomRequest(arr[n - 1][0], arr[n - 1][1], "table", (r + "_" + c));

                }

            }

        }

        __$("2_2").style.display = "none";

        __$("1_2").style.borderBottom = "1px solid";

        __$("2_1").style.borderRight = "1px solid";

    }

}

function ajaxCustomRequest(aUrl, id, n, dom_id) {

    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function () {

        handleCustomResult(httpRequest, id, n, dom_id);

    };
    //try {

    httpRequest.open('GET', aUrl, true);

    httpRequest.send(null);

    //} catch (e) {

    //console.log(e);

    //}

}

function handleCustomResult(aXMLHttpRequest, id, n, dom_id) {

    if (!aXMLHttpRequest) return;

    if (aXMLHttpRequest.status == 404) {

        if (id == "hemorrhage"){

            var result = "No|APH|PPH";

            var data = result.split("|");

        }else{

            var result = "Yes|No";

            var data = result.split("|");

        }

        if (x.includes(id))

            return

        x.push(id);

        var ul = document.createElement("ul");

        ul.id = id + "_ul"

        ul.style.paddingLeft = "5px";

        ul.style.paddingRight = "5px";

        __$(dom_id).appendChild(ul);

        var items = [];

        for (var i = 0; i < data.length; i++) {

            var li = document.createElement("li");

            li.setAttribute("class", "cell-data");

            li.setAttribute("target", id);

            li.value = data[i];

            ul.appendChild(li);

            li.setAttribute("value", data[i]);

            li.innerHTML = "<img height=34 style='margin-right: 10px; margin-bottom: -5px;' src='/public/touchscreentoolkit/lib/images/unchecked.png' />" + data[i];

            items.push(li)

            li.onmousedown = function () {

                __$(this.getAttribute("target")).value = this.getAttribute("value");

                observations.push({

                    concept_id: concepts_hash[this.getAttribute("target")],

                    value_coded: concepts_hash[this.getAttribute("value")]

                });

                if (this.getAttribute("target") == 'pre_eclampsia' && this.innerHTML.match(/Yes/i)) {

                    __$("2_2").style.display = "table-cell";

                    __$("2_2").style.opacity = 1;

                    __$("1_2").style.borderBottom = "hidden";

                    __$("2_1").style.borderRight = "hidden";

                } else if (this.getAttribute("target") == 'pre_eclampsia' && this.innerHTML.match(/No/i)) {

                    __$("eclampsia").value = "";

                    __$("1_2").style.borderBottom = "1px solid";

                    __$("2_1").style.borderRight = "1px solid";

                    hideMsg("2_2");

                }

                updateTouchscreenInput(this);

                var target = this.getAttribute("target")

                var nodes = jQuery("[target=" + target + "]");

                for (var i = 0; i < nodes.length; i++) {

                    nodes[i].getElementsByTagName("img")[0].src = '/public/touchscreentoolkit/lib/images/unchecked.png';

                }

                this.getElementsByTagName("img")[0].src = '/public/touchscreentoolkit/lib/images/checked.png';

            }

            if (i % 2 == 0) {

                li.className = "even";

                li.setAttribute("group", "even");

            } else {

                li.className = "odd";

                li.setAttribute("group", "odd");

            }

        }

        for (var j = 0; j < items.length; j++) {

            if (__$(id).value && __$(id).value == items[j].getAttribute("value")) {

                updateTouchscreenInput(items[j]);

                __$(items[j].getAttribute("target")).value = items[j].getAttribute("value");

                var nodes = jQuery("[target=" + id + "]");

                for (var i = 0; i < nodes.length; i++) {

                    nodes[i].getElementsByTagName("img")[0].src = '/public/touchscreentoolkit/lib/images/unchecked.png';

                }

                items[j].getElementsByTagName("img")[0].src = '/public/touchscreentoolkit/lib/images/checked.png';

                if (items[j].getAttribute("target") == "pre_eclampsia" && __$("pre_eclampsia").value == "Yes") {

                    __$("pre_eclampsia").value = "";

                    __$("2_2").style.display = "block";

                    items[j].onmousedown.apply(items[j]);

                }

            }

        }

        if (n == "table")

            setTimeout(function () {

                __$('holder').style.display = n;

            }, 150);

    }

}

function fade(div, opacity) {

    __$(div).style.opacity = opacity;

    if (opacity >= 0) {

        opacity = opacity - 0.01;

        setTimeout(function () {

            fade(div, opacity)

        }, 1)

    } else {

        __$(div).style.display = "none";

    }

}

function fadeOut(div, opacity) {

    __$(div).style.opacity = opacity;

    if (opacity <= 1) {

        opacity = opacity + 0.01;

        setTimeout(function () {

            fade(div, opacity)

        }, 5)

    }

}
function showMsg(div) {

    setTimeout(function () {

        fadeOut(div, 0);

    }, 1);

}

function hideMsg(div){

    addValidationInterval

    __$(div).style.display = "none"

}

function addValidationInterval(){

    __$("nextButton").onmousedown = function(){

        if (this.innerHTML.match(/Finish/i)){

            var arr = ["ever_had_episiotomy", "hemorrhage", "pre_eclampsia"];

            try{

                if (__$("2_2") != undefined && __$("2_2").style.display != "none"){

                    arr.push("eclampsia");

                }

            }catch(x){}

            var check = 0;

            for (var i = 0; i < arr.length; i ++){

                var node = __$(arr[i]);

                if (node != undefined && (node.value == "" || node.value == undefined || node.value.length < 2)){

                    check = check + 1;

                }

            }

            if (check > 0){

                alertMessage("Select all fields to proceed");

            }else{

                gotoNextPage();

            }

        }else{

            gotoNextPage();

        }

    }

}

// function to update age_units value

setInterval(function () {

    try {

        age_units = __$('unit').value.toLowerCase();

    } catch (error) {

        //console.error(error);

    }

    //console.log(mother_age);

}, 200);