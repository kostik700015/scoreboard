import './App.css';
import App from './App';
import Stats from './Stats';


function Header(props) {
    return (
      <header>
        <Stats players={props.players}/>
        <h1>{props.title}</h1>
      </header>
    );
  }

  export default Header;