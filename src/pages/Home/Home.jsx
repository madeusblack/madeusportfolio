import React from 'react';
import profile from '../../assets/profile.jpg';
import './Home.css';

const Home = () => (
  <div className='App-div'>
    <div className='title'>
      <h1>
        Hello and welcome to this peaceful place 🏮
      </h1>
    </div>
    <div className='textDiv'>
      <h2>you may wonder why you should stay here reading?</h2>
      <p className='paraph'>
        {`well, that is a good question, please allow me to answer it.
          If you are looking for a dev who is rising and his main goal is to become
        a senior software engineer with passion for his profession, then you should keep reading
        but why this one and not the rest of 24 58 250 applicants for the job, well first of all
        the dev who is behind this site probably wont fall apart in pieces if you ask him to build
        the next facebook or the next instagram , he would probably answer you: "is it really viable
         or useful to someone?".Yep, he would probably question you, but that is because he worries 
         about the entire operation, not just about to finish their work fast and go to watch anime 
         or play videogames. And if you're still interested here comes the 
         contact card, have a nice day 😄.
        `}
      </p>
    </div>
    <div className='contactCard'>
      <img className='Profile' src={profile} alt='profile' />
      <h5 className='Name'>Yayson Olivares Herrera</h5>
      <p className='description'>Software Developer, ReactJs, Javascript, Aws, Netlify, Linux Severs</p>
      <a href='/contact' className='contact'>Contact</a>
      <div className='workLocation'>
        <h3>Work</h3>
        <p>I. Municipalidad de Nogales</p>
        <h3>Location</h3>
        <p>El Melón, Valparaiso, Chile</p>
      </div>
    </div>
  </div>
);
export default Home;
