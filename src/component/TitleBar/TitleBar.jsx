import React, { useState, useEffect } from "react";
import "./index.css";
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


/**
 * @description 自定义标题栏
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
 * @param {string} defaultOpenKey 定义默认打开的菜单
 * @example
 * var defaultOpenKey = "sub1"
 * @param {string} defaultSelectedKey 定义默认选择的菜单栏
 * @example 
 * var defaultSelectKey = "1"
 */
const TitleBar = ({ config, defaultOpenKey, defaultSelectedKey }) => {
  // choseKey 是存储在 sessionStorage 里的侧边栏状态，用于页面刷新后侧边栏保持原有状态
  const [openKey, setOpenKey] = useState(
    window.sessionStorage.getItem("choseKey") ?
    JSON.parse(window.sessionStorage.getItem("choseKey")).defaultOpenKey :
    defaultOpenKey
  );
  const [selectedKey, setSelectedKey] = useState(
    window.sessionStorage.getItem("choseKey") ?
    JSON.parse(window.sessionStorage.getItem("choseKey")).defaultSelectedKey :
    defaultSelectedKey
  );
  const [content, setContent] = useState(null);
  const [collapsed, setCollapsed] = useState(false);


  useEffect(() => {
    config.forEach((subMenu) => {
      subMenu.item.forEach((item) => {
        if (item.key === selectedKey) {
          setContent(item.content);
        }
      });
    });
  }, [config, selectedKey]);


  /**
   * @description 改变显示的内容并存储选择的键码（key）
   * @param {Object} key 
   * @example
   *  {
   *    defaultOpenKey: "sub1",
   *    defaultSelectedKey: "1",
   *  }
   * @param {Component} component 
   */
  const handleChangeContent = (key, component) => {
    setOpenKey(key.defaultOpenKey);
    setSelectedKey(key.defaultSelectedKey);
    setContent(component);
    window.sessionStorage.setItem("choseKey", JSON.stringify(key));
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
          defaultOpenKeys={[openKey]}
          defaultSelectedKeys={[selectedKey]}
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
                          onClick={() => {
                              handleChangeContent(
                                {
                                  defaultOpenKey: subMenu.key, 
                                  defaultSelectedKey: item.key,
                                },
                                item.content
                              );
                            }}
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