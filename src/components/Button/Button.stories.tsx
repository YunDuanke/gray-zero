import React  from 'react'
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Button from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    btnType: {
      control: "inline-radio",
      options: ["primary", "default", "danger", "link"],
      description: "设置 Button 的类型，primary | default | danger | link",
    },
    disabled: {
      control: "boolean",
      description: "设置 Button 的禁用，boolean",
    },
    size: {
      control: "inline-radio",
      options: ["lg", "sm"],
      description: "设置 Button的尺寸, lg | sm",
    },
    children: {
      description: "设置 Button的尺寸, lg | sm",
    },
    onClick: {
      description: "点击按钮时的回调",
    },
    href: {
      control: "text",
      description: "a链接的跳转地址，与btnType的link类型搭配使用",
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    size: "lg",
    children: "default",
    btnType: "default",
    disabled: false,
  },
};
