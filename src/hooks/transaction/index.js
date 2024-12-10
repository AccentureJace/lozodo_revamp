import { useEffect, useState } from "react";
import transactionService from "../../services/transaction";
import { SESSION_TOKEN } from "../../constants/common";
import { toast } from "react-toastify";

export default function useTransactionHooks() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem(SESSION_TOKEN)
        if (!token) {
            toast.error('No token provided!')
            return
        }
        fetchTransactions()
    }, []);

    const fetchTransactions = async () => {
        const response = await transactionService.getTransactions();
        if(!response) {
            toast.error(error)
        }else {
            const all_transactions = response.data;
            setTransactions(all_transactions)
            console.log('all_transactions: ', all_transactions)
        }
    }
    console.log('transactions: ', transactions)
    return{
        transactions
    }
}