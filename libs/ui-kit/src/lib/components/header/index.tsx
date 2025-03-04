import './styles.scss';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Header = ({ navigationItems }) => {
  return (
    <div className="header">
      <div className="header__container">
        <img className="header__logo" src="/assets/images/logo.svg" />
        <div className="header__navigation">
          {navigationItems.map((item, index) => (
            <NavLink className={({ isActive }) => isActive ? 'header__navigation-link active' : 'header__navigation-link'}
                     key={index}
                     to={item.path}>
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
      <img className="header__bg" src="/assets/images/header_bg.svg" />
    </div>
  );
};

Header.propTypes = {
  navigationItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Header;
