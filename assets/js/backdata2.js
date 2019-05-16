
 var  $j = jQuery.noConflict();     

 var current_popup = "Enter value";
 var frame; 
 var node_date;
 var node_provider;
 var node_age;
 var node_appointment;
 var node_time;
 var node_female_condom, node_male_condom, node_family_slip;
 var age,time,hts_date,appointment, provider,comment,family_slip,male,female;
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
    
    var sex = ["M","FNP","FP"];
    var k =0;
    for (var i = 0; i < sex.length; i++) {
    k++;
    var name = sex[i];
    var td1_sex = document.createElement("td");

    td1_sex.className = "bdcell";
    td1_sex.id = "cell_6";
    if(sex[i] == "FP"){
        td1_sex.className = "bdcell boldRight";
    }
    var div_sex = document.createElement("div");
    div_sex.className = "normal";
    div_sex.id = "sex"+k;
    var node_test_two = document.createTextNode(name);
    div_sex.appendChild(node_test_two);
    td1_sex.appendChild(div_sex);
    
    new_row.appendChild(td1_sex);

    div_sex.onclick = function () {  
        switch(this.id) {
            case "sex1":
             $j('#sex1').addClass("circled");
             $j('#sex2').removeClass("circled");
             $j('#sex3').removeClass("circled");
              break;
            case "sex2":
            $j('#sex2').addClass("circled");
            $j('#sex1').removeClass("circled");
            $j('#sex3').removeClass("circled");
              break;
            case "sex3":
            $j('#sex3').addClass("circled");
            $j('#sex1').removeClass("circled");
            $j('#sex2').removeClass("circled");
                break;
            default:
          } 
    };  }  

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
    var age_group = ["A","B","C","D"];
    var k =0;
    for (var i = 0; i < age_group.length; i++) {
    k++;
    var name = age_group[i];
    var td1_age_group = document.createElement("td");

    td1_age_group.className = "bdcell";
    td1_age_group.id = "cell_6";
    if(age_group[i] == "D"){
        td1_age_group.className = "bdcell boldRight";
    }
    var div_age_group = document.createElement("div");
    div_age_group.className = "normal";
    div_age_group.id = "agegroup"+k;
    var node_test_two = document.createTextNode(name);
    div_age_group.appendChild(node_test_two);
    td1_age_group.appendChild(div_age_group);
    
    new_row.appendChild(td1_age_group);

    div_age_group.onclick = function () {  
        switch(this.id) {
            case "agegroup1":
             $j('#agegroup1').addClass("circled");
             $j('#agegroup2').removeClass("circled");
             $j('#agegroup3').removeClass("circled");
             $j('#agegroup4').removeClass("circled");
              break;
            case "agegroup2":
            $j('#agegroup2').addClass("circled");
             $j('#agegroup1').removeClass("circled");
             $j('#agegroup3').removeClass("circled");
             $j('#agegroup4').removeClass("circled");
              break;
            case "agegroup3":
            $j('#agegroup3').addClass("circled");
            $j('#agegroup1').removeClass("circled");
            $j('#agegroup2').removeClass("circled");
            $j('#agegroup4').removeClass("circled");
                break;
            case "agegroup4":
            $j('#agegroup4').addClass("circled");
            $j('#agegroup1').removeClass("circled");
            $j('#agegroup3').removeClass("circled");
            $j('#agegroup2').removeClass("circled");
                break;
            default:
          } 
    };  }  

     //HTS ACCESS TYPE
     var hts_type = ["PITC","FRS","Oth"];
     var k =0;
     for (var i = 0; i < hts_type.length; i++) {
     k++;
     var name = hts_type[i];
     var td1_hts_type = document.createElement("td");
 
     td1_hts_type.className = "bdcell";
     td1_hts_type.id = "cell_6";
     if(hts_type[i] == "Oth"){
         td1_hts_type.className = "bdcell boldRight";
     }
     var div_hts_type = document.createElement("div");
     div_hts_type.className = "normal";
     div_hts_type.id = "htstype"+k;
     var node_test_two = document.createTextNode(name);
     div_hts_type.appendChild(node_test_two);
     td1_hts_type.appendChild(div_hts_type);
     
     new_row.appendChild(td1_hts_type);
 
     div_hts_type.onclick = function () {  
         switch(this.id) {
             case "htstype1":
              $j('#htstype1').addClass("circled");
              $j('#htstype2').removeClass("circled");
              $j('#htstype3').removeClass("circled");
               break;
             case "htstype2":
             $j('#htstype2').addClass("circled");
             $j('#htstype1').removeClass("circled");
             $j('#htstype3').removeClass("circled");
               break;
             case "htstype3":
             $j('#htstype3').addClass("circled");
             $j('#htstype1').removeClass("circled");
             $j('#htstype2').removeClass("circled");
                 break;
             default:
           } 
     };  } 
    
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
        
        div_ltest.onclick = function () {  
            switch(this.id) {
                case "ltest1":
                 $j('#ltest1').addClass("circled");
                 $j('#ltest2').removeClass("circled");
                 $j('#ltest3').removeClass("circled");
                 $j('#ltest4').removeClass("circled");
                 $j('#ltest5').removeClass("circled");
                  break;
                case "ltest2":
                $j('#ltest2').addClass("circled");
                $j('#ltest1').removeClass("circled");
                $j('#ltest3').removeClass("circled");
                $j('#ltest4').removeClass("circled");
                $j('#ltest5').removeClass("circled");
                  break;
                case "ltest3":
                $j('#ltest3').addClass("circled");
                $j('#ltest1').removeClass("circled");
                $j('#ltest2').removeClass("circled");
                $j('#ltest4').removeClass("circled");
                $j('#ltest5').removeClass("circled");
                  break;
                case "ltest4":
                $j('#ltest4').addClass("circled");
                $j('#ltest1').removeClass("circled");
                $j('#ltest2').removeClass("circled");
                $j('#ltest3').removeClass("circled");
                $j('#ltest5').removeClass("circled");
                break;
                case "ltest5":
                $j('#ltest5').addClass("circled");
                $j('#ltest1').removeClass("circled");
                $j('#ltest2').removeClass("circled");
                $j('#ltest4').removeClass("circled");
                $j('#ltest3').removeClass("circled");
                    break;
                default:
              } 

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
        switch(this.id) {
            case "partner1":
             $j('#partner1').addClass("circled");
             $j('#partner2').removeClass("circled");
              break;
            case "partner2":
            $j('#partner2').addClass("circled");
            $j('#partner1').removeClass("circled");
              break;
            default:
          } 
    };     }  

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
        switch(this.id) {
            case "test1":
             $j('#test1').addClass("circled");
             $j('#test2').removeClass("circled");
              break;
            case "test2":
            $j('#test2').addClass("circled");
            $j('#test1').removeClass("circled");
              break;
            default:
          } 
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
    div_test_two.id = "testtwo"+k;
    var node_test_two = document.createTextNode(name);
    div_test_two.appendChild(node_test_two);
    td1_test_two.appendChild(div_test_two);
    
    new_row.appendChild(td1_test_two);

    div_test_two.onclick = function () {  
        switch(this.id) {
            case "testtwo1":
             $j('#testtwo1').addClass("circled");
             $j('#testtwo2').removeClass("circled");
              break;
            case "testtwo2":
            $j('#testtwo2').addClass("circled");
            $j('#testtwo1').removeClass("circled");
              break;
            default:
          } 
    };  }  

    // Test 3
    var test_three = ["-","+"];
    var k =0;
    for (var i = 0; i < test_three.length; i++) {
    k++;
    var name = test_three[i];
    var td1_test_three = document.createElement("td");

    td1_test_three.className = "bdcell";
    td1_test_three.id = "cell_6";
    if(test_three[i] == "+"){
        td1_test_three.className = "bdcell boldRight";
    }
    var div_test_three = document.createElement("div");
    div_test_three.className = "normal";
    div_test_three.id = "testthree"+k;
    var node_test_three = document.createTextNode(name);
    div_test_three.appendChild(node_test_three);
    td1_test_three.appendChild(div_test_three);
    
    new_row.appendChild(td1_test_three);
    div_test_three.onclick = function () {  
        switch(this.id) {
            case "testthree1":
            $j('#testthree1').addClass("circled");
            $j('#testthree2').removeClass("circled");
            break;
            case "testthree2":
            $j('#testthree2').addClass("circled");
            $j('#testthree1').removeClass("circled");
            break;
            default:
        } 
    };    }  

    // Test 4
    k=0;
    for (var i = 0; i < test_three.length; i++) {
    k++;
    var name = test_three[i];
    var td1_test_four = document.createElement("td");

    td1_test_four.className = "bdcell";
    td1_test_four.id = "cell_6";
    if(test_three[i] == "+"){
        td1_test_four.className = "bdcell boldRight";
    }
    var div_test_four = document.createElement("div");
    div_test_four.className = "normal";
    div_test_four.id = "testfour"+k;
    var node_test_four = document.createTextNode(name);
    div_test_four.appendChild(node_test_four);
    td1_test_four.appendChild(div_test_four);
    
    new_row.appendChild(td1_test_four);

    div_test_four.onclick = function () {  
        switch(this.id) {
            case "testfour1":
            $j('#testfour1').addClass("circled");
            $j('#testfour2').removeClass("circled");
            break;
            case "testfour2":
            $j('#testfour2').addClass("circled");
            $j('#testfour1').removeClass("circled");
            break;
            default:
        } 
    };    }  

    // Outcome Summary
    k=0;
    var outcome = ["+","-", "--", "++","Disc"];
    for (var i = 0; i < outcome.length; i++) {
        k++;
        var name = outcome[i];
        var td1_outcome = document.createElement("td");

        td1_outcome.className = "bdcell";
        td1_outcome.id = "cell_6";
        if(outcome[i] == "Disc"){
            td1_outcome.className = "bdcell boldRight";
        }
        var div_outcome = document.createElement("div");
        div_outcome.className = "normal";
        div_outcome.id = "outcome"+k;
        var node_ltest = document.createTextNode(name);
        div_outcome.appendChild(node_ltest);
        td1_outcome.appendChild(div_outcome);
        
        new_row.appendChild(td1_outcome);
        
        div_outcome.onclick = function () {  
            switch(this.id) {
                case "outcome1":
                $j('#outcome1').addClass("circled");
                $j('#outcome2').removeClass("circled");
                $j('#outcome3').removeClass("circled");
                $j('#outcome4').removeClass("circled");
                $j('#outcome5').removeClass("circled");
                break;
                case "outcome2":
                $j('#outcome2').addClass("circled");
                $j('#outcome1').removeClass("circled");
                $j('#outcome3').removeClass("circled");
                $j('#outcome4').removeClass("circled");
                $j('#outcome5').removeClass("circled");
                break;
                case "outcome3":
                $j('#outcome3').addClass("circled");
                $j('#outcome1').removeClass("circled");
                $j('#outcome2').removeClass("circled");
                $j('#outcome4').removeClass("circled");
                $j('#outcome5').removeClass("circled");
                    break;
                case "outcome4":
                $j('#outcome4').addClass("circled");
                $j('#outcome1').removeClass("circled");
                $j('#outcome3').removeClass("circled");
                $j('#outcome2').removeClass("circled");
                $j('#outcome5').removeClass("circled");
                break;
                case "outcome5":
                $j('#outcome5').addClass("circled");
                $j('#outcome1').removeClass("circled");
                $j('#outcome3').removeClass("circled");
                $j('#outcome4').removeClass("circled");
                $j('#outcome2').removeClass("circled");
                    break;
                default:
            } 
        };    }  
 // Results
    k=0;
    var result = ["N-","N+", "NEx", "NIN","C+", "CIn"];
    for (var i = 0; i < result.length; i++) {
        k++;
        var name = result[i];
        var td1_result = document.createElement("td");

        td1_result.className = "bdcell";
        td1_result.id = "cell_6";
        if(result[i] == "CIn"){
            td1_result.className = "bdcell boldRight";
        }
        var div_result = document.createElement("div");
        div_result.className = "normal";
        div_result.id = "result"+k;
        var node_result = document.createTextNode(name);
        div_result.appendChild(node_result);
        td1_result.appendChild(div_result);
        
        new_row.appendChild(td1_result);
        
        div_result.onclick = function () {  
            switch(this.id) {
                case "result1":
                $j('#result1').addClass("circled");
                $j('#result2').removeClass("circled");
                $j('#result3').removeClass("circled");
                $j('#result4').removeClass("circled");
                $j('#result5').removeClass("circled");
                $j('#result6').removeClass("circled");
                break;
                case "result2":
                $j('#result2').addClass("circled");
                $j('#result1').removeClass("circled");
                $j('#result3').removeClass("circled");
                $j('#result4').removeClass("circled");
                $j('#result5').removeClass("circled");
                $j('#result6').removeClass("circled");
                break;
                case "result3":
                $j('#result3').addClass("circled");
                $j('#result1').removeClass("circled");
                $j('#result2').removeClass("circled");
                $j('#result4').removeClass("circled");
                $j('#result5').removeClass("circled");
                $j('#result6').removeClass("circled");
                    break;
                case "result4":
                $j('#result4').addClass("circled");
                $j('#result1').removeClass("circled");
                $j('#result3').removeClass("circled");
                $j('#result2').removeClass("circled");
                $j('#result5').removeClass("circled");
                $j('#result6').removeClass("circled");
                break;
                case "result5":
                $j('#result5').addClass("circled");
                $j('#result1').removeClass("circled");
                $j('#result3').removeClass("circled");
                $j('#result4').removeClass("circled");
                $j('#result2').removeClass("circled");
                $j('#result6').removeClass("circled");
                break;
                case "result6":
                $j('#result6').addClass("circled");
                $j('#result1').removeClass("circled");
                $j('#result3').removeClass("circled");
                $j('#result4').removeClass("circled");
                $j('#result5').removeClass("circled");
                $j('#result2').removeClass("circled");
                break;
                default:
            } 
        };    } 

 
    //Partner hiv status
    var partner_status = ["NoP","P?","P-","P+"];
    var k =0;
    for (var i = 0; i < partner_status.length; i++) {
    k++;
    var name = partner_status[i];
    var td1_partner_status = document.createElement("td");

    td1_partner_status.className = "bdcell";
    td1_partner_status.id = "cell_6";
    if(partner_status[i] == "P+"){
        td1_partner_status.className = "bdcell boldRight";
    }
    var div_partner_status = document.createElement("div");
    div_partner_status.className = "normal";
    div_partner_status.id = "partnerstatus"+k;
    var node_test_two = document.createTextNode(name);
    div_partner_status.appendChild(node_test_two);
    td1_partner_status.appendChild(div_partner_status);
    
    new_row.appendChild(td1_partner_status);

    div_partner_status.onclick = function () {  
        switch(this.id) {
            case "partnerstatus1":
             $j('#partnerstatus1').addClass("circled");
             $j('#partnerstatus2').removeClass("circled");
             $j('#partnerstatus3').removeClass("circled");
             $j('#partnerstatus4').removeClass("circled");
              break;
            case "partnerstatus2":
            $j('#partnerstatus2').addClass("circled");
             $j('#partnerstatus1').removeClass("circled");
             $j('#partnerstatus3').removeClass("circled");
             $j('#partnerstatus4').removeClass("circled");
              break;
            case "partnerstatus3":
            $j('#partnerstatus3').addClass("circled");
            $j('#partnerstatus1').removeClass("circled");
            $j('#partnerstatus2').removeClass("circled");
            $j('#partnerstatus4').removeClass("circled");
                break;
            case "partnerstatus4":
            $j('#partnerstatus4').addClass("circled");
            $j('#partnerstatus1').removeClass("circled");
            $j('#partnerstatus2').removeClass("circled");
            $j('#partnerstatus3').removeClass("circled");
                break;
            default:
          } 
    };  }  

    //Client risk
      var client_risk = ["Low","Ong?","HI","ND"];
      var k =0;
      for (var i = 0; i < client_risk.length; i++) {
      k++;
      var name = client_risk[i];
      var td1_client_risk = document.createElement("td");
  
      td1_client_risk.className = "bdcell";
      td1_client_risk.id = "cell_6";
      if(client_risk[i] == "ND"){
        td1_client_risk.className = "bdcell boldRight";
      }
      var div_client_risk = document.createElement("div");
      div_client_risk.className = "normal";
      div_client_risk.id = "clientrisk"+k;
      var node_test_two = document.createTextNode(name);
      div_client_risk.appendChild(node_test_two);
      td1_client_risk.appendChild(div_client_risk);
      
      new_row.appendChild(td1_client_risk);
  
      div_client_risk.onclick = function () {  
          switch(this.id) {
              case "clientrisk1":
               $j('#clientrisk1').addClass("circled");
               $j('#clientrisk2').removeClass("circled");
               $j('#clientrisk3').removeClass("circled");
               $j('#clientrisk4').removeClass("circled");
                break;
              case "clientrisk2":
              $j('#clientrisk2').addClass("circled");
               $j('#clientrisk1').removeClass("circled");
               $j('#clientrisk3').removeClass("circled");
               $j('#clientrisk4').removeClass("circled");
                break;
              case "clientrisk3":
              $j('#clientrisk3').addClass("circled");
              $j('#clientrisk1').removeClass("circled");
              $j('#clientrisk2').removeClass("circled");
              $j('#clientrisk4').removeClass("circled");
                  break;
              case "clientrisk4":
              $j('#clientrisk4').addClass("circled");
              $j('#clientrisk1').removeClass("circled");
              $j('#clientrisk2').removeClass("circled");
              $j('#clientrisk3').removeClass("circled");
                  break;
              default:
            } 
      };  }  

      //Referral for retesting
      var referral = ["NoT","ReT","CT"];
      var k =0;
      for (var i = 0; i < referral.length; i++) {
      k++;
      var name = referral[i];
      var td1_refferal = document.createElement("td");
  
      td1_refferal.className = "bdcell";
      td1_refferal.id = "cell_6";
      if(referral[i] == "CT"){
        td1_refferal.className = "bdcell boldRight";
      }
      var div_refferal = document.createElement("div");
      div_refferal.className = "normal";
      div_refferal.id = "refferal"+k;
      var node_test_two = document.createTextNode(name);
      div_refferal.appendChild(node_test_two);
      td1_refferal.appendChild(div_refferal);
      
      new_row.appendChild(td1_refferal);
  
      div_refferal.onclick = function () {  
          switch(this.id) {
              case "refferal1":
               $j('#refferal1').addClass("circled");
               $j('#refferal2').removeClass("circled");
               $j('#refferal3').removeClass("circled");
                break;
              case "refferal2":
              $j('#refferal2').addClass("circled");
               $j('#refferal1').removeClass("circled");
               $j('#refferal3').removeClass("circled");
                break;
              case "refferal3":
              $j('#refferal3').addClass("circled");
              $j('#refferal1').removeClass("circled");
              $j('#refferal2').removeClass("circled");
                  break;
              default:
            } 
      };  }  

      //Appointment given
      var td_appointment = document.createElement("td");
      td_appointment.className = "bdcell boldRight";
      td_appointment.id = "cell_1";
  
      var div_appointment = document.createElement("div");
      div_appointment.id = "circle_1";
      div_appointment.className ="inactive";
      div_appointment.style.color = "rgb(197, 0, 0)";
      div_appointment.style.fontSize = "16px";
      div_appointment.style.textAlign = "center";
      div_appointment.style.width = "100px";
      node_appointment = document.createTextNode(" ");
      div_appointment.appendChild(node_appointment);
      td_appointment.appendChild(div_appointment
        );
      new_row.appendChild(td_appointment);
  

      //family slips
      var td_family_slip = document.createElement("td");
      td_family_slip.className = "bdcell boldRight";
     /// td_family_slip.id = "cell_1";
  
      var div_family_slip = document.createElement("div");
      div_family_slip.id = "circle_1";
      div_family_slip.className ="inactive";
      div_family_slip.style.color = "rgb(197, 0, 0)";
      div_family_slip.style.fontSize = "16px";
      div_family_slip.style.textAlign = "center";
      node_family_slip = document.createTextNode(" ");
      div_family_slip.appendChild(node_family_slip);
      td_family_slip.appendChild(div_family_slip
        );
      new_row.appendChild(td_family_slip);
        
      //Male condoms
      var td_male_condom = document.createElement("td");
      td_male_condom.className = "bdcell";
      //td_male_condoms.id = "cell_";
  
      var div_male_condom = document.createElement("div");
      div_male_condom.id = "circle_1";
      div_male_condom.className ="inactive";
      div_male_condom.style.color = "rgb(197, 0, 0)";
      div_male_condom.style.fontSize = "16px";
      div_male_condom.style.textAlign = "center";
      node_male_condom = document.createTextNode(" ");
      div_male_condom.appendChild(node_male_condom);
      td_male_condom.appendChild(div_male_condom
        );
     new_row.appendChild(td_male_condom);

       //Female condoms
       var td_female_condom = document.createElement("td");
       td_female_condom.className = "bdcell boldRight";
       //td_male_condoms.id = "cell_";
   
       var div_female_condom = document.createElement("div");
       div_female_condom.id = "circle_1";
       div_female_condom.className ="inactive";
       div_female_condom.style.color = "rgb(197, 0, 0)";
       div_female_condom.style.fontSize = "16px";
       div_female_condom.style.textAlign = "center";
       node_female_condom = document.createTextNode(" ");
       div_female_condom.appendChild(node_female_condom);
       td_female_condom.appendChild(div_female_condom
         );
      new_row.appendChild(td_female_condom);

       //Comments
       var td_comment = document.createElement("td");
       td_comment.className = "bdcell boldRight";
       //td_male_condoms.id = "cell_";
   
       var div_comment = document.createElement("div");
       div_comment.id = "circle_1";
       div_comment.className ="inactive";
       div_comment.style.color = "rgb(197, 0, 0)";
       div_comment.style.fontSize = "16px";
       div_comment.style.textAlign = "center";
       node_comment = document.createTextNode(" ");
       div_comment.appendChild(node_comment);
       td_comment.appendChild(div_comment
         );
      new_row.appendChild(td_comment);
 

    table.appendChild(new_row);
    loadPopup(new_row);

    //onclick
    div_date.onclick = function () { 
        hts_date = 1; 
        $j("#popup").html("");
        showDate("popup");
    };

    div_provider.onclick = function () {
        provider = 1;  
        $j("#popup").html("");
        displayKeyboard("popup");
    };

    div_age.onclick = function () {  
        age =1;
        $j("#popup").html("");
        showAge("popup");
    };

    div_appointment.onclick = function () {
        appointment = 1;
        $j("#popup").html("");
        showDate("popup");
    };
    div_time.onclick = function () {
        time = 1;
        $j("#popup").html("");
        showAge("popup");
    };
    div_comment.onclick = function () {
        comment =1;
        $j("#popup").html("");
        displayKeyboard("popup");
    };
    div_family_slip.onclick = function () {
        family_slip =1;
        $j("#popup").html("");
        showNumber("popup");
    };
    div_female_condom.onclick = function () {
        female =1;
        $j("#popup").html("");
        showNumber("popup");
    };
    div_male_condom.onclick = function () {
        male =1;
        $j("#popup").html("");
        showNumber("popup");
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
  var footer = document.createElement("div");
        
  footer.innerHTML = "<table style='width: 100%;'><tr><td id = 'left' style='width: 35%; float: left;'></td><td id='right' style='width: 100%;' rowspan='2'></td></tr>" +
      "<tr><td id = ''></td></tr><tr><td id='btns' colspan='2' style='padding-top: 8px; padding-bottom: 3px;border-top:1px solid black; background-color: black;'>" +
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

    if(hts_date == 1){
        
        var new_date = __$("dateselector_day").value + " " + __$("dateselector_month").value + " " +__$("dateselector_year").value;
        node_date.nodeValue= new_date;
        $j('#backButton, #nextButton').attr("disabled", false);

        $j("#shield, #popup").css("display", "none");
    }else if(appointment == 1){
        var new_date = __$("dateselector_day").value + " " + __$("dateselector_month").value + " " +__$("dateselector_year").value;
        node_appointment.nodeValue= new_date;
      //  $j('#backButton, #nextButton').attr("disabled", false);

        $j("#shield, #popup").css("display", "none");
    }

  };
  $j("#popup").css({

    "width": "auto",

    "min-width": "616px"

});

     $j("#popup").append(holder);
     $j("#popup").append(footer);
  __$("btns").appendChild(cl);
    
  __$("btns").appendChild(ok);

  __$("dateselector_day").value = day;

  __$("dateselector_month").value = mon;

  __$("dateselector_year").value = year;
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

    var row4 = ["Del", "Clear", "Space"];


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

            "width": "auto",

            "min-width": "616px"

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
         if(provider ==1){
        var str = node_provider.nodeValue;
          node_provider.nodeValue = str + v;
         }else if(comment ==1){
            var str = node_comment.nodeValue;
            node_comment.nodeValue = str + v;
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
            if(provider ==1){
                var str = node_provider.nodeValue;
                node_provider.nodeValue = str + v;
            }else if (comment ==1){
                var str = node_comment.nodeValue;
                node_comment.nodeValue = str + v;
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
            if(provider == 1){
            var str = node_provider.nodeValue;
            node_provider.nodeValue = str + v;
            }else if(comment ==1){
                var str = node_comment.nodeValue;
                node_comment.nodeValue = str + v;
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
                if(provider ==1){
                if(str == "Clear"){
                    node_provider.nodeValue = " ";
                }else if(str == "Del"){
                    var v =  node_provider.nodeValue;
                   
                    node_provider.nodeValue = v.slice(0, -1);
                } else {
                    var v =  node_comment.nodeValue;
                    node_comment.nodeValue = v + " ";
                }
            }else if(comment == 1){
                if(str == "Clear"){
                    node_comment.nodeValue = " ";
                }else if(str == "Del"){
                    var v =  node_comment.nodeValue;
                   
                    node_comment.nodeValue = v.slice(0, -1);
                }
                else {
                    var v =  node_comment.nodeValue;
                    node_comment.nodeValue = v + " ";
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
        
                "margin-left": "120px"
        
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
                            switch(str) {
                                case "Clear":
                                node_age.nodeValue = " ";
                                  break;
                                case "Del":
                                var v =  node_age.nodeValue;
                                node_age.nodeValue = v.slice(0, -1);
                                  break;
                                case "day":
                                var v = node_age.nodeValue;
                                var str = "D";
                                node_age.nodeValue = v + str;
                                    break;
                                case "week":
                                var v = node_age.nodeValue;
                                var str = "W";
                                node_age.nodeValue = v + str;
                                break;
                                case "month":
                                var v = node_age.nodeValue;
                                var str = "M";
                                node_age.nodeValue = v + str;
                                break;
                                case "year":
                                var v = node_age.nodeValue;
                                var str = "Y";
                                node_age.nodeValue = v + str;
                                break;
                                default:
                              } 
                        }else if(time == 1){
                            switch(str) {
                                case "Clear":
                                node_time.nodeValue = " ";
                                  break;
                                case "Del":
                                var v =  node_time.nodeValue;
                                node_time.nodeValue = v.slice(0, -1);
                                  break;
                                case "day":
                                var v = node_time.nodeValue;
                                var str = "D";
                                node_time.nodeValue = v + str;
                                    break;
                                case "week":
                                var v = node_time.nodeValue;
                                var str = "W";
                                node_time.nodeValue = v + str;
                                break;
                                case "month":
                                var v = node_time.nodeValue;
                                var str = "M";
                                node_time.nodeValue = v + str;
                                break;
                                case "year":
                                var v = node_time.nodeValue;
                                var str = "Y";
                                node_time.nodeValue = v + str;
                                break;
                                default:
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

function showNumber(id){
    $j('#backButton, #nextButton').attr("disabled", true);

    var row1 = ["1", "2", "3"];

    var row2 = ["4", "5", "6"];

    var row3 = ["7", "8", "9"];

    var row4 = ["Del", "Clear"];


    var cl = document.createElement("div");

    cl.className = "button_red cancel";

    cl.innerHTML = "Cancel";

    cl.onclick = function () {

        $j('#backButton, #nextButton').attr("disabled", false);

        $j("#shield, #popup").css("display", "none");
        $j("#popup").html("");
        family_slip =0;
        male = 0;
        female = 0;

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

        //'margin-left': '360px',

        'margin-right': '2px'

    });

    ok.onclick = function () {

        $j('#backButton, #nextButton').attr("disabled", false);

        $j("#shield, #popup").css("display", "none");
        $j("#popup").html("");
        family_slip =0;
        male = 0;
        female = 0;


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
         if(family_slip ==1){
           var str = node_family_slip.nodeValue;
          node_family_slip.nodeValue = str + v;
         }else if(male ==1){
            var str = node_male_condom.nodeValue;
            node_male_condom.nodeValue = str + v;
         }else if(female ==1){
            var str = node_female_condom.nodeValue;
            node_female_condom.nodeValue = str + v;
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
            if(family_slip ==1){
                var str = node_family_slip.nodeValue;
                  node_family_slip.nodeValue = str + v;
            }else if(male ==1){
            var str = node_male_condom.nodeValue;
            node_male_condom.nodeValue = str + v;
            }else if(female ==1){
            var str = node_female_condom.nodeValue;
            node_female_condom.nodeValue = str + v;
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
            if(family_slip ==1){
                var str = node_family_slip.nodeValue;
                  node_family_slip.nodeValue = str + v;
                 }else if(male ==1){
                    var str = node_male_condom.nodeValue;
                    node_male_condom.nodeValue = str + v;
                 }else if(female ==1){
                    var str = node_female_condom.nodeValue;
                    node_female_condom.nodeValue = str + v;
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
                if(family_slip ==1){
                    if(str == "Clear"){
                        node_family_slip.nodeValue = " ";
                    }else{
                        var v =  node_family_slip.nodeValue;
                       
                        node_family_slip.nodeValue = v.slice(0, -1);
                    }
                     }else if(male ==1){
                        if(str == "Clear"){
                            node_male_condom.nodeValue = " ";
                        }else{
                            var v =  node_male_condom.nodeValue;
                           
                            node_male_condom.nodeValue = v.slice(0, -1);
                        }
                     }else if(female ==1){
                        if(str == "Clear"){
                            node_female_condom.nodeValue = " ";
                        }else{
                            var v =  node_female_condom.nodeValue;
                           
                            node_female_condom.nodeValue = v.slice(0, -1);
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
    
        $j("#tblKeyboard").css({
        
            "width": "240px",
    
            "min-width": "240px"
    
        });
        
        $j("#popup").css({

            "width": "245px",

            "min-width": "245px"

        });
    
    
    
          __$(id).appendChild(holder);
    
    
        __$("right").appendChild(tbl);
    
        __$("btns").appendChild(cl);
    
        __$("btns").appendChild(ok);
    
        // __$("popup-header").innerHTML = current_popup;
    
         $j("#shield, #popup").css("display", "block");
    
        } 

}