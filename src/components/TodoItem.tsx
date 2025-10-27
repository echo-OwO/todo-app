import { useState } from 'react';
import { Checkbox, ActionIcon, Group, Text, Paper, TextInput } from '@mantine/core';
import { IconTrash, IconPencil, IconCheck, IconX } from '@tabler/icons-react';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, newText: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete, onUpdate }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim()) {
      onUpdate(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <Paper shadow="xs" p="md" mb="sm" withBorder>
      <Group justify="space-between">
        <Group style={{ flex: 1 }}>
          {!isEditing && (
            <Checkbox
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
              size="md"
            />
          )}
          {isEditing ? (
            <TextInput
              value={editText}
              onChange={(e) => setEditText(e.currentTarget.value)}
              onKeyDown={handleKeyDown}
              placeholder="Edit todo..."
              size="md"
              style={{ flex: 1 }}
              autoFocus
            />
          ) : (
            <Text
              size="md"
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                color: todo.completed ? 'var(--mantine-color-dimmed)' : 'inherit',
              }}
            >
              {todo.text}
            </Text>
          )}
        </Group>
        <Group gap="xs">
          {isEditing ? (
            <>
              <ActionIcon
                color="green"
                variant="subtle"
                onClick={handleSave}
                size="lg"
              >
                <IconCheck size={18} />
              </ActionIcon>
              <ActionIcon
                color="gray"
                variant="subtle"
                onClick={handleCancel}
                size="lg"
              >
                <IconX size={18} />
              </ActionIcon>
            </>
          ) : (
            <>
              <ActionIcon
                color="blue"
                variant="subtle"
                onClick={() => setIsEditing(true)}
                size="lg"
              >
                <IconPencil size={18} />
              </ActionIcon>
              <ActionIcon
                color="red"
                variant="subtle"
                onClick={() => onDelete(todo.id)}
                size="lg"
              >
                <IconTrash size={18} />
              </ActionIcon>
            </>
          )}
        </Group>
      </Group>
    </Paper>
  );
}


