$(document).ready( function() {
    $('#name').val(cookie('name'));
    $('#surname').val(cookie('surname'));

    function setValue(){
        cookie('isDisabled') ? $('#com1_card').prop('checked', true) : $('#com1_norm').prop('checked', true);
        cookie('isSingleIncome') ? $('#com2_yes').prop('checked', true) : $('#com2_no').prop('checked', true);
        switch(cookie('prefix')) {
            case 'mr':
                $('com4_mister').prop('checked', true);
                break;
            case 'mrs':
                $('com4_mrs').prop('checked', true);
                break;
            case 'ms':
                $('com4_miss').prop('checked', true);
                break;
            default :
                $('com4_other').prop('checked', true);
                break;
        };
        $('#name').val(cookie('name'));
        $('#surname').val(cookie('surname'));
    }

    setValue();

    $('#profile_accept').click(function recordName() {
        cookie('name') = $('#name').val();
        cookie('surname') = $('#surname').val();
        location.replace('/index.html');
    })
    
})