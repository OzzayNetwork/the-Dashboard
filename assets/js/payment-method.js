$(window).on('load', function() {
    $('body').on('change', '.select-payment-method', function() {
        var theVal = $(this).val();
        if (theVal == "Mpesa") {
            $('.mpesa-mode').removeClass('d-none').siblings('.driver-pay-method').addClass('d-none')
        }
        if (theVal == "Bank") {
            $('.bank-mode').removeClass('d-none').siblings('.driver-pay-method').addClass('d-none')
        }
        if (theVal == "cash") {
            $('.cash-mode').removeClass('d-none').siblings('.driver-pay-method').addClass('d-none')
        }
    })
});