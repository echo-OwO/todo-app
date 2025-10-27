import { Checkbox, ActionIcon, Group, Text, Paper } from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <Paper shadow="xs" p="md" mb="sm" withBorder>
      <Group justify="space-between">
        <Group>
          <Checkbox
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            size="md"
          />
          <Text
            size="md"
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? 'var(--mantine-color-dimmed)' : 'inherit',
            }}
          >
            {todo.text}
          </Text>
        </Group>
        <ActionIcon
          color="red"
          variant="subtle"
          onClick={() => onDelete(todo.id)}
          size="lg"
        >
          <IconTrash size={18} />
        </ActionIcon>
      </Group>
    </Paper>
  );
}


