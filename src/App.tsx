import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SnackbarProvider } from "notistack";

import Home from "./pages/home";
import Play from "./pages/play";
import Game from "./pages/game";
import Leaderboard from "./pages/Leaderboard";
import { ThirdwebProvider } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";
import WormholeConnect from '@wormhole-foundation/wormhole-connect';
// import { wormhole } from "@wormhole-foundation/sdk";
// import algorand from "@wormhole-foundation/sdk/algorand";
// import aptos from "@wormhole-foundation/sdk/aptos";
// import cosmwasm from "@wormhole-foundation/sdk/cosmwasm";
// import evm from "@wormhole-foundation/sdk/evm";
// import solana from "@wormhole-foundation/sdk/solana";
// import sui from "@wormhole-foundation/sdk/sui";


function App() {

  // const wh = await wormhole("Testnet", [evm, solana, aptos, algorand, cosmwasm, sui]);


  const client = createThirdwebClient({
    clientId: "3969c483fbebee56918ad2b594349ec8",
  })



  return (
    <>
      <ThirdwebProvider client={client}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wormhole" element={<WormholeConnect config={{"env":"mainnet"}} />} />
            <Route path="/game" element={<Game />} />
            <Route path="/play" element={<Play />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </Router>
        <ToastContainer autoClose={3000} draggableDirection="x" />
      </ThirdwebProvider>

    </>
  );
}

export default App;
