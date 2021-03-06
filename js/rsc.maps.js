/* rsc.maps.js
 * This module includes the data of all the WSF events.
 */

var RSC = (function(RSC) {

var maps = {
    'stratford': { x: 500, y: 20, w: 230, h: 230 },
    'london': { 'x': 420, 'y': 280, 'w': 750, 'h': 300 },
    'uk': { x: 0, y: 0, w: 481, h: 596 },
    'stratfordOnUK': { x: 300, y: 459, w: 4, h: 4 },
    'londonOnUK': { x: 352, y: 493, w: 10, h: 5 }
};

Raphael.fn.arrow = function (x1, y1, x2, y2, size) {
    var angle = Math.atan2(x1-x2,y2-y1);
        angle = (angle / (2 * Math.PI)) * 360;
    var arrowPath = this.path("M" + x2 + " " + y2 + " L" + (x2 - size) + " " + (y2 - size) + " L" + (x2 - size) + " " + (y2 + size) + " L" + x2 + " " + y2 ).attr("fill","black").rotate((90+angle),x2,y2);
    var linePath = this.path("M" + x1 + " " + y1 + " L" + x2 + " " + y2).attr({'stroke-width':2});;
    return this.set(linePath,arrowPath);
};

$(function(){

    var sl_h = $('#map').offset().top;
    if ($(window).height() > 616 + sl_h) {
        $('#map').css( { 'top': '50%', 'margin-top': '-270px' } );
    }
    var paper = Raphael("map", 1180, 600);

    // UK Map
    paper.image('i/gb-watercolour.s.png', maps.uk.x, maps.uk.y, maps.uk.w, maps.uk.h);
    RSC.Rect(paper, maps.uk, 0).attr({ 'stroke': 'none' }).glow({ color: 'white', opacity: 1 });
    //paper.text(880, 32, "World Shakespeare\nFestival Timeline").attr({ 'font-weight': 'bold', 'font-family': 'Baskerville', 'font-size': '32px', 'text-anchor': 'start' });
    var font = 'Optima, "Zapf Humanist", "MgOpen Cosmetica", Candara, Myriad, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Frutiger, "Trebuchet MS", sans-serif';
    var body_font = 'Helvetica, Arial, sans-serif';
    paper.text(800, 16, "Quintessence of Dust").attr({ 'font-weight': 'bold', 'font-family': font, 'font-size': '32px', 'text-anchor': 'start' });
    var fff = { 'font-size': '16px', 'text-anchor': 'start', 'font-family': body_font };
    paper.text(800, 90, "A day by day overview of the events of the World\nShakespeare Festival. Watch the animation over the\ncourse of the festival, or manually pick the date to see\nwhat productions were on where.").attr(fff);
    paper.text(1180, 119, "More information").attr(fff).attr({ href: 'about.html', fill: '#0000ff', 'text-anchor': 'end' }).hover(function() { this.attr({ fill: '#ff0000' }); }, function() { this.attr({ fill: '#0000ff' }); });

    var key = [
        [ 800, 152, '#6633ff', 'International Collaborations and Commissions', 'Globe to Globe, Cymbeline,\nA Soldier in Every Son, 2008:Macbeth, Desdemona' ],
        [ 800, 170, '#ff0000', 'RSC Productions', 'A Tender Thing, Rape of Lucrece, King\nJohn, Richard III, I Cinna (The Poet)' ],
        [ 800, 188, '#0000ff', 'UK Collaborations', 'King Lear, Timon of Athens, Coriolan/us, Pilot\nNight, Otello, Falstaff, West Side Story' ],

        [ 800, 206, '#cc6600', 'Young People\u2019s Theatre', 'Young Company Building Takeover, Henry V,\nPoor Trash of Venice, Cesario, The Dark Side of Love' ],
        [ 800, 224, '#009900', 'Exhibitions and Events', '' ],
        [ 800, 242, '#ffcc00', 'Professional-Amateur Collaborations', 'Open Stages Showcase,\nPericles, The Dell' ]
    ];
    $.each(key, function(i, k) {
        paper.text(k[0]+50, k[1]+8, k[3]).attr(fff).attr({ 'font-size': '12px' });
        var r = paper.rect(k[0], k[1], 15, 15).attr({ fill: k[2], stroke: 'none' });
        if (k[4]) {
            var p = paper.popup(0, 0, k[4]).update(k[0]+7, k[1], 2).hide()
                .hover(function(){ p.toFront().show(); }, function(){ p.hide(); });
            r.hover(function() { p.toFront().show(); }, function() { p.hide(); });
        }
    });
    key = {
        170: [
            [ '#d80000', 'What Country Friends Is This? \u2013 Twelfth Night,\nThe Comedy of Errors, The Tempest' ],
            [ '#b10000', 'Much Ado About Nothing' ],
            [ '#890000', 'Julius Caesar' ]
        ],
        188: [
            [ '#0000bb', 'Y Storm (The Tempest)' ],
            [ '#000077', 'The Rest Is Silence' ]
        ],
        152: [
            [ '#490cff', 'Macbeth : Leila and Ben \u2013 A Bloody History' ],
            [ '#3900e4', 'Two Roses for Richard III' ],
            [ '#2f00bc', 'A Midsummer Night\u2019s Dream (As You Like It)' ],
            [ '#250095', 'Romeo and Juliet in Baghdad' ],
            [ '#1b006e', 'Troilus and Cressida' ],
            [ '#120047', 'Forests' ]
        ],
        206: [
            [ '#a55200', 'In A Pickle' ]
        ]
    };
    $.each(key, function(h, shades) {
        var w = 816;
        $.each(shades, function(i, k) {
            var p = paper.popup(0, 0, k[1]).update(w+2, h, 2).hide()
                .hover(function(){ p.toFront().show(); },
                    function(){ p.hide(); });
            paper.rect(w, h, 4, 15).attr({ fill: k[0], stroke: 'none' })
                .hover(function() { p.toFront().show(); },
                    function() { p.hide(); });
            w += 5;
        });
    });
    paper.text(1050, 176, "(tours in different shades)").attr(fff).attr({ 'font-size': '10px' });

    var zoomed = {
        'stroke': 'black',
        'stroke-opacity': 0.2,
        'fill': 'black',
        'fill-opacity': 0.2
    };
    // Stratford map
    paper.text(maps.stratford.x+maps.stratford.w+16, maps.stratford.y+maps.stratford.h-104, "Stratford-upon-Avon").transform("R90").attr({ 'font-family': font, 'font-size': '24px' });
    RSC.Rect(paper, maps.stratford, 0).attr({ stroke: 'none' }).glow({ });
    RSC.Rect(paper, maps.stratfordOnUK).attr({ 'stroke': 'none', 'fill': 'black', 'fill-opacity': 0.25 });
    paper.path("M" + (maps.stratford.x-1)+','+(maps.stratford.y+maps.stratford.h+1)+" " + (maps.stratfordOnUK.x) + ',' + (maps.stratfordOnUK.y+maps.stratfordOnUK.h)).attr(zoomed);
    paper.path("M" + (maps.stratford.x-1)+','+(maps.stratford.y-1)+" " + (maps.stratfordOnUK.x) + ',' + (maps.stratfordOnUK.y) + ' ' + (maps.stratfordOnUK.x) + ',' + (maps.stratfordOnUK.y + maps.stratfordOnUK.h) + ' ' + (maps.stratfordOnUK.x+maps.stratfordOnUK.w) + ',' + (maps.stratfordOnUK.y+maps.stratfordOnUK.h) + " " +(maps.stratford.x+maps.stratford.w+1)+','+(maps.stratford.y+maps.stratford.h+1)).attr(zoomed);
    paper.image('i/stratford15z.png', maps.stratford.x, maps.stratford.y, maps.stratford.w, maps.stratford.h);

    // London map
    paper.text(maps.london.x+maps.london.w-40, maps.london.y-16, "London").attr({ 'font-family': font, 'font-size': '24px' });
    RSC.Rect(paper, maps.london, 0).attr({ stroke: 'none' }).glow({});
    RSC.Rect(paper, maps.londonOnUK).attr({ 'stroke': 'none', 'fill': 'black', 'fill-opacity': 0.25 });
    paper.path("M" + (maps.london.x+maps.london.w+1)+','+(maps.london.y+maps.london.h+1)+" " + (maps.londonOnUK.x+maps.londonOnUK.w) + ',' + (maps.londonOnUK.y+maps.londonOnUK.h)).attr(zoomed);
    paper.path("M" + (maps.london.x+maps.london.w+1)+','+(maps.london.y-1)+" " + (maps.londonOnUK.x+maps.londonOnUK.w) + ',' + (maps.londonOnUK.y)).attr(zoomed);
    paper.path("M" + (maps.london.x-1)+','+(maps.london.y-1)+" " + (maps.londonOnUK.x) + ',' + (maps.londonOnUK.y) + " " + (maps.londonOnUK.x) + ',' + (maps.londonOnUK.y+maps.londonOnUK.h)+ " " + (maps.londonOnUK.x) + ',' + (maps.londonOnUK.y+maps.londonOnUK.h) + " " +(maps.london.x-1)+','+(maps.london.y+maps.london.h+1)).attr(zoomed);
    paper.image('i/london-watercolour-cut.png', maps.london.x, maps.london.y, maps.london.w, maps.london.h);

    // Locations
    $.each(RSC.Locations, function(i, v) {
        var map = maps[v.map],
            cx = map.x + v.x * map.w,
            cy = map.y + v.y * map.h,
            v = $.extend(v, { cx: cx, cy: cy });
        v.popup = paper.popup(cx, cy, i).update(cx, cy, v.label_dir).hide()
            .hover(function(){ v.popup.toFront().show(); },
                function(){ v.popup.hide(); });
        var c = paper.circle(cx, cy, 5).attr({ fill: 'black', stroke: 'none' })
            .hover(function() { v.popup.toFront().show(); },
                function() { v.popup.hide(); });
        if (v.transparent) {
            c.attr({ opacity: 0 });
        }
        if (v.surrogate) {
            var real_cx = map.x + v.surrogate.x * map.w,
                real_cy = map.y + v.surrogate.y * map.h;
            paper.path("M" + cx + "," + cy + " " + real_cx + "," + real_cy);
            paper.circle(real_cx, real_cy, 2).attr({ fill: "black", stroke: "none" });
        }
        if (v.arrow) {
            paper.arrow(cx, cy, v.arrow.x, v.arrow.y, 3);
        }
    });

    RSC.clocks = [];
    $.each(RSC.Events, function(i, e) {
        var loc;
        var out = [];
        if (!$.isArray(e)) { e = [ e ]; }
        $.each(e, function(i, e) {
            loc = RSC.Locations[e.location];
            var name = [ e.title, RSC.duration(e.start, e.end), e.location ].join('\n')
            out.push({ start: e.start, end: e.end, colour: e.col, name: name, label_dir: e.label_dir });
        });
        var clock = new RSC.Clock(paper, loc.cx, loc.cy, RSC.Sizes[loc.size], out);
        RSC.clocks.push(clock);
    });

    $('select#date').change();
    $('#handle_date').focus();
});


return RSC;

})(RSC || {});

