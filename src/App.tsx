import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from 'react-modal';
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTimeModal } from "./components/NewTimeModal";
import { TimeProvider } from "./hooks/useTime";

Modal.setAppElement('#root');

export function App() {
  const [isNewTimeModalOpen, setIsNewTimeModalOpen] = useState(false);

  function handleOpenNewTimeModal() {
    setIsNewTimeModalOpen(true);
  }

  function handleCloseNewTimeModal() {
    setIsNewTimeModalOpen(false);
  }

  return (
    <TimeProvider>
      <Header onOpenNewTimeModal={handleOpenNewTimeModal}/>

      <Dashboard />

      <NewTimeModal 
        isOpen={isNewTimeModalOpen}
        onRequestClose={handleCloseNewTimeModal}
      />

      <GlobalStyle />
    </TimeProvider>
  );
}
