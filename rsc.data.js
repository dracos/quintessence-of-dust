/* rsc.data.js
 * This module includes the data of all the WSF events.
 */

var RSC = (function(RSC) {

RSC.Locations = {

    // Stratford
    'Royal Shakespeare Theatre': { map: 'stratford', x:0.88, y:0.2, label_dir: 3 },
    'Courtyard Theatre': { map: 'stratford', x:0.18, y:0.85, label_dir: 3 },
    'Swan Theatre': { map: 'stratford', x:0.79, y:0.33, label_dir: 0 },
    'Swan Room': { map: 'stratford', x:0.73, y:0.28, },
    'Paccar': { map: 'stratford', x:0.79, y:0.13, label_dir: 2 },

    // London
    'Roundhouse': { map: 'london', x:0.37, y: (0.14-0.1)*10/6 },
    'Globe': { map: 'london', x:0.58, y: (0.46-0.1)*10/6, label_dir: 3 },
    'National Theatre': { map: 'london', x:0.52, y: (0.47-0.1)*10/6, label_dir: 0 },
    'Almeida Theatre': { map: 'london', x:0.55, y: (0.17-0.1)*10/6 },
    'Barbican': { map: 'london', x:0.59, y: (0.355-0.1)*10/6, label_dir: 3 },
    'Riverside Studios': { map: 'london', x:0.08, y: (0.64-0.1)*10/6, label_dir: 2 },
    'Stratford Circus': { map: 'london', x:0.96, y: (0.14-0.1)*10/6 },
    'Noël Coward Theatre': { map: 'london', x:0.47, y: (0.44-0.1)*10/6 },
    'Royal Opera House': { map: 'london', x:0.485, y: (0.41-0.1)*10/6, label_dir: 2 },

    // Wales
    'Hangar 858': { map: 'uk', x:0.5, y:0.83, label_dir: 3 },
    'The Vaynol Estate': { map: 'uk', x:0.45, y:0.67, label_dir: 2 },
    'United Counties Showground': { map: 'uk', x:0.45, y:0.80, label_dir: 2 },
    'National Eisteddfod of Wales': { map: 'uk', x:0.495, y:0.825 },

    // Elsewhere
    'Birmingham Repertory Theatre': { map: 'uk', x:0.62, y:0.73, label_dir: 2 },
    'Malthouse Estate Warehouse, Brighton': { map: 'uk', x:0.73, y:0.89 },

    'Newcastle': { map: 'uk', x:0.65, y: 0.5 },
    //'Northern Stage': { map: 'uk', x:0.5, y: 0.5 },
    //'Sage Gateshead': { map: 'uk', x:0.5, y: 0.5 },
    //'Newcastle Theatre Royal': { map: 'uk', x:0.5, y: 0.5 },

    'Edinburgh': { map: 'uk', x:0.53, y: 0.405, label_dir: 3 },
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