import React, { Component } from "react";
import HeaderComponent from "../Header/HeaderComponent";
import ContentComponent from "../Content/ContentComponet";
import FooterComponent from "../Footer/FooterComponent";

class WrapperComponent extends Component<any, any> {
  render() {
    return (
      <>
        <HeaderComponent />
        <ContentComponent />
        <FooterComponent />
      </>
    );
  }
}

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     fetchCatalogsData: () => dispatch(catalogActions.getCatalogLists()),
//   };
// };

export default WrapperComponent;
