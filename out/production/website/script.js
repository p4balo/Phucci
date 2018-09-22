var currentDate = new Date();
var currentDateDay;
for(var i = 0; i < currentDate.toDateString().length - 2; i++){
    if( currentDate.toDateString().charAt(i) === '2'){
        if( currentDate.toDateString().charAt(i + 1) === '0'){
            if( currentDate.toDateString().charAt(i + 2) === '1'){
                currentDateDay = currentDate.toDateString().substring(i - 3, i - 1);
                break;
            }
        }
    }
}
var currentDateMonth = currentDate.getMonth();
var currentDateYear = currentDate.getFullYear();
var currentDateHour = currentDate.getHours();
var currentDateMeridiem = "A.M.";
if(currentDateHour===0){
    currentDateHour = 12;
}
else if(currentDateHour>12){
    currentDateHour -= 12;
    currentDateMeridiem = "P.M.";
}
var currentDateMinute = currentDate.getMinutes();
if(currentDateMinute<=9){
    currentDateMinute = '0'+currentDateMinute;
}
var combinedDate = (currentDateMonth+1) + '/' + currentDateDay + '/' + currentDateYear + " "+currentDateHour + ":"+currentDateMinute + " " + currentDateMeridiem + " SFO";
document.getElementById("time").innerHTML = combinedDate;