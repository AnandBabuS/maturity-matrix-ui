import React from 'react'
import { Link } from 'react-router-dom'

class About extends React.Component {
   render() {
      return (
        <div className="container-fluid">
            <div className="row">
                <section className="col-md-12 about relative">
                    <h3 className="align-center"> Tool assess the DevOps Maturity Level of a Organization through various dimensions and attributes spread across the following areas. </h3>
                    <ul className="lists">
                        <li className="items">Process & Organization</li>
                        <li className="items">Application Architecture</li>
                        <li className="items">Testing & Verification</li>
                        <li className="items">Deployment routines</li>
                        <li className="items">Configuration Management</li>
                        <li className="items">Build & Continuous integration</li>
                    </ul>
                    <div>
                        The intended audience of this tool are the all the Key Stack Holders who are involved in planning and implementing the DevOps Life Cycle in their Organization. The Organization can understand current DevOps Maturity persist Model with the help of this tool.
                    </div>
                    <h3>
                        The questionnaire consist of set of 46 questions, broadly classified into 6 categories.
                    </h3>
                    <ul className="lists">
                        <li className="items">There are 3 options for each question. On selection of the options, Maturity Level will be Assessed and the Organization current DevOps Maturity Model will be identified.</li>
                        <li className="items">Each of attributes on DevOps carries weightage depending on the degree of importance of Organization current level.</li>
                        <li className="items">There are 3 or more critical questions in the questionnaire.</li>
                        <li className="items">Select one among the 3 options available. ( Please select the option, which is closest to the current prevalent condition in your projects).</li>
                        <li className="items">The Dashboard is a quick visual representation of the scorecard and indicates the current Maturity Model and helps to identify the steps to be followed from achieving the matured model compared to the existing stages.</li>
                    </ul>
                    <div className="start-button">
                        <Link className="btn btn-light btn-xl js-scroll-trigger" to={'/test'}>Get Started</Link>
                        <a class="btn btn-light btn-xl js-scroll-trigger">Get Started!</a>
                    </div>
                </section>
            </div>
        </div>
      );
   }
}
export default About;
