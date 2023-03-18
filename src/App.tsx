import React from 'react';
import { Routes, Route } from 'react-router-dom';

/* Lazy loaded pages */
const UsersPage = React.lazy(() => import('./pages/user/users/UserPage'));
const NotFoundPage = React.lazy(() => import('./pages/not-found/NotFoundPage'));
const UserDetailedPage = React.lazy(
  () => import('./pages/user/user-detailed/UserDetailedPage')
);

export default function App() {
  return (
    <div className="w-[80vw] mx-auto">
      <Routes>
        <Route
          index
          element={
            <React.Suspense fallback={<>...</>}>
              <UsersPage />
            </React.Suspense>
          }
        />
        <Route
          path="/users/:id"
          element={
            <React.Suspense fallback={<>...</>}>
              <UserDetailedPage />
            </React.Suspense>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
