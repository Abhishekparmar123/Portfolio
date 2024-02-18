import React from 'react';
import routes from '../../routes';
import { NavLink } from 'react-router-dom';

const NavbarItem = props => (
  <NavLink className={(navData) => navData.isActive ? "activeNav navbar-item is-capitalized" : "inactiveNav navbar-item is-capitalized" } to={`/${props.page}`} >
    {props.page}
  </NavLink>
);
const NavbarBurger = props => (
  <button
    onClick={props.toggleMenu}
    className={`button navbar-burger ${props.active ? 'is-active' : ''}`}
  >
    <span />
    <span />
    <span />
  </button>
);

export default class Navbar extends React.Component {
  state = {
    activeMenu: false,
  };
  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu,
    });
  };
  render() {
    let pages = routes.map((element) => element.name);
    let navbarItems = pages.map(page => <NavbarItem page={page} key={page} />);
    return (
      <nav className={"navbar is-fixed-top is-black container"}>
        <div className="navbar-brand">
            <NavLink className="is-size-4 navbar-item has-text-danger has-text-weight-medium" to={"/"}>
                Portfolio
            </NavLink>
            <NavbarBurger
                active={this.state.activeMenu}
                toggleMenu={this.toggleMenu}
            />
        </div>
        <div
          className={`navbar-menu has-background-black-bis ${this.state.activeMenu ? 'is-active' : ''}`}
        >
          <div className="navbar-start">{navbarItems}</div>
        </div>
      </nav>
    );
  }
}
