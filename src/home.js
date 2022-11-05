import React from "react";
import { NavLink } from "react-router-dom";
import './App.css';
import img from './side-profile-img.jpg'



function Home() {
    return (
      <div className="App">
        <img img src={img} alt='' id='profile__img' />
        <p className='name'>Michael Eise</p>
        <p id='slack'> Michael007</p>
        <div className='flex'>
          <div className='links'>
            <a href='https://twitter.com/ptolemymicheal' id='twitter'  >Twitter</a>
          </div>
          <div className='links'>
            <a href='https://training.zuri.team/' id='btn__zuri' >Zuri Team</a>
          </div>
          <div className='links'>
            <a href='http://books.zuri.team' id='books' >Zuri Books</a>
          </div>
          <div className='links'>
            <a id='book__python' href='https://books.zuri.team/python-for-beginners?ref_id=<Michael007>'  >Python Books</a>
          </div>
          <div className='links'>
            <a href='https://background.zuri.team' id='pitch' >Background check for coders</a>
          </div>
          <div className='links'>
            <a href='https://books.zuri.team/design-rules' id='book__design' >Design books</a>
          </div>
          <div className='links'>
            <NavLink to={'/contact'} id='contact'>Contact Me</NavLink>
          </div>
          <footer className='footer'></footer>
        </div>
  
      </div>
  
    );
  }
  
  export default Home; 
  