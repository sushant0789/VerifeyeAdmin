$('.select-box select').change(function () {
    var theText = $(this).val();
    $(this).removeClass().addClass(theText);
});