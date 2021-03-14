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
    spanBadgePaymentDetailsCheck: fnQuerySelector('.spanBadgePaymentDetailsCheck')
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
    }, 500);

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
    let targetInput = elem.nextElementSibling;
    if (parseInt(targetInput.value) > 1) {
        const newValue = parseFloat(targetInput.value) - 1;
        targetInput.value = newValue;

        /* TO UPDATE THE SUBTOTAL PRICE */
        fnUpdateSubTotPrice();
    }
}
/********************* TO DECREASE ONE UNIT OF CURRENTLY PRODUCT - END *********************/


/********************* TO INCREASE ONE UNIT OF CURRENTLY PRODUCT - BEGIN *********************/
function fnItemIncrease(elem) {
    let targetInput = elem.previousElementSibling;
    if (parseInt(targetInput.value) >= 0 && parseInt(targetInput.value) < 100) {
        const newValue = parseFloat(targetInput.value) + 1;
        targetInput.value = newValue;

        /* TO UPDATE THE SUBTOTAL PRICE */
        fnUpdateSubTotPrice();
    }
}
/********************* TO INCREASE ONE UNIT OF CURRENTLY PRODUCT - END *********************/


/********************* TO UPDATE THE SUBTOTAL PRICE - BEGIN *********************/
function fnUpdateSubTotPrice() {
    const productList = fnQuerySelectorAll('.tdDescription');

    for (let i = 0; i < productList.length; i++) {

        let tdUn = fnQuerySelector(".tdUn_" + (i + 1) + " span");
        let inputQty = fnQuerySelector(".inputQty_" + (i + 1));
        let tdSubTot = fnQuerySelector(".tdSubTot_" + (i + 1) + " span");

        if (tdUn != null && inputQty != null && tdSubTot != null) {
            tdSubTot.innerHTML = (parseFloat(tdUn.innerHTML.trim()) * parseFloat(inputQty.value.trim())).toFixed(2);
        }
    }

    /* TO UPDATE THE TOTAL ORDER */
    fnUpdateTotalPrice();
}
/********************* TO UPDATE THE SUBTOTAL PRICE - END *********************/


/********************* TO UPDATE THE TOTAL ORDER - BEGIN *********************/
function fnUpdateTotalPrice() {
    const tdSubTot = fnQuerySelectorAll('.tdSubTot span');
    let total = 0;

    tdSubTot.forEach((td) => {
        total += parseFloat(td.innerHTML.trim());
    });

    /* INSERT THE NEW VALUE */
    fnQuerySelector('.tdTotal span').innerHTML = total.toFixed(2);
}
/********************* TO UPDATE THE TOTAL ORDER - END *********************/


/********************* TO ALLOW ONLY NUMBERS - BEGIN *********************/
function onlyNumbers(e) {
    var charCode = e.charCode ? e.charCode : e.keyCode;
    // charCode 8 = backspace   
    // charCode 9 = tab
    if (charCode != 8 && charCode != 9) {
        if (charCode < 49 || charCode > 57) {
            console.log('false');
            return false;
        }
    }
}
/********************* TO ALLOW ONLY NUMBERS - END *********************/


/********************* TO REMOVE A PRODUCT FROM LIST - BEGIN *********************/
function fnRemoveProduct(id) {
    fnQuerySelector('.trProd_' + id).innerHTML = "";
}
/********************* TO REMOVE A PRODUCT FROM LIST - END *********************/


/********************* TO REMOVE A PRODUCT FROM LIST - END *********************/
function fnCheckQuantityProducts() {

    if (parseFloat(fnQuerySelector('.tdTotal span').innerHTML) == 0) {
        let divKeepShopping = fnQuerySelector('.divKeepShopping');
        let divCheckout = fnQuerySelector('.divCheckout');

        fnToTop();

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
/********************* TO REMOVE A PRODUCT FROM LIST - END *********************/





/********************* FUNCTION AUTO EXECUTABLE - BEGIN *********************/
/* TO UPDATE THE SUBTOTAL PRICE */
fnUpdateSubTotPrice();
/********************* FUNCTION AUTO EXECUTABLE - END *********************/