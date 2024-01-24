import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const defaultState = {
  searchbar: '',
  Laptop: false,
  Mobiltelefoner: false,
  Dammsugare: false,
  TV: false,
};

function Sidebar() {
  const [formData, setFormData] = useState(defaultState);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;

    setFormData((data) => ({
      ...data,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <>
      <FontAwesomeIcon icon={faBars} id="sidebarArrow" style={{ opacity: isHovered ? 0 : 1 }} />
      <div className="sidebar" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <div className="sidebar-container">
          <form onSubmit={handleSubmit} className="filter-form">
            <div className="filter-form-search">
              <input
                type="text"
                id="searchbar"
                value={formData.searchbar}
                onChange={handleChange}
                name="searchbar"
                className="searchbar"
                placeholder="Search for product"
              />
            </div>
            <div className="filter-form-category">
              <div className="filter-form-category-item">
                <p
                  className={formData.Laptop ? 'category-active' : null}
                  id="Laptop"
                  onChange={handleChange}
                  onClick={() => handleChange({ target: { name: 'Laptop', type: 'checkbox', checked: !formData.Laptop } })}
                >
                  Laptop
                </p>
              </div>
              <div className="filter-form-category-item">
                <p
                  className={formData.Mobiltelefoner ? 'category-active' : null}
                  id="Mobiltelefoner"
                  onChange={handleChange}
                  onClick={() => handleChange({ target: { name: 'Mobiltelefoner', type: 'checkbox', checked: !formData.Mobiltelefoner } })}
                >
                  Mobiltelefoner
                </p>
              </div>
              <div className="filter-form-category-item">
                <p
                  className={formData.Dammsugare ? 'category-active' : null}
                  id="Dammsugare"
                  onChange={handleChange}
                  onClick={() => handleChange({ target: { name: 'Dammsugare', type: 'checkbox', checked: !formData.Dammsugare } })}
                >
                  Dammsugare
                </p>
              </div>
              <div className="filter-form-category-item">
                <p
                  className={formData.TV ? 'category-active' : null}
                  id="TV"
                  onChange={handleChange}
                  onClick={() => handleChange({ target: { name: 'TV', type: 'checkbox', checked: !formData.TV } })}
                >
                  TV
                </p>
              </div>
            </div>
            <div className="filter-form-submit">
              <button type="submit">Filter</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
