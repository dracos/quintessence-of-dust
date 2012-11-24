/* rsc.duration.js
 * This utility module prints a nice date range
 */

var RSC = (function(RSC) {

function ordinal(n) {
    var s = ["th","st","nd","rd"],
        v = n % 100;
    return n + ( s[(v-20)%10] || s[v] || s[0] );
}

var monthNames = [ "", "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];

// Year always 2012
RSC.duration = function(s, e) {
    s_m = parseInt(s.substring(5,7), 10);
    e_m = parseInt(e.substring(5,7), 10);
    s_d = parseInt(s.substring(8,10), 10);
    e_d = parseInt(e.substring(8,10), 10);

    if (s_d == e_d && s_m == e_m) {
        return ordinal(s_d) + ' ' + monthNames[s_m];
    }
    if (s_m == e_m) {
        return ordinal(s_d) + '\u2013' + ordinal(e_d) + ' ' + monthNames[s_m];
    }
    return ordinal(s_d) + ' ' + monthNames[s_m] + ' \u2013 ' + ordinal(e_d) + ' ' + monthNames[e_m];
};

return RSC;

})(RSC || {});

