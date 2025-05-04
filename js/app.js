// ✅ Contract Setup
const contractABI = [
  // 👉 Paste your ABI array from Remix here
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "admin",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "approveClaim",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "approvePolicy",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "claims",
      "outputs": [
        {
          "internalType": "string",
          "name": "description",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "isResolved",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "isApproved",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_fullName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_propertyAddress",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_contactNumber",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_coverageType",
          "type": "string"
        }
      ],
      "name": "createPolicy",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getClaims",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "isResolved",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isApproved",
              "type": "bool"
            }
          ],
          "internalType": "struct HomeInsurance.Claim[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getPendingPolicies",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_holder",
          "type": "address"
        }
      ],
      "name": "getPolicy",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "fullName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "propertyAddress",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "contactNumber",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "coverageType",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "policyHolder",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "isActive",
              "type": "bool"
            }
          ],
          "internalType": "struct HomeInsurance.Policy",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "pendingPolicies",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "policies",
      "outputs": [
        {
          "internalType": "string",
          "name": "fullName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "propertyAddress",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "contactNumber",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "coverageType",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "policyHolder",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "isActive",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "rejectClaim",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "rejectPolicy",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_description",
          "type": "string"
        }
      ],
      "name": "submitClaim",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }  
  
];
const contractAddress = "0xb3a888e2BC6eBfe27BC2D347fdFEE61aDa677022"; // 👉 Replace with your deployed address

let web3;
let contract;
let account;

window.addEventListener('DOMContentLoaded', () => {
  const connectButton = document.getElementById('connectButton');
  const walletAddress = document.getElementById('walletAddress');
  const adminPoliciesContainer = document.getElementById('adminPolicies');

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
      const id = this.getAttribute('href').substring(1);
  
      document.querySelectorAll('.section').forEach(sec => sec.classList.add('d-none'));
      document.getElementById(id).classList.remove('d-none');
  
      if (id === 'admin') {
        loadPendingPolicies();     // show pending policy cards
        loadPendingClaims();       // show pending claim cards
      }
    });
  });
  

  async function loadPendingClaims() {
    const container = document.getElementById('adminClaims');
    container.innerHTML = ''; // Clear previous cards
  
    try {
      // This is a simplified example. In a real contract, you'd loop all users or store all claim submitters
      const users = await contract.methods.getPendingPolicies().call(); // reusing pendingPolicies for now
  
      for (let user of users) {
        const claims = await contract.methods.getClaims(user).call();
  
        for (let i = 0; i < claims.length; i++) {
          const claim = claims[i];
          if (!claim.isResolved) {
            const card = document.createElement('div');
            card.className = 'card mb-2 p-3';
            card.innerHTML = `
              <p><strong>User:</strong> ${user}</p>
              <p><strong>Description:</strong> ${claim.description}</p>
              <button class="btn btn-success btn-sm me-2" onclick="approveClaim('${user}', ${i})">Approve</button>
              <button class="btn btn-danger btn-sm" onclick="rejectClaim('${user}', ${i})">Reject</button>
            `;
            container.appendChild(card);
          }
        }
      }
    } catch (err) {
      console.error('Failed to load claims:', err);
    }
  }
  

async function loadPendingPolicies() {
  try {
    const pending = await contract.methods.getPendingPolicies().call({ from: account });
    adminPoliciesContainer.innerHTML = '';

    for (let addr of pending) {
      const policy = await contract.methods.getPolicy(addr).call();

      const card = document.createElement('div');
      card.className = 'card mb-2 p-3';

      card.innerHTML = `
        <p><strong>Name:</strong> ${policy.fullName}</p>
        <p><strong>Coverage:</strong> ${policy.coverageType}</p>
        <button class="btn btn-success btn-sm me-2" onclick="approvePolicy('${addr}')">Approve</button>
        <button class="btn btn-danger btn-sm" onclick="rejectPolicy('${addr}')">Reject</button>
      `;

      adminPoliciesContainer.appendChild(card);
    }
  } catch (err) {
    console.error('Failed to load pending policies:', err);
  }
}


  connectButton.addEventListener('click', async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        account = accounts[0];
        contract = new web3.eth.Contract(contractABI, contractAddress);

        walletAddress.textContent = `Connected Wallet: ${account}`;
      } catch (err) {
        walletAddress.textContent = 'Connection rejected.';
        console.error(err);
      }
    } else {
      walletAddress.textContent = 'MetaMask is not installed!';
    }
  });

  // ✅ Handle Policy Form Submission
  document.getElementById('policyForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('fullName').value.trim();
    const address = document.getElementById('propertyAddress').value.trim();
    const contact = document.getElementById('contactNumber').value.trim();
    const coverage = document.getElementById('coverageType').value;

    try {
      await contract.methods.createPolicy(name, address, contact, coverage).send({ from: account });

      document.getElementById('policyStatus').textContent = 'Policy submitted!';
    } catch (error) {
      console.error(error);
      document.getElementById('policyStatus').textContent = 'Submission failed.';
    }
  });

  // ✅ Handle Premium Payment
  document.getElementById('payPremiumBtn').addEventListener('click', async () => {
    const status = document.getElementById('paymentStatus');

    if (typeof window.ethereum === 'undefined') {
      status.textContent = 'MetaMask is not installed!';
      return;
    }

    try {
      const accounts = await web3.eth.getAccounts();
      const from = accounts[0];

      await web3.eth.sendTransaction({
        from,
        to: contractAddress, // 👉 Send payment to smart contract
        value: web3.utils.toWei('0.05', 'ether'),
      });

      status.textContent = 'Premium payment successful!';
    } catch (error) {
      console.error(error);
      status.textContent = 'Payment failed or cancelled.';
    }
  });

  // ✅ Handle Claim Form Submission
  document.getElementById('claimForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const description = document.getElementById('claimDescription').value.trim();

    // Replace with contract method when implemented
    console.log('Claim submitted:', description);

    document.getElementById('claimStatus').textContent =
      'Claim submitted! (Smart contract interaction will go here)';
  });
});
window.approvePolicy = async function (addr) {
  try {
    await contract.methods.approvePolicy(addr).send({ from: account });
    await loadPendingPolicies();
  } catch (err) {
    console.error('Approval failed:', err);
  }
};

window.rejectPolicy = async function (addr) {
  try {
    await contract.methods.rejectPolicy(addr).send({ from: account });
    await loadPendingPolicies();
  } catch (err) {
    console.error('Rejection failed:', err);
  }
};
window.approveClaim = async function (user, index) {
  try {
    await contract.methods.approveClaim(user, index).send({ from: account });
    await loadPendingClaims();
  } catch (err) {
    console.error('Approval failed:', err);
  }
};

window.rejectClaim = async function (user, index) {
  try {
    await contract.methods.rejectClaim(user, index).send({ from: account });
    await loadPendingClaims();
  } catch (err) {
    console.error('Rejection failed:', err);
  }
};
