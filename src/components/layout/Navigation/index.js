import { Menu } from 'antd';
import { Layout } from 'antd';

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
            <Menu mode="inline" style={{margin: "10"}}>
                <Menu.Item key="1"> Still </Menu.Item>
                <Menu.Item key="2"> Under </Menu.Item>
                <Menu.Item key="3"> Construction </Menu.Item>
            </Menu>
        </Sider>
    );
}

export default Navigation;