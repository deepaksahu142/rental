import React, { Component } from "react";
import routes from "../../Routes";
class ContentComponet extends Component {
  render() {
    return (
      <div className="content-section">
        <div className="container">{routes}</div>
      </div>
    );
  }
}
export default ContentComponet;
