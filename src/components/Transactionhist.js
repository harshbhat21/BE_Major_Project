import React from 'react'
import DaiTokenMock from '../abis/DaiTokenMock.json'
import loadBlockchainData from '../components/Transactions'
function Transactionhist(ol) {
    
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
            { ol.state.transactions.map((tx, key) => {
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