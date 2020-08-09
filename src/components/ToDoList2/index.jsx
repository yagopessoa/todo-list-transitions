import React, { useState } from 'react';
import { TransitionGroup, Transition } from 'react-transition-group';
import { v4 as uuid } from 'uuid';

import {
  DURATION,
  ListItem,
  Container,
  Row,
  Column,
  GlobalStyle,
  Title,
  InputRow,
  Input,
  Button,
} from './styles';

const INITIAL_ITEMS = [
  { id: uuid(), todo: 'Make some coffee' },
  { id: uuid(), todo: 'Study React' },
];

export default function ToDoList() {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [doneItems, setDoneItems] = useState([]);
  const [input, setInput] = useState('');

  const handleMarkDone = (selectedId, todo) => () => {
    setItems(previous => previous.filter(({ id }) => id !== selectedId));
    setDoneItems(previous => [...previous, { id: selectedId, todo }]);
  };

  const handleAddTodo = event => {
    event.preventDefault();
    const todo = input;
    setItems(previous => [...previous, { id: uuid(), todo }]);
    setInput('');
  };

  return (
    <Container>
      <GlobalStyle />
      <Row justify="center">
        <Title>To Do List Transitions</Title>
      </Row>
      <Row justify="space-around">
        <Column>
          <form onSubmit={handleAddTodo}>
            <InputRow>
              Add ToDo:
              <Input
                value={input}
                onChange={event => setInput(event.target.value)}
              />
            </InputRow>
          </form>
          <Title>To Do</Title>
          <TransitionGroup>
            {items.map(({ id, todo }) => (
              <Transition key={id} timeout={DURATION}>
                {state => (
                  <ListItem state={state}>
                    {todo}
                    <Button onClick={handleMarkDone(id, todo)}>Done</Button>
                  </ListItem>
                )}
              </Transition>
            ))}
          </TransitionGroup>
        </Column>
        <Column>
          <InputRow />
          <Title>Done</Title>
          <TransitionGroup>
            {doneItems.map(({ id, todo }) => (
              <Transition key={id} timeout={DURATION}>
                {state => <ListItem state={state}>{todo}</ListItem>}
              </Transition>
            ))}
          </TransitionGroup>
        </Column>
      </Row>
    </Container>
  );
}
