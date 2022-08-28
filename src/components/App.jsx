// import ContactForm from 'components/ContactForm';
// import ContactList from 'components/ContactList';
// import Filter from 'components/Filter';

// export const App = () => {
//   return (
//     <div className="container">
//       <h2 className="container-name">Phonebook</h2>
//       <ContactForm />
//       <div>
//         <h2 className="container-name">Contacts</h2>
//         <Filter />
//         <ContactList />
//       </div>
//     </div>
//   );
// };

import { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Switch } from 'react-router-dom';
import AppBar from './AppBar';
import Container from './Container/Container';
import PrivateRoute from './PrivatRoute';
import PublicRoute from './PublicRoute';
import { Routes, Route } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import ContactsPage from 'pages/ContactsPage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';

import authSelectors from 'redux/auth/authSelectors';
import authOperations from 'redux/auth/authOperations';

export function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Container>
        <AppBar />
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route
              path="/"
              // exact
              element={
                <PublicRoute path="/">
                  <HomePage />
                </PublicRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute >
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute restricted>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              // exact
              element={
                <PublicRoute restricted>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route path="*" element={<HomePage />}/>
          </Routes>
        </Suspense>
      </Container>
)
  );
}
