$(".section-two-zoom").click(function () {
    $('html, body').animate({
        scrollTop: $(".section-two").offset().top
    }, 500);
});

$(document).ready(function() {
  $('.modal-trigger').leanModal();
});

var Customer = (function() {

    return function Customer(firstName, lastName, email, message) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.message = message;
    }

})();

$('#contactBtn').on('click', function(){
    var f = $('#inputFirstName').val(),
        l = $('#inputLastName').val(),
        e = $('#email').val(),
        m = $('#inputTextArea').val();
    var contact = new Customer(f, l, e, m);
    console.log(contact);
});