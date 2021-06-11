import "./App.css";
import { useState } from "react";
import { Button, List, Input, message, Typography } from "antd";

import "antd/dist/antd.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmitData = () => {
    if (input?.length > 0) {
      setTodos((prevList) => [...prevList, input]);
      setInput("");
    } else message.error("Please enter a task");
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>

      <div className="header">
        <Input
          className="input"
          onChange={handleInputChange}
          value={input}
          allowClear
          onPressEnter={handleSubmitData}
        />
        <Button className="button" type="primary" onClick={handleSubmitData}>
          Submit
        </Button>
      </div>
      <List
        className="list"
        dataSource={todos}
        bordered
        itemLayout="horizontal"
        renderItem={(text, index) => (
          <List.Item>
            <Typography.Text strong>{index + 1}</Typography.Text> {text}
          </List.Item>
        )}
      />
    </div>
  );
}

export default App;
