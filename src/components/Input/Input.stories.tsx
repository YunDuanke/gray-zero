import React  from 'react'
import type { Meta, StoryObj } from "@storybook/react";
import Input from "./input";

const meta = {
  title: "Input",
  component: Input,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    // layout: "fullscreen",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
        width: 300,
      }}
    >
      <Input {...args} />
    </div>
  ),
};
