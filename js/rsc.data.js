/* rsc.data.js
 * This module includes the data of all the WSF events.
 */

var RSC = (function(RSC) {

// Clock sizes
RSC.Sizes = {
    'big': 28,
    'medium': 24,
    'small': 20,
    'vsmall': 15
};

// Colours
var t = {
    exhibition: '#009900',
    proam: '#ffcc00',

    // RSC, no tour
    rsc: '#ff0000', // Tender Thing, Rape of Lucrece, King John, Richard III
    timcrouch: '#ff0000', // I Cinna (The Poet)
    // RSC, tour
    rsc1: '#d80000', // Shipwreck Trilogy - Stratford / Roundhouse / Stratford
    rscJC: '#890000', // Julius Caesar - Stratford / Newcastle / Coward
    rscMA: '#b10000', // Much Ado About Nothing - Stratford / Coward

    // UK companies, no tour
    almeida: '#0000ff', // King Lear
    nt: '#0000ff', // Timon of Athens
    ntwales: '#0000ff', // Coriolan/us
    pilot: '#0000ff', // Pilot Night (5 unique performances, one night, with RSC)
    roh: '#0000ff', // Otello, Falstaff
    sage: '#0000ff', // West Side Story
    // UK companies, tour
    cymru: '#0000bb', // Y Storm (The Tempest) - Eisteddfod / Carmarthen / Gwynedd
    dreamthinkspeak: '#000077', // The Rest Is Silence - Brighton / Riverside / Newcastle

    // International companies, no tour
    globe: '#6633ff', // Globe to Globe (all plays, many companies)
    mexico: '#6633ff', // A Soldier in Every Son - The Rise of the Aztecs
    ninagawa: '#6633ff', // Cymbeline
    warszawa: '#6633ff', // 2008 : Macbeth
    barbican: '#6633ff', // Desdemona
    // International companies, tour
    apa: '#490cff', // French/Tunisian Macbeth - Riverside / Newcastle
    bufomecanica: '#3900e4', // Two Roses for Richard III - Courtyard / Roundhouse
    chekhov: '#2f00bc', // Midsummer Night's Dream (As You Like It) - RST / Edinburgh
    iraqi: '#250095', // Romeo and Juliet in Baghdad - Swan / Riverside
    wooster: '#1b006e', // Troilus and Cressida - Swan / Riverside
    rep: '#120047', // Forests - Rep / Barbican

    // Education
    oilycart: '#a55200', // In A Pickle - Swan / Stratford Circus / Newcastle
    roundhouse: '#cc6600', // The Dark Side of Love
    young: '#cc6600' // Young Company (takeover, Henry V), Poor Trash of Venice, Cesario
};

RSC.Locations = {

    'Olympic Stadium': { map: 'london', x:0.888, y:0.13, transparent: true },
    'Buckingham Palace': { map: 'london', x:0.406, y:0.705, transparent: true },

    // Stratford
    'Royal Shakespeare Theatre': {
        map: 'stratford', x:0.79, y:0.33, label_dir: 3, size: 'medium',
        surrogate: { x:0.69, y:0.43 }
    },
    'The Dell Open-Air Theatre': {
        arrow: { x: 570, y: 250-2 },
        map: 'stratford', x:0.34, y:0.95, label_dir: 2, size: 'small'
    },
    'Courtyard Theatre': { map: 'stratford', x:0.12, y:0.88, label_dir: 3, size: 'medium' },
    'Swan Theatre': {
        map: 'stratford', x:0.73, y:0.62, label_dir: 0, size: 'small',
        surrogate: { x:0.63, y:0.52 }
    },
    'Swan Room': {
        map: 'stratford', x:0.48, y:0.58, size: 'vsmall',
        surrogate: { x:0.58, y:0.48 }
    },
    'PACCAR Room': {
        map: 'stratford', x:0.54, y:0.28, label_dir: 2, size: 'vsmall',
        surrogate: { x:0.64, y:0.38 }
    },
    'RST Foyer': {
        map: 'stratford', x:0.49, y:0.43, label_dir: 1, size: 'vsmall',
        surrogate: { x:0.63, y:0.41 }
    },
    'Shakespeare Birthplace Trust': {
        arrow: { x: 540, y: 20+2 },
        map: 'stratford', x:0.20, y:0.05, label_dir: 0, size: 'vsmall'
    },

    // London
    'Roundhouse': { map: 'london', x:0.37, y: 0.067, size: 'big' },
    'Shakespeare\u2019s Globe': { map: 'london', x:0.58, y: 0.6, label_dir: 3, size: 'big' },
    'National Theatre': { map: 'london', x:0.52, y: 0.617, label_dir: 0, size: 'medium' },
    'Almeida Theatre': { map: 'london', x:0.55, y: 0.117, size: 'small' },
    'Barbican': { map: 'london', x:0.59, y: 0.425, label_dir: 3, size: 'medium' },
    'Riverside Studios': { map: 'london', x:0.08, y: 0.9, label_dir: 2, size: 'small' },
    'Stratford Circus': { map: 'london', x:0.96, y: 0.068, size: 'small' },
    'Noël Coward Theatre': { map: 'london', x:0.47, y: 0.567, size: 'medium' },
    'Royal Opera House': { map: 'london', x:0.485, y: 0.517, label_dir: 2, size: 'big' },
    'British Museum': { map: 'london', x:0.47, y: 0.43, label_dir: 2, size: 'small' },
    'Tate Modern': { map: 'london', x:0.565, y:0.6, label_dir:0, size: 'small' },

    // Wales
    'Vale of Glamorgan (2 venues)': { map: 'uk', x: 0.4975, y:0.8275, transparent: true, label_dir: 3 },
    'Hangar 858,\nVale of Glamorgan': {
        map: 'uk', x:0.38, y:0.88, label_dir: 0, size: 'small',
        surrogate: { x:0.5, y:0.83 }
    },
    'National Eisteddfod of Wales,\nVale of Glamorgan': {
        map: 'uk', x:0.27, y:0.86, size: 'small',
        surrogate: { x:0.495, y:0.825 }
    },
    'The Vaynol Estate, Gwynedd': { map: 'uk', x:0.45, y:0.67, label_dir: 2, size: 'small' },
    'United Counties Showground, Carmarthen': { map: 'uk', x:0.45, y:0.80, label_dir: 2, size: 'small' },

    // Elsewhere
    'Birmingham Repertory Theatre\nat the Old Rep Theatre': { map: 'uk', x:0.62, y:0.73, label_dir: 2, size: 'small' },
    'Malthouse Estate Warehouse, Brighton': { map: 'uk', x:0.73, y:0.89, size: 'small' },

    'Newcastle (3 venues)': { map: 'uk', x:0.64, y: 0.5, transparent: true },
    'Northern Stage, Newcastle': {
        map: 'uk', x: 0.73, y: 0.43, label_dir: 2, size: 'small',
        surrogate: { x: 0.64, y: 0.5 }
    },
    'Theatre Royal, Newcastle': {
        map: 'uk', x: 0.76, y: 0.485, label_dir: 1, size: 'big',
        surrogate: { x: 0.64, y: 0.5 }
    },
    'Sage Gateshead': {
        map: 'uk', x: 0.75, y: 0.54, label_dir: 0, size: 'big',
        surrogate: { x: 0.64, y: 0.5 }
    },

    'Edinburgh (3 venues)': { map: 'uk', x:0.525, y: 0.405, transparent: true },
    'Royal Highland Centre, Edinburgh': {
        map: 'uk', x:0.66, y: 0.28, label_dir: 1, size: 'medium',
        surrogate: { x:0.525, y: 0.405 }
    },
    'Royal Lyceum Theatre, Edinburgh': {
        map: 'uk', x:0.75, y: 0.28, label_dir: 2, size: 'medium',
        surrogate: { x:0.53, y: 0.405 }
    },
    'King\u2019s Theatre, Edinburgh': {
        map: 'uk', x:0.70, y: 0.36, label_dir: 3, size: 'big',
        surrogate: { x:0.53, y: 0.405 }
    }
};

RSC.Events = [
    // Stratford
    [
        { title: 'Twelfth Night', location: 'Royal Shakespeare Theatre', start: '2012-03-08', end: '2012-05-15', col: t.rsc1 },
        { title: 'The Comedy of Errors', location: 'Royal Shakespeare Theatre', start: '2012-03-16', end: '2012-05-14', col: t.rsc1 },
        { title: 'The Tempest', location: 'Royal Shakespeare Theatre', start: '2012-03-30', end: '2012-05-19', col: t.rsc1 }
    ],
    [
        { title: 'Richard III', location: 'Swan Theatre', start: '2012-03-22', end: '2012-04-20', col: t.rsc },
        { title: 'King John', location: 'Swan Theatre', start: '2012-04-06', end: '2012-04-21', col: t.rsc }
    ],
    [
        { title: 'Romeo and Juliet in Baghdad', location: 'Swan Theatre', start: '2012-04-26', end: '2012-05-05', col: t.iraqi },
        { title: 'Young Company Building Takeover', location: 'Swan Theatre', start: '2012-05-04', end: '2012-05-04', col: t.young }
    ],
    [
        { title: 'King John', location: 'Swan Theatre', start: '2012-05-08', end: '2012-06-23', col: t.rsc },
        { title: 'Richard III', location: 'Swan Theatre', start: '2012-05-10', end: '2012-06-22', col: t.rsc },
        { title: 'I, Cinna (The Poet)', location: 'Swan Theatre', start: '2012-06-13', end: '2012-06-20', col: t.timcrouch }
    ],
    [
        { title: 'A Soldier in Every Son \u2013 The Rise of the Aztecs', location: 'Swan Theatre', start: '2012-06-29', end: '2012-07-28', col: t.mexico },
        { title: 'I, Cinna (The Poet)', location: 'Swan Theatre', start: '2012-07-06', end: '2012-07-06', col: t.timcrouch },
        { title: 'Richard III', location: 'Swan Theatre', start: '2012-07-09', end: '2012-07-24', col: t.rsc },
        { title: 'King John', location: 'Swan Theatre', start: '2012-07-12', end: '2012-07-27', col: t.rsc },
        { title: 'Open Stages Showcase', location: 'Swan Theatre', start: '2012-07-15', end: '2012-07-15', col: t.proam },
        { title: 'Open Stages Showcase', location: 'Swan Theatre', start: '2012-07-21', end: '2012-07-21', col: t.proam },
        { title: 'Henry V', location: 'Swan Theatre', start: '2012-07-24', end: '2012-07-24', col: t.young }
    ],
    { title: 'Troilus and Cressida', location: 'Swan Theatre', start: '2012-08-03', end: '2012-08-18', col: t.wooster },
    [
        { title: 'Richard III', location: 'Swan Theatre', start: '2012-08-21', end: '2012-09-15', col: t.rsc },
        { title: 'King John', location: 'Swan Theatre', start: '2012-08-22', end: '2012-09-15', col: t.rsc }
    ],
    { title: 'A Tender Thing', location: 'Swan Theatre', start: '2012-09-27', end: '2012-10-20', col: t.rsc },

    { title: 'Of All the People in All the World, Stan’s Café', location: 'PACCAR Room', start: '2012-04-14', end: '2012-07-21', col: t.exhibition },
    { title: 'Two Roses for Richard III', location: 'Courtyard Theatre', start: '2012-05-07', end: '2012-05-12', col: t.bufomecanica },
    { title: 'Creative Dialogues', location: 'Swan Room', start: '2012-05-10', end: '2012-05-12', col: t.exhibition },
    { title: 'In A Pickle', location: 'Swan Room', start: '2012-05-23', end: '2012-06-17', col: t.oilycart },
    { title: 'The Adventure of the Missing Manuscript', location: 'Swan Room', start: '2012-07-21', end: '2012-09-02', col: t.exhibition },
    [
        { title: 'Julius Caesar', location: 'Royal Shakespeare Theatre', start: '2012-05-28', end: '2012-07-07', col: t.rscJC },
        { title: 'Poor Trash of Venice', location: 'Royal Shakespeare Theatre', start: '2012-07-03', end: '2012-07-04', col: t.young }
    ],
    [
        { title: 'Twelfth Night', location: 'Royal Shakespeare Theatre', start: '2012-07-12', end: '2012-10-06', col: t.rsc1 },
        { title: 'The Tempest', location: 'Royal Shakespeare Theatre', start: '2012-07-13', end: '2012-10-07', col: t.rsc1 },
        { title: 'Open Stages Showcase', location: 'Royal Shakespeare Theatre', start: '2012-07-15', end: '2012-07-15', col: t.proam },
        { title: 'The Comedy of Errors', location: 'Royal Shakespeare Theatre', start: '2012-07-16', end: '2012-10-06', col: t.rsc1 },
        { title: 'Open Stages Showcase', location: 'Royal Shakespeare Theatre', start: '2012-07-22', end: '2012-07-22', col: t.proam },
        { title: "A Midsummer Night\u2019s Dream (As You Like It)", location: 'Royal Shakespeare Theatre', start: '2012-08-10', end: '2012-08-18', col: t.chekhov }
    ],
    { title: 'Pilot Night', location: 'Courtyard Theatre', start: '2012-07-12', end: '2012-07-12', col: t.pilot },
    { title: 'Open Stages Showcase', location: 'Courtyard Theatre', start: '2012-07-13', end: '2012-07-15', col: t.proam },
    { title: 'Much Ado About Nothing', location: 'Courtyard Theatre', start: '2012-07-26', end: '2012-09-15', col: t.rscMA },
    { title: 'Pericles', location: 'Courtyard Theatre', start: '2012-10-05', end: '2012-10-07', col: t.proam },
    [
        { title: 'The Dell', location: 'The Dell Open-Air Theatre', start: '2012-06-09', end: '2012-08-26', col: t.proam },
        { title: 'Open Stages Showcase', location: 'The Dell Open-Air Theatre', start: '2012-07-15', end: '2012-07-15', col: t.proam },
        { title: 'Open Stages Showcase', location: 'The Dell Open-Air Theatre', start: '2012-07-22', end: '2012-07-22', col: t.proam }
    ],
    { title: 'Shakespeare\u2019s Stories', location: 'Shakespeare Birthplace Trust', start: '2012-04-21', end: '2012-12-21', col: t.exhibition },

    // London
    { title: 'Worlds Together Education Conference', location: 'Tate Modern', start: '2012-09-06', end: '2012-09-08', col: t.exhibition },
    { title: 'Shakespeare \u2013 Staging the World', location: 'British Museum', start: '2012-07-19', end: '2012-11-25', col: t.exhibition },
    { title: 'Living Walls', location: 'RST Foyer', start: '2012-04-21', end: '2012-09-09', col: t.exhibition },
    { title: 'Globe to Globe', location: 'Shakespeare\u2019s Globe', start: '2012-04-21', end: '2012-06-09', col: t.globe },
    { title: 'Falstaff', location: 'Royal Opera House', start: '2012-05-15', end: '2012-05-30', col: t.roh },
    { title: 'Two Roses for Richard III', location: 'Roundhouse', start: '2012-05-18', end: '2012-05-23', col: t.bufomecanica },
    [
        { title: 'Global Shakespeare Talks', location: 'Barbican', start: '2012-05-28', end: '2012-05-28', col: t.exhibition },
        { title: 'Shakespeare\u2019s Library', location: 'Barbican', start: '2012-05-29', end: '2012-05-30', col: t.exhibition },
        { title: 'Cymbeline', location: 'Barbican', start: '2012-05-29', end: '2012-06-02', col: t.ninagawa }
    ],
    [
        { title: 'The Comedy of Errors', location: 'Roundhouse', start: '2012-06-01', end: '2012-07-04', col: t.rsc1 },
        { title: 'Twelfth Night', location: 'Roundhouse', start: '2012-06-05', end: '2012-07-05', col: t.rsc1 },
        { title: 'The Tempest', location: 'Roundhouse', start: '2012-06-09', end: '2012-07-05', col: t.rsc1 },
        { title: 'The Dark Side of Love', location: 'Roundhouse', start: '2012-06-26', end: '2012-07-08', col: t.roundhouse }
    ],
    { title: 'The Rest is Silence', location: 'Riverside Studios', start: '2012-06-12', end: '2012-06-23', col: t.dreamthinkspeak },
    { title: 'In a Pickle', location: 'Stratford Circus', start: '2012-06-19', end: '2012-06-23', col: t.oilycart },
    { title: 'Romeo and Juliet in Baghdad', location: 'Riverside Studios', start: '2012-06-28', end: '2012-06-30', col: t.iraqi },
    { title: 'Macbeth : Leila and Ben \u2013 A Bloody History', location: 'Riverside Studios', start: '2012-07-04', end: '2012-07-07', col: t.apa },
    [
        { title: 'The Making of Timon', location: 'National Theatre', start: '2012-07-10', end:  '2012-10-21', col: t.exhibition },
        { title: 'Timon of Athens', location: 'National Theatre', start: '2012-07-10', end:  '2012-09-09', col: t.nt },
        { title: 'Cesario', location: 'National Theatre', start: '2012-08-22', end: '2012-08-25', col: t.young }
    ],
    { title: 'Otello', location: 'Royal Opera House', start: '2012-07-12', end: '2012-07-24', col: t.roh },
    { title: 'Desdemona', location: 'Barbican', start: '2012-07-19', end: '2012-07-20', col: t.barbican },
    { title: 'Julius Caesar', location: 'Noël Coward Theatre', start: '2012-08-08', end: '2012-09-15', col: t.rscJC },
    { title: 'Much Ado About Nothing', location: 'Noël Coward Theatre', start: '2012-09-24', end: '2012-10-27', col: t.rscMA },
    { title: 'Troilus and Cressida', location: 'Riverside Studios', start: '2012-08-23', end: '2012-09-08', col: t.wooster },
    { title: 'King Lear', location: 'Almeida Theatre', start: '2012-08-31', end: '2012-11-03', col: t.almeida },
    { title: 'Forests', location: 'Barbican', start: '2012-11-06', end: '2012-11-10', col: t.rep },

    // Brighton
    { title: 'The Rest is Silence', location: 'Malthouse Estate Warehouse, Brighton', start: '2012-05-02', end: '2012-06-08', col: t.dreamthinkspeak },

    // Newcastle
    [
        { title: 'The Rest is Silence', location: 'Northern Stage, Newcastle', start: '2012-06-26', end: '2012-06-30', col: t.dreamthinkspeak },
        { title: 'In A Pickle', location: 'Northern Stage, Newcastle', start: '2012-06-27', end: '2012-06-30', col: t.oilycart }
    ],
    { title: 'West Side Story', location: 'Sage Gateshead', start: '2012-07-04', end: '2012-07-07', col: t.sage },
    [
        { title: 'Macbeth : Leila and Ben \u2013 A Bloody History', location: 'Northern Stage, Newcastle', start: '2012-07-12', end: '2012-07-14', col: t.apa },
        { title: 'Remaking Shakespeare Conference', location: 'Northern Stage, Newcastle', start: '2012-07-14', end: '2012-07-14', col: t.exhibition }
    ],
    { title: 'Julius Caesar', location: 'Theatre Royal, Newcastle', start: '2012-07-19', end: '2012-07-28', col: t.rscJC },

    // Edinburgh
    { title: '2008 : Macbeth', location: 'Royal Highland Centre, Edinburgh', start: '2012-08-11', end: '2012-08-18', col: t.warszawa },
    { title: 'The Rape of Lucrece', location: 'Royal Lyceum Theatre, Edinburgh', start: '2012-08-22', end: '2012-08-26', col: t.rsc },
    { title: "A Midsummer Night\u2019s Dream (As You Like It)", location: 'King\u2019s Theatre, Edinburgh', start: '2012-08-24', end: '2012-08-26', col: t.chekhov },

    // Birmingham
    { title: 'Forests', location: 'Birmingham Repertory Theatre\nat the Old Rep Theatre', start: '2012-08-31', end: '2012-09-15', col: t.rep },

    // Wales
    { title: 'Y Storm', location: 'National Eisteddfod of Wales,\nVale of Glamorgan', start: '2012-08-07', end: '2012-08-11', col: t.cymru, label_dir: 3 },
    { title: 'Coriolan/us', location: 'Hangar 858,\nVale of Glamorgan', start: '2012-08-09', end: '2012-08-18', col: t.ntwales, label_dir: 3 },
    { title: 'Y Storm', location: 'United Counties Showground, Carmarthen', start: '2012-09-18', end: '2012-09-21', col: t.cymru, label_dir: 3 },
    { title: 'Y Storm', location: 'The Vaynol Estate, Gwynedd', start: '2012-10-02', end: '2012-10-06', col: t.cymru }
];

return RSC;

})(RSC || {});
