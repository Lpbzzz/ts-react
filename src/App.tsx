import { isArray } from '@/utils'
import { useState } from 'react';
import './app.css'

const App = () => {
  const [arr] = useState([1,2,3])
  return (
    <div className="bgRed">
      <h1>Hello fff</h1>
      <h2>{JSON.stringify(arr)}是不是数组？：{isArray(arr) ? '是' : '否'}</h2>
    </div>
  );
};

export default App;