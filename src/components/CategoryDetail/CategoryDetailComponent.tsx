import React, { Component } from "react";
import locationDatas from "../../data/catalog.json";
import { Link } from "react-router-dom";
import BreadcrumbComponent from "../../utils/Breadcrumb/BreadcrumbComponent";

class CategoryDetailComponet extends Component<any, any> {
  render() {
    const param1 = this.props.match.params.param1;
    const param2 = this.props.match.params.param2;
    return (
      <div>
        <BreadcrumbComponent param1={param1} param2={param2} />

        {locationDatas.data.locations
          .filter((data) => {
            return data.dealers_id === param1;
          })
          .map((data) => {
            return (
              <div className="listingBox">
                {param2 !== undefined
                  ? data.branches.map((branch) => {
                      return (
                        <>
                          {branch.categories
                            .filter((data) => {
                              return data.name === param2;
                            })
                            .map((category: any) => {
                              return category.subcategories.map(
                                (subcat: any) => {
                                  return (
                                    <div className="category" id={subcat.name}>
                                      <img
                                        src={`../../assets/images/subcategory/${subcat.image}`}
                                        alt={subcat.name}
                                      />
                                      <h5>
                                        {subcat.name}
                                        <span className="arrow-right"></span>
                                      </h5>
                                    </div>
                                  );
                                }
                              );
                            })}
                        </>
                      );
                    })
                  : data.branches.map((branch) => {
                      return (
                        <>
                          {branch.categories.map((category: any) => {
                            return (
                              <div className="category">
                                <img
                                  src={`../assets/images/${category.image}`}
                                  alt={category.name}
                                />
                                <h5>
                                  <Link
                                    to={`detail/${param1}/${category.name}`}
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
                    })}
              </div>
            );
          })}
      </div>
    );
  }
}

export default CategoryDetailComponet;
