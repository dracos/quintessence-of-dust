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
    paper.text(800, 100, "A day by day overview of the productions of the\nWorld Shakespeare Festival. Watch the animation\nover the course of the festival, or manually pick\nthe date to see what productions were on where.").attr(fff);
    paper.text(1180, 166, "More information").attr(fff).attr({ href: 'about.html', fill: '#0000ff', 'text-anchor': 'end' }).hover(function() { this.attr({ fill: '#ff0000' }); }, function() { this.attr({ fill: '#0000ff' }); });

    var key = [
        [ 800, 162, '#ff0000', 'RSC', 'A Tender Thing, Rape of Lucrece,\nPericles, King John, Richard III' ],
        [ 800, 182, '#0000ff', 'UK', 'King Lear, Desdemona, Missing Manuscript,\nTimon of Athens, Coriolan/us, Pilot Night,\nOtello, Falstaff, The Dark Side of Love,\nWest Side Story, Stan\u2019s Cafe, I Cinna (The Poet)' ],

        [ 800, 202, '#6633ff', 'International', 'Globe to Globe, Cymbeline,\nA Soldier in Every Son, 2008:Macbeth' ],
        [ 800, 222, '#ffcc00', 'Young people', 'Young Company Building Takeover, Henry V,\nPoor Trash of Venice, Cesario' ]
    ];
    $.each(key, function(i, k) {
        paper.text(k[0]+46, k[1]+8, k[3]).attr(fff).attr({ 'font-size': '12px' });
        var r = paper.rect(k[0], k[1], 15, 15).attr({ fill: k[2], stroke: 'none' });
        if (k[4]) {
            var p = paper.popup(0, 0, k[4]).update(k[0]+7, k[1], 2).hide()
                .hover(function(){ p.toFront().show(); }, function(){ p.hide(); });
            r.hover(function() { p.toFront().show(); }, function() { p.hide(); });
        }
    });
    key = {
        162: [
            [ '#cc0000', 'Shipwreck Trilogy \u2013 Twelfth Night,\nThe Comedy of Errors, The Tempest' ],
            [ '#990000', 'Much Ado About Nothing' ],
            [ '#660000', 'Julius Caesar' ],
        ],
        182: [
            [ '#0000dd', 'In A Pickle' ],
            [ '#0000bb', 'Y Storm (The Tempest)' ],
            [ '#000099', 'Forests' ],
            [ '#000077', 'The Rest Is Silence' ],
        ],
        202: [
            [ '#6633dd', 'Macbeth : Leila and Ben \u2013 A Bloody History' ],
            [ '#6633bb', 'Two Roses for Richard III' ],
            [ '#663399', 'A Midsummer Night\u2019s Dream (As You Like It)' ],
            [ '#663377', 'Romeo and Juliet in Baghdad' ],
            [ '#663355', 'Troilus and Cressida' ]
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
    paper.text(800, 250, "(tours in different shades)").attr(fff).attr({ 'font-size': '10px' });

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
        if (i.substring(0,1) == '.') { return; }
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

