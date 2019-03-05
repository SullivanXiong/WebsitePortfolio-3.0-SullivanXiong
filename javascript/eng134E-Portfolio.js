$(document).ready(function(){
    $('.leftArtifact').hover(function() {
        $('.lefth2').css('background', '#2a2929');
        $('.lefth2').css('color', '#fffff0');
    }, function() {
        // on mouseout, reset the background colour
        $('.lefth2').css('background', '#ffffff');
        $('.lefth2').css('color', '#2a2929');
    });
    $('.rightArtifact').hover(function() {
        $('.righth2').css('background', '#2a2929');
        $('.righth2').css('color', '#fffff0');
    }, function() {
        // on mouseout, reset the background colour
        $('.righth2').css('background', '#ffffff');
        $('.righth2').css('color', '#2a2929');
    });
    $('.middleArtifact').hover(function() {
        $('.middleh2').css('background', '#2a2929');
        $('.middleh2').css('color', '#fffff0');
    }, function() {
        // on mouseout, reset the background colour
        $('.middleh2').css('background', '#ffffff');
        $('.middleh2').css('color', '#2a2929');
    });
});
