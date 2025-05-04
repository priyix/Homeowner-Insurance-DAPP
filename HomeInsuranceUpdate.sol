// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HomeInsurance {
    address public admin;

    constructor() {
        admin = msg.sender;
    }

    enum CoverageType { Basic, Standard, Premium }  // 0, 1, 2,

    struct Policy {
        string fullName;
        string propertyAddress;
        string contactNumber;
        CoverageType coverageType;   // enum instead of string
        address policyHolder;
        bool isActive;
        bool hasPaid; 
    }

    struct Claim {
        string description;
        bool isResolved;
        bool isApproved;
    }

    mapping(address => Policy) public policies;
    mapping(address => Claim[]) public claims;
    address[] public pendingPolicies;

    event PolicyCreated(address _holder); //creates a log
    event PremiumPaid(address indexed _claimant, uint amount); 

    function createPolicy(
        string memory _fullName,
        string memory _propertyAddress,
        string memory _contactNumber,
        uint8 _coverageType // 0 = Basic, 1 = Standard, 2 = Premium
    ) public {
        require(_coverageType <= uint8 (CoverageType.Premium), "Invalid coverage");
        policies[msg.sender] = Policy({
            fullName: _fullName,
            propertyAddress: _propertyAddress,
            contactNumber: _contactNumber,
            coverageType: CoverageType(_coverageType),
            policyHolder: msg.sender,
            isActive: false,
            hasPaid: false 
        });

         // ✅ Avoid duplicates in pendingPolicies
    bool alreadyExists = false;
    for (uint i = 0; i < pendingPolicies.length; i++) {
        if (pendingPolicies[i] == msg.sender) {
            alreadyExists = true;
            break;
        }
    }

    if (!alreadyExists) {
        pendingPolicies.push(msg.sender);
    }

    emit PolicyCreated(msg.sender);
}
    //Payable function for predefined coverage types
    function payPremium() public payable {
        Policy storage policy = policies[msg.sender];
        require(policy.policyHolder == msg.sender, "No policy found");

        uint requiredAmount;

        if (policy.coverageType == CoverageType.Basic) {
            requiredAmount = 0.05 ether; // enter 50000000000000000 wei in value and then click on payPremium button
        } else if (policy.coverageType == CoverageType.Standard) {
            requiredAmount = 0.1 ether; // enter 100000000000000000 wei in value
        } else if (policy.coverageType == CoverageType.Premium) {
            requiredAmount = 0.2 ether; // 200000000000000000 wei in value 
        }

        require(msg.value == requiredAmount, "Incorrect payment amount");
        policy.hasPaid = true;
        emit PremiumPaid(msg.sender, msg.value);
    }

    function getPendingPolicies() public view returns (address[] memory) {
        return pendingPolicies;
    }

    function getPolicy(address _holder) public view returns (Policy memory) {
        return policies[_holder];
    }

    function approvePolicy(address user) public {
        require(msg.sender == admin, "Only admin can approve");
        policies[user].isActive = true;
        _removePendingPolicy(user);
    }

    function rejectPolicy(address user) public {
        require(msg.sender == admin, "Only admin can reject");
        delete policies[user];
        _removePendingPolicy(user);
    }

    function _removePendingPolicy(address user) internal {
        for (uint i = 0; i < pendingPolicies.length; i++) {
            if (pendingPolicies[i] == user) {
                pendingPolicies[i] = pendingPolicies[pendingPolicies.length - 1];
                pendingPolicies.pop();
                break;
            }
        }
    }

address[] public claimUsers;

function submitClaim(string memory _description) public {
    claims[msg.sender].push(Claim({
        description: _description,
        isResolved: false,
        isApproved: false
    }));

    bool alreadyExists = false;
    for (uint i = 0; i < claimUsers.length; i++) {
        if (claimUsers[i] == msg.sender) {
            alreadyExists = true;
            break;
        }
    }

    if (!alreadyExists) {
        claimUsers.push(msg.sender);
    }
}

function getClaimUsers() public view returns (address[] memory) {
    return claimUsers;
}

function getClaims(address user) public view returns (Claim[] memory) {
    return claims[user];
}

function approveClaim(address user, uint index) public {
    require(msg.sender == admin, "Only admin can approve");
    claims[user][index].isResolved = true;
    claims[user][index].isApproved = true;
}

function rejectClaim(address user, uint index) public {
    require(msg.sender == admin, "Only admin can reject");
    claims[user][index].isResolved = true;
    claims[user][index].isApproved = false;
}

}