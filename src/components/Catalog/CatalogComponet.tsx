import React, { Component } from "react";

import { Link } from "react-router-dom";
import locationDatas from "../../data/catalog.json";
import BreadcrumbComponent from "../../utils/Breadcrumb/BreadcrumbComponent";
class CatalogComponet extends Component<any, any> {
  render() {
    const param1 = this.props.match.params.param1;
    const param2 = this.props.match.params.param2;

    return (
      <div>
        <BreadcrumbComponent param1={param1} />
        {locationDatas.data.locations
          .filter((data: any) => {
            return data.dealers_id === param1;
          })
          .map((data: any) => {
            return (
              <div className="listingBox">
                {param2 !== undefined
                  ? data.branches
                      .filter((data: any) => {
                        return data.branch_id === param2;
                      })
                      .map((branch: any) => {
                        return (
                          <>
                            {branch.categories.map((category: any) => {
                              return (
                                <div className="category" key={category.image}>
                                  <img
                                    src={`../assets/images/${category.image}`}
                                    alt={category.name}
                                  />
                                  <h5>
                                    <Link
                                      to={`/detail/${param1}/${category.name}`}
                                    >
                                      {category.name}
                                      <span className="arrow-right"></span>
                                    </Link>
                                  </h5>
                                </div>
                              );
                            })}
                          </>
                        );
                      })
                  : data.branches.map((branch: any) => {
                      return (
                        <>
                          {branch.categories.map((category: any) => {
                            return (
                              <div className="category" key={category.image}>
                                <Link to={`/detail/${param1}/${category.name}`}>
                                  <img
                                    src={`../assets/images/${category.image}`}
                                    alt={category.name}
                                  />
                                  <h5>
                                    {category.name}
                                    <span className="arrow-right"></span>
                                  </h5>
                                </Link>
                              </div>
                            );
                          })}
                        </>
                      );
                    })}
              </div>
            );
          })}
      </div>
    );
  }
}

export default CatalogComponet;
