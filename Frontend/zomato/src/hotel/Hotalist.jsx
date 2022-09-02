import React, { useEffect, useState } from "react";
import { Button, Table, Modal, Form, Input } from "antd";
import "antd/dist/antd.css";
import { FaTrash, FaPen } from "react-icons/fa";

function Hotalist() {
  let [data, setData] = useState([]);
  let [h_id, setH_id] = useState("");
  let [h_name, setH_name] = useState("");
  let [address, setAddress] = useState("");
  let [Country, setCountry] = useState("");
  let [state, setState] = useState("");
  let [city, setCity] = useState("");
  let [pin, setPin] = useState("");
  let [howner, setHowner] = useState("");
  let [contact, setContact] = useState("");
  let [type, setType] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (
    data
  ) => {
    setIsModalVisible(true);
    setH_id(data.h_id);
    setH_name(data.h_name);
    setAddress(data.address);
    setCountry(data.Country);
    setState(data.state);
    setCity(data.city);
    setPin(data.pin);
    setHowner(data.howner);
    setContact(data.contact);
    setType(data.type);
  };

  const handleOk = () => {
    updatehotal();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    dataFetch();
  }, []);
  async function dataFetch() {
    let response = await fetch("http://localhost:4050/hotal");
    let Udata = await response.json();
    setData(Udata.response);
  }

  function deleteHotal(h_id) {
    fetch(`http://localhost:4050/hotal/${h_id}`, {method: "DELETE"})
    .then((res) => {
     if(res === 200){
      alert("user deleted");
     }
    })
    dataFetch();
  }

  function updatehotal() {
    let data1 = {
      h_id,
      h_name,
      address,
      Country,
      state,
      city,
      pin,
      howner,
      contact,
      type,
    };

    let reqData = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data1),
    };
    fetch(`http://localhost:4050/hotal/${h_id}`, reqData).then(
      (result) => {
        result.json().then((res) => {
          console.warn(res);
        });
      }
    );
    dataFetch();
  }

  const columns = [
    {
      title: "Hotal Id",
      width: 80,
      dataIndex: "h_id",
      key: "name",
      fixed: "left",
    },
    {
      title: "Hotal Name",
      width: 80,
      dataIndex: "h_name",
      key: "h_name",
      fixed: "left",
      sorter: (record1, record2)=>{ 
        return record1.h_name > record2.h_name
      }
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "1",
      width: 150,
      sorter: (record1,record2) =>{
        return record1.address > record2.address
      }
    },
    {
      title: "Country",
      dataIndex: "Country",
      key: "2",
      width: 150,
      sorter: (record1, record2) =>{
        return record1.Country > record2.Country
      }
    },
    {
      title: "State",
      dataIndex: "state",
      key: "3",
      width: 150,
      sorter: (record1, record2) =>{
        return record1.state > record2.state
      }
    },
    {
      title: "City",
      dataIndex: "city",
      key: "4",
      width: 150,
      sorter:(record1, record2) =>{
        return record1.city > record2.city
      }
    },
    {
      title: "Pincode",
      dataIndex: "pin",
      key: "5",
      width: 150,
      sorter: (record1, record2) =>{
        return record1.pin > record2.pin
      }
    },
    {
      title: "Hotal Howner",
      dataIndex: "howner",
      key: "6",
      width: 150,
      sorter: (record1, record2) =>{
        return record1.howner > record2.howner
      }
    },
    {
      title: "Contact",
      dataIndex: "contact",
      key: "7",
      width: 150,
    },
    {
      title: "Hotal Type",
      dataIndex: "type",
      key: "8",
      width: 100,
     sorter:(record1, record2)=>{
      return record1.type > record2.type
     }
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width:80,
      render: () => (
        <Button type="primary" onClick={() => {showModal(data)}}>
          <FaPen />
        </Button>
      ),
    },
    {
      title: "Delete",
      key: "operation",
      fixed: "right",
      width: 80,
      render: (h_id) => <Button type="primary" danger onClick={() => deleteHotal(h_id)}><FaTrash /></Button>,
    },
  ];

  return (
    <div className="container pt-5">
      <Table
        columns={columns}
        dataSource={data}
        pagination= {true}
        scroll={{
          x: 1500,
          y: 300,
        }}
      />

      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
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
            label="Hotal ID"
            name="hotal id"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input value={h_id} onChange={(e) => setH_id(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Hotal Name"
            name="Hotal name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input value={h_name} onChange={(e) => setH_name(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Address"
            name="Address"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Country"
            name="Country"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              value={Country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="State"
            name="state"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input value={state} onChange={(e) => setState(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="City"
            name="city"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input value={city} onChange={(e) => setCity(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Pincode"
            name="pincode"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input value={pin} onChange={(e) => setPin(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Hotel howner"
            name="hotal howner"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input value={howner} onChange={(e) => setHowner(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Contact"
            name="contact"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label=" Hotal Type"
            name="hotal type"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input value={type} onChange={(e) => setType(e.target.value)} />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 8,
            }}
          ></Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default Hotalist;
