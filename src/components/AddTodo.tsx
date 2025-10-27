import { useState } from 'react';
import { TextInput, Button, Group } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

interface AddTodoProps {
  onAdd: (text: string) => void;
}

export function AddTodo({ onAdd }: AddTodoProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Group>
        <TextInput
          placeholder="What needs to be done?"
          value={text}
          onChange={(e) => setText(e.currentTarget.value)}
          size="md"
          style={{ flex: 1 }}
        />
        <Button type="submit" leftSection={<IconPlus size={18} />} size="md">
          Add
        </Button>
      </Group>
    </form>
  );
}


