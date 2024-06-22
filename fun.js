

function fn_chk1(){
const chk1 = document.querySelector("#chk1"); //جلب عنصر الاختيار
const tr1 = document.querySelector("#tr1"); // جلب لوحة العناصر
if(!chk1.checked) //اذا ما كان مفعل
  tr1.style.display = "none"; //إخفاء اللوحة
else
tr1.style.display="table-row";//إظهار اللوحة
}
function fn_chk2(){
const chk2 = document.querySelector("#chk2"); //جلب عنصر الاختيار
const tr2 = document.querySelector("#tr2"); // جلب لوحة العناصر
if(!chk2.checked) //اذا ما كان مفعل
  tr2.style.display = "none"; //إخفاء اللوحة
else
tr2.style.display="table-row";//إظهار اللوحة
}

function fn_chk3(){
const chk3 = document.querySelector("#chk3"); //جلب عنصر الاختيار
const tr3 = document.querySelector("#tr3"); // جلب لوحة العناصر
if(!chk3.checked) //اذا ما كان مفعل
  tr3.style.display = "none"; //إخفاء اللوحة
else
tr3.style.display="table-row";//إظهار اللوحة
}

function fn_chk4(){
const chk4 = document.querySelector("#chk4"); //جلب عنصر الاختيار
const tr4 = document.querySelector("#tr4"); // جلب لوحة العناصر
if(!chk4.checked) //اذا ما كان مفعل
  tr4.style.display = "none"; //إخفاء اللوحة
else
tr4.style.display="table-row";//إظهار اللوحة
}
function fn_chk5(){
const chk5 = document.querySelector("#chk5"); //جلب عنصر الاختيار
const tr5 = document.querySelector("#tr5"); // جلب لوحة العناصر
if(!chk5.checked) //اذا ما كان مفعل
  tr5.style.display = "none"; //إخفاء اللوحة
else
tr5.style.display="table-row";//إظهار اللوحة
}
function fn_chk6(){
const chk6 = document.querySelector("#chk6"); //جلب عنصر الاختيار
const tr6 = document.querySelector("#tr6"); // جلب لوحة العناصر
if(!chk6.checked) //اذا ما كان مفعل
  tr6.style.display = "none"; //إخفاء اللوحة
else
tr6.style.display="table-row";//إظهار اللوحة
}
function fn_chk7(){
const chk7 = document.querySelector("#chk7"); //جلب عنصر الاختيار
const tr7 = document.querySelector("#tr7"); // جلب لوحة العناصر
if(!chk7.checked) //اذا ما كان مفعل
  tr7.style.display = "none"; //إخفاء اللوحة
else
tr7.style.display="table-row";//إظهار اللوحة
}
function fn_chk8(){
const chk8 = document.querySelector("#chk8"); //جلب عنصر الاختيار
const tr8 = document.querySelector("#tr8"); // جلب لوحة العناصر
if(!chk8.checked) //اذا ما كان مفعل
  tr8.style.display = "none"; //إخفاء اللوحة
else
tr8.style.display="table-row";//إظهار اللوحة
}
function fn_chk9(){
const chk9 = document.querySelector("#chk9"); //جلب عنصر الاختيار
const tr9 = document.querySelector("#tr9"); // جلب لوحة العناصر
if(!chk9.checked) //اذا ما كان مفعل
  tr9.style.display = "none"; //إخفاء اللوحة
else
tr9.style.display="table-row";//إظهار اللوحة
}
function fn_chk10(){
const chk10 = document.querySelector("#chk10"); //جلب عنصر الاختيار
const tr10 = document.querySelector("#tr10"); // جلب لوحة العناصر
if(!chk10.checked) //اذا ما كان مفعل
  tr10.style.display = "none"; //إخفاء اللوحة
else
tr10.style.display="table-row";//إظهار اللوحة
}
function fn_chk11(){
const chk11 = document.querySelector("#chk11"); //جلب عنصر الاختيار
const tr11 = document.querySelector("#tr11"); // جلب لوحة العناصر
if(!chk11.checked) //اذا ما كان مفعل
  tr11.style.display = "none"; //إخفاء اللوحة
else
tr11.style.display="table-row";//إظهار اللوحة
}

function enablebutton(){
  const input = document.getElementById("ch1");
  const input1= document.getElementById("ch2");
  const input2= document.getElementById("ch3");
  const input3= document.getElementById("ch4");
  const input4= document.getElementById("ch5");
  const input5= document.getElementById("ch6");
  const input6= document.getElementById("ch7");
  const input7= document.getElementById("ch8");
  const input8= document.getElementById("ch9");
  const input9= document.getElementById("ch10");
  const input10=document.getElementById("ch11");
  if(input.checked || input1.checked || input2.checked
     || input3.checked || input4.checked || input5.checked
     || input6.checked || input7.checked || input8.checked 
     || input9.checked || input10.checked)
     document.getElementById("button").disabled = false;
  else
  document.getElementById("button").disabled = true;
}

