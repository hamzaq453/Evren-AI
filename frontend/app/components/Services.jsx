import React from 'react';
import './stylesheet.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGear,
  faShield,
  faBrain,
  faDna,
  faMagnifyingGlassChart,
  faMicrochip
} from '@fortawesome/free-solid-svg-icons';


function Services() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 coi-lg-4 d-flex align-items-stretch">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon">
                <FontAwesomeIcon icon={faGear} className='fonticon' />
              </div>
              <h4 className="title">
                <a className='title_a' href="services/services6.php">Custom AI Solution Development</a>
              </h4>
              <p className="description text-left ">
                Craft your perfect AI tool. Build bespoke solutions that fit your unique needs.
              </p>
            </div>
          </div>
          <div className="col-md-4 coi-lg-4 d-flex align-items-stretch">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div className="icon">
                <FontAwesomeIcon icon={faShield} className='fonticon' />
              </div>
              <h4 className="title">
                <a className='title_a' href="services/services5.php">AI-Based Security Solutions</a>
              </h4>
              <p className="description text-left ">
                Fortify your defenses. Detect threats, prevent breaches, and sleep soundly with AI security.
              </p>
            </div>
          </div>
          <div className="col-md-4 coi-lg-4 d-flex align-items-stretch">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div className="icon">
                <FontAwesomeIcon icon={faBrain} className='fonticon' />
              </div>
              <h4 className="title">
                <a className='title_a' href="services/services4.php">Research and Development in AI</a>
              </h4>
              <p className="description text-left ">
                Push the boundaries. Be at the forefront of innovation with collaborative AI research.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5 ">
          <div className="col-md-4 coi-lg-4 d-flex align-items-stretch">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div className="icon">
                <FontAwesomeIcon icon={faDna} className='fonticon' />
              </div>
              <h4 className="title">
                <a className='title_a' href="services/services3.php">AI in Healthcare</a>
              </h4>
              <p className="description text-left ">
                Revolutionize patient care. Optimize diagnosis, automate tasks, and deliver personalized treatments.
              </p>
            </div>
          </div>
          <div className="col-md-4 coi-lg-4 d-flex align-items-stretch">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div className="icon">
                <FontAwesomeIcon icon={faMagnifyingGlassChart} className='fonticon' />
              </div>
              <h4 className="title">
                <a className='title_a' href="services/services2.php">Advanced Analytics and Data Science</a>
              </h4>
              <p className="description text-left ">
                Unlock hidden insights. Extract actionable intelligence from your data and power smarter decisions.
              </p>
            </div>
          </div>
          <div className="col-md-4 coi-lg-4 d-flex align-items-stretch">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div className="icon">
                <FontAwesomeIcon icon={faMicrochip} className='fonticon' />
              </div>
              <h4 className="title">
                <a className='title_a' href="services/Services1.php">AI Solutions for Business Process Automation</a>
              </h4>
              <p className="description text-left ">
                Work smarter, not harder. Free your team from tedious tasks and boost efficiency with AI automation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services;
