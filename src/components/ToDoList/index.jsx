import React, { useState } from 'react';
import { Transition } from 'react-transition-group';

import { DURATION, ListItem, Container, Row, Column } from './styles';

const INITIAL_ITEMS = [
  { id: 1, todo: 'Fazer café' },
  { id: 2, todo: 'Fazer café' },
  { id: 3, todo: 'Fazer café' },
  { id: 4, todo: 'Fazer café' },
  { id: 5, todo: 'Fazer café' },
  { id: 6, todo: 'Fazer café' },
  { id: 7, todo: 'Fazer café' },
  { id: 8, todo: 'Fazer café' },
];

export default function ToDoList() {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [itemsToShow, setItemsToShow] = useState(
    INITIAL_ITEMS.map(({ id }) => id)
  );
  const [doneItems, setDoneItems] = useState([]);
  const [doneToShow, setDoneToShow] = useState([]);

  const handleMarkDone = (selectedId, todo) => () => {
    const newTodo = { id: selectedId, todo };

    setDoneItems(previous => [...previous, newTodo]);
    setItemsToShow(previous => previous.filter(id => id !== selectedId));

    setTimeout(() => {
      setItems(previous => previous.filter(({ id }) => id !== selectedId));
      setDoneToShow(previous => [...previous, newTodo.id]);
    }, DURATION);
  };

  return (
    <Container>
      <Row justify="space-around">
        <Column>
          {items.map(({ id, todo }) => (
            <Transition in={itemsToShow.includes(id)} timeout={DURATION}>
              {state => (
                <ListItem key={id} state={state}>
                  {todo}
                  <button onClick={handleMarkDone(id, todo)}>Feito</button>
                </ListItem>
              )}
            </Transition>
          ))}
        </Column>
        <Column>
          {doneItems.map(({ id, todo }) => (
            <Transition
              key={id}
              in={doneToShow.includes(id)}
              timeout={DURATION}
            >
              {state => <ListItem state={state}>{todo}</ListItem>}
            </Transition>
          ))}
        </Column>
      </Row>
    </Container>
  );
}
