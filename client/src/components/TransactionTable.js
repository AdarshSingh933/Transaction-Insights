import React from 'react';
import { Table } from 'antd';
import styled from 'styled-components';

const StyledTable = styled(Table)`
  .ant-table {
    background-color: #f9f9f9;
  }
  
  .ant-table-thead > tr > th {
    background-color: #e0e0e0 !important;
  }

  .ant-table-tbody > tr > td {
    background-color: #ffffff !important;
  }

  .ant-table-tbody > tr:nth-child(even) > td {
    background-color: #f0f0f0 !important;
  }
`;

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    rowScope: 'row',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    rowScope: 'row',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    rowScope: 'row',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    rowScope: 'row',
  },
  {
    title: 'Date of Sale',
    dataIndex: 'dateOfSale',
    key: 'dateOfSale',
    render: (date) => new Date(date).toLocaleDateString(),
    rowScope: 'row',
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
    rowScope: 'row',
  },
  {
    title: 'Sold',
    dataIndex: 'sold',
    key: 'sold',
    render: (sold) => (sold ? 'Yes' : 'No'),
    rowScope: 'row',
  },
  {
    title: 'Image',
    dataIndex: 'image',
    key: 'image',
    render: (image) => <img src={image} alt="transaction" style={{ width: '50px', height: '50px' }} />,
    rowScope: 'row',
  },
];

const TransactionTable = ({ transactions }) => {
  return (
    <StyledTable
      columns={columns}
      dataSource={transactions}
      bordered
      rowKey="id"
    />
  );
};

export default TransactionTable;
