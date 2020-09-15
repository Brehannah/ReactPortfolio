import React from 'react';
// import react from './images/BHresume.pdf';


const index = () => {
  return(
      <div>
    <div className="container">
        <h1><strong>BREANA HANNAH</strong></h1>
    
        <p className="lead" id="subHeader"> JUNIOR FULL STACK WEB DEVELOPER</p>
    </div>
    <br/>
    <br/>
<div className="container">
<br/>
<p>My name is Breana Hannah, I attend a full stack development program at Georgia Technical College. I am
    expanding my skills on the daily. This program has opened my eyes to the beauty of technology. I have plenty
    to learn and I am eager to learn it.</p>
<br/>
<p>I am currently located in Richmond Hill, Georgia as I earn my Bachlors Degree. I have a feeling that the
    aspect of learning will never end for me. My motivation for my consistent go-getter spirit is definitely my
    family and the vision that I have for a bright future.</p>

</div>
<p><strong>hannah.breana@gmail.com</strong></p>
<div className="container">
    <div className="row">
        <div className="col">
            <a href="https://github.com/Brehannah?tab=repositories"><button className="btn btn-outline-dark">GITHUB</button></a>
           
            <a href="www.linkedin.com/in/breana-hannah123"><button className="btn btn-outline-dark">LINKEDIN</button></a>
          
            <a href="/images/BHresume.pdf" target="_blank"><button className="btn btn-outline-dark">RESUME</button></a>
        </div>
    </div>
</div>
</div>

  );
}

export default index;