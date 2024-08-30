import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, IconButton, Typography } from "@mui/material";

const GameInfo = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        color: "white",
        backgroundColor: "rgb(16, 18, 35)",
        paddingTop: "50px",
      }}
    >
      <div className="game">
        <p className="game_title">About</p>
        <p className="game_cont">
          “Rock paper scissors” is a simple and interesting game. Many of us
          used to play it in a school to resolve disputes or just to spend some
          time. But how to play if your friends are far away? For this reason
          rpsgame was created. It allows you to play with friends any time you
          want.
        </p>

        <button
          className="btn"
          style={{
            margin: "auto",
          }}
          onClick={() => {
            navigate("/play");
          }}
        >
          Play Now
        </button>

        <br
          style={{
            color: "rgba(143, 143, 144, 0.14) 2px solid",
            marginBottom: "2rem",
            height: "2px",
          }}
        />
      </div>

      <div className="game">
        <p className="game_title">What are the rules?</p>
        <p className="game_cont">
          The rules are very simple and probably you remember them from your
          childhood:
        </p>
        <ul
          style={{
            width: "fit-content",
            margin: "40px auto ",
            fontSize: "18px",
          }}
        >
          <li>
            If you choose Rock, you will win against Scissors but lose against
            Paper.
          </li>
          <li>
            If you choose Scissors, you will win against Paper but lose against
            Rock.
          </li>
          <li>
            If you choose Paper, you will win against Rock but lose against
            Scissors.
          </li>
        </ul>

        <button
          className="btn"
          style={{
            margin: "auto",
          }}
          onClick={() => {
            navigate("/play");
          }}
        >
          Play Now
        </button>

        <br
          style={{
            color: "rgba(143, 143, 144, 0.14) 2px solid",
            marginBottom: "2rem",
            height: "2px",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "90%",
            maxWidth: "900px",
            margin: "100px auto",
          }}
        >
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              "& img": {
                margin: { xs: "auto 0px", sm: "auto 0px" },
                height: { xs: "32px", sm: "32px", md: "32px" },
              },
            }}
            onClick={() => {
              navigate("/");
            }}
          >

          </Box>
        </div>
      </div>

      <div className="game">
        <p className="game_title">Want to support?</p>
        <p className="game_cont">
          Follow these steps:
        </p>
        <ul
          style={{
            width: "fit-content",
            margin: "40px auto ",
            fontSize: "18px",
          }}
        >
          <li>
            Connect your wallet.
          </li>
          <li>
            Choose token you want to bridge and network.
          </li>
          <li>
            Choose the token and network you want the token to be.
          </li>
        </ul>

        <button
          className="btn"
          style={{
            margin: "auto",
          }}
          onClick={() => {
            navigate("/wormhole");
          }}
        >
          Donate now!
        </button>

        <br
          style={{
            color: "rgba(143, 143, 144, 0.14) 2px solid",
            marginBottom: "2rem",
            height: "2px",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "90%",
            maxWidth: "900px",
            margin: "100px auto",
          }}
        >
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              "& img": {
                margin: { xs: "auto 0px", sm: "auto 0px" },
                height: { xs: "32px", sm: "32px", md: "32px" },
              },
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            <img alt="" src="./logo192.png" />
            <Typography
              sx={{
                display: { xs: "none", sm: "flex" },
                fontSize: { sm: "14px", md: "14px" },
                fontWeight: "400",
                margin: "auto 0.3rem",
                color: "white",
              }}
            >
              Sworm
            </Typography>
          </Box>
          <p
            style={{
              width: "fit-content",
              fontSize: "14px",
            }}
          >
            Copyright © Sworm
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
