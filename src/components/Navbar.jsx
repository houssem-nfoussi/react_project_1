import React from 'react';
import { Layout, Menu, theme } from 'antd';

const { Header, Footer } = Layout;

// Custom menu items
const items = [
  
  { key: 'about', label: 'About' },
  { key: 'services', label: 'Services' },
  { key: 'Login', label: 'Login' },
  { key: 'logout', label: 'Log' },
];

const Navbar = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          backgroundColor: '#4CAF50', // soft green
          display: 'flex',
          alignItems: 'center',
          borderBottom: '2px solid #388E3C',
        }}
      >
        <div
          className="logo"
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: '20px',
            marginRight: '20px',
          }}
        >
          🌱 Stop Gaspillage
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['home']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
            backgroundColor: '#4CAF50', // match header
            borderRadius: '8px',
          }}
        />
      </Header>

      
    </Layout>
  );
};

export default Navbar;