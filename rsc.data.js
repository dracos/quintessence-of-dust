/* rsc.data.js
 * This module includes the data of all the WSF events.
 */

var RSC = (function(RSC) {

RSC.Locations = {

    // Stratford
    'RST': { map: 'stratford', x:0.88, y:0.2, colour:'#c00', size:20 },
    'Courtyard': { map: 'stratford', x:0.18, y:0.85, colour:'#f90', size:10 },
    'Swan': { map: 'stratford', x:0.79, y:0.33, colour:'black' },
    'Swan Room': { map: 'stratford', x:0.73, y:0.28, colour:'black' },
    'Paccar': { map: 'stratford', x:0.79, y:0.13, colour:'#090', size:5 },

    // London
    'Roundhouse': { map: 'london', x:0.37, y: 0.14 },
    'Globe': { map: 'london', x:0.58, y: 0.46 },
    'National Theatre': { map: 'london', x:0.52, y: 0.47 },
    'Almeida': { map: 'london', x:0.55, y: 0.17 },
    'Barbican': { map: 'london', x:0.59, y: 0.355 },
    'Riverside': { map: 'london', x:0.08, y: 0.64 },
    'Stratford Circus': { map: 'london', x:0.96, y: 0.14 },
    'Noel Coward': { map: 'london', x:0.47, y: 0.44 },
    'Royal Opera House': { map: 'london', x:0.485, y: 0.41 },

    // Wales
    'Hangar 858': { map: 'uk', x:0.5, y:0.83 },
    'The Vaynol Estate': { map: 'uk', x:0.45, y:0.67 },
    'United Counties Showground': { map: 'uk', x:0.45, y:0.80 },
    'National Eisteddfod of Wales': { map: 'uk', x:0.495, y:0.825 },

    // Elsewhere
    'Birmingham Rep': { map: 'uk', x:0.62, y:0.73 },
    'Malthouse Estate Warehouse, Brighton': { map: 'uk', x:0.73, y:0.89 },

    'Newcastle': { map: 'uk', x:0.65, y: 0.5 },
    //'Northern Stage': { map: 'uk', x:0.5, y: 0.5 },
    //'Sage Gateshead': { map: 'uk', x:0.5, y: 0.5 },
    //'Newcastle Theatre Royal': { map: 'uk', x:0.5, y: 0.5 },

    'Edinburgh': { map: 'uk', x:0.53, y: 0.405 },
    //'RHC': { map: 'uk', x:0.5, y:0.5 },
    //'KT': { map: 'uk', x:0.5, y:0.5 },
    //'RLT': { map: 'uk', x:0.5, y:0.5 },
};

RSC.Events = {
    'Twelfth Night': { location: 'RST', start: '2012-03-08', end: '2012-05-15' },
    'The Comedy of Errors': { location: 'RST', start: '2012-03-16', end: '2012-05-14' },
    'Richard III': { location: 'Swan', start: '2012-03-22', end: '2012-09-15' },
    'The Tempest': { location: 'RST', start: '2012-03-30', end: '2012-05-19' },
    'King John': { location: 'Swan', start: '2012-04-06', end: '2012-09-15' },
    'Of All the People in All the World, Stan’s Café': { location: 'Paccar', start: '2012-04-14', end: '2012-07-21' },
    'Romeo and Juliet in Baghdad': { location: 'Swan', start: '2012-04-26', end: '2012-05-05' },
    'The Rest is Silence': { location: 'Malthouse Estate Warehouse, Brighton', start: '2012-05-02', end: '2012-06-08' },
    'Two Roses for Richard III': { location: 'Courtyard', start: '2012-05-07', end: '2012-05-12' },
    'Falstaff': { location: 'Royal Opera House', start: '2012-05-15', end: '2012-05-30' },
    'In A Pickle': { location: 'Swan Room', start: '2012-05-23', end: '2012-06-17' },
    'Julius Caesar': { location: 'RST', start: '2012-05-28', end: '2012-07-07' },
    'Cymbeline': { location: 'Barbican', start: '2012-05-29', end: '2012-06-02' },
    'The Rest is Silence B': { location: 'Riverside', start: '2012-06-26', end: '2012-06-30' },
    'West Side Story': { location: 'Newcastle', start: '2012-07-04', end: '2012-07-07' },
    'Timon of Athens': { location: 'National Theatre', start: '2012-07-10', end:  '2012-09-09' },
    'Much Ado About Nothing': { location: 'Courtyard', start: '2012-05-08', end: '2012-08-08' },
    'Y Storm': { location: 'The Vaynol Estate', start: '2012-10-02', end: '2012-10-06' },
};

return RSC;

})(RSC || {});
