import React from "react";
// class NavBar extends Component {
//   render() {
//
//   }
// }

const NavBar = (props) => {
  // console.log(props.counters);
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="www.youtube.com">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {/* there is no this.props in here so we use props as an argument  */}
          {props.counters.reduce(
            (totalCounters, counter) => totalCounters + counter.value,
            0
          )}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
