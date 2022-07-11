import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Result from './pages/Result';
import Detail from './pages/Detail';
import './assets/style/App.scss';

function App() {
  return (
    <Routes>
      <Route index element={<Result />} />
      <Route path="book/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
