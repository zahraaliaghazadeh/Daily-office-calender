
//this is to bring the date and time on the page
var date = moment().format('LLL');
$("#currentDay").text(date);
// console.log();

//tried some JQuery to make Div etc
// var timeBlock=$("<div>");
// timeBlock.text("Hello")
// var saveButton =$("<button>")
// $(".container").prepend(timeBlock);

//example to take out white text
// var todoText = todoInput.value.trim();

$("#saveBtn9").on('click', function () {
    var str9 = $("#timeblock9").val();
    localStorage.setItem("9am", str9);
      // document.getElementById("result").innerHTML = localStorage.getItem("lastname");
      str9 = JSON.parse(localStorage.getItem('9am'))
    console.log(str9);
})
$("#saveBtn10").on('click', function () {
    var str10 = $("#timeblock10").val();
    localStorage.setItem("10am", str10);
    // document.getElementById("result").innerHTML = localStorage.getItem("lastname");

    console.log(str10);
})
$("#saveBtn11").on('click', function () {
    var str11 = $("#timeblock11").val();
    localStorage.setItem("11am", str11);
    // document.getElementById("result").innerHTML = localStorage.getItem("lastname");

    console.log(str11);
})
$("#saveBtn12").on('click', function () {
    var str12 = $("#timeblock12").val();
    localStorage.setItem("12pm", str12);
    // document.getElementById("result").innerHTML = localStorage.getItem("lastname");

    console.log(str12);
})
$("#saveBtn1").on('click', function () {
    var str1 = $("#timeblock1").val();
    localStorage.setItem("1pm", str1);
    // document.getElementById("result").innerHTML = localStorage.getItem("lastname");

    console.log(str1);
})
$("#saveBtn2").on('click', function () {
    var str2 = $("#timeblock2").val();
    localStorage.setItem("2pm", str2);
    // document.getElementById("result").innerHTML = localStorage.getItem("lastname");

    console.log(str2);
})
$("#saveBtn3").on('click', function () {
    var str3 = $("#timeblock3").val();
    localStorage.setItem("3pm", str3);
    // document.getElementById("result").innerHTML = localStorage.getItem("lastname");

    console.log(str3);
})
$("#saveBtn4").on('click', function () {
    var str4 = $("#timeblock4").val();
    localStorage.setItem("4pm", str4);
    // document.getElementById("result").innerHTML = localStorage.getItem("lastname");

    console.log(str4);
})
$("#saveBtn5").on('click', function () {
    var str5 = $("#timeblock5").val();
    localStorage.setItem("5pm", str5);
    // document.getElementById("result").innerHTML = localStorage.getItem("lastname");

    console.log(str5);
})


// localStorage.setItem("")
// function(){
//     var storedplans = JSON.parse(localStorage.getItem(""))
// }


//this is the hour of time right now
var time = parseInt(moment().format('HH'));
console.log(time);

// if(($("".timeofday").val())===($("#time").val())){

//    }

var AM9 = $("#9AM");
var AM10 = $("#10AM");
var AM11 = $("#11AM");
var PM12 = $("#12PM");
var PM1 = $("#1PM");
var PM2 = $("#2PM");
var PM3 = $("#3PM");
var PM4 = $("#4PM");
var PM5 = $("#5PM");


var timeslot = [
    {
        time: 9,
        element: AM9,

    },
    {
        time: 10,
        element: AM10,

    },
    {
        time: 11,
        element: AM11,

    },
    {
        time: 12,
        element: PM12,

    },
    {
        time: 13,
        element: PM1,

    },
    {
        time: 14,
        element: PM2,

    },
    {
        time: 15,
        element: PM3,

    },
    {
        time: 16,
        element: PM4,

    },
    {
        time: 17,
        element: PM5,

    }


]

for (i = 0; i < timeslot.length; i++) {
    if (timeslot[i].time === time) {
        timeslot[i].element.css("background-color", "#ff6961")
    }
    else if (timeslot[i].time < time) {
        timeslot[i].element.css("background-color", "#d3d3d3")

    }
    else if (timeslot[i].time > time) {
        timeslot[i].element.css("background-color", "#77dd77")

    }
}


// localStorage.setItem(timeStr,text); 

