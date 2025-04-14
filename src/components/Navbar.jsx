import React from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

const items = [
  { key: 'home', label: 'Home' },
  { key: 'services', label: 'Services' },
  { key: 'login', label: 'Logout' },
];

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(`/${e.key}`);
  };

  return (
    <Layout>
      <Header
        style={{
          backgroundColor: '#4CAF50',
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
          onClick={handleClick}
          style={{
            flex: 1,
            minWidth: 0,
            backgroundColor: '#4CAF50',
            borderRadius: '8px',
          }}
        />
      </Header>
    </Layout>
  );
};

export default Navbar;
