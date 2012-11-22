/* rsc.data.js
 * This module includes the data of all the WSF events.
 */

var RSC = (function(RSC) {

RSC.Sizes = {
    'big': 30,
    'medium': 20,
    'small': 10
};

RSC.Types = {
    'comedy': '#006600',
    'history': '#990000',
    'tragedy': '#000099',
    'problem': '#999900',
    'other': '#990099'
}
RSC.Locations = {

    // Stratford
    '.Royal Shakespeare Theatre': { map: 'stratford', x:0.80, y:0.28 },
    '.Swan Theatre': { map: 'stratford', x:0.74, y:0.37 },
    '.Swan Room': { map: 'stratford', x:0.69, y:0.33 },
    '.PACCAR Room': { map: 'stratford', x:0.75, y:0.23 },
    'Royal Shakespeare Theatre': { map: 'stratford', x:0.90, y:0.18, label_dir: 3, size: 'big' },
    'Courtyard Theatre': { map: 'stratford', x:0.20, y:0.75, label_dir: 3, size: 'medium' },
    'Swan Theatre': { map: 'stratford', x:0.84, y:0.47, label_dir: 0, size: 'medium' },
    'Swan Room': { map: 'stratford', x:0.59, y:0.43, size: 'small' },
    'PACCAR Room': { map: 'stratford', x:0.65, y:0.13, label_dir: 2, size: 'small' },

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
    'Hangar 858': { map: 'uk', x:0.53, y:0.88, label_dir: 3, size: 'medium' },
    'National Eisteddfod of Wales': { map: 'uk', x:0.43, y:0.87, size: 'big' },
    '.Hangar 858': { map: 'uk', x:0.5, y:0.83 },
    '.National Eisteddfod of Wales': { map: 'uk', x:0.495, y:0.825 },
    'The Vaynol Estate': { map: 'uk', x:0.45, y:0.67, label_dir: 2, size: 'medium' },
    'United Counties Showground': { map: 'uk', x:0.45, y:0.80, label_dir: 2, size: 'big' },

    // Elsewhere
    'Birmingham Repertory Theatre': { map: 'uk', x:0.62, y:0.73, label_dir: 2, size: 'medium' },
    'Malthouse Estate Warehouse, Brighton': { map: 'uk', x:0.73, y:0.89, size: 'small' },

    //'Newcastle': { map: 'uk', x:0.65, y: 0.5 },
    '.Northern Stage': { map: 'uk', x: 0.65, y: 0.5 },
    '.Sage Gateshead': { map: 'uk', x: 0.65, y: 0.5 },
    '.Theatre Royal': { map: 'uk', x: 0.65, y: 0.5 },
    'Northern Stage': { map: 'uk', x: 0.58, y: 0.48, label_dir: 1, size: 'big' },
    'Sage Gateshead': { map: 'uk', x: 0.73, y: 0.49, label_dir: 2, size: 'medium' },
    'Theatre Royal': { map: 'uk', x: 0.64, y: 0.56, label_dir: 0, size: 'medium' },

    '.King\u2019s Theatre': { map: 'uk', x:0.53, y: 0.405 },
    '.Royal Highland Centre': { map: 'uk', x:0.525, y: 0.405 },
    '.Royal Lyceum Theatre': { map: 'uk', x:0.53, y: 0.405 },
    //'Edinburgh': { map: 'uk', x:0.53, y: 0.405, label_dir: 3 },
    'Royal Highland Centre': { map: 'uk', x:0.46, y: 0.42, label_dir: 1, size: 'medium' },
    'Royal Lyceum Theatre': { map: 'uk', x:0.52, y: 0.34, label_dir: 2, size: 'medium' },
    'King\u2019s Theatre': { map: 'uk', x:0.60, y: 0.38, label_dir: 3, size: 'big' },
};

RSC.Events = [
    // Stratford
    [
        { title: 'Twelfth Night', location: 'Royal Shakespeare Theatre', start: '2012-03-08', end: '2012-05-15', type: 'comedy' },
        { title: 'The Comedy of Errors', location: 'Royal Shakespeare Theatre', start: '2012-03-16', end: '2012-05-14', type: 'comedy' },
        { title: 'The Tempest', location: 'Royal Shakespeare Theatre', start: '2012-03-30', end: '2012-05-19', type: 'problem' }
    ],
    [
        { title: 'Richard III', location: 'Swan Theatre', start: '2012-03-22', end: '2012-09-15', type: 'history' },
        { title: 'King John', location: 'Swan Theatre', start: '2012-04-06', end: '2012-09-15', type: 'history' },
        { title: 'Romeo and Juliet in Baghdad', location: 'Swan Theatre', start: '2012-04-26', end: '2012-05-05', type: 'tragedy' },
        { title: 'Young Company Building Takeover', location: 'Swan Theatre', start: '2012-05-04', end: '2012-05-04', type: 'other' },
        { title: 'I, Cinna (The Poet)', location: 'Swan Theatre', start: '2012-06-13', end: '2012-07-06', type: 'other' },
        { title: 'A Solider in Every Son - The Rise of the Aztecs', location: 'Swan Theatre', start: '2012-06-29', end: '2012-07-28', type: 'other' },
        { title: 'Henry V', location: 'Swan Theatre', start: '2012-07-24', end: '2012-07-24', type: 'history' },
        { title: 'Troilus and Cressida', location: 'Swan Theatre', start: '2012-08-03', end: '2012-08-18', type: 'tragedy' }
    ],
    { title: 'Of All the People in All the World, Stan’s Café', location: 'PACCAR Room', start: '2012-04-14', end: '2012-07-21', type: 'other' },
    // Living Walls?
    { title: 'Two Roses for Richard III', location: 'Courtyard Theatre', start: '2012-05-07', end: '2012-05-12', type: 'other' },
    { title: 'In A Pickle', location: 'Swan Room', start: '2012-05-23', end: '2012-06-17', type: 'problem' },
    { title: 'The Adventure of the Missing Manuscript', location: 'Swan Room', start: '2012-07-21', end: '2012-09-02', type: 'other' },
    [
        { title: 'Julius Caesar', location: 'Royal Shakespeare Theatre', start: '2012-05-28', end: '2012-07-07', type: 'tragedy' },
        { title: 'Poor Trash of Venice', location: 'Royal Shakespeare Theatre', start: '2012-07-03', end: '2012-07-04', type: 'other' }
    ],
    [
        { title: 'Twelfth Night', location: 'Royal Shakespeare Theatre', start: '2012-07-12', end: '2012-10-06', type: 'comedy' },
        { title: 'The Tempest', location: 'Royal Shakespeare Theatre', start: '2012-07-13', end: '2012-10-07', type: 'problem' },
        { title: 'The Comedy of Errors', location: 'Royal Shakespeare Theatre', start: '2012-07-16', end: '2012-10-06', type: 'comedy' },
        { title: "A Midsummer Night\u2019s Dream (As You Like It)", location: 'Royal Shakespeare Theatre', start: '2012-08-10', end: '2012-08-18', type: 'comedy' }
    ],
    { title: 'Pilot Night', location: 'Courtyard Theatre', start: '2012-07-12', end: '2012-07-12', type: 'other' },
    { title: 'Much Ado About Nothing', location: 'Courtyard Theatre', start: '2012-07-26', end: '2012-09-15', type: 'comedy' },
    { title: 'A Tender Thing', location: 'Swan Theatre', start: '2012-09-27', end: '2012-10-20', type: 'other' },
    { title: 'Pericles', location: 'Courtyard Theatre', start: '2012-10-05', end: '2012-10-07', type: 'problem' },

    // London
    { title: 'Globe to Globe', location: 'Shakespeare\u2019s Globe', start: '2012-04-21', end: '2012-06-09', type: 'other' },
    { title: 'Falstaff', location: 'Royal Opera House', start: '2012-05-15', end: '2012-05-30', type: 'other' },
    { title: 'Two Roses for Richard III', location: 'Roundhouse', start: '2012-05-18', end: '2012-05-23', type: 'other' },
    { title: 'Cymbeline', location: 'Barbican', start: '2012-05-29', end: '2012-06-02', type: 'other' },
    [
        { title: 'The Comedy of Errors', location: 'Roundhouse', start: '2012-06-01', end: '2012-07-04', type: 'comedy' },
        { title: 'Twelfth Night', location: 'Roundhouse', start: '2012-06-05', end: '2012-07-05', type: 'comedy' },
        { title: 'The Tempest', location: 'Roundhouse', start: '2012-06-09', end: '2012-07-05', type: 'problem' },
        { title: 'The Dark Side of Love', location: 'Roundhouse', start: '2012-06-26', end: '2012-07-08', type: 'other' }
    ],
    { title: 'The Rest is Silence', location: 'Riverside Studios', start: '2012-06-12', end: '2012-06-23', type: 'other' },
    { title: 'In a Pickle', location: 'Stratford Circus', start: '2012-06-19', end: '2012-06-23', type: 'other' },
    { title: 'Romeo and Juliet in Baghdad', location: 'Riverside Studios', start: '2012-06-28', end: '2012-06-30', type: 'tragedy' },
    { title: 'Macbeth : Leila and Ben - A Bloody History', location: 'Riverside Studios', start: '2012-07-04', end: '2012-07-07', type: 'tragedy' },
    [
        { title: 'Timon of Athens', location: 'National Theatre', start: '2012-07-10', end:  '2012-09-09', type: 'tragedy' },
        { title: 'Cesario', location: 'National Theatre', start: '2012-08-22', end: '2012-08-25', type: 'other' }
    ],
    { title: 'Otello', location: 'Royal Opera House', start: '2012-07-12', end: '2012-07-24', type: 'tragedy' },
    { title: 'Desdemona', location: 'Barbican', start: '2012-07-19', end: '2012-07-20', type: 'other' },
    { title: 'Julius Caesar', location: 'Noël Coward Theatre', start: '2012-08-08', end: '2012-09-15', type: 'tragedy' },
    { title: 'Much Ado About Nothing', location: 'Noël Coward Theatre', start: '2012-09-24', end: '2012-10-27', type: 'comedy' },
    { title: 'Troilus and Cressida', location: 'Riverside Studios', start: '2012-08-23', end: '2012-09-08', type: 'tragedy' },
    { title: 'King Lear', location: 'Almeida Theatre', start: '2012-08-31', end: '2012-11-03', type: 'tragedy' },
    { title: 'Forests', location: 'Barbican', start: '2012-11-06', end: '2012-11-10', type: 'other' },
    // Shakespeare - Staging the World

    // Brighton
    { title: 'The Rest is Silence', location: 'Malthouse Estate Warehouse, Brighton', start: '2012-05-02', end: '2012-06-08', type: 'other' },

    // Newcastle
    [
        { title: 'The Rest is Silence', location: 'Northern Stage', start: '2012-06-26', end: '2012-06-30', type: 'other' },
        { title: 'In A Pickle', location: 'Northern Stage', start: '2012-06-27', end: '2012-06-30', type: 'other' }
    ],
    { title: 'West Side Story', location: 'Sage Gateshead', start: '2012-07-04', end: '2012-07-07', type: 'tragedy' },
    { title: 'Macbeth : Leila and Ben - A Bloody History', location: 'Northern Stage', start: '2012-07-12', end: '2012-07-14', type: 'tragedy' },
    { title: 'Julius Caesar', location: 'Theatre Royal', start: '2012-07-19', end: '2012-07-28', type: 'tragedy' },

    // Edinburgh
    { title: '2008 : Macbeth', location: 'Royal Highland Centre', start: '2012-08-11', end: '2012-08-18', type: 'tragedy' },
    { title: 'The Rape of Lucrece', location: 'Royal Lyceum Theatre', start: '2012-08-22', end: '2012-08-26', type: 'other' },
    { title: "A Midsummer Night\u2019s Dream (As You Like It)", location: 'King\u2019s Theatre', start: '2012-08-24', end: '2012-08-26', type: 'comedy' },

    // Birmingham
    { title: 'Forests', location: 'Birmingham Repertory Theatre', start: '2012-08-31', end: '2012-09-15', type: 'other' },

    // Wales
    { title: 'Y Storm', location: 'National Eisteddfod of Wales', start: '2012-08-07', end: '2012-08-11', type: 'problem' },
    { title: 'Coriolan/us', location: 'Hangar 858', start: '2012-08-09', end: '2012-08-18', type: 'tragedy' },
    { title: 'Y Storm', location: 'United Counties Showground', start: '2012-09-18', end: '2012-09-21', type: 'problem' },
    { title: 'Y Storm', location: 'The Vaynol Estate', start: '2012-10-02', end: '2012-10-06', type: 'problem' }
];

return RSC;

})(RSC || {});
