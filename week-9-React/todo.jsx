import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput('');
  };

  const toggle = (id) =>
    setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t));

  const remove = (id) =>
    setTodos(todos.filter(t => t.id !== id));

  return (
    <div style={{ maxWidth: 360, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h2>Todo</h2>
      <form onSubmit={addTodo} style={{ display: 'flex', gap: 6 }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add task…"
          style={{ flex: 1, padding: 8 }}
        />
        <button>Add</button>
      </form>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: 12 }}>
        {todos.map(t => (
          <li key={t.id} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0' }}>
            <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} />
            <span style={{ flex: 1, textDecoration: t.done ? 'line-through' : 'none' }}>
              {t.text}
            </span>
            <button onClick={() => remove(t.id)}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}   
