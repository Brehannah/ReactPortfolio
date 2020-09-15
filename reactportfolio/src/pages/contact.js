import React from 'react';


const Contact = () => {
  return (
    <div>
      <div className="container" >
        <div className="row" >
          <div className="col"><h1>Contact Me</h1></div>
        </div>
        <div className="row" >
          <div className="col-lg-6">
            <div>Name</div>
            <input id="name" className="form-control" type="text" name="Your Name"
              placeholder="Name" />
            <br />
            <div>Email</div>
            <input id="email" className="form-control" type="email" name="Your Email"
              placeholder="johnsmith@gmail.com" />
            <br />

            <div class="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <button type="button" class="btn btn-success">Submit</button>

          </div>
        </div>
      </div>

    </div>

  );
}

export default Contact;