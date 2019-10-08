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
