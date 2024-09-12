import { useState } from 'react';
import { handleAirdrop } from './handleAirdrop';
import { SiSolana } from "react-icons/si";
// import { Connection, PublicKey, LAMPORTS_PER_SOL, clusterApiUrl } from "@solana/web3.js";

const AirdropForm = () => {
  const [amount, setAmount] = useState("");
  const [wallets, setWallets] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");



  return (
    
    <div className='flex flex-col gap-14 items-center bg-black text-white h-screen '>
    <div className='flex items-center gap-4 mt-5 '>
     <SiSolana size={30} color='cyan'/>
     <h1 className='text-3xl'>SOLANA AIR DROP</h1>
     </div>  
    <h1 className='font-bold text-xl w-[60%] sm:text-2xl text-center mt-5'>Instant Solana Test SOL Airdrop for Developers</h1>
    <div className='flex justify-center items-center flex-col w-[80%] md:w-[50%] lg:w-[40%] xl:w-[30%] gap-5 p-12 rounded-xl border border-zinc-300'>
  
      <div className='w-full items-center flex gap-5'>
      <input
        type="number"
        placeholder="Amount"
         className='px-3 w-[70%] py-1 bg-transparent border border-zinc-200'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
        <p className='text-md'>Max : 01</p>
        </div>
      
      <textarea
        placeholder="Wallet Addresses (comma separated)"
        value={wallets}
        className='w-full px-3 py-1 bg-transparent border border-zinc-200 '
        onChange={(e) => setWallets(e.target.value)}
      
      />
     
      <button onClick={()=>handleAirdrop(wallets, amount ,setErrorMessage ,setSuccessMessage )}  className='px-8 py-3 rounded-full bg-blue-500'>Airdrop</button>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
    </div>
  );
};

export default AirdropForm;
