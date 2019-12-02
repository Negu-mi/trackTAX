$(document).ready(function() {

    var agentEmail = 'peterpisut@gmail.com';

    $('#agent_continue').click(function sendEmail() {
        var templateParams = {
            'reply_to': agentEmail,
            'name': $('#name').val(),
            'telephone': $('#tel').val(),
            'time': $('#time').val()
        };
        emailjs.send('gmail', 'service', templateParams).then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
    }) 
})