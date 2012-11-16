/* rsc.clock.js
 * This module creates a circular blob containing one or more pie-chart like clocks within it.
 */

var RSC = (function(RSC) {

RSC.Rect = function(paper, o, buffer) {
    if (!buffer) {
        buffer = 0;
    }
    return paper.rect(o.x - buffer, o.y - buffer, o.w + 2 * buffer, o.h + 2 * buffer);
};

return RSC;

})(RSC || {});

