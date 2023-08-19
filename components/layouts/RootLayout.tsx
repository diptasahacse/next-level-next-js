import React, { ReactNode } from "react";
import Link from 'next/link'
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { ChildrenProps } from "../../interface/ChildrenProp";

const { Header, Content, Footer } = Layout;


const RootLayout = ({ children }: ChildrenProps) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
  ];
  return (
    <Layout className="layout">
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu mode="horizontal" theme="dark">
          {menuItems.map(item => (
            <Menu.Item key={item.link}>
              <Link href={item.link}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content style={{ padding: "20px 50px" }}>
        <div
          className="site-layout-content"
          style={{ background: colorBgContainer, minHeight:"100vh", padding: "20px"  }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default RootLayout;
