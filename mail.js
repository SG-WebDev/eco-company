function validateForm() {
    document.getElementById('status').innerHTML = "Wysyłanie...";
    formData = {
        'name': $('input[name=name]').val(),
        'subject': $('input[name=subject]').val(),
        'email': $('input[name=email]').val(),
        'phone': $('input[name=phone]').val(),
        'message': $('textarea[name=message]').val()
    };

    $.ajax({
        url: "mail.php",
        type: "POST",
        data: formData,
        success: function (data, textStatus, jqXHR) {

            $('#status').removeClass('invisible');
            $('#status').text(data.message);
            if (data.code) //If mail was sent successfully, reset the form.
                $('#contact-form').closest('form').find("input[type=text], textarea").val("");
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $('#status').removeClass('invisible');
            $('#status').text(jqXHR);
        }
    });
}