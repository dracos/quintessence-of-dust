/* rsc.rect.js
 * This utility module creates a rectangle from an (x,y,w,h) object, optionally with a buffer.
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

