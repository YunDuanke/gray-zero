import type { Meta, StoryObj } from "@storybook/react";
import Tabs from "./index";
import Item from './tabItem'

const meta = {
  title: "Tabs",
  component: Tabs,
  subcomponents: { Item: Item },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    // layout: "fullscreen",
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
        minHeight: 300,
      }}
    >
      <Tabs {...args}>
        <Item label="选项卡一">this is content one</Item>
        <Item label="选项卡二">this is content two</Item>
        <Item label="用户管理">this is content three</Item>
      </Tabs>
    </div>
  ),
};
