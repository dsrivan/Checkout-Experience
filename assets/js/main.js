/********************* GENERIC FUNCTIONS - HOME *********************/
function fnQuerySelector(str) {
    return document.querySelector(str);
}
function fnQuerySelectorAll(str) {
    return document.querySelectorAll(str);
}
function fnAddClass(elem, nameClass) {
    elem.classList.add(nameClass);
}
function fnRemoveClass(elem, nameClass) {
    elem.classList.remove(nameClass);
}
function fnToggleClass(elem, nameClass) {
    elem.classList.toggle(nameClass);
}
/********************* GENERIC FUNCTIONS - END *********************/


/********************* OBJECT WITH ALL ELEMENTS - BEGIN *********************/
let vElements = {
    divKeepShopping: fnQuerySelector('.divKeepShopping'),
    divCheckout: fnQuerySelector('.divCheckout'),
    btnCheckout: fnQuerySelector('.divCheckout .btnCheckout'),
    sectionStage: fnQuerySelector('.sectionStage'),
    sectionPaymentMethods: fnQuerySelector('.sectionPaymentMethods'),
    paymentMethod: fnQuerySelector('#PaymentMethod'),
    paymentDetails: fnQuerySelector('#PaymentDetails'),
    paymentOptionChosen: fnQuerySelectorAll('.paymentOption a'),
    sectionPaymentInfos: fnQuerySelector('.sectionPaymentInfos'),
    sectionSuccessPayment: fnQuerySelector('.sectionSuccessPayment'),
    sectionBtns: fnQuerySelector('.sectionBtns'),
    sectionOrderDetails: fnQuerySelector('.sectionOrderDetails'),
    spanBadgePaymentMethod: fnQuerySelector('.spanBadgePaymentMethod'),
    spanBadgePaymentMethodCheck: fnQuerySelector('.spanBadgePaymentMethodCheck'),
    spanBadgePaymentDetails: fnQuerySelector('.spanBadgePaymentDetails'),
    spanBadgePaymentDetailsCheck: fnQuerySelector('.spanBadgePaymentDetailsCheck'),
    couponTotals: fnQuerySelector('.couponTotals'),
    sectionBreadcrumb: fnQuerySelector('.sectionBreadcrumb')
}
/********************* OBJECT WITH ALL ELEMENTS - END *********************/


/********************* ACTION FOR THE 'GO TO CHECKOUT' CLICK - BEGIN *********************/
function fnChekout() {

    /* TO PREVENT ERROS ON EXHIBITIONS OF DIVS */
    if (vElements.divKeepShopping.classList.contains('d-none')) {
        return;
    }

    /* HIDE THE OPTION 'KEEP SHOPPING' */
    fnAddClass(vElements.divKeepShopping, 'd-none');
    fnAddClass(vElements.divKeepShopping, 'col-1');

    /* INCREASE THE OPTION 'GO TO CHECKOUT' */
    fnAddClass(vElements.divCheckout, 'col-12');

    /* INCREASE THE PADDING ON VERTICAL */
    fnRemoveClass(vElements.btnCheckout, 'py-5');

    /* TO REMOVE THE MARGIN BOTTOM */
    fnRemoveClass(vElements.sectionBtns, 'mb-5');

    /* TO SHOW THE STAGES BLOCK APPLYING EFFECTS */
    fnRemoveClass(vElements.sectionStage, 'd-none');
    setTimeout(() => {
        fnRemoveClass(vElements.sectionStage, 'opacity-0');
    }, 500);

    /* TO SHOW DE PAYMENTS BLOCK APPLYING EFFECTS */
    fnRemoveClass(vElements.sectionPaymentMethods, 'd-none');
    setTimeout(() => {
        fnRemoveClass(vElements.sectionPaymentMethods, 'opacity-0');
    }, 500);

    /* APPLY BLUE COLOR FOR  CURRENTLY STEP (SETP 1) */
    fnRemoveClass(vElements.spanBadgePaymentMethod, 'bg-secondary');
    fnAddClass(vElements.spanBadgePaymentMethod, 'bg-primary');
}
/********************* ACTION FOR THE 'GO TO CHECKOUT' CLICK - END *********************/


