Quintessence of Dust
====================

<img width=347 src="http://myshakespeare.worldshakespearefestival.org.uk/wp-content/uploads/2012/12/Matthew-Sommerville-694x413.png" align="right">

http://quintessence.theatricalia.com

A data visualisation of the World Shakespeare Festival, one of three [Caper](http://wearecaper.com/) commissions for [myShakespeare](http://myshakespeare.worldshakespearefestival.org.uk/). myShakespeare was produced in 2012 by [The Royal Shakespeare Company](http://www.rsc.org.uk/) on the occasion of the [World Shakespeare Festival](http://www.worldshakespearefestival.org.uk/), which the company is producing on behalf of the London Organising Committee of the Olympic Games and Paralympic Games Ltd.

From the [about page](http://quintessence.theatricalia.com/about.html):

“I have always been interested in the hustle and bustle of the theatre, such as everything that goes on literally behind the scenes in the weeks and months before in order to make the work of art that I see as a member of the audience on a particular night. It's one of the reasons I set up [Theatricalia](http://theatricalia.com/), to record details of as many productions as possible, letting people see the history of people, places, and productions as they each move through the theatre world.

“With the advent of the World Shakespeare Festival, I thought it would be interesting to be able to see an overview of the productions involved in the Festival across the country. As I'm a web developer by profession, I naturally wanted this to be a website-based data visualisation – one that as well as an animation showing the overview, allowed people to interact with it and find out more information about the events covered.

“From the What Country Friends Is This? Trilogy in Stratford-upon-Avon and London at the Roundhouse, Forests at the Birmingham Rep, or Y Storm (The Tempest) at the National Eisteddfod of Wales, my work provides a summary of the Festival productions and associated events.

Acknowledgements
----------------

Thanks to the various open source libraries and information used in this project: Raphaël, jQuery, jQuery UI and selectToUISlider, Twitter Bootstrap, UglifyJS, Stamen and OpenStreetMap.

Code structure
--------------

The main code is in various files in the `js` directory:

   * rsc.maps.js - The main drawing functions, plotting everything on the screen
   * rsc.slider.js - Activating the slider and the animation
   * rsc.clock.js - Stand-alone library to plot a countdown clock
   * rsc.data.js - All the data, locations, events, and categories
   * rsc.duration.js - Utility module to output pretty date ranges
   * rsc.rect.js - Utility module to draw rectangles

`lib` has 3rd party libraries, `css` and `i` are self-evident, and `bin/compile` creates compiled CSS and JS from the source files (you need uglify-js and uglifycss installed with npm).

Help
----

If you've enjoyed this, please do contribute to [Theatricalia](http://theatricalia.com/), an ever-growing database of past and present theatre productions.
