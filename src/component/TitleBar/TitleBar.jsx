import React, { useState, useEffect } from "react";
import "./index.css";
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


/**
 * @description 自定义标题栏
 * 
 * @param {array} config 定义左侧菜单栏
 * @example
 * var menu = [subMenu1, subMenu2, ...]
 * var subMenu = {
 *  key: "sub1",
 *  title: "副标题1",
 *  icon: <UserOutlined />,
 *  item: [Item1, Item2, ...],
 * } 
 * var Item = {
 *  key: "1",  //key对应content参数中组件Content的位置
 *  text: "option1",
 *  content: Component,
 * }
 * 
 * @param {string} defaultOpenKey 定义默认打开的菜单
 * @example
 * var defaultOpenKey = "sub1"
 * 
 * @param {string} defaultSelectedKey 定义默认选择的菜单栏
 * @example 
 * var defaultSelectKey = "1"
 */
const TitleBar = ({ config, defaultOpenKey, defaultSelectedKey }) => {
  const [content, setContent] = useState(null);
  const [collapsed, setCollapsed] = useState(false);


  useEffect(() => {
    config.forEach((subMenu) => {
      subMenu.item.forEach((item) => {
        if (item.key === defaultSelectedKey) {
          setContent(item.content);
        }
      });
    });
  }, [defaultSelectedKey, config]);


  /**
   * @description 改变内容
   * @param {Component} component 
   */
  const handleChangeContent = (component) => {
    setContent(component);
  };


  /**
   * @description 侧边栏收缩响应
   * @param {boolean} state 
   */
  const handleCollapse = (state) => {
    setCollapsed(state);
  };


  return (
    <Layout className="TitleBar-container">
      <Sider 
        className="TitleBar-sider"
        width={200}
        collapsible
        collapsed={collapsed}
        onCollapse={handleCollapse}
      >
        <div className="TitleBar-logo" />
        <Menu
          className="TitleBar-menu"
          mode="inline"
          theme="dark"
          defaultOpenKeys={[defaultOpenKey]}
          defaultSelectedKeys={[defaultSelectedKey]}
        >
          {config ? (
            config.map((subMenu) => {
              return (
                <SubMenu 
                  key={subMenu.key}
                  icon={subMenu.icon}
                  title={subMenu.title}
                >
                  {subMenu.item ? (
                    subMenu.item.map((item) => {
                      return (
                        <Menu.Item
                          key={item.key}
                          onClick={() => handleChangeContent(item.content)}
                        >
                          {item.text}
                        </Menu.Item>
                      );
                    })
                  ) : null}
                </SubMenu>
              );
            })
          ) : null}
        </Menu>
      </Sider>
      <Layout className="TitleBar-body">
        <Header 
          className="TitleBar-header"
          style={{ padding: 0, background: "#fff" }}
        />
        <Content className="TitleBar-content">
          {content}
        </Content>
      </Layout>
    </Layout>
  );
}


export default TitleBar;