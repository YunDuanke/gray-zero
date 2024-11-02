import React from "react";
import "./styles/index.scss";
import Button from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Icon from "./components/Icon/icon";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
function App() {
  return (
    <div>
      <div style={{ padding: 20, borderBottom: "1px solid #ccc" }}>
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
      <div style={{ padding: 20, borderBottom: "1px solid #ccc" }}>
        <Menu mode="horizontal">
          <MenuItem>000</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>drop1</MenuItem>
          </SubMenu>
          <SubMenu title="opened">
            <MenuItem>opened1</MenuItem>
          </SubMenu>
          <MenuItem>111</MenuItem>
        </Menu>
      </div>
      <div style={{ padding: 20, borderBottom: "1px solid #ccc" }}>
        <Icon icon="coffee" theme="danger" size="10x" />
      </div>
    </div>
  );
}

export default App;
