import React from 'react'
import DaiTokenMock from '../abis/DaiTokenMock.json'
import { useLocation } from 'react-router-dom'
import transactions from '../components/Transactions'

function Transactionhist(ol) {
    const location = useLocation()
    const { vare } = location.state
    console.log(vare)
  return (
    <div>
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Recipient</th>
                <th scope="col">value</th>
            </tr>
            </thead>
            <tbody>
            { vare.map((tx, key) => {
                return (
                <tr key={key} >
                    <td>{tx.returnValues.to}</td>
                    <td>{window.web3.utils.fromWei(tx.returnValues.value.toString(), 'Ether')}</td>
                </tr>
                )
            }) }
            </tbody>
        </table>
    </div>
  )
}

export default Transactionhist