import React, { Component } from "react";
import locationDatas from "../../data/catalog.json";
import { Link } from "react-router-dom";

class MenuComponent extends Component {
  state = {
    childMenu: false,
  };
  showMenu = () => {
    let menus: any = document.getElementById("menu");
    menus.classList.toggle("show");
  };
  render() {
    return (
      <div className="location">
        <h3 className="selectlocation" onClick={this.showMenu}>
          Select Location
        </h3>
        <ul className="main-menu" id="menu">
          {locationDatas.data.locations.map((data) => {
            return (
              <li key={data.dealers_id}>
                <Link to={`/${data.dealers_id}`}>
                  {data.name}
                  <ul className="submenu">
                    {data.branches.map((branch) => {
                      return (
                        <li key={branch.branch_id}>
                          <Link to={`/${data.dealers_id}/${branch.branch_id}`}>
                            {branch.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default MenuComponent;
