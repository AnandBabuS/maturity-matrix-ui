import React from 'react'

class Contact extends React.Component {
   render() {
      return (
        <div className="container-fluid">
            <div className="row">
                <div class="col-lg-8 mx-auto text-center">
                    <h2 class="section-heading">Let's Get In Touch!</h2>
                    <hr class="my-4" />
                    <p class="mb-5">
                        Please send us your valuable feedback so that we will refine our questions
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 ml-auto text-center">
                    <i class="fa fa-phone fa-3x mb-3 sr-contact"></i>
                    <p>+91-9003345542</p>
                </div>
                <div class="col-lg-4 mr-auto text-center">
                    <i class="fa fa-envelope-o fa-3x mb-3 sr-contact"></i>
                    <p>
                        <a href="mailto:anandbabu.achilles@gmail.com">anandbabu.achilles@gmail.com</a>
                    </p>
                </div>
            </div>
        </div>
      );
   }
}
export default Contact;
