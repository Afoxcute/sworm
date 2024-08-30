import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";
import Navbar from "../components/navbar";
import { ThirdwebProvider, ConnectButton } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";
import { inAppWallet } from "thirdweb/wallets";

import { useReadContract } from "thirdweb/react";
import { useActiveAccount } from "thirdweb/react";


import dayjs from 'dayjs'

import Hero from "../components/Hero";
import GameInfo from "../components/GameInfo";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
    
      <Hero />
      <GameInfo />
    </>
  );
}

export default Home;
