import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';
import Navlinks from './Navlinks';

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <nav className="nav-center">
      <h3 className="logo">Strapi Menu</h3>
      <button className="toggle-btn" onClick={openSidebar}>
        <FaBars />
      </button>
      <Navlinks />
    </nav>
  );
};
export default Navbar;
