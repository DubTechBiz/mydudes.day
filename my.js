"use strict";
const a = new Date(),
    c = $("#countdown");
const b = function() {
		$("#dude").hide();
		c.countdown(wi(3), function(e) {
			$(this).html(e.strftime('%d:%H:%M:%S'));
		}).on('finish.countdown', function(e) {
			w();
		});
		c.show();
	},
    w = function() {
		c.hide();
		$("#dude").show();
		setTimeout(() => {
			b()
		}, wi(4).getTime() - Date.now());
	},
    wi = function(d) {
		// How many days until next Wednesday?
		let f = (d+7-a.getDay())%7 || 7;
		// How many seconds?
		f *= 864e5;
		// What date is that?
		let g = new Date(a.getTime()+f);
		// Adjust to midnight
		g.setHours(0);g.setMinutes(0);g.setSeconds(0);g.setMilliseconds(0);
		return g;
	};
(function() {
	if(a.getDay() == 3) {
		// IT IS WEDNESDAY MY DUDES
		w();
	}
	else {
		// IT IS NOT WEDNESDAY
		b();
	}
	$("#container").show();
})();