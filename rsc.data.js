/* rsc.data.js
 * This module includes the data of all the WSF events.
 */

var RSC = (function(RSC) {

RSC.Locations = {

    // Stratford
    'Royal Shakespeare Theatre': { map: 'stratford', x:0.80, y:0.28, label_dir: 3 },
    'Courtyard Theatre': { map: 'stratford', x:0.20, y:0.75, label_dir: 3 },
    'Swan Theatre': { map: 'stratford', x:0.74, y:0.37, label_dir: 0 },
    'Swan Room': { map: 'stratford', x:0.69, y:0.33, },
    'PACCAR Room': { map: 'stratford', x:0.75, y:0.23, label_dir: 2 },

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
    //'Hangar 858': { map: 'uk', x:0.5, y:0.83, label_dir: 3 },
    //'National Eisteddfod of Wales': { map: 'uk', x:0.495, y:0.825 },
    'Hangar 858 / National Eisteddfod of Wales': { map: 'uk', x:0.4975, y:0.8275, label_dir: 3 },
    'The Vaynol Estate': { map: 'uk', x:0.45, y:0.67, label_dir: 2 },
    'United Counties Showground': { map: 'uk', x:0.45, y:0.80, label_dir: 2 },

    // Elsewhere
    'Birmingham Repertory Theatre': { map: 'uk', x:0.62, y:0.73, label_dir: 2 },
    'Malthouse Estate Warehouse, Brighton': { map: 'uk', x:0.73, y:0.89 },
    'Newcastle': { map: 'uk', x:0.65, y: 0.5 },
    'Edinburgh': { map: 'uk', x:0.53, y: 0.405, label_dir: 3 },
};

RSC.Events = [
    // Stratford
    [
        { title: 'Twelfth Night', location: 'Royal Shakespeare Theatre', start: '2012-03-08', end: '2012-05-15' },
        { title: 'The Comedy of Errors', location: 'Royal Shakespeare Theatre', start: '2012-03-16', end: '2012-05-14' },
        { title: 'The Tempest', location: 'Royal Shakespeare Theatre', start: '2012-03-30', end: '2012-05-19' }
    ],
    [
        { title: 'Richard III', location: 'Swan Theatre', start: '2012-03-22', end: '2012-09-15' },
        { title: 'King John', location: 'Swan Theatre', start: '2012-04-06', end: '2012-09-15' },
        { title: 'Romeo and Juliet in Baghdad', location: 'Swan Theatre', start: '2012-04-26', end: '2012-05-05' },
        { title: 'Young Company Building Takeover', location: 'Swan Theatre', start: '2012-05-04', end: '2012-05-04' },
        { title: 'I, Cinna (The Poet)', location: 'Swan Theatre', start: '2012-06-13', end: '2012-07-06' },
        { title: 'A Solider in Every Son - The Rise of the Aztecs', location: 'Swan Theatre', start: '2012-06-29', end: '2012-07-28' },
        { title: 'The Adventure of the Missing Manuscript', location: 'Swan Room', start: '2012-07-21', end: '2012-09-02' },
        { title: 'Henry V', location: 'Swan Theatre', start: '2012-07-24', end: '2012-07-24' },
        { title: 'Troilus and Cressida', location: 'Swan Theatre', start: '2012-08-03', end: '2012-08-18' },
    ],
    { title: 'Of All the People in All the World, Stan’s Café', location: 'PACCAR Room', start: '2012-04-14', end: '2012-07-21' },
    // Living Walls?
    { title: 'Two Roses for Richard III', location: 'Courtyard Theatre', start: '2012-05-07', end: '2012-05-12' },
    { title: 'In A Pickle', location: 'Swan Room', start: '2012-05-23', end: '2012-06-17' },
    [
        { title: 'Julius Caesar', location: 'Royal Shakespeare Theatre', start: '2012-05-28', end: '2012-07-07' },
        { title: 'Poor Trash of Venice', location: 'Royal Shakespeare Theatre', start: '2012-07-03', end: '2012-07-04' },
    ],
    [
        { title: 'Twelfth Night', location: 'Royal Shakespeare Theatre', start: '2012-07-12', end: '2012-10-06' },
        { title: 'The Tempest', location: 'Royal Shakespeare Theatre', start: '2012-07-13', end: '2012-10-07' },
        { title: 'The Comedy of Errors', location: 'Royal Shakespeare Theatre', start: '2012-07-16', end: '2012-10-06' },
        { title: "A Midsummer Night's Dream (As You Like It)", location: 'Royal Shakespeare Theatre', start: '2012-08-10', end: '2012-08-18' },
    ],
    { title: 'Pilot Night', location: 'Courtyard Theatre', start: '2012-07-12', end: '2012-07-12' },
    { title: 'Much Ado About Nothing', location: 'Courtyard Theatre', start: '2012-07-26', end: '2012-09-15' },
    { title: 'A Tender Thing', location: 'Swan Theatre', start: '2012-09-27', end: '2012-10-20' },
    { title: 'Pericles', location: 'Courtyard Theatre', start: '2012-10-05', end: '2012-10-07' },

    // London
    { title: 'Globe to Globe', location: 'Globe', start: '2012-04-21', end: '2012-06-09' },
    { title: 'Falstaff', location: 'Royal Opera House', start: '2012-05-15', end: '2012-05-30' },
    { title: 'Two Roses for Richard III', location: 'Roundhouse', start: '2012-05-18', end: '2012-05-23' },
    { title: 'Cymbeline', location: 'Barbican', start: '2012-05-29', end: '2012-06-02' },
    [
        { title: 'The Comedy of Errors', location: 'Roundhouse', start: '2012-06-01', end: '2012-07-04' },
        { title: 'Twelfth Night', location: 'Roundhouse', start: '2012-06-05', end: '2012-07-05' },
        { title: 'The Tempest', location: 'Roundhouse', start: '2012-06-09', end: '2012-07-05' },
        { title: 'The Dark Side of Love', location: 'Roundhouse', start: '2012-06-26', end: '2012-07-08' }
    ],
    { title: 'The Rest is Silence', location: 'Riverside Studios', start: '2012-06-12', end: '2012-06-23' },
    { title: 'In a Pickle', location: 'Stratford Circus', start: '2012-06-19', end: '2012-06-23' },
    { title: 'Romeo and Juliet in Baghdad', location: 'Riverside Studios', start: '2012-06-28', end: '2012-06-30' },
    { title: 'Macbeth : Leila and Ben - A Bloody History', location: 'Riverside Studios', start: '2012-07-04', end: '2012-07-07' },
    { title: 'Timon of Athens', location: 'National Theatre', start: '2012-07-10', end:  '2012-09-09' },
    { title: 'Otello', location: 'Royal Opera House', start: '2012-07-12', end: '2012-07-24' },
    { title: 'Desdemona', location: 'Barbican', start: '2012-07-19', end: '2012-07-20' },
    { title: 'Much Ado About Nothing', location: 'Noël Coward Theatre', start: '2012-09-24', end: '2012-10-27' },
    { title: 'Julius Caesar', location: 'Noël Coward Theatre', start: '2012-08-08', end: '2012-09-15' },
    { title: 'Cesario', location: 'National Theatre', start: '2012-08-22', end: '2012-08-25' },
    { title: 'Troilus and Cressida', location: 'Riverside Studios', start: '2012-08-23', end: '2012-09-08' },
    { title: 'King Lear', location: 'Almeida Theatre', start: '2012-08-31', end: '2012-11-03' },
    { title: 'Forests', location: 'Barbican', start: '2012-11-06', end: '2012-11-10' },
    // Shakespeare - Staging the World

    // Brighton
    { title: 'The Rest is Silence', location: 'Malthouse Estate Warehouse, Brighton', start: '2012-05-02', end: '2012-06-08' },

    // Newcastle
    [
        { title: 'The Rest is Silence', location: 'Newcastle', start: '2012-06-26', end: '2012-06-30', sublocation: 'Northern Stage' },
        { title: 'In A Pickle', location: 'Newcastle', start: '2012-06-27', end: '2012-06-30', sublocation: 'Northern Stage' }
    ],
    { title: 'West Side Story', location: 'Newcastle', start: '2012-07-04', end: '2012-07-07', sublocation: 'Sage Gateshead' },
    { title: 'Macbeth : Leila and Ben - A Bloody History', location: 'Newcastle', start: '2012-07-12', end: '2012-07-14', sublocation: 'Northern Stage' },
    { title: 'Julius Caesar', location: 'Newcastle', start: '2012-07-19', end: '2012-07-28', sublocation: 'Theatre Royal' },

    // Edinburgh
    { title: '2008 : Macbeth', location: 'Edinburgh', start: '2012-08-11', end: '2012-08-18', sublocation: 'Royal Highland Centre' },
    [
        { title: 'The Rape of Lucrece', location: 'Edinburgh', start: '2012-08-22', end: '2012-08-26', sublocation: 'Royal Lyceum Theatre' },
        { title: "A Midsummer Night's Dream (As You Like It)", location: 'Edinburgh', start: '2012-08-24', end: '2012-08-26', sublocation: "King's Theatre" }
    ],

    // Birmingham
    { title: 'Forests', location: 'Birmingham Repertory Theatre', start: '2012-08-31', end: '2012-09-15' },

    // Wales
    [
        { title: 'Y Storm', location: 'Hangar 858 / National Eisteddfod of Wales', start: '2012-08-07', end: '2012-08-11' },
        { title: 'Coriolan/us', location: 'Hangar 858 / National Eisteddfod of Wales', start: '2012-08-09', end: '2012-08-18' }
    ],
    { title: 'Y Storm', location: 'United Counties Showground', start: '2012-09-18', end: '2012-09-21' },
    { title: 'Y Storm', location: 'The Vaynol Estate', start: '2012-10-02', end: '2012-10-06' },
];

return RSC;

})(RSC || {});
