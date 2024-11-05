import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Form from "./form";
import Item from "./formItem";
import Input from "../Input";
import Button from "../Button";

const meta: Meta<typeof Form> = {
  title: "Form",
  id: "Form",
  component: Form,
  tags: ["autodocs"],
  // subcomponents: { Item: Item }, //👈 Adds the ListItem component as a subcomponent
};

export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {
  render: (args) => (
    <Form {...args}>
      <Item label="用户名">
        <Input />
      </Item>
      <Item label="密码">
        <Input type="password" />
      </Item>
      <div className="viking-form-submit-area">
        <Button type="submit" btnType="primary">
          登陆
        </Button>
      </div>
    </Form>
  ),
};
