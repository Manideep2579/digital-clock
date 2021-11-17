





//

function printTime() {
    // assigning varibales
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    let day =d.getDay();
    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();

    // assigning days based on number
    switch(day) {
        case 0:
        day = "Sunday";
        break;
        case 1:
            day: "Monday";
            break;
            case 2 : "Tuesday";
            break;
            case 3 : "Wednesday";
            break;
            case 4 : "Thursday";
            break;
            case 5 : "Friday";
            break;
            case 6 : "Saturday";
            break;   

    } 

    if(hours<10){
        hours = "0" + hours;

    }
    if(minutes<10){
        minutes ="0" + minutes;

    }
    if(seconds<10){
        minutes = "0" + seconds;

    }

    month = month + 1;
    document.getElementById('clock').innerHTML= hours + ":" + minutes + ":" + seconds;
    document.getElementById('day-date').innerHTML = day + ","  + month + "," + year;

 
}
window.onload = function(){
    printTime()

}
setInterval(printTime, 1000);


 