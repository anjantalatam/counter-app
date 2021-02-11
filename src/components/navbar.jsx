import React from "react";
// class NavBar extends Component {
//   render() {
//
//   }
// }

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="www.youtube.com">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {/* there is no this.props in here so we use props as an argument  */}
          {props.counters.filter((m) => m.value !== 0).length}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
