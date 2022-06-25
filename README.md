# Tuff Guys

## Requirements
1. Replicate this site: https://tuffguysnft.com/fuse

### Basic Overview
1. Enable user to connect to site via web3
2. Display NFTs from a specific collection on bottom
3. Allow user to select 3 to "fuse" into 1 NFT (This new NFT must be minted from the same contract, but with the URI + metadata for the image being generated in real-time via an API you've created.)

### API
The API:
1. Must have access to a database containing the Tuffs' visual assets so that they may be stacked according to the specs provided by the user on the front-end interface
2. Once the image is created, it must be hosted at an endpoint which is returned and used as the argument for the "image url" parameter of the NFT being minted by the user

-----
### Setup

1. Install dependencies

```bash
yarn
```

3. Run the app

```bash
yarn start
```
-----