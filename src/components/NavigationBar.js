import React from 'react';
import { Menu } from 'antd';
import { HomeFilled, UserOutlined, CalendarOutlined } from '@ant-design/icons';

export default function NavigationBar() {
  return (
    <Menu mode='inline' defaultSelectedKeys={['2']}>
      <Menu.Item key='1' icon={<HomeFilled />}>
        Beranda
      </Menu.Item>
      <Menu.Item key='2' icon={<UserOutlined />}>
        Driver Management
      </Menu.Item>
      <Menu.Item key='3' icon={<CalendarOutlined />}>
        Pickup
      </Menu.Item>
    </Menu>
  );
}
