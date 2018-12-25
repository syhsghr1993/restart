import React, {useState} from 'react';

// 利用hooks创建redux机制
function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  function dispatch(action) {
    const nextState = reducer(state, action);
    setState(nextState);
  }

  return [state, dispatch];
}

function todosReducer(state, action) {
  switch (action.type) {
    case 'add':
      state.push({text: action.text});
      return state;
    default:
      // A reducer must always return a valid state.
      // Alternatively you can throw an error if an invalid action is dispatched.
      return state;
  }
}

function useTodos() {
  const [todos, dispatch] = useReducer(todosReducer, []);

  function handleAddClick(text) {
    dispatch({ type: "add", text: text.type });
  }

  return [todos, { handleAddClick }];
}

// 绑定 Todos 的 UI
export default function TodosUI() {
  const [todos, actions] = useTodos();
  return (
    <div className="mb20">
      <b>3.自定义useReducer,redux机制实现：</b>
      {todos.map((todo, index) => (
        <div key={index}>{todo.text}</div>
      ))}
      <button onClick={actions.handleAddClick}>Add Todo</button>
    </div>
  );
}