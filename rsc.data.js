/* rsc.data.js
 * This module includes the data of all the WSF events.
 */

var RSC = (function(RSC) {

RSC.Sizes = {
    'big': 30,
    'medium': 20,
    'small': 10
};

var t = {
    comedy: '#006600',
    history: '#990000',
    tragedy: '#000099',
    problem: '#999900',
    other: '#990099'
}

RSC.Locations = {

    // Stratford
    'Royal Shakespeare Theatre': {
        map: 'stratford', x:0.79, y:0.33, label_dir: 3, size: 'big',
        surrogate: { map: 'stratford', x:0.69, y:0.43 }
    },
    'Courtyard Theatre': { map: 'stratford', x:0.10, y:0.89, label_dir: 3, size: 'medium' },
    'Swan Theatre': {
        map: 'stratford', x:0.73, y:0.62, label_dir: 0, size: 'medium',
        surrogate: { map: 'stratford', x:0.63, y:0.52 }
    },
    'Swan Room': {
        map: 'stratford', x:0.48, y:0.58, size: 'small',
        surrogate: { map: 'stratford', x:0.58, y:0.48 }
    },
    'PACCAR Room': {
        map: 'stratford', x:0.54, y:0.28, label_dir: 2, size: 'small',
        surrogate: { map: 'stratford', x:0.64, y:0.38 }
    },

    // London
    'Roundhouse': { map: 'london', x:0.37, y: (0.14-0.1)*10/6, size: 'big' },
    'Shakespeare\u2019s Globe': { map: 'london', x:0.58, y: (0.46-0.1)*10/6, label_dir: 3, size: 'big' },
    'National Theatre': { map: 'london', x:0.52, y: (0.47-0.1)*10/6, label_dir: 0, size: 'big' },
    'Almeida Theatre': { map: 'london', x:0.55, y: (0.17-0.1)*10/6, size: 'medium' },
    'Barbican': { map: 'london', x:0.59, y: (0.355-0.1)*10/6, label_dir: 3, size: 'medium' },
    'Riverside Studios': { map: 'london', x:0.08, y: (0.64-0.1)*10/6, label_dir: 2, size: 'small' },
    'Stratford Circus': { map: 'london', x:0.96, y: (0.14-0.1)*10/6, size: 'small' },
    'Noël Coward Theatre': { map: 'london', x:0.47, y: (0.44-0.1)*10/6, size: 'medium' },
    'Royal Opera House': { map: 'london', x:0.485, y: (0.41-0.1)*10/6, label_dir: 2, size: 'big' },

    // Wales
    'Hangar 858, Vale of Glamorgan': {
        map: 'uk', x:0.38, y:0.88, label_dir: 3, size: 'medium',
        surrogate: { map: 'uk', x:0.5, y:0.83 }
    },
    'National Eisteddfod of Wales, Vale of Glamorgan': {
        map: 'uk', x:0.28, y:0.86, size: 'big',
        surrogate: { map: 'uk', x:0.495, y:0.825 }
    },
    'The Vaynol Estate, Gwynedd': { map: 'uk', x:0.45, y:0.67, label_dir: 2, size: 'medium' },
    'United Counties Showground, Carmarthen': { map: 'uk', x:0.45, y:0.80, label_dir: 2, size: 'big' },

    // Elsewhere
    'Birmingham Repertory Theatre\nat the Old Rep Theatre': { map: 'uk', x:0.62, y:0.73, label_dir: 2, size: 'medium' },
    'Malthouse Estate Warehouse, Brighton': { map: 'uk', x:0.73, y:0.89, size: 'small' },

    //'Newcastle': { map: 'uk', x:0.65, y: 0.5 },
    'Northern Stage, Newcastle': {
        map: 'uk', x: 0.73, y: 0.43, label_dir: 2, size: 'big',
        surrogate: { map: 'uk', x: 0.64, y: 0.5 }
    },
    'Theatre Royal, Newcastle': {
        map: 'uk', x: 0.76, y: 0.485, label_dir: 1, size: 'medium',
        surrogate: { map: 'uk', x: 0.64, y: 0.5 }
    },
    'Sage Gateshead': {
        map: 'uk', x: 0.75, y: 0.54, label_dir: 0, size: 'medium',
        surrogate: { map: 'uk', x: 0.64, y: 0.5 }
    },

    //'Edinburgh': { map: 'uk', x:0.53, y: 0.405, label_dir: 3 },
    'Royal Highland Centre, Edinburgh': {
        map: 'uk', x:0.66, y: 0.28, label_dir: 1, size: 'medium',
        surrogate: { map: 'uk', x:0.525, y: 0.405 }
    },
    'Royal Lyceum Theatre, Edinburgh': {
        map: 'uk', x:0.75, y: 0.28, label_dir: 2, size: 'medium',
        surrogate:{ map: 'uk', x:0.53, y: 0.405 }
    },
    'King\u2019s Theatre, Edinburgh': {
        map: 'uk', x:0.70, y: 0.36, label_dir: 3, size: 'big',
        surrogate: { map: 'uk', x:0.53, y: 0.405 }
    }
};

RSC.Events = [
    // Stratford
    [
        { title: 'Twelfth Night', location: 'Royal Shakespeare Theatre', start: '2012-03-08', end: '2012-05-15', col: t.comedy },
        { title: 'The Comedy of Errors', location: 'Royal Shakespeare Theatre', start: '2012-03-16', end: '2012-05-14', col: t.comedy },
        { title: 'The Tempest', location: 'Royal Shakespeare Theatre', start: '2012-03-30', end: '2012-05-19', col: t.problem }
    ],
    [
        { title: 'Richard III', location: 'Swan Theatre', start: '2012-03-22', end: '2012-04-20', col: t.history },
        { title: 'King John', location: 'Swan Theatre', start: '2012-04-06', end: '2012-04-21', col: t.history }
    ],
    [
        { title: 'Romeo and Juliet in Baghdad', location: 'Swan Theatre', start: '2012-04-26', end: '2012-05-05', col: t.tragedy },
        { title: 'Young Company Building Takeover', location: 'Swan Theatre', start: '2012-05-04', end: '2012-05-04', col: t.other }
    ],
    [
        { title: 'King John', location: 'Swan Theatre', start: '2012-05-08', end: '2012-06-23', col: t.history },
        { title: 'Richard III', location: 'Swan Theatre', start: '2012-05-10', end: '2012-06-22', col: t.history },
        { title: 'I, Cinna (The Poet)', location: 'Swan Theatre', start: '2012-06-13', end: '2012-06-20', col: t.other }
    ],
    [
        { title: 'A Solider in Every Son - The Rise of the Aztecs', location: 'Swan Theatre', start: '2012-06-29', end: '2012-07-28', col: t.other },
        { title: 'I, Cinna (The Poet)', location: 'Swan Theatre', start: '2012-07-06', end: '2012-07-06', col: t.other },
        { title: 'Richard III', location: 'Swan Theatre', start: '2012-07-09', end: '2012-07-24', col: t.history },
        { title: 'King John', location: 'Swan Theatre', start: '2012-07-12', end: '2012-07-27', col: t.history },
        { title: 'Henry V', location: 'Swan Theatre', start: '2012-07-24', end: '2012-07-24', col: t.history }
    ],
    { title: 'Troilus and Cressida', location: 'Swan Theatre', start: '2012-08-03', end: '2012-08-18', col: t.tragedy },
    [
        { title: 'Richard III', location: 'Swan Theatre', start: '2012-08-21', end: '2012-09-15', col: t.history },
        { title: 'King John', location: 'Swan Theatre', start: '2012-08-22', end: '2012-09-15', col: t.history }
    ],
    { title: 'A Tender Thing', location: 'Swan Theatre', start: '2012-09-27', end: '2012-10-20', col: t.other },

    { title: 'Of All the People in All the World, Stan’s Café', location: 'PACCAR Room', start: '2012-04-14', end: '2012-07-21', col: t.other },
    // Living Walls?
    { title: 'Two Roses for Richard III', location: 'Courtyard Theatre', start: '2012-05-07', end: '2012-05-12', col: t.other },
    { title: 'In A Pickle', location: 'Swan Room', start: '2012-05-23', end: '2012-06-17', col: t.problem },
    { title: 'The Adventure of the Missing Manuscript', location: 'Swan Room', start: '2012-07-21', end: '2012-09-02', col: t.other },
    [
        { title: 'Julius Caesar', location: 'Royal Shakespeare Theatre', start: '2012-05-28', end: '2012-07-07', col: t.tragedy },
        { title: 'Poor Trash of Venice', location: 'Royal Shakespeare Theatre', start: '2012-07-03', end: '2012-07-04', col: t.other }
    ],
    [
        { title: 'Twelfth Night', location: 'Royal Shakespeare Theatre', start: '2012-07-12', end: '2012-10-06', col: t.comedy },
        { title: 'The Tempest', location: 'Royal Shakespeare Theatre', start: '2012-07-13', end: '2012-10-07', col: t.problem },
        { title: 'The Comedy of Errors', location: 'Royal Shakespeare Theatre', start: '2012-07-16', end: '2012-10-06', col: t.comedy },
        { title: "A Midsummer Night\u2019s Dream (As You Like It)", location: 'Royal Shakespeare Theatre', start: '2012-08-10', end: '2012-08-18', col: t.comedy }
    ],
    { title: 'Pilot Night', location: 'Courtyard Theatre', start: '2012-07-12', end: '2012-07-12', col: t.other },
    { title: 'Much Ado About Nothing', location: 'Courtyard Theatre', start: '2012-07-26', end: '2012-09-15', col: t.comedy },
    { title: 'Pericles', location: 'Courtyard Theatre', start: '2012-10-05', end: '2012-10-07', col: t.problem },

    // London
    { title: 'Globe to Globe', location: 'Shakespeare\u2019s Globe', start: '2012-04-21', end: '2012-06-09', col: t.other },
    { title: 'Falstaff', location: 'Royal Opera House', start: '2012-05-15', end: '2012-05-30', col: t.other },
    { title: 'Two Roses for Richard III', location: 'Roundhouse', start: '2012-05-18', end: '2012-05-23', col: t.other },
    { title: 'Cymbeline', location: 'Barbican', start: '2012-05-29', end: '2012-06-02', col: t.other },
    [
        { title: 'The Comedy of Errors', location: 'Roundhouse', start: '2012-06-01', end: '2012-07-04', col: t.comedy },
        { title: 'Twelfth Night', location: 'Roundhouse', start: '2012-06-05', end: '2012-07-05', col: t.comedy },
        { title: 'The Tempest', location: 'Roundhouse', start: '2012-06-09', end: '2012-07-05', col: t.problem },
        { title: 'The Dark Side of Love', location: 'Roundhouse', start: '2012-06-26', end: '2012-07-08', col: t.other }
    ],
    { title: 'The Rest is Silence', location: 'Riverside Studios', start: '2012-06-12', end: '2012-06-23', col: t.other },
    { title: 'In a Pickle', location: 'Stratford Circus', start: '2012-06-19', end: '2012-06-23', col: t.other },
    { title: 'Romeo and Juliet in Baghdad', location: 'Riverside Studios', start: '2012-06-28', end: '2012-06-30', col: t.tragedy },
    { title: 'Macbeth : Leila and Ben - A Bloody History', location: 'Riverside Studios', start: '2012-07-04', end: '2012-07-07', col: t.tragedy },
    [
        { title: 'Timon of Athens', location: 'National Theatre', start: '2012-07-10', end:  '2012-09-09', col: t.tragedy },
        { title: 'Cesario', location: 'National Theatre', start: '2012-08-22', end: '2012-08-25', col: t.other }
    ],
    { title: 'Otello', location: 'Royal Opera House', start: '2012-07-12', end: '2012-07-24', col: t.tragedy },
    { title: 'Desdemona', location: 'Barbican', start: '2012-07-19', end: '2012-07-20', col: t.other },
    { title: 'Julius Caesar', location: 'Noël Coward Theatre', start: '2012-08-08', end: '2012-09-15', col: t.tragedy },
    { title: 'Much Ado About Nothing', location: 'Noël Coward Theatre', start: '2012-09-24', end: '2012-10-27', col: t.comedy },
    { title: 'Troilus and Cressida', location: 'Riverside Studios', start: '2012-08-23', end: '2012-09-08', col: t.tragedy },
    { title: 'King Lear', location: 'Almeida Theatre', start: '2012-08-31', end: '2012-11-03', col: t.tragedy },
    { title: 'Forests', location: 'Barbican', start: '2012-11-06', end: '2012-11-10', col: t.other },
    // Shakespeare - Staging the World

    // Brighton
    { title: 'The Rest is Silence', location: 'Malthouse Estate Warehouse, Brighton', start: '2012-05-02', end: '2012-06-08', col: t.other },

    // Newcastle
    [
        { title: 'The Rest is Silence', location: 'Northern Stage, Newcastle', start: '2012-06-26', end: '2012-06-30', col: t.other },
        { title: 'In A Pickle', location: 'Northern Stage, Newcastle', start: '2012-06-27', end: '2012-06-30', col: t.other }
    ],
    { title: 'West Side Story', location: 'Sage Gateshead', start: '2012-07-04', end: '2012-07-07', col: t.tragedy },
    { title: 'Macbeth : Leila and Ben - A Bloody History', location: 'Northern Stage, Newcastle', start: '2012-07-12', end: '2012-07-14', col: t.tragedy },
    { title: 'Julius Caesar', location: 'Theatre Royal, Newcastle', start: '2012-07-19', end: '2012-07-28', col: t.tragedy },

    // Edinburgh
    { title: '2008 : Macbeth', location: 'Royal Highland Centre, Edinburgh', start: '2012-08-11', end: '2012-08-18', col: t.tragedy },
    { title: 'The Rape of Lucrece', location: 'Royal Lyceum Theatre, Edinburgh', start: '2012-08-22', end: '2012-08-26', col: t.other },
    { title: "A Midsummer Night\u2019s Dream (As You Like It)", location: 'King\u2019s Theatre, Edinburgh', start: '2012-08-24', end: '2012-08-26', col: t.comedy },

    // Birmingham
    { title: 'Forests', location: 'Birmingham Repertory Theatre\nat the Old Rep Theatre', start: '2012-08-31', end: '2012-09-15', col: t.other },

    // Wales
    { title: 'Y Storm', location: 'National Eisteddfod of Wales, Vale of Glamorgan', start: '2012-08-07', end: '2012-08-11', col: t.problem },
    { title: 'Coriolan/us', location: 'Hangar 858, Vale of Glamorgan', start: '2012-08-09', end: '2012-08-18', col: t.tragedy },
    { title: 'Y Storm', location: 'United Counties Showground, Carmarthen', start: '2012-09-18', end: '2012-09-21', col: t.problem },
    { title: 'Y Storm', location: 'The Vaynol Estate, Gwynedd', start: '2012-10-02', end: '2012-10-06', col: t.problem }
];

return RSC;

})(RSC || {});
