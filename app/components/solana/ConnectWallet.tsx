"use client";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Connection } from "@solana/web3.js";
import React, { useEffect, useState } from "react";

const ConnectWallet = () => {
  const { publicKey, connected } = useWallet();
  const [solBalance, setSolBalance] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (publicKey && connected) {
      const connection = new Connection("https://api.devnet.solana.com");

      const fetchBalances = async () => {
        try {
          const balance = await connection.getBalance(publicKey);
          setSolBalance(balance / 1e9); // Convert lamports to SOL
        } catch (error) {
          console.error("Failed to fetch SOL balance:", error);
          setSolBalance(null);
        }
      };

      fetchBalances();
    }
  }, [publicKey, connected]);

  // Don't render wallet-related UI on the server
  if (!mounted) {
    return null;
  }

  return (
    <div>
      <WalletMultiButton />
      {/* {connected && (
        <div className="mt-4">
          <p>
            SOL Balance:{" "}
            {solBalance !== null ? `${solBalance} SOL` : "Loading..."}
          </p>
        </div>
      )} */}
    </div>
  );
};

export default ConnectWallet;
