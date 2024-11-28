import React from 'react';
import { GlobalContext } from '../context/globalState';
import { useContext } from 'react';
import { Transaction } from './transaction';

export const TransactionList = () => {

    const {transactions} = useContext(GlobalContext);
    console.log(transactions)
    return (
        <>  
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction =>(<Transaction key={transaction.id} transaction = {transaction} ></Transaction>))}
            </ul>
        </>
    )
}