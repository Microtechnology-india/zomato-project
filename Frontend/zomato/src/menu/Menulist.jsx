import React, {useState, useEffect} from 'react';
import { Button, Table, Modal, Form, Input } from 'antd';
import "antd/dist/antd.css";
import { FaTrash, FaPen } from "react-icons/fa";

function Menulist() {
    let [data, setData] = useState([]);
    let [m_id, setM_id] = useState('');
    let [item, setItem] = useState('');
    let [price, setPrice] = useState('');
    let [tag, setTag] = useState('');
    let [avl_option, setAvl_option] = useState('');
    let [h_id, setH_id] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

  
    const showModal = (m_id, item, price, tag, avl_option, h_id) => {
      setIsModalVisible(true);
      setM_id(m_id);
      setItem(item);
      setPrice(price);
      setTag(tag);
      setAvl_option(avl_option);
      setH_id(h_id);
    };
  
    const handleOk = () => {
      updatemenu();
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };


 useEffect(() => {
        dataFetch();
 },[])
 async function dataFetch(){
    let response = await fetch("http://localhost:4050/menu")
    let Udata = await response.json()
    setData(Udata.response);
}

function deleteMenu(){
  fetch(`http://localhost:4050/menu${m_id}`, {method:"DELETE"})
  .then((res) =>{
    if(res.status === 200)
    {
      alert("user deleted")
    }
})
dataFetch();
}

function updatemenu() {
  let data1 ={m_id, item, price, tag, avl_option,h_id}

 let reqData = {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data1)
  }
  fetch(`http://localhost:5050/offer/offer/${m_id}`, reqData)
  .then((result)=>{
    result.json().then((res)=>{
      console.warn(res);
    })
  })
  dataFetch();
}


    const columns = [
        {
          title: 'Menu Id',
          width: 60,
          dataIndex: 'm_id',
          key: 'name',
          fixed: 'left',
        },
        {
          title: 'Menu Item',
          width: 60,
          dataIndex: 'item',
          key: 'age',
          fixed: 'left',
          sorter:(record1, record2) =>{
            return record1.item > record2.item
          }
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: '1',
          width: 150,
        },
        {
          title: 'Tag',
          dataIndex: 'tag',
          key: '2',
          width: 150,
        },
        {
          title: 'Avalbal Option',
          dataIndex: 'avl_option',
          key: '3',
          width: 150,
        },
        {
          title: 'Hotal Id',
          dataIndex: 'h_id',
          key: '4',
          width: 150,
        },
        {
          title: 'Action',
          key: 'operation',
          fixed: 'right',
          width: 60,
          render: (dataIndex) => <Button type="primary" onClick={() => showModal(dataIndex.m_id, dataIndex.item, dataIndex.price, dataIndex.tag, dataIndex.avl_option, dataIndex.h_id)}><FaTrash /></Button>
        },
        {
            title: 'Delete',
            key: 'operation',
            fixed: 'right',
            width: 60,
            render: () => <Button type="primary" danger onClick={() => deleteMenu(m_id)}><FaPen /></Button>
        }
      ];
  
  return (
    <div className='container pt-5'>
 <Table
    columns={columns}
    dataSource={data}
    scroll={{
      x: 1500,
      y: 300,
    }}
  />
 <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
 <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Menu Id"
          name="menu id"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input value={m_id} onChange={(e) =>setM_id(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Menu Item"
          name="menu item"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input value={item} onChange={(e) =>setItem(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input value={price} onChange={(e) =>setPrice(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Menu Tag"
          name="menu tag"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input value={tag} onChange={(e) =>setTag(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Avl_option"
          name="avloption"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input value={avl_option} onChange={(e) =>setAvl_option(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Hotal Id"
          name="hotal id"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input value={h_id} onChange={(e) =>setH_id(e.target.value)} />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 8,
          }}
        >
        </Form.Item>
      </Form>
      </Modal>

    </div>
  )
}

export default Menulist