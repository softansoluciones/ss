function SaveCustomer() {

    var customerDocument = document.getElementById('page_requirements_customer_document').value;
    var customerName = document.getElementById('page_requirements_customer_name').value;
    var customerPhone = document.getElementById('page_requirements_customer_phone').value;
    var customerEmail = document.getElementById('page_requirements_customer_email').value;
    var xhr = new XMLHttpRequest();
    var formData = new FormData();

    formData.append("customer_document", customerDocument);
    formData.append("customer_name", customerName);
    formData.append("customer_phone", customerPhone);
    formData.append("customer_email", customerEmail);

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState == 4) {
            if (xhr.status == 200) {
                var datos = JSON.parse(this.responseText)
                if (datos.Response != 0) {
                    if (datos.Response == 228) {
                        //window.location = "noauth.html";
                    }
                    sessionStorage.setItem('customer_id', datos.Response[0].CUSTOMERID);
                    document.getElementById('page_requirements_customer_send').classList.remove("backText");
                    document.getElementById('page_requirements_customer_sending').classList.add("backText");
                    requirements(2);
                } else {
                    document.getElementById('page_requirements_customer_send').classList.remove("backText");
                    document.getElementById('page_requirements_customer_sending').classList.add("backText");
                    var btns = document.getElementById('btns');
                    var msg = document.getElementById('msg');
                    btns.innerHTML = "<input data-dismiss='modal' aria-label='Close' class='btn btn-ss-normal' value='Aceptar'/>";
                    msg.innerHTML = "<center><p>No hemos podido procesar tu información, por favor vuelve a intentarlo.</p></center>";
                    $('#modal_msg').modal({
                        backdrop: 'static',
                        keyboard: true,
                        show: true
                    });
                }
            } else {
                document.getElementById('page_requirements_customer_send').classList.remove("backText");
                document.getElementById('page_requirements_customer_sending').classList.add("backText");
                var btns = document.getElementById('btns');
                var msg = document.getElementById('msg');
                btns.innerHTML = "<input data-dismiss='modal' aria-label='Close' class='btn btn-ss-normal' value='Aceptar'/>";
                msg.innerHTML = "<center><p>No hemos podido procesar tu información, por favor vuelve a intentarlo.</p></center>";
                $('#modal_msg').modal({
                    backdrop: 'static',
                    keyboard: true,
                    show: true
                });
            }
        }
    });

    xhr.open("POST", "https://softansol.com/api-admin/public/api/Customers");
    xhr.setRequestHeader("authtoken", Gustoken);
    xhr.send(formData);
}

function SaveRequirement(details) {

    var requirementName = document.getElementById('page_requirements_requirement_name').value;
    var requirementDescription = document.getElementById('page_requirements_requirement_description').value;
    var customerId = parseInt(sessionStorage.getItem('customer_id'));
    var objDetails = JSON.stringify(details);
    var xhr = new XMLHttpRequest();
    var formData = new FormData();

    formData.append("requirement_name", requirementName);
    formData.append("requirement_description", requirementDescription);
    formData.append("customer_id", customerId);
    formData.append("requirement_details", objDetails);

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState == 4) {
            if (xhr.status == 200) {
                var datos = JSON.parse(this.responseText)
                if (datos.Response != 0) {
                    if (datos.Response == 228) {
                        //window.location = "noauth.html";
                    }
                    document.getElementById('page_requirements_details_send').classList.remove("backText");
                    document.getElementById('page_requirements_details_sending').classList.add("backText");
                    requirements(4);
                } else {
                    document.getElementById('page_requirements_details_send').classList.remove("backText");
                    document.getElementById('page_requirements_details_sending').classList.add("backText");
                    var btns = document.getElementById('btns');
                    var msg = document.getElementById('msg');
                    btns.innerHTML = "<input data-dismiss='modal' aria-label='Close' class='btn btn-ss-normal' value='Aceptar'/>";
                    msg.innerHTML = "<center><p>No hemos podido procesar tu información, por favor vuelve a intentarlo.</p></center>";
                    $('#modal_msg').modal({
                        backdrop: 'static',
                        keyboard: true,
                        show: true
                    });
                }
            } else {
                document.getElementById('page_requirements_details_send').classList.remove("backText");
                document.getElementById('page_requirements_details_sending').classList.add("backText");
                var btns = document.getElementById('btns');
                var msg = document.getElementById('msg');
                btns.innerHTML = "<input data-dismiss='modal' aria-label='Close' class='btn btn-ss-normal' value='Aceptar'/>";
                msg.innerHTML = "<center><p>No hemos podido procesar tu información, por favor vuelve a intentarlo.</p></center>";
                $('#modal_msg').modal({
                    backdrop: 'static',
                    keyboard: true,
                    show: true
                });
            }
        }
    });

    xhr.open("POST", "https://softansol.com/api-admin/public/api/Requirements");
    xhr.setRequestHeader("authtoken", "A2A7E240SOFTAN-33F7SOL-4DD2-9C34-49270B9F945E");
    xhr.send(formData);
}
