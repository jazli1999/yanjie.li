import { Menu } from 'antd';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import Query from '../../Query';
import CATEGORIES_QUERY from '../../queries/category/categories';

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

    return (
        <Sider className="white-shadowed" breakpoint="sm" collapsedWidth="0"
            zeroWidthTriggerStyle={zeroWidthTrigger}>
            <Query query={CATEGORIES_QUERY} id={null}>
                {({ data: { categories } }) => {
                    return (
                        <Menu mode="inline" style={{ margin: "10" }}>
                            {categories.data.map((category) => {
                                return (
                                    <Menu.Item key={category.attributes.slug}>
                                        <Link 
                                            to={`/category/${category.attributes.slug}`}>
                                            {category.attributes.name}
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