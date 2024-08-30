import { prepareContractCall, sendTransaction } from "thirdweb"
import { useSendTransaction } from "thirdweb/react";

export default function Claim({ contract, account }) {

    const claim = async () => {
        console.log('claim');

        const transaction = await prepareContractCall({
            contract,
            method: "function claimRewards()",
            params: []
        });
        const { transactionHash } = await sendTransaction({
            transaction,
            account
        });
        console.log("claimed", transactionHash);
    }

    return (
        <button style={{
            fontSize: '18px',
            padding: '8px 16px',
            margin: '10px 0px 10px 60px',
            borderRadius: "14px",
            color: "rgb(16, 18, 35)",

        }} onClick={claim}>Claim</button>
    )
}