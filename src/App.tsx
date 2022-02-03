import { useState } from 'react';
import Modal from 'react-modal';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import TransactionModal from './components/TransactionModal';
import {GlobalStyle} from '../src/styles/global';
import { TransactionProvider } from './hooks/useTransaction';

Modal.setAppElement('#root');

const App: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleOpenModal = () => {
    setIsOpenModal(true)
  }
  const handleCloseModal = () => {
    setIsOpenModal(false)
  }
  return (
    <TransactionProvider>
      <GlobalStyle />
      <Header handleOpenModal={handleOpenModal}/>
      <Dashboard />
      <TransactionModal isOpenModal={isOpenModal} handleCloseModal={handleCloseModal}/>
    </TransactionProvider>
  );
}

export default App;
