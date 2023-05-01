import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Sidebar = () => {
  const { closeSidebar } = useGlobalContext();

  return (
    <div>
      <div className="sidebar-header">
        <h3>Strapi Menu</h3>
        <button type="button" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};
export default Sidebar;
