import type { Meta, StoryObj } from "@storybook/react";
import Alert from "./alert";

const meta = {
  title: "Alert",
  component: Alert,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    // layout: "fullscreen",
  },
  args: {
    title: "Info Text",
    description: "Info Description Info Description Info Description Info Description",
  }
} satisfies Meta<typeof Alert>;

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
      <Alert {...args} />
    </div>
  ),
};
