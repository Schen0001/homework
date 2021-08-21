$(document).ready(function() {     
    $('button').click(function() {
        if ($(this).data('clicked')) {
            alert('You already clicked this, cmon man/woman')
        } else if ($(this).data('clicked', false)) {
            $(this).css('background', 'orange');
            $(this).data('clicked', true);
        } else {
            alert('error');
        }
    })
})