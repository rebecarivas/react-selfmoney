import Modal from 'react-modal';
import {Container, TransactionContainer} from './style';
import Close from '../../assets/close.svg';
import Income from '../../assets/income.svg';
import Outcome from '../../assets/outcome.svg';

interface ITransactionModal{
    isOpenModal: boolean;
    handleCloseModal: () => void;
}

const TransactionModal = ({isOpenModal, handleCloseModal}: ITransactionModal) => {
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
                    <button type="button">
                        <img src={Income} alt= "entradas"/>
                        <span>Entrada</span>
                    </button>
                    <button type="button">
                        <img src={Outcome} alt="saídas"/>
                        <span>Saída</span>
                    </button>
                </TransactionContainer>
                <input placeholder='Categoria' />
                <button type='submit'>Cadastrar</button>
            </Container>
      </Modal>
    )
}

export default TransactionModal;