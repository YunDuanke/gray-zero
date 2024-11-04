import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { fn } from "@storybook/test";
import Upload from "./upload";
import Icon from "../Icon/icon";

const meta = {
  title: "Upload",
  component: Upload,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    // layout: "fullscreen",
  },
  args: {
    onProgress: fn(),
    onSuccess: fn(),
    onError: fn(),
    action: "https://jsonplaceholder.typicode.com/posts/",
  },
} satisfies Meta<typeof Upload>;

export default meta;
type Story = StoryObj<typeof meta>;
const checkFileSize = (file: File) => {
  if (Math.round(file.size / 1024) > 400) {
    alert("file too big");
    return false;
  }
  return true;
};
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
      <Upload
        {...args}
        drag={true}
        onChange={action("action")}
        beforeUpload={checkFileSize}
      >
        <Icon icon="upload" size="5x" theme="secondary" />
        <br />
        <p>点击或者拖动到此区域进行上传</p>
      </Upload>
    </div>
  ),
};
