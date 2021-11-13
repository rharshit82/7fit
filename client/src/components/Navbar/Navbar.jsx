import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import Button from "@material-ui/core/Button";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="Navbar">
      <div className="containers">
        <h1 to='/'>7FIT</h1>
        <Button onClick={() => loginWithRedirect()} className="logs" color="default">
        <PersonIcon />
      </Button> 
  
        
      </div>
    </div>
  );
};

export default Navbar;