/********************* PAYMENT OPTION CHOSEN - BEGIN *********************/
function fnPaymentOptionChosen(option) {
    /* TO CHECK ALL PAYMENT OPTIONS AND REMOVE THE STYLE OF 'OPTION SELECTED' */
    vElements.paymentOptionChosen.forEach(vOption => {
        fnRemoveClass(vOption, 'paymentOptionChosen');
    });

    /* APPLY THE 'OPTION SELECTED' STYLE ON THE OPTION CLICKED */
    fnAddClass(option, 'paymentOptionChosen');

    /* ACTION FOR CREDIT CARD */
    if (option.attributes['data-paymentmethod'].value === "CreditCard") {
        /* APPLY BLUE COLOR FOR  CURRENTLY STEP (SETP 2) */
        fnRemoveClass(vElements.spanBadgePaymentDetails, 'bg-secondary');
        fnAddClass(vElements.spanBadgePaymentDetails, 'bg-primary');

        /* APPLY BLUE COLOR FOR STEP 1 CONCLUDED */
        fnAddClass(vElements.spanBadgePaymentMethod, 'd-none');
        fnRemoveClass(vElements.spanBadgePaymentMethodCheck, 'd-none');

        /* FOR CONTROLS THE EXHIBITION OF DIVS */
        fnSectionPaymentInfos();
    }
}
/********************* PAYMENT OPTION CHOSEN - END *********************/


/********************* PAYMENT INFORMATION (CREDIT CARD) - BEGIN *********************/
function fnSectionPaymentInfos() {
    /* TO HIDE THE PAYMENT METHODS BLOCK BY APPLYING EFFECTS */
    fnAddClass(vElements.sectionPaymentMethods, 'd-none');
    fnAddClass(vElements.sectionPaymentMethods, 'opacity-0');

    /* TO SHOW THE PAYMENT INFORMATION (CREDIT CARD) BLOCK BY APPLYING EFFECTS */
    fnRemoveClass(vElements.sectionPaymentInfos, 'd-none');
    setTimeout(() => {
        fnRemoveClass(vElements.sectionPaymentInfos, 'opacity-0');
    }, 500);
}
/********************* PAYMENT INFORMATION (CREDIT CARD) - END *********************/


/********************* DIV PRELOADING - BEGIN *********************/
function fnPrefnToggleSectionLoading() {
    /* TO SHOW THE 'LOADING' BLOCK */
    setTimeout(() => {
        fnToggleSectionLoading();
    }, 100);

    /* TO HIDE THE 'LOADING' BLOCK */
    setTimeout(() => {
        fnToggleSectionLoading();
    }, 2000);
}
/********************* DIV PRELOADING - END *********************/


/********************* DIV LOADING - BEGIN *********************/
function fnToggleSectionLoading() {
    /* TO ALTERNATE 'SHOW / HIDE' IN THE 'LOADING' BLOCK */
    document.getElementsByTagName('body')[0].classList.toggle('overflow-hidden');
    fnToggleClass(fnQuerySelector('.sectionLoading'), 'd-none');
}
/********************* DIV LOADING - END *********************/


/********************* ACTIONS BEFORE THE 'SUBMIT FORM' - BEGIN *********************/
function submitForm() {
    /* APPLY BLUE COLOR FOR STEP 2 CONCLUDED */
    fnAddClass(vElements.spanBadgePaymentDetails, 'd-none');
    fnRemoveClass(vElements.spanBadgePaymentDetailsCheck, 'd-none');

    setTimeout(() => {
        /* TO SHOW THE 'LOADING' BLOCK */
        fnPrefnToggleSectionLoading();
    }, 200);

    setTimeout(() => {
        /* TO HIDE THE 'ORDER DETAILS' BLOCK BY APPLYING EFFECTS */
        fnToggleSectionOrderDetails();

        /* TO HIDE THE 'BUTTONS' BLOCK BY APPLYING EFFECTS */
        fnToggleSectionBtns();

        /* TO GO TO PAGE TOP BY APPLYING EFFECTS */
        fnToTop();

        /* TO SHOW THE 'SUCCESS PAYMENT' BLOCK BY APPLYING EFFECTS */
        fnToggleSectionSuccessPayment();
    }, 1500);
    return;
}
/********************* ACTIONS BEFORE THE 'SUBMIT FORM' - END *********************/


