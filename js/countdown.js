//######################################################################################
// Author: ricocheting.com
// Version: v2.0
// Date: 2011-03-31
// Description: displays the amount of time until the "dateFuture" entered below.

// NOTE: the month entered must be one less than current month. ie; 0=January, 11=December
// NOTE: the hour is in 24 hour format. 0=12am, 15=3pm etc
// format: dateFuture1 = new Date(year,month-1,day,hour,min,sec)
// example: dateFuture1 = new Date(2003,03,26,14,15,00) = April 26, 2003 - 2:15:00 pm

dateFuture1 = new Date(2014,9,13,20,0,0);
//set this to the number of hours offset from GMT
tzOffset = -4;

dx = dateFuture1.toGMTString();
dx = dx.substr(0,dx.length -3);
tzCurrent=(dateFuture1.getTimezoneOffset()/60)*-2;
dateFuture1.setTime(Date.parse(dx))
dateFuture1.setHours(dateFuture1.getHours() + tzCurrent - tzOffset);

// TESTING: comment out the line below to print out the "dateFuture" for testing purposes
//document.write(dateFuture +"<br />");


//###################################
//nothing beyond this point
function GetCount(ddate,iid){

	dateNow = new Date();	//grab current date
	amount = ddate.getTime() - dateNow.getTime();	//calc milliseconds between dates
	delete dateNow;

	// if time is already past
	if(amount < 0){
		document.getElementById(iid).innerHTML="You can now check out Kevin's announcement on <a id='done' href='http://www.reddit.com/r/iama'>Reddit!</a>";
	}
	// else date is still good
	else{
		days=0;hours=0;mins=0;secs=0;out="";

		amount = Math.floor(amount/1000);//kill the "milliseconds" so just secs

		days=Math.floor(amount/86400);//days
		amount=amount%86400;

		hours=Math.floor(amount/3600);//hours
		amount=amount%3600;

		mins=Math.floor(amount/60);//minutes
		amount=amount%60;

		secs=Math.floor(amount);//seconds

		if(days != 0){out += days +((days==1)?"<em>d</em>":"<em>d</em>")+" ";}
		if(hours != 0){out += hours +((hours==1)?"<em>h</em>":"<em>h</em>")+" ";}
		out += mins +((mins==1)?"<em>m</em>":"<em>m</em>")+" ";
		out += secs +((secs==1)?"<em>s</em>":"<em>s</em>")+" ";
		out = out.substr(0,out.length-2);
		document.getElementById(iid).innerHTML=out;

		setTimeout(function(){GetCount(ddate,iid)}, 1000);
	}
}

window.onload=function(){
	GetCount(dateFuture1, 'countdown');
	//you can add additional countdowns here (just make sure you create dateFuture2 and countbox2 etc for each)
};