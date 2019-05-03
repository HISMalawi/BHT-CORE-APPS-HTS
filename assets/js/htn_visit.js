var tr_spouse;
var tr_child;
var tr_other;
var td_child;
var testResultOne;
var testResultTwo;
var script = document.createElement('script');
script.src = '/assets/js/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


function buildTest(){
    var frame = document.getElementById('inputFrame' + tstCurrentPage);
    frame.style.height = "90%";
    var div = document.createElement("div");
    div.height ="90%";
    div.style.paddingTop = "15%";
    div.style.paddingLeft = "25%";

    var table = document.createElement("table");
    table.style.marginLeft = "150px";

    
    var tr = document.createElement("tr");

    var td = document.createElement("td");
    var p = document.createElement("p");
    var node = document.createTextNode("Determine HIV 1/2 Result - 15 Minutes");
    p.appendChild(node);
    td.appendChild(p);
    tr.appendChild(td)

    var td = document.createElement("td");
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Non-Reactive"));
    btn.className = "btn btn-success buttons";
    btn.id = "btnNonReactive";
    btn.style.border = "1px";
    td.appendChild(btn);
    tr.appendChild(td);

    var td = document.createElement("td");
    var btn2 = document.createElement("button");
    btn2.appendChild(document.createTextNode("Reactive"));
    btn2.className = "btn";
    btn2.id = "btnReactive";
    btn2.style.border = "1px";
    td.appendChild(btn2);
    tr.appendChild(td);
    btn.onclick = function () {        
        btn.className = "btn-yellow";
        btn2.className = "btn";
        testResultOne = "Non reactive";
    };

    btn2.onclick = function () {        
        btn2.className = "btn-yellow";
        btn.className = "btn";
        testResultOne = "reactive";
    };

    table.appendChild(tr);
    div.appendChild(table);
    frame.appendChild(div);
}

function buildTestTwo(){
    var frame = document.getElementById('inputFrame' + tstCurrentPage);
    frame.style.height = "90%";
    var div = document.createElement("div");
    div.height ="90%";
    div.style.paddingTop = "15%";
    div.style.paddingLeft = "25%";

    var table = document.createElement("table");
    table.style.marginLeft = "150px";

    
    var tr = document.createElement("tr");

    var td = document.createElement("td");
    var p = document.createElement("p");
    var node = document.createTextNode("Uni-Gold Result - 10 Minutes");
    p.appendChild(node);
    td.appendChild(p);
    tr.appendChild(td)

    var td = document.createElement("td");
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Non-Reactive"));
    btn.className = "btn btn-success buttons";
    btn.id = "btnNonReactive";
    btn.style.border = "1px";
    td.appendChild(btn);
    tr.appendChild(td);

    var td = document.createElement("td");
    var btn2 = document.createElement("button");
    btn2.appendChild(document.createTextNode("Reactive"));
    btn2.className = "btn";
    btn2.id = "btnReactive";
    btn2.style.border = "1px";
    td.appendChild(btn2);
    tr.appendChild(td);
    btn.onclick = function () {        
        btn.className = "btn-yellow";
        btn2.className = "btn";
        testResultTwo = "Non reactive";
    };

    btn2.onclick = function () {        
        btn2.className = "btn-yellow";
        btn.className = "btn";
        testResultTwo = "reactive";
    };

    table.appendChild(tr);
    div.appendChild(table);
    frame.appendChild(div);
}

