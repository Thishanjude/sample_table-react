import React, { useState, useEffect } from "react";
import List from "../assets/lists.json";
import { Table, Pagination, Modal, Input } from "antd";
import "../css/App/list.css";
import "antd/dist/antd.css";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const Lists = () => {
  const [data, setData] = useState(List);
  const [editable, setEditable] = useState(false);
  const [editfield, setEditfield] = useState(null);
  const columns = [
    {
      key: "1",
      title: "Id",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "4",
      title: "Position",
      dataIndex: "position",
    },
    {
      key: "5",
      title: "Salary",
      dataIndex: "salary",
    },
    {
      key: "6",
      title: "Delete_Edit",
      render: (record) => {
        return (
          <div className="icon-gap">
            <EditOutlined
              onClick={() => editData(record)}
              style={{ color: "green", padding: "5px" }}
            />
            <DeleteOutlined
              onClick={() => deleteData(record)}
              style={{ color: "red", padding: "10px" }}
            />
          </div>
        );
      },
    },
  ];

  //   useEffect(() => {}, []);
  const deleteData = (record) => {
    Modal.confirm({
      title: "Are you sure to delete this person?",
      okText: "Delete",
      okType: "danger",
      onOk: () => {
        setData((pre) => {
          return pre.filter((student) => student.id !== record.id);
        });
      },
    });
  };

  const editData = (record) => {
    setEditable(true);
    setEditfield({ ...record });
  };

  // const addDetailsHandler = (detail) => {
  //     console.log(detail);
  //     setData([...data, detail]);
  //   }
  const resetEdit = () => {
    setEditable(false);
    setEditfield(null);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Table
          // pagination={{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['10', '20', '30']}}
          className="ant-table"
          columns={columns}
          dataSource={data}
          bordered={true}
          size={"large"}
        />
        <Modal
          title="Edit the record?"
          visible={editable}
          onCancel={() => {
            resetEdit();
          }}
          onOk={() => {
            setEditable(false);
            setData((pre) => {
              return pre.map((record) => {
                if (record.id === editfield.id) {
                  return editfield;
                } else {
                  return record;
                }
              });
            });
          }}
          okText="Save"
        >
          <Input
            value={editfield?.name}
            onChange={(e) => {
              setEditfield((pre) => {
                return { ...pre, name: e.target.value };
              });
            }}
          />
          <Input
            value={editfield?.email}
            onChange={(e) => {
              setEditfield((pre) => {
                return { ...pre, email: e.target.value };
              });
            }}
          />
          <Input
            value={editfield?.position}
            onChange={(e) => {
              setEditfield((pre) => {
                return { ...pre, position: e.target.value };
              });
            }}
          />
          <Input
            value={editfield?.salary}
            onChange={(e) => {
              setEditfield((pre) => {
                return { ...pre, salary: e.target.value };
              });
            }}
          />
        </Modal>
      </header>
    </div>
  );
};

export default Lists;
