import React from "react";
import "./styles/index.scss";
import Button from "./components/Button/button";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <Button style={{ marginRight: 20 }}>default</Button>
      <Button btnType="primary" style={{ marginRight: 20 }}>
        primary
      </Button>
      <Button btnType="danger" style={{ marginRight: 20 }}>
        danger
      </Button>
      <Button btnType="link" href="www.baidu.com">
        link
      </Button>
    </div>
  );
}

export default App;
