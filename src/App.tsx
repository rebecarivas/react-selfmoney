import { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import TransactionModal from './components/TransactionModal';
import Modal from 'react-modal';
import {GlobalStyle} from '../src/styles/global';

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
    <>
      <GlobalStyle />
      <Header handleOpenModal={handleOpenModal}/>
      <Dashboard />
      <TransactionModal isOpenModal={isOpenModal} handleCloseModal={handleCloseModal}/>
    </>
  );
}

export default App;
