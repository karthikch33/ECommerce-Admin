import React from 'react'
import {BsArrowDownRight} from 'react-icons/bs'
import { Table } from 'antd';
const Dashboard = () => {
  const data = [
    {
      type: 'Jan',
      sales: 38,
    },
    {
      type: 'Feb',
      sales: 52,
    },
    {
      type: 'Mar',
      sales: 61,
    },
    {
      type: 'Apr',
      sales: 145,
    },
    {
      type: 'May',
      sales: 48,
    },
    {
      type: 'June',
      sales: 38,
    },
    {
      type: 'July',
      sales: 38,
    },
    {
      type: 'Aug',
      sales: 38,
    },
    {
      type: 'Sep',
      sales: 38,
    },
    {
      type: 'Oct',
      sales: 38,
    },
    {
      type: 'Nov',
      sales: 38,
    },
    {
      type: 'Dec',
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    color: ({ type }) => {
     return "#8443f5";
    },
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'Month',
      },
      sales: {
        alias: 'Income',
      },
    },
  };
  const columns = [
    {
      title: 'SNO',
      dataIndex: 'key',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Product',
      dataIndex: 'product',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
  ];
  const data1 = [];
  for (let i = 0; i < 46; i++) {
    data1.push({
      key: i,
      name: `Edward King ${i}`,
      product: 32,
      status: `London, Park Lane no. ${i}`,

    });
  }
  return (
    ""
  )
}

export default Dashboard