/********************* ORDER DETAILS - BEGIN *********************/
function fnToggleSectionOrderDetails() {
    /* TO HIDE THE 'ORDER DETAILS' BLOCK BY APPLYING EFFECTS */
    fnAddClass(vElements.sectionOrderDetails, 'opacity-0');
    fnAddClass(vElements.sectionOrderDetails, 'd-none');
}
/********************* ORDER DETAILS - BEGIN *********************/


/********************* BUTTONS BLOCK - BEGIN *********************/
function fnToggleSectionBtns() {
    /* TO HIDE THE 'BUTTONS' BLOCK BY APPLYING EFFECTS */
    fnAddClass(vElements.sectionBtns, 'd-none');
    fnAddClass(vElements.sectionBtns, 'opacity-0');
}
/********************* BUTTONS BLOCK - END *********************/


/********************* SUCCESS PAYMENT BLOCK - BEGIN *********************/
function fnToggleSectionSuccessPayment() {
    /* TO HIDE THE 'LOADING' BLOCK BY APPLYING EFFECTS */
    fnAddClass(vElements.sectionPaymentInfos, 'd-none');
    fnAddClass(vElements.sectionPaymentInfos, 'opacity-0');

    /* TO HIDE THE 'SECTION STAGE' BLOCK BY APPLYING EFFECTS */
    fnAddClass(vElements.sectionStage, 'd-none');
    fnAddClass(vElements.sectionStage, 'opacity-0');

    /* TO HIDE THE 'SECTION COUPON/TOTALS' BLOCK BY APPLYING EFFECTS */
    fnAddClass(vElements.couponTotals, 'd-none');
    fnAddClass(vElements.couponTotals, 'opacity-0');

    /* TO HIDE THE 'BREADCRUMB SECTION' BLOCK BY APPLYING EFFECTS */
    fnAddClass(vElements.sectionBreadcrumb, 'd-none');
    fnAddClass(vElements.sectionBreadcrumb, 'opacity-0');

    /* TO SHOW THE 'SUCCESS PAYMENT' BLOCK BY APPLYING EFFECTS */
    fnRemoveClass(vElements.sectionSuccessPayment, 'd-none');
    setTimeout(() => {
        fnRemoveClass(vElements.sectionSuccessPayment, 'opacity-0');
    }, 500);

    /* MORE EFFECTS TO SHOW THE 'SUCCESS PAYMENT' BLOCK */
    setTimeout(() => {
        fnRemoveClass(vElements.sectionSuccessPayment, 'scale0');
        fnAddClass(vElements.sectionSuccessPayment, 'toggleScalePayment');
    }, 1000);
}
/********************* SUCCESS PAYMENT BLOCK - END *********************/


/********************* RELOAD THE PAGE - END *********************/
function fnReloadPage() {
    document.location = "index.html";
}
/********************* RELOAD THE PAGE - END *********************/


/********************* GO TO PAGE TOP - BEGIN *********************/
function fnToTop() {
    /* TO GO TO PAGE TOP BY APPLYING EFFECTS */
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
};
/********************* GO TO PAGE TOP - END *********************/


/********************* TO DECREASE ONE UNIT OF CURRENTLY PRODUCT - BEGIN *********************/
function fnItemDecrease(elem) {
    let targetInput = elem.parentNode.nextElementSibling.children[0];
    if (parseInt(targetInput.innerHTML.trim()) > 1) {
        let newValue = parseFloat(targetInput.innerHTML.trim()) - 1;
        targetInput.innerHTML = newValue;

        /* TO UPDATE THE SUBTOTAL PRICE */
        fnUpdateSubTotPrice();
    }
}
/********************* TO DECREASE ONE UNIT OF CURRENTLY PRODUCT - END *********************/


/********************* TO INCREASE ONE UNIT OF CURRENTLY PRODUCT - BEGIN *********************/
function fnItemIncrease(elem) {
    let targetInput = elem.parentNode.previousElementSibling.children[0];
    if (parseInt(targetInput.innerHTML.trim()) >= 0 && parseInt(targetInput.innerHTML.trim()) < 100) {
        let newValue = parseFloat(targetInput.innerHTML.trim()) + 1;
        targetInput.innerHTML = newValue;

        /* TO UPDATE THE SUBTOTAL PRICE */
        fnUpdateSubTotPrice();
    }
}
/********************* TO INCREASE ONE UNIT OF CURRENTLY PRODUCT - END *********************/


