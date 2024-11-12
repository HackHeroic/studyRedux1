import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getUsersFetch } from '../reducers/users-reducer'; // Assuming users-reducer

const Home = () => {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector(state => state.users);

  const handleFetchUsers = () => {
    dispatch(getUsersFetch());
  };

  useEffect(() => {
    // Don't call getUsersFetch on every render
  }, []);

  return (
    <div>
      <button onClick={handleFetchUsers}>Fetch Users</button>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;