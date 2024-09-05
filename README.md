Sworm App

Welcome to the Sworm App! 

This application allows users to connect their wallets and play a game(P2E) and luck-based game on the BSC blockchain.

Features

Wallet Integration: Connect your wallet to the app using thirdweb walletconnect to enable you to play the game and Typecript SDK(wormhole connect) for seamless bridging experience.

- Token bridging: Efficient token bridge using the Typescript SDK(Wormhole connect). 

- Real-Time Quotes: Price quotes fetched from the various oracle depending on the blockchain. 

- Game play: Play the game and get double of bet amount. 

- Claim wins: Players can withdraw tokens earned, Users can play unlimited game, Winners get double of the bet amount

- Add-ons: Ability to use custom RPC, Custom tokens, custom networks, custom theme for the typescript SDK.

##Prerequisites 

- Node.js (v18 or later)

-Yarn or npm 

- A Web3 wallet(preferably Metamask)

Getting Started

To get started with the Sworm App, follow these steps:

Clone the Repository: Clone this repository to your local machine using:

git clone https://github.com/Afoxcute/sworm.git

Install Dependencies: Navigate to the project directory and install dependencies using npm or yarn:

cd Sworm

npm i --force

**Configuration

If you prefer to use your own credentials


You can install dotenv(npm i dotenv --force).

create a .env file in the root directory and add your configuration details:

Example of the credentials you can put in the .env are:

RPC_URL=

CLIENT_ID=

CONTRACT_ADDRESS=

Run the Development Server: Start the development server to run the app locally:

npm start or yarn start


Open the App: Once the server is running, open your web browser and navigate to http://localhost:3000 to view the app.

Usage
- Connect Wallet: Use your metamask to connect to the BSC blockchain

- Game Play: Click on the play button to play the game

- Game Play: Choose bet amount, bet type and click play

- Game Play: Click on the play button to play the game

Users can choose if they want to bet with ROCK, PAPER or SCISSORS

After clicking on PLAY, there is a timer for the house to determine if they want to choose ROCK, PAPER or SCISSORS.

If the bet type is the same with the user bet type, the user wins but if it is not the user lose

Author's Comment
The game winner/loser feature works seamlessly on the localhost during development. However, I have experienced some difficulties after hosting the application, If you have issues running the game, Installing dependencies etc, I advice you convert it to js or use the js version on the repository. I am actively working to resolve these issues and appreciate your patience.

 
