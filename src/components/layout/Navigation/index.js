import { Menu } from "antd";
import { Layout } from "antd";
import { Link } from "react-router-dom";

import Query from "../../Query";
import CATEGORIES_QUERY from "../../queries/category/categories";

function Navigation() {
  const { Sider } = Layout;

  const zeroWidthTrigger = {
    color: "#A891CB",
    backgroundColor: "#FEFCFF",
    boxShadow: `1px -2px 2px rgba(208, 216, 243, 0.2), 
                    1px 2px 2px rgba(208, 216, 243, 0.2),
                    3px 0px 2px rgba(208, 216, 243, 0.2)`,
    borderColor: "#c0afd9",
    borderRadius: "0px 5px 5px 0px",
    top: 20,
  };

  const autoCollapse = () => {
    const navIcon = document.getElementsByClassName(
      "ant-layout-sider-zero-width-trigger"
    )[0];
    if (navIcon !== undefined) navIcon.click();
  };

  return (
    <Sider
      className="white-shadowed"
      breakpoint="sm"
      collapsedWidth="0"
      zeroWidthTriggerStyle={zeroWidthTrigger}
    >
      <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }) => {
          categories.data.sort(
            (a, b) => a.attributes.order - b.attributes.order
          );
          return (
            <Menu mode="inline" style={{ margin: "10" }}>
              <Menu.Item key="about-me">
                <Link to="/about-me" key="/about-me" onClick={autoCollapse}>
                  <span>Home</span>
                </Link>
              </Menu.Item>
              {categories.data.map((category) => {
                return (
                  <Menu.Item key={category.attributes.slug}>
                    <Link
                      to={`/category/${category.attributes.slug}`}
                      key={`/category/${category.attributes.slug}`}
                      onClick={autoCollapse}
                    >
                      <span style={{ textTransform: "capitalize" }}>
                        {category.attributes.name}
                      </span>
                    </Link>
                  </Menu.Item>
                );
              })}
            </Menu>
          );
        }}
      </Query>
    </Sider>
  );
}

export default Navigation;
