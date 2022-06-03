import { React, useContext } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Game from './Page/Game';
import App from './App';
import GameOver from './Page/GameOver';
import { UserProvider } from './UserContext';
import { StatusProvider } from './StatusContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <StatusProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/Game" element={<Game />} />
            <Route path="/GameOver" element={<GameOver />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </StatusProvider>
  </ChakraProvider>
);