import React, { Component } from 'react';

class Contact extends Component {

    componentDidMount() {

        const zohoContactJavaScript2 = document.createElement("script");
        zohoContactJavaScript2.type = "text/javascript";
        zohoContactJavaScript2.src = "./javascript/zohoContact.js";
        

        const zohoContactJavaScript = document.createElement("script");
        zohoContactJavaScript.type = "application/javascript";
        zohoContactJavaScript.id = "VisitorTracking";
        
        zohoContactJavaScript.innerText = 'var $zoho=$zoho || {};	$zoho.salesiq = $zoho.salesiq || {widgetcode:"b4f79c387194ce745848fed69c9d1c8d52a915a4c0eeeb8e9be93d5169c4d2341a2010ab7b6727677d37b27582c0e9c4", values:{}, ready:function(){}};var d=document; s=d.createElement("script"); s.type="text/javascript"; s.id="zsiqscript"; s.defer=true; s.src="https://salesiq.zoho.com/widget"; t=d.getElementsByTagName("script")[0]; t.parentNode.insertBefore(s,t);';

        zohoContactJavaScript.async = true;
        document.body.appendChild(zohoContactJavaScript);

    }

    validateForm() {
        // Example starter JavaScript for disabling form submissions if there are invalid fields
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        });
    }


    render() {

        return (

            
            <section id='crmWebToEntityForm' className="container-fluid d-flex py-5">

                <form action='https://crm.zoho.com/crm/WebToLeadForm' onSubmit={this.validateForm()} className="container needs-validation" id='WebToLeads2423252000000133009' name='WebToLeads2423252000000133009' method='post' acceptCharset='UTF-8' noValidate>

                    <input type='text' style={ { display: 'none' } } name='xnQsjsdp' defaultValue='32792f121f86136964584d7e253db49cc5e980bc7e0f98f581941da240179823' />
                    <input type='hidden' name='zc_gad' id='zc_gad' defaultValue='' />
                    <input type='text' style={ { display: 'none' } } name='xmIwtLD' defaultValue='28825e3ff2e4d6a9bc3b3d891645d2195653d55fe015a8f59bf93bef7bae1eb4' />
                    <input type='text'  style={ { display: 'none' } } name='actionType' defaultValue='TGVhZHM='/>
                    <input type='text' style={ { display: 'none' } } name='returnURL' defaultValue='https&#x3a;&#x2f;&#x2f;www.devfecta.com&#x2f;contact-thank-you' />
                    <input type='text' style={ { display: 'none' } } id='ldeskuid' name='ldeskuid'/>
                    <input type='text' style={ { display: 'none' } } id='LDTuvid' name='LDTuvid'/>

                    <h2 className="text-white">Contact Us</h2>

                    <div className="row my-3">
                        <label htmlFor='First_Name' className="form-label col-md-2 text-white">First Name</label>
                        <div className="col-md-5 has-validation">
                            <input type='text' className="form-control " id='First_Name' name='First Name' maxLength='40' required />
                            <div className="invalid-feedback">
                                Please enter your first name.
                            </div>
                        </div>
                    
                        <label htmlFor='Last_Name' className="form-label col-md-1 text-white">Last Name</label>
                        <div className="col-md-4 has-validation">
                            <input type='text' className="form-control" id='Last_Name' name='Last Name' maxLength='80' required />
                            <div className="invalid-feedback">
                                Please enter your last name.
                            </div>
                        </div>
                    </div>

                    <div className="row my-3">
                        <label htmlFor='Email' className="form-label col-md-2 text-white">Email</label>
                        <div className="col-md-5 has-validation">
                            <input type='email' className="form-control" placeholder="Example&#x3a; you&#x40;example.com" ftype="email" id='Email' name='Email' maxLength='100' required />
                            <div className="invalid-feedback">
                                Please enter a valid e-mail address.
                            </div>
                        </div>
                    
                        <label htmlFor='Phone' className="form-label col-md-1 text-white">Phone</label>
                        <div className="col-md-4">
                            <input type='text' className="form-control" placeholder="Example&#x3a; &#x28;333&#x29; 333-3333" id='Phone' name='Phone' maxLength='30' />
                        </div>
                    </div>

                    <div className="row my-3">
                        <label htmlFor='Company' className="form-label col-md-2 text-white">Company</label>
                        <div className="col-md-5">
                            <input type='text' className="form-control" id='Company' name='Company' maxLength='100'/>
                        </div>
                    </div>

                    <div className="row my-3">
                        <label htmlFor='Description' className="form-label col-md-2 text-white">Questions/Comments</label>
                        <div className="col-md-10">
                            <textarea className="form-control" id='Description' name='Description' required></textarea>
                            <div className="invalid-feedback">
                                Please enter your questions/comments.
                            </div>
                        </div>
                    </div>
                    
                    <div className="row my-3">
                        <div className="col-md-2"></div>
                        <div className="col-md-10">
                            <label htmlFor='Email_Opt_Out' className="form-check-label text-white">Subscribe To Our Mailing List</label>&nbsp;
                            <input type='checkbox' className="form-check-input" id='Email_Opt_Out' name='Email Opt Out' maxLength='50' />&nbsp;
                        </div>
                    </div>

                    <div className="row my-3 text-center">
                        <div className="col-md-12">
                            <input type="submit" id="formsubmit" className="btn btn-primary col-sm-5 col-md-3 m-2" value="Submit" title="Submit" />
                            <input type="reset" className="btn btn-secondary col-sm-5 col-md-3 m-2" name="reset" value="Reset" title="Reset" />
                        </div>
                    </div>

                </form>

            </section>

        );
    }
}

export default Contact;