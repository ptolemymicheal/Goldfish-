
import './App.css';
import img from './side-profile-img.jpg' 


function App() {
  return (
    <div className="App">
      <img img src={img} alt='profile picture'  id='profile__img' />
      <p className='name'>Michael Eise</p>
      <p id='slack'> Michael007</p>
      <div className='flex'>
        <div className='links'>
          <a href='https://twitter.com/ptolemymicheal' id='twitter' target="_blank" >Hit me up on twitter @Ptolemymicheal</a>
        </div>
        <div  className='links'>
          <a href='https://training.zuri.team/' id='btn__zuri'  target="_blank">Zuri Team</a>
        </div>
        <div  className='links'>
          <a href='http://books.zuri.team' id='books'  target="_blank">Zuri Books<br />Your all in one shop for design and coding books</a>
        </div>
        <div  className='links'>
          <a  id='book__python' href='https://books.zuri.team/python-for-beginners?ref_id=<Michael007>'  target="_blank">Python Books <br /> Buy my best seller on Python</a>
        </div>
        <div  className='links'>
          <a href='https://background.zuri.team' id='pitch'   target="_blank">Background check for coders <br />Get my Expert opinion</a>
        </div>
        <div  className='links'>
          <a href='https://books.zuri.team/design-rules' id='book__design'  target="_blank">Design books <br />Get one of the best books on design completely free</a>
        </div>
        <footer className='footer'></footer>
      </div>
     
    </div>
    
  );
}

export default App; 
