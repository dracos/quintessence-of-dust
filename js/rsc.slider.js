/* rsc.slider.js
 * This handles the slider.
 */

var RSC = (function(RSC) {

var animation_time = 500,
    running = 0;

function run() {
    if (running) {
        return stop();
    }
    $(this).find('i').attr('class', 'icon-pause');
    var arr = $('select#date option');
    var i = document.getElementById('date').selectedIndex,
        l = arr.length;
    if (i == l - 1) {
        i = 0;
    }
    running = 1;
    animation_time = 200;
    (function iterator() {
        $('select#date').val(arr[i].value).change();
        if(++i<l && running) {
            setTimeout(iterator, animation_time);
        } else {
            stop();
        }
    })();
}

function stop() {
    $('#btn-play').find('i').attr('class', 'icon-play');
    running = 0;
    animation_time = 500;
}

$(function(){

    $('#btn-play').click(run);

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
                    .attr('data-original-title', textval)
                    .attr('aria-valuenow', ui.value);
                var d = $('#date').val(),
                    new_date = '2012-' + d.substring(3, 5) + '-' + d.substring(0, 2);
                $.each(RSC.clocks, function(i, v) {
                    v.set_date(new_date, last_date, animation_time);
                });
                last_date = new_date;
            }
        }
    }).hide();
    $('#handle_date').tooltip({
        title: 'Date',
        placement: function(tip,el) {
            if ($(el).attr('aria-valuenow') > 180) {
                return 'left';
            }
            return 'right';
        }
    });

});

return RSC;

})(RSC || {});

