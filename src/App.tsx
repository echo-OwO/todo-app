import { useState, useEffect, useRef } from 'react';
import { MantineProvider, Container, Title, Paper, Stack, Text } from '@mantine/core';
import '@mantine/core/styles.css';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { Todo } from './types/todo';
import { loadTodos, saveTodos } from './utils/localStorage';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const isInitialMount = useRef(true);

  useEffect(() => {
    const loadedTodos = loadTodos();
    setTodos(loadedTodos);
  }, []);

  useEffect(() => {
    // Skip saving on initial mount to avoid overwriting with empty array
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    saveTodos(todos);
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: Date.now(),
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id: string, newText: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <MantineProvider>
      <Container size="sm" py={40}>
        <Stack gap="xl">
          <Paper shadow="md" p="xl" withBorder>
            <Stack gap="lg">
              <div>
                <Title order={1} mb="xs">
                  ✨ My Todo App
                </Title>
                <Text c="dimmed" size="sm">
                  Stay organized and get things done
                </Text>
              </div>
              <AddTodo onAdd={addTodo} />
            </Stack>
          </Paper>

          <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} onUpdate={updateTodo} />
        </Stack>
      </Container>
    </MantineProvider>
  );
}

export default App;

