import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransaction';
import {Container, TransactionContainer, RadioBox} from './style';
import Close from '../../assets/close.svg';
import Income from '../../assets/income.svg';
import Outcome from '../../assets/outcome.svg';

interface ITransactionModal{
    isOpenModal: boolean;
    handleCloseModal: () => void;
}

const TransactionModal = ({isOpenModal, handleCloseModal}: ITransactionModal) => {
    const {createTransaction} = useTransactions();
    
    const [transactionType, setTransactionType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');

    async function handleCreateTransaction (event: FormEvent) {
        event.preventDefault()
        await createTransaction({
            title, 
            amount,
            category,
            transactionType,
        })
        setTitle('')
        setAmount(0)
        setCategory('')
        setTransactionType('deposit')
        handleCloseModal()

    }
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
            <Container onSubmit={handleCreateTransaction}>
                <h2>Cadastrar Nova Transação</h2>
                <input 
                    placeholder='Título'
                    value= {title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <input 
                    type='number' 
                    placeholder='Valor' 
                    value={amount}
                    onChange={(event) => setAmount(+event.target.value) }
                />
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
                <input 
                    placeholder='Categoria' 
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />
                <button type='submit'>Cadastrar</button>
            </Container>
      </Modal>
    )
}

export default TransactionModal;