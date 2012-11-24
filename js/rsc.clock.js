/* rsc.clock.js
 * This module creates a circular blob containing one or more pie-chart like clocks within it.
 */

var RSC = (function(RSC) {

RSC.Clock = function(paper, x, y, r, segs) {
    if (paper.customAttributes.segment === undefined) {
        paper.customAttributes.segment = RSC.Clock.segment;
    }

    this.x = x;
    this.y = y;
    this.r = r;
    this.segs = segs;
    var total_days = 0;
    $.each(segs, function(i, seg) {
        total_days += days_diff(seg.start, seg.end);
    });
    var curr_min = 0;
    $.each(segs, function(i, seg) {
        var days = days_diff(seg.start, seg.end),
            min = curr_min,
            max = curr_min + (days/total_days*360),
            middle = min+(max-min)/2,
            xm = segs.length==1 ? x-r+4 : x + (r-2) * Math.sin(middle * Math.PI/180),
            ym = segs.length==1 ? y : y - (r-2) * Math.cos(middle * Math.PI/180),
            seg = $.extend(seg, {
                days: days,
                min: min,
                max: max,
                middle: { x: xm, y: ym },
                date: null,
                todo: paper.path().attr({ segment: [ x, y, 0, min, max ], opacity: 0.5, fill: seg.colour, stroke: 'none' }),
                done: paper.path().attr({ segment: [ x, y, 0, min, min ], fill: seg.colour, stroke: 'none' })
            }),
            dir = segs.length==1 ? 1 : (middle >= 45 && middle < 135 ? 3 : (middle >= 135 && middle < 225 ? 0 : (middle >= 225 && middle < 315 ? 1 : 2))),
            _label = paper.popup(x+r, y, seg.name).update(seg.middle.x, seg.middle.y, dir).hide()
                .hover(function(){ _label.toFront().show(); },
                    function(){ _label.hide(); }),
            _set = paper.set()
            .push( seg.todo, seg.done )
            .hover(
                function() { _label.toFront().show(); },
                function() { _label.hide(); }
            );
        curr_min = max;
    });
};

RSC.Clock.prototype.set_date = function(date, last_date, time, cb) {
    var clock = this;
    $.each(this.segs, function(i, seg) {
        if ((date < seg.start || date > seg.end) && (last_date < seg.start || last_date > seg.end)) {
            return;
        }
        if (date < seg.start || date > seg.end) {
            var pos = date < seg.start ? seg.min : seg.max;
            seg.done.animate({ segment: [ clock.x, clock.y, 0, seg.min, pos ] }, time);
            seg.todo.animate({ segment: [ clock.x, clock.y, 0, seg.min, seg.max ] }, time, cb);
            return;
        }
        var bouncy = ((date == seg.start && last_date<date) || (date == seg.end && last_date>date)) && !(seg.start == seg.end);
        var pos = seg.min + days_diff(seg.start, date)*(seg.max-seg.min)/seg.days;
        seg.done.animate({ segment: [ clock.x, clock.y, clock.r, seg.min, pos ] }, time, bouncy?'backOut':'');
        seg.todo.animate({ segment: [ clock.x, clock.y, clock.r, seg.min, seg.max ] }, time, 'backOut', cb);
    });
};

RSC.Clock.segment = function (x, y, r, a1, a2) {
    if (a1 == 360) a1 = 359.999;
    if (a2 == 360) a2 = 359.999;
    var flag = (a2 - a1) > 180;
    a1 = (a1 % 360) * Math.PI / 180;
    a2 = (a2 % 360) * Math.PI / 180;
    return {
        path: [
            [ "M", x, y ],
            [ "l", r * Math.sin(a1), - r * Math.cos(a1) ],
            [ "A", r, r, 0, +flag, 1, x + r * Math.sin(a2), y - r * Math.cos(a2) ],
            [ "z" ]
        ]
    };
};

function days_diff(from, to) {
    from = new Date(from.substring(0,4), from.substring(5,7)-1, from.substring(8,10));
    to = new Date(to.substring(0,4), to.substring(5,7)-1, to.substring(8,10));
    // I know, but it's good enough
    return Math.round( (to-from)/86400/1000 + 1 );
}

return RSC;

})(RSC || {});