function buildParallelTest(){
    var frame = document.getElementById('inputFrame' + tstCurrentPage);
    frame.style.height = "90%";
    var div = document.createElement("div");
    div.height ="90%";
    div.style.paddingTop = "15%";
    div.style.paddingLeft = "25%";

    var table = document.createElement("table");
    table.style.marginLeft = "150px";

    
    var tr = document.createElement("tr");

    var td = document.createElement("td");
    var p = document.createElement("p");
    var node = document.createTextNode("Determine HIV 1/2 Result - 15 Minutes");
    p.appendChild(node);
    td.appendChild(p);
    tr.appendChild(td)

    var td = document.createElement("td");
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Non-Reactive"));
    btn.className = "btn btn-success buttons";
    btn.id = "btnNonReactive";
    btn.style.border = "1px";
    td.appendChild(btn);
    tr.appendChild(td);

    var td = document.createElement("td");
    var btn2 = document.createElement("button");
    btn2.appendChild(document.createTextNode("Reactive"));
    btn2.className = "btn";
    btn2.id = "btnReactive";
    btn2.style.border = "1px";
    td.appendChild(btn2);
    tr.appendChild(td);
    btn.onclick = function () {        
        btn.className = "btn-yellow";
        btn2.className = "btn";
        testResultOne = "Non reactive";
    };

    btn2.onclick = function () {        
        btn2.className = "btn-yellow";
        btn.className = "btn";
        testResultOne = "reactive";
    };

    var tr2 = document.createElement("tr");

    var td = document.createElement("td");
    var p = document.createElement("p");
    var node = document.createTextNode("Uni-Gold Result - 10 Minutes");
    p.appendChild(node);
    td.appendChild(p);
    tr2.appendChild(td)

    var td = document.createElement("td");
    var btn_second = document.createElement("button");
    btn_second.appendChild(document.createTextNode("Non-Reactive"));
    btn_second.className = "btn btn-success buttons";
    btn_second.id = "btnNonReactive2";
    btn_second.style.border = "1px";
    td.appendChild(btn_second);
    tr2.appendChild(td);

    var td = document.createElement("td");
    var btn2_second = document.createElement("button");
    btn2_second.appendChild(document.createTextNode("Reactive"));
    btn2_second.className = "btn";
    btn2_second.id = "btnReactive2";
    btn2_second.style.border = "1px";
    td.appendChild(btn2_second);
    tr2.appendChild(td);
    btn_second.onclick = function () {        
        btn_second.className = "btn-yellow";
        btn2_second.className = "btn";
        testResultTwo = "Non reactive";
    };

    btn2_second.onclick = function () {        
        btn2_second.className = "btn-yellow";
        btn_second.className = "btn";
        testResultTwo = "reactive";
    };


    table.appendChild(tr);
    table.appendChild(tr2);
    div.appendChild(table);
    frame.appendChild(div);
}
function checkResult(){
    if(testResultOne == "reactive" && testResultTwo == "reactive"){
        showMessage("Confirmatory test and start ART");
    }else if (testResultOne == "Non reactive"){
        showMessage("No need for retesting unless: High risk event or risky behaviour in future");
    }else if (testResultOne == "reactive" && testResultTwo == "Non reactive"){
        showMessage("Repeat test in 4 weeks to rule out new infection");
    }
}


