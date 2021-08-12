import emailjs from "emailjs-com";
import React from 'react';
import './styles/ContactForm.css';

export default function ContactForm({ backgroundImg }) {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_vgyo99a', 'template_kqymnmk', e.target, 'user_jMWnlaeLAc6VuXUX6i7eh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }

    return(
        <div>
            <div className="container" style={{
                backgroundImage: `url(${backgroundImg})`
            }}>
            <form onSubmit={sendEmail}>
            <div className="contents">
                <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Name" name="name" />
                    </div>
                    <div className="col-8 form-group mx-auto">
                        <input type="email" className="form-control" placeholder="Email" name="email" />
                    </div>
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Subject" name="subject" />
                    </div>
                    <div className="col-8 form-group mx-auto">
                        <textarea className="form-control" id="" cols="30" rows="8" placeholder="" name="message"></textarea>
                    </div>
                    <div className="col-8 pt-2 mx-auto">
                        <input type="submit" className="btn btn-info" value="Don't @ Me"></input>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
}