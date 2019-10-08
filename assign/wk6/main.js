$("#billingSame").change(function(){
    if($(this).is(":checked")){
        $("[id^='Shipping']").each(function(){
            data=$(this).attr("id")
            tmpID = data.split('Shipping');
            $(this).val($("#Billing"+tmpID[1]).val())
        })
    }else{
        $("[id^='Shipping']").each(function(){
            $(this).val("")
        })

      }
})

// Add the novalidate attribute when the JS loads
var forms = document.querySelectorAll('.needs-validation');
for (var i = 0; i < forms.length; i++) {
    forms[i].setAttribute('novalidate', true);
}


// Validate the field
var hasError = function (field) {

    // Don't validate submits, buttons, file and reset inputs, and disabled fields
    if (field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') return;

    // Get validity
    var validity = field.validity;

    // If valid, return null
    if (validity.valid) return;

    // If field is required and empty
    if (validity.valueMissing) return 'Please fill out this field.';

};


// Show an error message
var showError = function (field, error) {

    // Add error class to field
    field.classList.add('error');

    // Get field id or name
    var id = field.id || field.name;
    if (!id) return;

    // Check if error message field already exists
    // If not, create one
    var message = field.form.querySelector('.error-message#error-for-' + id );
    if (!message) {
        message = document.createElement('div');
        message.className = 'error-message';
        message.id = 'error-for-' + id;
        field.parentNode.insertBefore( message, field.nextSibling );
    }

    // Add ARIA role to the field
    field.setAttribute('aria-describedby', 'error-for-' + id);

    // Update error message
    message.innerHTML = error;

    // Show error message
    message.style.display = 'block';
    message.style.visibility = 'visible';

};


// Remove the error message
var removeError = function (field) {

    // Remove error class to field
    field.classList.remove('error');

    // Remove ARIA role from the field
    field.removeAttribute('aria-describedby');

    // Get field id or name
    var id = field.id || field.name;
    if (!id) return;

    // Check if an error message is in the DOM
    var message = field.form.querySelector('.error-message#error-for-' + id + '');
    if (!message) return;

    // If so, hide it
    message.innerHTML = '';
    message.style.display = 'none';
    message.style.visibility = 'hidden';

};



/* function setBillingAddress(){
  if ($("#billingSame").is(":checked")) {

    $('#ShippingFname').val($('#BillingFname').val());
    $('#ShippingLname').val($('#BillingLname').val());
    $('#ShippingAddress').val($('#BillingAddress').val());
    $('#ShippingAddress2').val($('#BillingAddress2').val());
    $('#ShippingState').val($('#BillingState').val());
    $('#ShippingCity').val($('#BillingCity').val());
    $('#ShippingZip').val($('#BillingZip').val());

    $('#ShippingFname').attr('disabled', 'disabled');
    $('#ShippingLname').attr('disabled', 'disabled');
    $('#ShippingAddress').attr('disabled', 'disabled');
    $('#ShippingAddress2').attr('disabled', 'disabled');
    $('#ShippingState').attr('disabled', 'disabled');
    $('#ShippingCity').attr('disabled', 'disabled');
    $('#ShippingZip').attr('disabled', 'disabled');


  } else {
    $('#ShippingFname').removeAttr('disabled');
    $('#ShippingLname').removeAttr('disabled');
    $('#ShippingAddress').removeAttr('disabled');
    $('#ShippingAddress2').removeAttr('disabled');
    $('#ShippingState').removeAttr('disabled');
    $('#ShippingCity').removeAttr('disabled');
    $('#ShippingZip').removeAttr('disabled');


  }
}

$('#billingSame').click(function(){
  setBillingAddress();
})

*/