function buildReferralSlips(){

    var frame = document.getElementById('inputFrame' + tstCurrentPage);
    frame.style.height = "90%";
    var div = document.createElement("div");
    div.id = "referalls";
    var i = 1;

    var table = document.createElement("table");
    table.id = "ref_tbl";
    var tbl = document.getElementById("ref_tbl");
    tr_spouse = document.createElement("tr");
    tr_spouse.id = "spouse";
    var spouse_td = document.createElement("td");
    var spouse_span = document.createElement("span");
    spouse_span.style.fontSize = "2.1em";
    spouse_span.id = "unticked"+i;
    spouse_span.innerHTML = "<img src='/public/touchscreentoolkit/lib/images/unticked.jpg' class='mark'>";
    spouse_td.appendChild(spouse_span);
    tr_spouse.appendChild(spouse_td);

    var spouse_td = document.createElement("td");
    spouse_td.textContent = "Spouse";
    spouse_td.id = "tdunticked"+i;
    spouse_td.style.fontSize = "2.1em";
    tr_spouse.appendChild(spouse_td);

    spouse_span.onclick = function () {
        if(spouse_span.id == "unticked"+i){
            spouse_span.id = "ticked"+i;
            spouse_td.id = "tdticked"+i;
            spouse_span.innerHTML = "<img src='/public/touchscreentoolkit/lib/images/ticked.jpg' class='mark'>";
            spouse_td.textContent = "Spouse "+i;
            addSpouse(i);
            span_none.innerHTML = "<img src='/public/touchscreentoolkit/lib/images/unticked.jpg' class='mark'>";
        }
        else if(spouse_span.id == "ticked"+i){
            var k = i+ 1;
            var span_id = "unticked"+k;
            var td_id = "tdunticked"+k;
            var rm_span_spouse = document.getElementById(span_id);
            if(rm_span_spouse != null){
          
             rm_span_spouse.style.display = 'none'; 
            var rm_td_spouse = document.getElementById(td_id);
            rm_td_spouse.style.display = 'none';
            spouse_td.textContent = "Spouse";
            spouse_span.id = "uncheck";
            } else{
                var span_id = "ticked"+k;
                var td_id = "tdticked"+k;
                var rm_span_spouse = document.getElementById(span_id);
                rm_span_spouse.style.display = 'none'; 
                var rm_td_spouse = document.getElementById(td_id);
                rm_td_spouse.stytr_spousele.display = 'none';
                spouse_td.textContent = "Spouse";
                spouse_span.id = "uncheck";
            }
        } else if(spouse_span.id =="uncheck"){
            spouse_span.innerHTML = "<img src='/public/touchscreentoolkit/lib/images/unticked.jpg' class='mark'>";
            spouse_span.id = "unticked"+i;
            spouse_td.id = "tdunticked"+i;
        }  
    }
        //CHILD
    tr_child = document.createElement("tr");
    tr_child.id = "child";
    var child_td = document.createElement("td");
    var child_span = document.createElement("span");
    child_span.style.fontSize = "2.1em";
    child_span.id = "unticked"+i;
    child_span.innerHTML = "<img src='/public/touchscreentoolkit/lib/images/unticked.jpg' class='mark'>";
    child_td.appendChild(child_span);
    tr_child.appendChild(child_td);

    var child_td = document.createElement("td");
    child_td.textContent = "Child";
    child_td.id = "tdunticked"+i;
    child_td.style.fontSize = "2.1em";
    tr_child.appendChild(child_td);

    child_span.onclick = function () {
        if(child_span.id == "unticked"+i){
            child_span.id = "ticked"+i;
            child_td.id = "tdticked"+i;
            child_span.innerHTML = "<img src='/public/touchscreentoolkit/lib/images/ticked.jpg' class='mark'>";
            child_td.textContent = "Child "+i;
            addChild(i);
            span_none.innerHTML = "<img src='/public/touchscreentoolkit/lib/images/unticked.jpg' class='mark'>";
        }
        else if(child_span.id == "ticked"+i){
            var k = i+ 1;
            var span_id = "unticked"+k;
            var td_id = "tdunticked"+k;
            var rm_span_child = document.getElementById(span_id);
            if(rm_span_child != null){
          
            rm_span_child.style.display = 'none'; 
            var rm_span_child = document.getElementById(td_id);
            rm_td_child.style.display = 'none';
            child_td.textContent = "Child";
            child_span.id = "uncheck";
            } else{
                var span_id = "ticked"+k;
                var td_id = "tdticked"+k;
                var rm_span_child = document.getElementById(span_id);
                rm_span_child.style.display = 'none'; 
                var rm_td_child = document.getElementById(td_id);
                rm_td_child.style.display = 'none';
                child_td.textContent = "Child";
                child_span.id = "uncheck";
            }
        } else if(child_span.id =="uncheck"){
            
            child_span.innerHTML = "<img src='/public/touchscreentoolkit/lib/images/unticked.jpg' class='mark'>";
            child_span.id = "unticked"+i;
            child_td.id = "tdunticked"+i;
        }  
    }






    tr_other = document.createElement("tr");
    tr_other.id = "other";
    var td_other = document.createElement("td");
    var span_other = document.createElement("span");
    span_other.style.fontSize = "2.1em";
    span_other.id = "unticked"+i;
    span_other.innerHTML = "<img src='/public/touchscreentoolkit/lib/images/unticked.jpg' class='mark'>";
    td_other.appendChild(span_other);
    tr_other.appendChild(td_other);

    var td_other = document.createElement("td");
    td_other.textContent = "Other";
    td_other.style.fontSize = "2.1em";
    td_other.id = "tdunticked"+i;
    tr_other.appendChild(td_other);

    span_other.onclick = function () {
         
        if(span_other.id == "unticked"+i){
            span_other.id = "ticked"+i;
            td_other.id = "tdticked"+i;
            span_other.innerHTML = "<img src='/public/touchscreentoolkit/lib/images/ticked.jpg' class='mark'>";
            td_other.textContent = "Other "+i;
            addOther(i);
            span_none.innerHTML = "<img src='/public/touchscreentoolkit/lib/images/unticked.jpg' class='mark'>";
        }
        else if(span_other.id == "ticked"+i){
            var k = i+ 1;
            var span_id = "unticked"+k;
            var td_id = "tdunticked"+k;
            var rm_span = document.getElementById(span_id);
            if(rm_span != null){
          
            rm_span.style.display = 'none'; 
            var rm_td = document.getElementById(td_id);
            rm_td.style.display = 'none';
            td_other.textContent = "Other";
            span_other.id = "uncheck";
            }
            else{
                var span_id = "ticked"+k;
                var td_id = "tdticked"+k;
                var rm_span = document.getElementById(span_id);
                rm_span.style.display = 'none'; 
                var rm_td = document.getElementById(td_id);
                rm_td.style.display = 'none';
                td_other.textContent = "Other";
                span_other.id = "uncheck";
            }
             }
            else if(span_other.id =="uncheck"){
                span_other.innerHTML = "<img src='/public/touchscreentoolkit/lib/images/unticked.jpg' class='mark'>";
                span_other.id = "unticked"+i;
                td_other.id = "tdunticked"+i;
            }
    }

    var table_none = document.createElement("table");
    table_none.style.paddingTop = "21%";
    var tr_none = document.createElement("tr");
    var td_none = document.createElement("td");
    var span_none = document.createElement("span");
    span_none.style.fontSize = "2.1em";
    span_none.id = "unticked"+i;
    span_none.innerHTML = "<img src='/public/touchscreentoolkit/lib/images/unticked.jpg' class='mark'>";
    td_none.appendChild(span_none);
    tr_none.appendChild(td_none);

    var td_none = document.createElement("td");
    td_none.textContent = "None";
    td_none.style.fontSize = "2.1em";
    td_none.id = "tdunticked"+i;
    tr_none.appendChild(td_none);

    span_none.onclick = function () {
        
        span_none.innerHTML = "<img src='/public/touchscreentoolkit/lib/images/ticked.jpg' class='mark'>";
        var uncheck = 1;
        var $j = jQuery.noConflict();
     
        //Uncheck Spouse
       var spouse = document.getElementById('spouse');
        while (spouse.childNodes.length > 2) {
         spouse.removeChild(spouse.lastChild);
         }
        spouse_span.innerHTML = "<img src='/public/touchscreentoolkit/lib/images/unticked.jpg' class='mark'>";
        spouse_span.id = "unticked"+i;
        spouse_td.id = "tdunticked"+i;
        spouse_td.textContent = "Spouse";
        //Uncheck Child
       var child = document.getElementById('child');
        while (child.childNodes.length > 2) {
         child.removeChild(child.lastChild);
         }
        child_span.innerHTML = "<img src='/public/touchscreentoolkit/lib/images/unticked.jpg' class='mark'>";
        child_span.id = "unticked"+i;
        child_td.id = "tdunticked"+i;
        child_td.textContent = "Child";
        //Uncheck Other
        var other = document.getElementById('other');
        while (other.childNodes.length > 2) {
         other.removeChild(other.lastChild);
         }
        span_other.innerHTML = "<img src='/public/touchscreentoolkit/lib/images/unticked.jpg' class='mark'>";
        span_other.id = "unticked"+i;
        td_other.id = "tdunticked"+i;
        td_other.textContent = "Other";
    }


    table.appendChild(tr_spouse);
    table.appendChild(tr_child);
    table.appendChild(tr_other);
    table_none.appendChild(tr_none);
    div.appendChild(table);
    div.appendChild(table_none);
    frame.appendChild(div);
}

