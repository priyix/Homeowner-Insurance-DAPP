window.addEventListener('DOMContentLoaded', () => {
  const connectButton = document.getElementById('connectButton');
  const walletAddress = document.getElementById('walletAddress');

  connectButton.addEventListener('click', async () => {
    if (window.ethereum) {
      try {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        walletAddress.textContent = `Connected Wallet: ${accounts[0]}`;
      } catch (err) {
        walletAddress.textContent = 'Connection rejected.';
        console.error(err);
      }
    } else {
      walletAddress.textContent = 'MetaMask is not installed!';
    }
  });
});
// Handle Policy Form Submission
document.getElementById('policyForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('fullName').value.trim();
  const address = document.getElementById('propertyAddress').value.trim();
  const contact = document.getElementById('contactNumber').value.trim();
  const coverage = document.getElementById('coverageType').value;

  // Log or send to smart contract later
  console.log('Policy Info:', { name, address, contact, coverage });

  document.getElementById('policyStatus').textContent =
    'Policy submitted! (Smart contract interaction will go here later)';
});
// Handle Premium Payment
document.getElementById('payPremiumBtn').addEventListener('click', async () => {
  const status = document.getElementById('paymentStatus');

  if (typeof window.ethereum === 'undefined') {
    status.textContent = 'MetaMask is not installed!';
    return;
  }

  const web3 = new Web3(window.ethereum);
  const accounts = await web3.eth.getAccounts();
  const from = accounts[0];

  try {
    await web3.eth.sendTransaction({
      from,
      to: from, // Replace with your smart contract address later
      value: web3.utils.toWei('0.05', 'ether'),
    });

    status.textContent = 'Premium payment successful!';
  } catch (error) {
    console.error(error);
    status.textContent = 'Payment failed or cancelled.';
  }
});
// Handle Claim Form Submission
document.getElementById('claimForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const description = document.getElementById('claimDescription').value.trim();

  // Simulate smart contract call
  console.log('Claim submitted:', description);

  document.getElementById('claimStatus').textContent =
    'Claim submitted! (Smart contract interaction will go here)';
});