/********************* TO UPDATE THE SUBTOTAL PRICE - BEGIN *********************/
function fnUpdateSubTotPrice() {
    let productList = fnQuerySelectorAll('.trProd');

    productList.forEach(product => {
        let tdUn = product.children[0].children[0].children[2].children[1].children[0].innerHTML.trim();
        let inputQty = product.children[1].children[0].children[1].children[0].innerHTML.trim();
        let tdSubTot = product.children[2].children[0];

        tdSubTot.innerHTML = (parseFloat(tdUn) * parseFloat(inputQty)).toFixed(2);
        if (tdUn != null && inputQty != null && tdSubTot != null) {
        }
    });

    /* TO UPDATE THE TOTAL ORDER */
    fnUpdateTotalPrice();
}
/********************* TO UPDATE THE SUBTOTAL PRICE - END *********************/


/********************* TO UPDATE THE TOTAL ORDER - BEGIN *********************/
function fnUpdateTotalPrice() {

    let tdSubTot = fnQuerySelectorAll('.tdSubTot');
    let total = 0;

    /* SUM TOTALS */
    tdSubTot.forEach((td) => {
        total += parseFloat(td.innerHTML.trim());
    });

    /* INSERT THE NEW VALUE ON SUBTOTAL ORDER */
    fnQuerySelector('.tdSumSubTotals').innerHTML = total.toFixed(2);

    /* APPLY POSSIBLE COUPON */
    fnApplyCoupon();

    let valueTdCouponDiscount = parseFloat(fnQuerySelector('.tdCouponDiscount').innerHTML.trim());
    total = (total - parseFloat(valueTdCouponDiscount));

    /* INSERT THE NEW VALUE ON TOTAL ORDER */
    fnQuerySelector('.tdTotal').innerHTML = total.toFixed(2); //ivan
    fnQuerySelector('.tdTotal').innerHTML = (parseFloat(total + parseFloat(fnQuerySelector('.tdShipping').innerHTML.trim()))).toFixed(2);

    /* INSERT THE NEW VALUE ON PAYMENT INFORMATION SECTION */
    fnQuerySelector('.PaymentInfosValue').innerHTML = `- ($ ${total.toFixed(2)})`;

    /* INSERT THE NEW VALUE ON PAY BUTTON */
    fnQuerySelector('.btnPay span').innerHTML = `- ($ ${total.toFixed(2)})`;

    /* UPDATE THE INSTALLMENT */
    fnUpdateInstallment();

    /*  */
    fnCheckQuantityProducts();
}
/********************* TO UPDATE THE TOTAL ORDER - END *********************/


/********************* TO ALLOW ONLY NUMBERS - BEGIN *********************/
function onlyNumbers(e) {

    var charCode = e.charCode ? e.charCode : e.keyCode;
    // charCode 8 = backspace   
    // charCode 9 = tab
    if (charCode != 8 && charCode != 9) {
        if (charCode < 49 || charCode > 57) {
            return false;
        }
    }
}
/********************* TO ALLOW ONLY NUMBERS - END *********************/


/********************* TO REMOVE A PRODUCT FROM LIST - BEGIN *********************/
function fnRemoveProduct(id) {
    fnQuerySelector('.trProd_' + id).remove();

    /* UPDATE EACH SUB PRICE */
    fnUpdateSubTotPrice();
}
/********************* TO REMOVE A PRODUCT FROM LIST - END *********************/