function addSpouse(i){
    i = i+1;
    var td_spouse2 = document.createElement("td");
    var span_spouse2 = document.createElement("span");
    span_spouse2.style.fontSize = "2.1em";
    span_spouse2.id = "unticked"+i;
    span_spouse2.innerHTML = "<img src='/public/touchscreentoolkit/lib/images/unticked.jpg' class='mark'>";
    var td_spouse2 = document.createElement("td");
    td_spouse2.appendChild(span_spouse2);
    tr_spouse.appendChild(td_spouse2);
    
    var td_spouse2 = document.createElement("td");
    td_spouse2.textContent = "Spouse "+i;
    td_spouse2.style.fontSize = "2.1em";
    td_spouse2.id = "tdunticked"+i;
    tr_spouse.appendChild(td_spouse2);
    span_spouse2.onclick = function () {  
        if(span_spouse2.id == "unticked"+i){
            span_spouse2.innerHTML = "<img src='/public/touchscreentoolkit/lib/images/ticked.jpg' class='mark'>"; 
            addSpouse(i);
            span_spouse2.id = "ticked"+i;
            td_spouse2.id = "tdticked"+i;
        }
        else if(span_spouse2.id == "ticked"+i){
            var k = i+ 1;
            var span_id = "unticked"+k;
            var td_id = "tdunticked"+k;
            var rm_span_spouse = document.getElementById(span_id);
            if(rm_span_spouse != null){
          
            rm_span_spouse.style.display = 'none'; 
            var rm_td_spouse = document.getElementById(td_id);
            rm_td_spouse.style.display = 'none'; }
            else{
                var span_id = "ticked"+k;
                var td_id = "tdticked"+k;
                var rm_span_spouse = document.getElementById(span_id);
                rm_span_spouse.style.display = 'none'; 
                var rm_td_spouse = document.getElementById(td_id);
                rm_td_spouse.style.display = 'none';
            }
             }
            };

}


