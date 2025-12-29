import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import authservice from './appwrite/authservice';

const App = () => {


  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  return (
    <div>App</div>
  )
}

export default App
