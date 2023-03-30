import React, { useState } from 'react';
import Example1 from './Example1';

export const validateName = (name) => {
  if ((name && isNaN(name)) || !name) return false;
  return true;
};

const Example2 = () => {
  const [name, setName] = useState('Username');
  const [error, setError] = useState(false);
  const setUserName = (event) => {
    const { value } = event.target;
    var isError = validateName(value);
    setError(isError);
    setName(value);
  };
  return (
    <div>
      <Example1 name={name} />
      <input
        placeholder="Username"
        type="text"
        data-testid="content-input"
        value={name}
        onChange={setUserName}
      />
      {error && <div data-testid="content-error">Error</div>}
    </div>
  );
};
export default Example2;
