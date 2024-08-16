import Image from "next/image";
import ConnectWallet from "./components/solana/ConnectWallet";

export default function Home() {
  return (
    <>
      <ConnectWallet />
    </>
  );
}
