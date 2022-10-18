import axios from 'axios';
import { useState, ChangeEvent, useCallback } from 'react';
import { useDebounce } from './hooks';

export const TestDebounce = () => {
  const [value, setValue] = useState('');
  const [users, setUsers] = useState<any>([]);

  const searchUsers = useDebounce(async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    setUsers(response.data);
  }, 500);

  const changeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      searchUsers();
    },
    [searchUsers]
  );

  return (
    <div>
      <input type='text' value={value} onChange={changeHandler} />
      <button onClick={() => setUsers([])}>Clear Users</button>
    </div>
  );
};
