import { clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";



export const handleAirdrop = async (wallets , amount , setErrorMessage , setSuccessMessage) => {

  // State for error message

    const recipientAddresses = wallets.split(",").map(wallet => wallet.trim());

    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
    
    for (let recipient of recipientAddresses) {

      try {
        const recipientPublicKey = new PublicKey(recipient);
        
        // Request airdrop for each recipient
        const signature = await connection.requestAirdrop(
          recipientPublicKey,
          amount * LAMPORTS_PER_SOL
        );
        
        // Get the latest blockhash
        const latestBlockhash = await connection.getLatestBlockhash();

        // Confirm the transaction using the latest blockhash
        const confirmation = await connection.confirmTransaction({
          signature,
          blockhash: latestBlockhash.blockhash,
          lastValidBlockHeight: latestBlockhash.lastValidBlockHeight,
        });
        
        // Log the confirmation result
        console.log(`Transaction confirmed: ${confirmation.blockhash}`);
        setSuccessMessage(`Airdrop confirmed for ${recipient}`);
        
      } catch(error) {
        setSuccessMessage("");
        if (error?.response?.error?.message) {
          setErrorMessage(error.response.error.message); // Set error message from API response
        } else {
          setErrorMessage(`${(error)} ! Airdrop failed for ${recipient}`);
        }
      }
    }
  };



// Example usage
 // Replace with actual public key and amount