function addChild(i){
    i = i+1;
    var td_child2 = document.createElement("td");
    var span_child2 = document.createElement("span");
    span_child2.style.fontSize = "2.1em";
    span_child2.id = "unticked"+i;
    span_child2.innerHTML = "<img src='/public/touchscreentoolkit/lib/images/unticked.jpg' class='mark'>";
    var td_child2 = document.createElement("td");
    td_child2.appendChild(span_child2);
    tr_child.appendChild(td_child2);
    
    var td_child2 = document.createElement("td");
    td_child2.textContent = "Child "+i;
    td_child2.style.fontSize = "2.1em";
    td_child2.id = "tdunticked"+i;
    tr_child.appendChild(td_child2);
    span_child2.onclick = function () {  
        if(span_child2.id == "unticked"+i){
            span_child2.innerHTML = "<img src='/public/touchscreentoolkit/lib/images/ticked.jpg' class='mark'>"; 
            addChild(i);
            span_child2.id = "ticked"+i;
            td_child2.id = "tdticked"+i;
        }
        else if(span_child2.id == "ticked"+i){
            var k = i+ 1;
            var span_id = "unticked"+k;
            var td_id = "tdunticked"+k;
            var rm_span_child = document.getElementById(span_id);
            if(rm_span_child != null){
          
             rm_span_child.style.display = 'none'; 
            var rm_td_child = document.getElementById(td_id);
            rm_td_child.style.display = 'none'; }
            else{
                var span_id = "ticked"+k;
                var td_id = "tdticked"+k;
                var rm_span_child = document.getElementById(span_id);
                rm_span_child.style.display = 'none'; 
                var rm_td_child = document.getElementById(td_id);
                rm_td_child.style.display = 'none';
            }
             }
            };

}

function addOther(i){
    i = i+1;
    var td_other2 = document.createElement("td");
    var span_other2 = document.createElement("span");
    span_other2.style.fontSize = "2.1em";
    span_other2.id = "unticked"+i;
    span_other2.innerHTML = "<img src='/public/touchscreentoolkit/lib/images/unticked.jpg' class='mark'>";
    td_other2.appendChild(span_other2);
    tr_other.appendChild(td_other2);
    
    var td_other2 = document.createElement("td");
    td_other2.textContent = "Other "+i;
    td_other2.style.fontSize = "2.1em";
    td_other2.id = "tdunticked"+i;
    tr_other.appendChild(td_other2);
    span_other2.onclick = function () {  
        if(span_other2.id == "unticked"+i){
            span_other2.innerHTML = "<img src='/public/touchscreentoolkit/lib/images/ticked.jpg' class='mark'>"; 
            addOther(i);
            span_other2.id = "ticked"+i;
            td_other2.id = "tdticked"+i;
        }
        else if(span_other2.id == "ticked"+i){
            var k = i+ 1;
            var span_id = "unticked"+k;
            var td_id = "tdunticked"+k;
            var rm_span = document.getElementById(span_id);
            if(rm_span != null){
          
            rm_span.style.display = 'none'; 
            var rm_td = document.getElementById(td_id);
            rm_td.style.display = 'none'; }
            else{
                var span_id = "ticked"+k;
                var td_id = "tdticked"+k;
                var rm_span = document.getElementById(span_id);
                rm_span.style.display = 'none'; 
                var rm_td = document.getElementById(td_id);
                rm_td.style.display = 'none';
            }
             }
            };

}

