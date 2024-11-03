import type { Meta, StoryObj } from "@storybook/react";
import { AutoComplete } from "./autoComplete";
import { fn } from "@storybook/test";

const meta = {
  title: "AutoComplete",
  component: AutoComplete,
  tags: ["autodocs"],
  args: { fetchSuggestions: fn() },
  parameters: {
    // layout: "fullscreen",
  },
} satisfies Meta<typeof AutoComplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultAutoComplete: Story = {
  render: (args) => {
    const lakers = [
      "bradley",
      "pope",
      "caruso",
      "cook",
      "cousins",
      "james",
      "AD",
      "green",
      "howard",
      "kuzma",
      "McGee",
      "rando",
    ];
    const handleFetch = (query: string) => {
      return lakers
        .filter((name) => name.includes(query))
        .map((name) => ({ value: name }));
    };
    return (
      <div
        style={{
          minHeight: 300,
        }}
      >
        <AutoComplete
          {...args}
          fetchSuggestions={handleFetch}
          placeholder="输入abc试试"
        />
      </div>
    );
  },
};
