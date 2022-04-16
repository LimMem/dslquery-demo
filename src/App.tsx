import { HashRouter, Routes, Route, useNavigate } from 'react-router-dom';
import {} from 'react';

import './App.css';
import Editor from './pages/Editor';

function Home(props: any) {
  const navigate = useNavigate();
  console.log(props);
  return (
    <div
      className="App"
      onClick={() => {
        navigate('/editor');
      }}
    >
      跳转到Editor
    </div>
  );
}

export default () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/editor" element={<Editor />}></Route>
      </Routes>
    </HashRouter>
  );
};
