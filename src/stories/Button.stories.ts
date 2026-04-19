import type { Meta, StoryObj } from '@storybook/vue3-vite';

import Button from './Button.vue';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A reusable button component with different sizes, styles and colors. Can be primary or secondary.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'The label of the button',
    },
    primary: {
      control: 'boolean',
      description: 'Determines if the button is primary or secondary',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the button',
    },
    backgroundColor: {
      control: 'color',
      description: 'Custom background color of the button',
    },
  },
  args: {
    label: 'Button',
    primary: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    label: 'Button',
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    label: 'Button',
    size: 'small',
  },
};
