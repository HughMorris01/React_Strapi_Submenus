import sublinks from './data';

const Navlinks = () => {
  return (
    <div className="nav-links">
      {sublinks.map((item) => {
        return (
          <button key={item.pageId} className="nav-link">
            {item.page}
          </button>
        );
      })}
    </div>
  );
};
export default Navlinks;
