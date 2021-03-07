//use moment to set up date

//creating a daily planner

//planner for the day, standard biz hours 9-5

//current day is displayed at top of calendar
var today = moment();
var dayWeek = today.format("dddd")
$("#1a").text(dayWeek);

//timeblocks with standard business hours



//color coded for past, present, future
//gray = past, present = green, blue = future

//when you click on a block, you can type into it
//need to save it
var nine = document.createElement("INPUT");
nine.setAttribute("type", "text");

//access with var nine = document.getElementById("myText");

//save button to store the event

//refresh will allow it to stay

//set up the design

$(".btn-save").on("click",function(){
    var idBTN = $(this).attr("id")
    var timeBlock = idBTN.split("-")[1]
    //splits the id and grabs assigned index
    var userPlan = $("#plan-"+timeBlock).val()
    //looks at id and grabs value of the input
    console.log(userPlan)
    console.log("BTN",idBTN)
    localStorage.setItem(timeBlock, userPlan)
})
var currentTime = moment().hours()
for(let i = 9; i<=17; i++){
    $("#plan-"+i).val(localStorage.getItem(i))
    if (i<currentTime){
        
        $("#plan-"+i).addClass("past")
    } else if (i===currentTime){
        $("#plan-"+i).addClass("current")
    } else {
        $("#plan-"+i).addClass("future")
    }
}

//$("#plan-17").val(localStorage.getItem("17"))