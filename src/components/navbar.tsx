import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


import {
  ThirdwebProvider,
  ConnectButton,
  useActiveAccount,
} from "thirdweb/react";
import { base, baseSepolia, sepolia, bsc, bscTestnet } from "thirdweb/chains";
import {
  createWallet,
  walletConnect,
  inAppWallet,
} from "thirdweb/wallets";
import { createThirdwebClient, getAddress } from "thirdweb";

const client = createThirdwebClient({
  clientId: "3969c483fbebee56918ad2b594349ec8",
});


const wallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  walletConnect(),
  inAppWallet({
    auth: {
      options: [
        "email",
        "google",
        "apple",
        "facebook",
        "phone",
      ],
    },
  }),
];

export default function Navbar({ }) {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(0);
  const [backButton, setBackButton] = useState(false);


  const location = useLocation();

  useEffect(() => {
    console.log("***************location changed ", location);
    if (location.pathname === "/play") setBackButton(true);
    else setBackButton(false);
  }, [location]);


  useEffect(() => {
    const interval = setInterval(() => {
    }, 3000);

    return () => clearInterval(interval);
  }, []);




  const account = useActiveAccount();

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          width: "100vw",
          backgroundColor: "rgb(16, 18, 35)",
          padding: { xs: "0 10px", sm: "0 20px" },
          display: "flex",
          flexDirection: "row",
          borderBottom: "rgba(143, 143, 144, 0.14) 2px solid",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: "1",
          "& .MuiBox-root": {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          },
        }}
      >
        <Box
          sx={{
            cursor: "pointer",
            "& img": {
              margin: { xs: "20px 0px", sm: "20px 0px" },

              height: { xs: "32px", sm: "32px", md: "32px" },
            },
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          <img alt="" src="./logo192.png"



          />
          <Typography
            sx={{
              display: { xs: "none", sm: "flex" },
              fontSize: { sm: "20px", md: "24px" },
              fontWeight: "400",
              margin: "0.3rem",
              color: "white",
            }}
          >
            Sworm
          </Typography>
        </Box>
        <Box>
          <Box
            sx={{
              marginLeft: { xs: "10px", sm: "20px", md: "30px" },
              "& .wallet-adapter-button": {
                height: { xs: "42px", sm: "46px", md: "50px" },
                borderRadius: "10px",
                border: '2px white solid',
                background: "transparent",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                color: "white",
                fontSize: { xs: "16px", sm: "18px", md: "18px" },
                fontWeight: "600",
              },
            }}
          >
            <ThirdwebProvider>
              <ConnectButton
                client={client}
                wallets={wallets}
                accountAbstraction={{
                  chain: bscTestnet,
                  gasless: true,
                }}
                theme={"dark"}
                connectModal={{ size: "compact" }}
              />
            </ThirdwebProvider>
          </Box>
          
        </Box>
      </Box>
    </>
  );
}
