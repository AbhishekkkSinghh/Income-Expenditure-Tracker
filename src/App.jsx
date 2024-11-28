import React from "react";
import "./App.css"
import {Header} from "./components/header"
import {Balance} from "./components/Balance"
import {IncomeExpenses} from "./components/incomeExpenses"
import {TransactionList} from "./components/transactionList"
import {AddTransaction} from "./components/AddTransaction"
import { GlobalProvider } from "./context/globalState";

function App() {
  console.log("hiii")

  return (
    
    <GlobalProvider>
          <Header></Header>
          <div className="container">
            <Balance></Balance>
            <IncomeExpenses></IncomeExpenses>
            <TransactionList></TransactionList>
            <AddTransaction></AddTransaction>
          </div>
    </GlobalProvider>
     
    
  )
}

export default App
