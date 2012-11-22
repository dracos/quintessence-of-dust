/* rsc.slider.js
 * This handles the slider.
 */

var RSC = (function(RSC) {

var animation_time = 500,
    running = 0;

RSC.run = function() {
    if (running) {
        return;
    }
    var arr = $('select#date option');
    var i = 0, l = arr.length;
    running = 1;
    animation_time = 200;
    (function iterator() {
        $('select#date').val(arr[i].value).change();
        if(++i<l && running) {
            setTimeout(iterator, animation_time);
        } else {
            RSC.stop();
        }
    })();
};

RSC.stop = function() {
    running = 0;
    animation_time = 500;
};

$(function(){

    var selectOptions = (function(){
        var opts = [];
        $('select#date').find('option').each(function(){
            opts.push({
                value: jQuery(this).attr('value'),
                text: jQuery(this).text()
            });
        });
        return opts;
    })();

    var last_date;
    $('select#date').selectToUISlider({
        sliderOptions: {
            //animate: true,
            change: function(event, ui) {
                var thisHandle = $(ui.handle);
                var textval = selectOptions[ui.value].text;
                thisHandle
                    .attr('aria-valuetext', textval)
                    .attr('aria-valuenow', ui.value)
                    .find('.ui-slider-tooltip .ttContent')
                        .text( textval );
                var d = $('#date').val(),
                    new_date = '2012-' + d.substring(3, 5) + '-' + d.substring(0, 2);
                $.each(RSC.clocks, function(i, v) {
                    v.set_date(new_date, last_date, animation_time);
                });
                last_date = new_date;
            }
        }
    }).hide();

    setTimeout(function() {
        $('select#date').val('13/08').change();
    }, 1000);
});

return RSC;

})(RSC || {});

