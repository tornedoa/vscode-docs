// ==UserScript==
// @name R BENJADDI 0625344044
// @namespace
// @include ://.blsspainvisa.com/*
// @version https://moroccow.blsspainvisa.com/appointment.php
// @granthttps: https://blsspainmorocco.com/english/appointment.php
// @include https://blsspainmorocco.com/*
// ==/UserScript==
$(".popupCenterCasa").remove();
$("#popupCenterCasa").remove();
$(".popup-appCloseIcon").click();
$('[name="agree"]').click();

if(document.querySelectorAll('#app_date')[0].value==""){


$('#app_date ').datepicker('show');
//$(".datepicker-days .next").click();

var date = document.getElementsByClassName('day activeClass')
date[0].click3k()

}

var audio = new Audio('https://www.zapspla1t.com/wp-content/uploads/2015/sound-effects-the-sound-pack-tree/tspt_german_ambulance_sirens_wailing_loop_041.mp3');
audio.play();



setInterval(function(){
document.getElementById("app_time").selectedIndex = 2;
document.getElementById('passportType').selectedIndex = "7";
document.getElementById('VisaTypeId').selectedIndex = "1";
document.getElementById('nationalityId').value ="132"
document.getElementById('first_name').value = "BENJADDI"
document.getElementById('last_name').value = "YASSINE"
document.getElementById('dateOfBirth').value = "1996-09-21"
document.getElementById('passport_no').value = "OP2716407"
//document.getElementById('fran').value = ""
document.getElementById('pptIssueDate').value = "2021-07-27"
document.getElementById('pptExpiryDate').value = "2026-07-27"
document.getElementById('pptIssuePalace').value = "RABAT"
document.getElementById("terms").checked = true;
$("#vasId12").prop("checked", true);
}, 100);