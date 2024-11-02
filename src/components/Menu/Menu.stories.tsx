import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import TransMenu from "./index";

const meta = {
  title: "TransMenu",
  component: TransMenu,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    // layout: "fullscreen",
  },
} satisfies Meta<typeof TransMenu>;

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
      <TransMenu defaultIndex="0" {...args}>
        <TransMenu.Item>cool link</TransMenu.Item>
        <TransMenu.Item>cool link 2</TransMenu.Item>
        <TransMenu.Item disabled>disabled</TransMenu.Item>
        <TransMenu.SubMenu title="下拉选项">
          <TransMenu.Item>下拉选项一</TransMenu.Item>
          <TransMenu.Item>下拉选项二</TransMenu.Item>
        </TransMenu.SubMenu>
      </TransMenu>
    </div>
  ),
};
