let ethBalance = 100;
let btcBalance = 50;
let isWalletConnected = false;
let mockWalletAddress = "0x1234567890abcdef1234567890abcdef12345678";
let mockWalletBalance = 10; // Simulated wallet balance (ETH)

document.getElementById('fromToken').addEventListener('change', updateSwapAmount);
document.getElementById('toToken').addEventListener('change', updateSwapAmount);

// Simulate connecting to a wallet
function connectWallet() {
  if (!isWalletConnected) {
    // Simulate wallet connection by changing the state
    isWalletConnected = true;
    document.getElementById('walletAddress').textContent = mockWalletAddress;
    document.getElementById('walletBalance').textContent = mockWalletBalance;
    document.getElementById('walletInfo').style.display = 'block';
    document.getElementById('connectWallet').textContent = "Disconnect Wallet";
  } else {
    // Simulate disconnecting the wallet
    isWalletConnected = false;
    document.getElementById('walletInfo').style.display = 'none';
    document.getElementById('connectWallet').textContent = "Connect Wallet";
  }
}

// Update the "to amount" when token selection changes
function updateSwapAmount() {
  let fromToken = document.getElementById('fromToken').value;
  let toToken = document.getElementById('toToken').value;

  if (fromToken === 'eth' && toToken === 'btc') {
    document.getElementById('toAmount').disabled = false;
  } else if (fromToken === 'btc' && toToken === 'eth') {
    document.getElementById('toAmount').disabled = false;
  } else {
    document.getElementById('toAmount').disabled = true;
  }
}

// Simulate a token swap
function simulateSwap() {
  const fromToken = document.getElementById('fromToken').value;
  const fromAmount = parseFloat(document.getElementById('fromAmount').value);
  let toAmount = 0;

  if (fromToken === 'eth') {
    if (ethBalance >= fromAmount) {
      ethBalance -= fromAmount;
      toAmount = fromAmount * 0.5; // Example conversion rate
      btcBalance += toAmount;
    } else {
      alert("Insufficient ETH balance");
      return;
    }
  } else if (fromToken === 'btc') {
    if (btcBalance >= fromAmount) {
      btcBalance -= fromAmount;
      toAmount = fromAmount * 2; // Example conversion rate
      ethBalance += toAmount;
    } else {
      alert("Insufficient BTC balance");
      return;
    }
  }

  document.getElementById('ethBalance').textContent = `ETH: ${ethBalance}`;
  document.getElementById('btcBalance').textContent = `BTC: ${btcBalance}`;
  document.getElementById('fromAmount').value = '';
  document.getElementById('toAmount').value = '';
}
