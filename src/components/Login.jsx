import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Check if username and password are valid (dummy check for demonstration)
    if (username === 'user' && password === 'password') {
      setLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      {loggedIn ? (
        <div>
          <h2 className="text-xl font-semibold mb-4">Welcome, {username}!</h2>
          <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="p-4 border border-gray-300 rounded max-w-md">
          <h2 className="text-xl font-semibold mb-4">Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-2 px-4 py-2 border rounded w-full"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-2 px-4 py-2 border rounded w-full"
          />
          <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Login;
