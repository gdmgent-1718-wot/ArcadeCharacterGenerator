$('#text').change(function() {
    $('#colorinput').val($('#text').val());
    $('.color-picker').attr('data-value', $('#text').val());
});

//
$('#colorinput').change(function() {
    $('#text').val($(this).val().toUpperCase());
    $('.color-picker').attr('data-value', $(this).val().toUpperCase());
});

// Sluit de colorpicker
$('#close').click(function() {
    $('.color-picker').css('transform', 'scale(0,0)');
});

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

$('.color-picker > div:not(#close)').click(function() {
    let bg = $(this).css('background-color');
    $('#colorinput').val(rgb2hex($(this).css('background-color')));
    $('#colorinput').change();
});