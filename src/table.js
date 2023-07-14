import React, { useRef } from 'react';
import { Table } from 'antd';

export default function TableComponent({dataSource, colList}) {

  const messagesEndRef = useRef(null);

  const columns = [
    {
      title: 'Order Count',
      width: 300,
      dataIndex: 'order_count',
      key: 'order_count',
    //   fixed: 'left',
    },
    {
      title: 'Order day',
      width: 300,
      dataIndex: ' order_day',
      key: ' order_day',
    //   fixed: 'left',
    },
    // {
    //     title: 'Address',
    //     width: 100,
    //     dataIndex: 'address',
    //     key: 'address',
    //     // fixed: 'left',
    // },
    // {
    //     title: 'Address2',
    //     width: 100,
    //     dataIndex: 'address',
    //     key: 'address2',
    //     // fixed: 'left',
    // },
    // {
    //     title: 'Address3',
    //     width: 100,
    //     dataIndex: 'address',
    //     key: 'address3',
    //     // fixed: 'left',
    // },
    // {
    //     title: 'Address4',
    //     width: 100,
    //     dataIndex: 'address',
    //     key: 'address4',
    //     // fixed: 'left',
    // },
    // { title: 'Column 1', dataIndex: 'address', key: '1' },
    // { title: 'Column 2', dataIndex: 'address', key: '2' },
    // { title: 'Column 3', dataIndex: 'address', key: '3' },
    // { title: 'Column 4', dataIndex: 'address', key: '4' },
    // { title: 'Column 5', dataIndex: 'address', key: '5' },
    // { title: 'Column 6', dataIndex: 'address', key: '6' },
    // { title: 'Column 7', dataIndex: 'address', key: '7' },
    // {
    //   title: 'Column 8',
    //   dataIndex: 'address',
    //   key: '8',
    //   render: () => <a>action</a>,
    // },
    // {
    //   title: 'Column 9',
    //   dataIndex: 'address',
    //   key: '8',
    //   render: () => <a>action</a>,
    // },
    // {
    //   title: 'Column 10',
    //   dataIndex: 'address',
    //   key: '8',
    //   render: () => <a>action</a>,
    // },
    // {
    //   title: 'Column 10',
    //   dataIndex: 'address',
    //   key: '8',
    //   render: () => <a>action</a>,
    // },
    // {
    //   title: 'Column 10',
    //   dataIndex: 'address',
    //   key: '8',
    //   render: () => <a>action</a>,
    // },
    // {
    //   title: 'Column 10',
    //   dataIndex: 'address',
    //   key: '8',
    //   render: () => <a>action</a>,
    // },
    // {
    //   title: 'Column 10',
    //   dataIndex: 'address',
    //   key: '8',
    //   render: () => <a>action</a>,
    // },
    // {
    //   title: 'Column 10',
    //   dataIndex: 'address',
    //   key: '8',
    //   render: () => <a>action</a>,
    // },
    // {
    //   title: 'Column 10',
    //   dataIndex: 'address',
    //   key: '8',
    //   render: () => <a>action</a>,
    // },
    // {
    //   title: 'Column 11',
    //   dataIndex: 'address',
    //   key: '8',
    //   render: () => <a>action</a>,
    // },
    // {
    //   title: 'Action',
    //   key: 'operation',
    //   width: 100,
    //   render: () => <a>action</a>,
    // },
    // {
    //   title: 'Action',
    //   key: 'operation',
    //   width: 100,
    //   render: () => <a>action</a>,
    // },
    {
      title: '',
      key: 'operation',
      render: (value, row, index) => (
        <a {...(index === 0 && { ref: messagesEndRef })} />
      ),
    },
  ];

  const scroll = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div >
      <div className="scrollView">
        <Table
          dataSource={dataSource}
          columns={colList}
          pagination={false}
          scroll={{ x: 1000, y: 1000 }}
        />
      </div>
      <div className="overlay">
        <button onClick={() => scroll(100)}>{'>'}</button>
      </div>
    </div>
  );
}
