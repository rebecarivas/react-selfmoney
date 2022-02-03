import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import api from "../services/api";

interface ITransaction{
    id: number,
    title: string,
    amount: number,
    category: string,
    transactionType: string,
    createAt: string,
}
type ITransactionInput = Omit<ITransaction, 'id' | 'createAt'>

interface ITransactionProvider{
    children: ReactNode
}
interface ITransactionContextData {
    transactions: ITransaction[],
    createTransaction: (transaction: ITransactionInput) => Promise<void>,
}

const TransactionContext = createContext<ITransactionContextData>({} as ITransactionContextData);


export const TransactionProvider = ({children}: ITransactionProvider) => {
    const [transactions, setTransactions] = useState<ITransaction[]>([]);

    useEffect(() =>{
        api.get('transaction')
        .then(response => setTransactions(response.data.transactions))
    }, []);

   async function createTransaction(transactionInput: ITransactionInput) {
        const response = await api.post('transaction', {...transactionInput, createAt: new Date()})
        const {transaction} = response.data
        setTransactions([...transactions, transaction])
    }

    return(
        <TransactionContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
}

export function useTransactions(){
    const context = useContext(TransactionContext);
    return context 
}
