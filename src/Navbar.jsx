import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <h3 className="logo">Strapi Menu</h3>
      </div>
      <button className="toggle-btn" onClick={openSidebar}>
        <FaBars />
      </button>
      {/* Links */}
    </nav>
  );
};
export default Navbar;
