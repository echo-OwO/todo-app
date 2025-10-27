import { Stack, Text, Badge, Group, SegmentedControl, Center } from '@mantine/core';
import { IconChecklist } from '@tabler/icons-react';
import { Todo } from '../types/todo';
import { TodoItem } from './TodoItem';
import { useState } from 'react';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, newText: string) => void;
}

type Filter = 'all' | 'active' | 'completed';

export function TodoList({ todos, onToggle, onDelete, onUpdate }: TodoListProps) {
  const [filter, setFilter] = useState<Filter>('all');

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeTodos = todos.filter((t) => !t.completed).length;
  const completedTodos = todos.filter((t) => t.completed).length;

  return (
    <Stack gap="md">
      <Group justify="space-between">
        <Group gap="xs">
          <Badge color="blue" variant="light" size="lg">
            Active: {activeTodos}
          </Badge>
          <Badge color="green" variant="light" size="lg">
            Completed: {completedTodos}
          </Badge>
        </Group>
      </Group>

      <SegmentedControl
        value={filter}
        onChange={(value) => setFilter(value as Filter)}
        data={[
          { label: 'All', value: 'all' },
          { label: 'Active', value: 'active' },
          { label: 'Completed', value: 'completed' },
        ]}
        fullWidth
      />

      {filteredTodos.length === 0 ? (
        <Center py={60}>
          <Stack align="center" gap="sm">
            <IconChecklist size={48} stroke={1.5} color="var(--mantine-color-dimmed)" />
            <Text c="dimmed" size="lg">
              {todos.length === 0
                ? 'No todos yet. Add one to get started!'
                : `No ${filter} todos`}
            </Text>
          </Stack>
        </Center>
      ) : (
        <Stack gap="xs">
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          ))}
        </Stack>
      )}
    </Stack>
  );
}


