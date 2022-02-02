import Modal from 'react-modal';
import {Container, TransactionContainer, RadioBox} from './style';
import Close from '../../assets/close.svg';
import Income from '../../assets/income.svg';
import Outcome from '../../assets/outcome.svg';
import { useState } from 'react';

interface ITransactionModal{
    isOpenModal: boolean;
    handleCloseModal: () => void;
}

const TransactionModal = ({isOpenModal, handleCloseModal}: ITransactionModal) => {
    const [transactionType, setTransactionType] = useState('deposit')
    return(
        <Modal
        isOpen={isOpenModal}
        onRequestClose={handleCloseModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
            <button 
              type="button" 
              onClick={handleCloseModal} 
              className="react-modal-close">
                  <img src={Close} alt="fechar modal"/>
            </button>
            <Container>
                <h2>Cadastrar Nova Transação</h2>
                <input placeholder='Título'/>
                <input type='number' placeholder='Valor' />
                <TransactionContainer>
                    <RadioBox 
                        type="button" 
                        onClick={() => setTransactionType('deposit')}
                        isActive={transactionType === 'deposit'}
                        activeColor="green"
                    >
                        <img src={Income} alt= "entradas"/>
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox 
                        type="button" 
                        onClick={() => setTransactionType('withdraw')}
                        isActive={transactionType === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={Outcome} alt="saídas"/>
                        <span>Saída</span>
                    </RadioBox>
                </TransactionContainer>
                <input placeholder='Categoria' />
                <button type='submit'>Cadastrar</button>
            </Container>
      </Modal>
    )
}

export default TransactionModal;