import React from 'react'

class Contact extends React.Component {
   render() {
      return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-8 mx-auto text-center">
                    <h2 className="section-heading">Let's Get In Touch!</h2>
                    <hr className="my-4" />
                    <p className="mb-5">
                        Please send us your valuable feedback so that we will refine our questions
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 ml-auto text-center">
                    <i className="fa fa-phone fa-3x mb-3 sr-contact"></i>
                    <p>+91-9003345542</p>
                </div>
                <div className="col-lg-4 mr-auto text-center">
                    <i className="fa fa-envelope-o fa-3x mb-3 sr-contact"></i>
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
