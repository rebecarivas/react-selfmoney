import { useTransactions } from "../../hooks/useTransaction";
import { Container } from "./style";
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

const Summary: React.FC = () => {
    const {transactions}   = useTransactions();

    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.transactionType === 'deposit'){
            acc.deposits  += transaction.amount
            acc.total += transaction.amount
        }else{
            acc.withdraws += transaction.amount
            acc.total -= transaction.amount
        }

        return acc

    }, {
        deposits: 0, 
        withdraws: 0, 
        total:0,
    })  

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={income} alt="entradas"/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                        }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcome} alt="saídas"/>
                </header>
                <strong>
                    - {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                        }).format(summary.withdraws)}
                </strong>
            </div>
            <div className="heightlight-background">
                <header>
                    <p>Total</p>
                    <img src={total} alt="total"/>
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                    }).format(summary.total)}</strong>
            </div>
        </Container>
    )
}

export default Summary;