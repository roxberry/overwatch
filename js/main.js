$(document).ready(function () {

    $('#filterspanel').hide();
    $('#actionspanel').hide();

    $('#filters').click(function () {
        $('#filterspanel').toggle(400);
        return false;
    });

    $('#actions').click(function () {
        $('#actionspanel').toggle(400);
        return false;
    });

});
