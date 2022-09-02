import React, { useState } from "react";
import { Button, Form, Input, Row, Col } from "antd";
import "antd/dist/antd.css";

function Addmenu() {
  let [m_id, setM_id] = useState("");
  let [item, setItem] = useState("");
  let [price, setPrice] = useState("");
  let [tag, setTag] = useState("");
  let [avl_option, setAvl_option] = useState("");
  let [h_id, setH_id] = useState("");

  function submitData() {
    let userdata = {
      m_id: m_id,
      item: item,
      price: price,
      tag: tag,
      avl_option: avl_option,
      h_id: h_id,
    };
    let reqData = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userdata),
    };
    fetch("http://localhost:4050/menu", reqData).then((response) =>
      console.log(`Data Submitted ${response.status}`)
    );
  }

  return (
    <div style={{ marginTop: "40px" }}>
      {/* <center><h4>Menu Form</h4></center> */}
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
          <Input value={m_id} onChange={(e) => setM_id(e.target.value)} />
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
          <Input value={item} onChange={(e) => setItem(e.target.value)} />
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
          <Input value={price} onChange={(e) => setPrice(e.target.value)} />
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
          <Input value={tag} onChange={(e) => setTag(e.target.value)} />
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
          <Input
            value={avl_option}
            onChange={(e) => setAvl_option(e.target.value)}
          />
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
          <Input value={h_id} onChange={(e) => setH_id(e.target.value)} />
        </Form.Item>
        <Row>
          <Col span={4} offset={10}>
            <Button type="primary" block onClick={submitData}>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Addmenu;
