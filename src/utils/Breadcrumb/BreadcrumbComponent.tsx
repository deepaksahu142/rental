import React, { Component } from "react";
import { Link } from "react-router-dom";

class BreadcrumbComponent extends Component<any, any> {
  render() {
    return (
      <ul className="breadcrumb">
        {this.props.param1 !== undefined && this.props.param2 !== undefined ? (
          <>
            <li>
              <Link to={`/${this.props.param1}`}>Equipment Catalog</Link>
            </li>
            <li>{this.props.param2}</li>
          </>
        ) : (
          <>
            <li>Equipment Catalog</li>
          </>
        )}
      </ul>
    );
  }
}
export default BreadcrumbComponent;
