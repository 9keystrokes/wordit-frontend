import React from "react";
import khushal from "../assets/img1.jpg"; // AI Image or any image for Khushal
import nayan from "../assets/img2.jpg"; // AI Image or any image for Nayan
import yash from "../assets/img3.jpg"; // AI Image or any image for Yash
import ashutosh from "../assets/img4.jpg"; // AI Image or any image for Ashutosh
import "../css/Contact.css";
import { GoMail, GoMarkGithub } from "react-icons/go";
import { GrLinkedin } from "react-icons/gr";

export default function Contact() {
  return (
    <div className="container mt-3">
      <div className="card p-3 mb-3 main-body">
        <div className="banner bg-warning">
          <h1>Hello, Welcome to our Contact Page!</h1>
          <div>
            <h3>Developers : </h3>
          </div>
        </div>
        
        {/* Developer 1: Khushal Bansal */}
        <div className="d-flex  mt-3">
          <img className="mr-3 image-style" src={khushal} alt="Developer" />
          <div className="justifyparent">
            <div className="d-flex container-fluid justify-content-center">
              <h3>Khushal Bansal</h3>
            </div>
            <br />
            <h4>Contact Me :</h4>
            <a
              className="text-dark"
              rel="noreferrer"
              target="_blank"
              href="mailto:khushal.bansal@example.com"
            >
              <h5>{<GoMail />} : khushal.bansal@example.com</h5>
            </a>
            <a
              className="text-dark"
              rel="noreferrer"
              target="_blank"
              href="https://github.com/khushalbansal"
            >
              <h5>{<GoMarkGithub />} : khushalbansal</h5>
            </a>
            <a
              className="text-dark"
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/khushal-bansal/"
            >
              <h5>{<GrLinkedin />} : Khushal Bansal</h5>
            </a>
            <div className="margin">
              <h4>Technologies Used : </h4>
              <ul className="skill">
                <li>Html</li>
                <li>CSS</li>
                <li>Node js</li>
                <li>Express js</li>
                <li>React js</li>
                <li>MongoDB</li>
              </ul>
            </div>

            <h4>About Me :</h4>
            <p className="contentjustify">
              Hi, I am Khushal Bansal, a passionate developer from India. I specialize in Full-Stack development and enjoy working on projects that blend technology with business solutions.
            </p>
          </div>
        </div>
        
        <hr />

        {/* Developer 2: Nayan */}
        <div className="d-flex  mt-3">
          <img className="mr-3 image-style" src={nayan} alt="Developer" />
          <div className="justifyparent">
            <div className="d-flex container-fluid justify-content-center">
              <h3>Nayan</h3>
            </div>
            <br />
            <h4>Contact Me :</h4>
            <a
              className="text-dark"
              rel="noreferrer"
              target="_blank"
              href="mailto:nayan@example.com"
            >
              <h5>{<GoMail />} : nayan@example.com</h5>
            </a>
            <a
              className="text-dark"
              rel="noreferrer"
              target="_blank"
              href="https://github.com/nayan"
            >
              <h5>{<GoMarkGithub />} : nayan</h5>
            </a>
            <a
              className="text-dark"
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/nayan/"
            >
              <h5>{<GrLinkedin />} : Nayan</h5>
            </a>
            <div className="margin">
              <h4>Technologies Used : </h4>
              <ul className="skill">
                <li>Html</li>
                <li>CSS</li>
                <li>Node js</li>
                <li>Express js</li>
                <li>React js</li>
                <li>MongoDB</li>
              </ul>
            </div>

            <h4>About Me :</h4>
            <p className="contentjustify">
              Hi, I am Nayan, a budding developer with a strong passion for learning and solving real-world problems with technology.
            </p>
          </div>
        </div>
        
        <hr />
        
        {/* Developer 3: Yash Meena */}
        <div className="d-flex  mt-3">
          <img className="mr-3 image-style" src={yash} alt="Developer" />
          <div className="justifyparent">
            <div className="d-flex container-fluid justify-content-center">
              <h3>Yash Meena</h3>
            </div>
            <br />
            <h4>Contact Me :</h4>
            <a
              className="text-dark"
              rel="noreferrer"
              target="_blank"
              href="mailto:yash.meena@example.com"
            >
              <h5>{<GoMail />} : yash.meena@example.com</h5>
            </a>
            <a
              className="text-dark"
              rel="noreferrer"
              target="_blank"
              href="https://github.com/yashmeena"
            >
              <h5>{<GoMarkGithub />} : yashmeena</h5>
            </a>
            <a
              className="text-dark"
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/yashmeena/"
            >
              <h5>{<GrLinkedin />} : Yash Meena</h5>
            </a>
            <div className="margin">
              <h4>Technologies Used : </h4>
              <ul className="skill">
                <li>Html</li>
                <li>CSS</li>
                <li>Node js</li>
                <li>Express js</li>
                <li>React js</li>
                <li>MongoDB</li>
              </ul>
            </div>

            <h4>About Me :</h4>
            <p className="contentjustify">
              Hi, I'm Yash Meena, a software developer focusing on full-stack development and continuous learning.
            </p>
          </div>
        </div>

        <hr />
        
        {/* Developer 4: Ashutosh Sahu */}
        <div className="d-flex  mt-3">
          <img className="mr-3 image-style" src={ashutosh} alt="Developer" />
          <div className="justifyparent">
            <div className="d-flex container-fluid justify-content-center">
              <h3>Ashutosh Sahu</h3>
            </div>
            <br />
            <h4>Contact Me :</h4>
            <a
              className="text-dark"
              rel="noreferrer"
              target="_blank"
              href="mailto:ashutosh.sahu@example.com"
            >
              <h5>{<GoMail />} : ashutosh.sahu@example.com</h5>
            </a>
            <a
              className="text-dark"
              rel="noreferrer"
              target="_blank"
              href="https://github.com/ashutoshsahu"
            >
              <h5>{<GoMarkGithub />} : ashutoshsahu</h5>
            </a>
            <a
              className="text-dark"
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/ashutosh-sahu/"
            >
              <h5>{<GrLinkedin />} : Ashutosh Sahu</h5>
            </a>
            <div className="margin">
              <h4>Technologies Used : </h4>
              <ul className="skill">
                <li>Html</li>
                <li>CSS</li>
                <li>Node js</li>
                <li>Express js</li>
                <li>React js</li>
                <li>MongoDB</li>
              </ul>
            </div>

            <h4>About Me :</h4>
            <p className="contentjustify">
              Hi, I’m Ashutosh, a passionate developer who loves solving problems with code and exploring new technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
