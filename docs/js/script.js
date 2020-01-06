window.addEventListener("load",initDate,false);

function lastUpdated() 
{
	document.write(document.lastModified);
}

function scroll() {
	var elmnt = document.getElementById("about");
	elmnt.scrollIntoView(); 
}

function initDate() {
     var now = new Date();
     document.getElementById("dtField").innerHTML = timeString(now.getHours());

     function timeString(theHour) {
        if (theHour < 12) {
           return "morning";
        }
        if (theHour < 18) {
           return "afternoon";
        }
        return "evening";
     }
}