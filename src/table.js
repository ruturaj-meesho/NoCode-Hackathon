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
