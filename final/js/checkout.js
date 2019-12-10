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

/*Guest Checkout*/

$(function() {
  $inp = $("#Password, #Username");
  $cb = $("#guestCheckout");
  $inp.prop('disabled', false);

  $cb.on('change', function() {
    if ($cb.is(':checked')) {
      $inp.prop('disabled', true);
    } else {
      $inp.prop('disabled', false);
    }
  });

});

$('#BillingCity').change(function(){
  $("#BillingState").val($(this).val());
});


//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
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
