import React, { useState } from "react";
import { Button, Form, Input, Row, Col } from "antd";
import "antd/dist/antd.css";

function Hotal() {
  let [h_id, setH_id] = useState("");
  let [h_name, setH_name] = useState("");
  let [address, setAddress] = useState("");
  let [Country, setCountry] = useState("");
  let [city, setCity] = useState("");
  let [state, setState] = useState("");
  let [pin, setPin] = useState("");
  let [howner, setHowner] = useState("");
  let [contact, setContact] = useState("");
  let [type, setType] = useState("");

  function submitData() {
    let userData = {
      h_id: h_id,
      h_name: h_name,
      address: address,
      Country: Country,
      state: state,
      city: city,
      pin: pin,
      howner: howner,
      contact: contact,
      type: type,
    };
    let reqData = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    fetch("http://localhost:4050/hotal", reqData).then((response) =>
      console.log(`Data Submitted${response.status}`)
    );
  }
  return (
    <div style={{ marginTop: "20px" }}>
      <center>
        <h4>Hotal Registration Form</h4>
      </center>
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
          <Input value={address} onChange={(e) => setAddress(e.target.value)} />
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
          <Input value={Country} onChange={(e) => setCountry(e.target.value)} />
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
          <Input value={contact} onChange={(e) => setContact(e.target.value)} />
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

export default Hotal;
