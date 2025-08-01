import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeProvider from './themes/ThemeProvider';
import Layout from './layouts/Layout';
import { lazyWithDelay as lazyDelay } from './utils/lazyWithDelay';
import React from 'react';

// Lazy-loaded pages
const Home = lazyDelay(() => import('./pages/Home'), 2000);
const Todo = React.lazy(() => import('./pages/Todo/Todo'));
const Profile = React.lazy(() => import('./pages/Profile'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// if ('serviceWorker' in navigator && 'SyncManager' in window) {
//   navigator.serviceWorker.register('/service-worker.js')
//     .then(() => console.log('Service Worker Registered'))
//     .catch((err) => console.error('Service Worker Error:', err));
// }


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js', { type: 'module' })
      .then(reg => console.log('SW registered as module', reg))
      .catch(err => console.error(err));
  });
}

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="todo" element={<Todo />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;

