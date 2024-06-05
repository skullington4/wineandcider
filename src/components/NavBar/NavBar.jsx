import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';


export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link className='linkStyle' to="/">Home</Link>
      &nbsp; | &nbsp;
      <Link className='linkStyle' to="/steps">Steps</Link>
      &nbsp; | &nbsp;
      <Link className='linkStyle' to="/projects">Projects</Link>
      &nbsp; | &nbsp;
      <Link className='linkStyle' to="/conversions">Conversions</Link>
      &nbsp; | &nbsp;
      {user && (
        <>   
          <Link className='linkStyle' to="/notes">Notes</Link>
          &nbsp; | &nbsp;
          <Link className='linkStyle' to="/notes/new">New Note</Link>
          &nbsp; | &nbsp;
        </>
      
      )}
      <span  className='linkStyle'>Welcome, {user.name}</span>
      &nbsp;&nbsp;<Link className='linkStyle' to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}