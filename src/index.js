import { React } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Game from './Page/Game';
import App from './App';
import GameOver from './Page/GameOver';
import { UserProvider } from './UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <UserProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Game" element={<Game />} />
          <Route path="/GameOver" element={<GameOver />} />
        </Routes>
      </HashRouter>
    </UserProvider>
  </ChakraProvider>
);