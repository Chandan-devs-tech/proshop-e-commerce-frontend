import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryClick = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const mainCategories = [
    { name: 'Clothing', subCategories: ['Casual', 'Party', 'Undergarments'] },
    { name: 'Footwear', subCategories: ['Footwear'] },
    { name: 'Bags', subCategories: ['Bags'] },
    {
      name: 'Accessories',
      subCategories: ['Watch', 'Jewellery', 'Styling Accessories'],
    },
    { name: 'Fragrance ', subCategories: ['Perfumes'] },
    // { name: 'Mobile Accessories', subCategories: ['Mobile Accessories'] },
    // { name: 'Beauty', subCategories: ['Beauty Products'] },
    // { name: 'Skin Care', subCategories: ['Skin Care Products'] },
    // { name: 'Gifting ', subCategories: ['Gifting Items'] },
  ];

  return (
    <>
      <div className="header">
        <div className="hum-logo">
          <Link className="nav-link" to="/">
            <img
              src={`${process.env.PUBLIC_URL}/assets/proshop-logo.png`}
              className="logo"
              alt="logo-img"
            />
          </Link>
          <FontAwesomeIcon
            className="hamburger"
            icon={faBars}
            style={{ color: '#ffffff' }}
            onClick={toggleSidebar}
          />
        </div>
        <div className="login-cart">
          <Link className="nav-link" to="/login">
            LOG IN
          </Link>
          <Link className="nav-link" to="/shopping-bag">
            BAG (0)
          </Link>
        </div>
      </div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <nav className="navbar">
          <ul className="nav-list">
            {mainCategories.map((category) => (
              <li key={category.name} className="nav-item">
                <DropdownButton
                  title={category.name}
                  id={`dropdown-button-drop-${category.name}`}
                  variant="secondary"
                  onSelect={() => handleCategoryClick(category.name)}
                  drop="down"
                >
                  {category.subCategories.map((subCategory) => (
                    <Dropdown.Item key={subCategory} eventKey={subCategory}>
                      {subCategory}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
