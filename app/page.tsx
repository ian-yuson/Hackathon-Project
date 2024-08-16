import Image from "next/image";
import ConnectWallet from "./components/solana/ConnectWallet";
import SideBar from "./components/navigation/SideBar";
import AllNavBar from "./components/navigation/AllNavBar";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-base-200">
        <AllNavBar />
        {/* Additional content can go here */}
      </div>
    </>
  );
}