/********************* IF REMOVE ALL PRODUCTS FROM THE LIST - END *********************/
function fnCheckQuantityProducts() {

    if (parseFloat(fnQuerySelector('.tdSumSubTotals').innerHTML) == 0) {
        let divKeepShopping = fnQuerySelector('.divKeepShopping');
        let divCheckout = fnQuerySelector('.divCheckout');

        fnToTop();

        /* TO ADD THE MARGIN BOTTOM */
        fnAddClass(vElements.sectionBtns, 'mb-5');

        fnRemoveClass(divKeepShopping.parentNode, 'justify-content-end');
        fnRemoveClass(divCheckout, 'col-12');
        fnRemoveClass(divKeepShopping, 'd-none');
        fnAddClass(divCheckout, 'd-none');
        setTimeout(() => {
            fnAddClass(divKeepShopping, 'col-12');
        }, 100);
        fnAddClass(fnQuerySelector('.sectionStage'), 'scale0');
        fnAddClass(fnQuerySelector('.sectionPaymentMethods'), 'scale0');
        fnAddClass(fnQuerySelector('.sectionPaymentInfos'), 'scale0');
        setTimeout(() => {
            fnAddClass(fnQuerySelector('.sectionStage'), 'd-none');
            fnAddClass(fnQuerySelector('.sectionPaymentMethods'), 'd-none');
            fnAddClass(fnQuerySelector('.sectionPaymentInfos'), 'd-none');
        }, 500);
    }
}
/********************* IF REMOVE ALL PRODUCTS FROM THE LIST - END *********************/


/********************* TO UPDATE THE INSTALLMENT - BEGIN *********************/
function fnUpdateInstallment() {
    let maxInstallment = 6;

    let installment = fnQuerySelector('#Installment');
    installment.innerHTML = "";

    let totalValue = fnQuerySelector('.tdTotal').innerHTML.trim();

    var elem = document.createElement('option');
    elem.value = 0;
    elem.text = 'Options';
    installment.add(elem, installment.options[0]);

    if (parseFloat(totalValue) > 10) {
        for (let i = 1; i < (maxInstallment + 1); i++) {
            elem = document.createElement('option');
            let vValue = (totalValue / i).toFixed(2);
            elem.text = `${i} x $ ${vValue} - ($ ${totalValue})`;

            if (parseFloat(vValue) > 0) {
                installment.add(elem, installment.options[i]);
            }
        }
    } else {
        elem = document.createElement('option');
        elem.text = `1 x $ ${totalValue} - ($ ${totalValue})`;
        installment.add(elem, installment.options[1]);
    }
}
/********************* TO UPDATE THE INSTALLMENT - END *********************/


/********************* TO APPLY COUPONS - BEGIN *********************/
function fnApplyCoupon() {
    let inputCoupon = fnQuerySelector('#coupon');
    let discount = 0;

    if (inputCoupon.value !== '' || inputCoupon.value === 'cp10off') {
        let SubTotal = fnQuerySelector('.tdSumSubTotals').innerHTML.trim();
        discount = (parseFloat(SubTotal) * 0.1);
    }

    fnQuerySelector('.tdCouponDiscount').innerHTML = (discount).toFixed(2);

    /* TO APPLY SHIPPING */
    fnApplyShipping();
}
/********************* TO APPLY COUPONS - END *********************/


/********************* TO APPLY SHIPPING - BEGIN *********************/
function fnApplyShipping() {
    let tdSumSubTotals = parseFloat(fnQuerySelector('.tdSumSubTotals').innerHTML.trim());

    /* A FIXED VALUE FOR DEMONSTRATION ONLY */
    fnQuerySelector('.tdShipping').innerHTML = (tdSumSubTotals === 0) ? (0).toFixed(2) : (4.99).toFixed(2);
}
/********************* TO APPLY COUPONS - END *********************/


/********************* TO SHOW/HIDE TO TOP BUTTON - BEGIN *********************/
function fnShowHideAToTop() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        fnRemoveClass(fnQuerySelector('.aToTop'), 'scale0');
    } else {
        fnAddClass(fnQuerySelector('.aToTop'), 'scale0');
    }
}
/********************* TO SHOW/HIDE TO TOP BUTTON - END *********************/





/********************* FUNCTION AUTO EXECUTABLE - BEGIN *********************/
/* TO UPDATE THE SUBTOTAL PRICE */
fnUpdateSubTotPrice();

/* TO UPDATE THE INSTALLMENTS OPTIONS */
fnUpdateInstallment();

/* TO SHOW/HIDE TO TOP BUTTON */
window.onscroll = () => fnShowHideAToTop();
/********************* FUNCTION AUTO EXECUTABLE - END *********************/