function showform(){
  const form=document.querySelector('#contact')
  form.style.display="block"
}

function captchaCode() {
  var Numb1, Numb2, Numb3, Numb4, Code;     
  Numb1 = (Math.ceil(Math.random() * 10)-1).toString();
  Numb2 = (Math.ceil(Math.random() * 10)-1).toString();
  Numb3 = (Math.ceil(Math.random() * 10)-1).toString();
  Numb4 = (Math.ceil(Math.random() * 10)-1).toString();
  
  Code = Numb1 + Numb2 + Numb3 + Numb4;
  $("#captcha span").remove();
  $("#captcha input").remove();
  $("#captcha").append("<span id='code'>" + Code + "</span><input type='button' onclick='captchaCode();'>");
}


function emailcheck(){
  var emailFilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,10})+$/;   
  var emailText = $(".email").val();
  if (emailFilter.test(emailText)) {
    $(".email").css({
      "color" : "#609D29",
      return :true
    });
  }
  else {
    $(".email").css({
      "color" : "#CE3B46",
      return :true
    });
    return true
  }
  
}
function IDcheck() {
    const reg = /^[0][1-9]{9}|^[1][1-4][1-9]{9}$/;
    var id = $(".id").val();
    if (reg.test(id)) {
        $(".id").css({
            "color": "#609D29",
            return: true
        });
    }
    else {
        $(".id").css({
            "color": "#CE3B46",
            return: false
        });
        return true
    }
}

function phonecheck(){
    var phoneFilter = /^[09]+[4-6][0-9]{7}|^[09]+[3|8|9][0-9]{7}$/;   

  var phoneText = $(".mobile").val();
  if (phoneFilter.test(phoneText)) {
    $(".mobile").css({
      "color" : "#609D29",
      return :true
    });
  }
  else {
    $(".mobile").css({
      "color" : "#CE3B46",
      return :false
    });
    return true
  }

}

function fnamecheck(){
  var nameFilter =/(\w*[ء-ي]\w*)/;
  var nameText = $(".name").val();
  if (nameFilter.test(nameText)) {
    $(".name").css({
      "color" : "#609D29",
      return :true
    });
  }
  else {
    $(".name").css({
      "color" : "#CE3B46",
      return :false
    });
    return true
  }
}
function lnamecheck(){
    var name2Filter =/(\w*[ء-ي]\w*)/;
    var name2Text = $(".name2").val();
    if (name2Filter.test(name2Text)) {
      $(".name2").css({
        "color" : "#609D29",
        return :true
      });
    }
    else {
      $(".name2").css({
        "color" : "#CE3B46",
        return :false
      });
      return true
    }

}
function xxx() {
    window.alert("I am an alert box!");


}


function show_value() {
    window.alert("I am an alert box!");

  var checkbox_state = []
  var details= []
  $("[name=check]:checked").each(function() {
    details.push($(this).closest("tr").find("[name=details]").val()) //push value in array
  })
  console.log(details.toString());
}



$(function() {
  captchaCode();
  
  $('#contactForm').submit(function(){
    var captchaVal = $("#code").text();
    var captchaCode = $(".captcha").val();
    if (captchaVal == captchaCode) {
      $(".captcha").css({
        "color" : "#609D29"
      });
    }
    else {
      $(".captcha").css({
        "color" : "#CE3B46"
      });
    }
    

      var idFilter =/^([0][1-9])\d{9}$|^([1][0-4])\d{9}$/;   
      var idText = $(".id").val();
      if (idFilter.test(idText)) {
        $(".id").css({
          "color" : "#609D29",
        });
      }
      else {
        $(".id").css({
          "color" : "#CE3B46",
        });
      }
      
      const res=document.querySelector("#result")
      var details= []
      $("[name=check]:checked").each(function() {
        details.push($(this).closest("tr").find("[name=details]").val()) //push value in array
        document.getElementById('result').innerHTML +=`<h1>${details}</h1><br/>`;
      })

    if ((captchaVal != captchaCode) || (!idFilter.test(idText))) {
      return false;
    }
    if ((captchaVal == captchaCode) && (idFilter.test(idText))) {
      $("#contactForm").css("display", "none");
      res.style.display="table-row";
      return false;
    }
  });       
});