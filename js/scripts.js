// JavaScript to get hour of the day
// REF: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
var date = new Date();
var current_hour = date.getHours();

console.log(current_hour);

//if nighttime
if(current_hour >=11) {

		//if nighttime,
		//add remove 'day' class
		$('body').removeClass('day');

		//if daytime,
		//add 'night' class
		$('body').addClass('night');
	};
