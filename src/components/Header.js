import logo from '../assets/img/logo-w.png'; 
import user from '../assets/img/user.png';
import brief from '../assets/img/brief.png';
import message from '../assets/img/message.png';
import plus from '../assets/img/plus.png';

export default function Header() {
  return (
    <header className='container'>

      <img className='tech-logo' src={logo} alt="Logo" />
      <div>
        <img className='icon' src={user} alt="Logo" />
        <img className='icon' src={brief} alt="Logo" />
        <img className='icon' src={message} alt="Logo" />
        <img className='icon' src={plus} alt="Logo" />
      </div>
    </header>
  );
}