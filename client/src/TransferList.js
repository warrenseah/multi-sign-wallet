import React from 'react';

function TransferList({ transfers, approveTransfer, approveList}) {
    return (
        <div>
            <h2>Transfers</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Amount</th>
                        <th>To</th>
                        <th>Action</th>
                        <th>No Approvals</th>
                        <th>Sent</th>
                    </tr>
                </thead>
                <tbody>
                    {transfers.map(transfer => {
                        return (
                            <tr key={transfer.id}>
                                <td>{transfer.id}</td>
                                <td>{transfer.amount}</td>
                                <td>{transfer.to}</td>
                                <td>
                                    <button disabled={approveList[transfer.id] ? true :  false } onClick={() => approveTransfer(transfer.id)}> Approve </button>
                                </td>
                                <td>
                                    {transfer.approvals}
                                </td>
                                <td>{transfer.sent ? 'yes' : 'no'}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default TransferList;