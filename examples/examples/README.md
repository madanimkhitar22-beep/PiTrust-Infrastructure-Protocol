
# PiTrust Examples

This folder contains practical examples and usage guides for developers who want to integrate **PiTrust Infrastructure Protocol** into their Pi Network applications.

---

## ⚙️ Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/madanimkhitar22-beep/PiTrust-Infrastructure-Protocol.git
cd PiTrust-Infrastructure-Protocol
npm install

Run the local environment (sandbox mode):

npm run dev


---

🧠 Example 1 — Identity Verification

This example demonstrates how to verify a user’s Pi identity and fetch their trust score securely using the PiTrust API.

import { getUserTrustScore } from "../src/api/trust";

async function checkTrust(userId) {
  const score = await getUserTrustScore(userId);
  console.log(`User ${userId} has a trust score of:`, score);
}

checkTrust("pi_user_9483");

✅ Output:

User pi_user_9483 has a trust score of: 94/100 (Verified)


---

🌐 Example 2 — Connect with Pi SDK

Integrate Pi authentication directly with the PiTrust verification layer.

import { Pi } from "@pi-network/sdk";
import { verifyPiUser } from "../src/api/identity";

async function connectAndVerify() {
  const user = await Pi.authenticate();
  const verified = await verifyPiUser(user);
  console.log("Verification result:", verified);
}

✅ Output:

Verification result: Identity confirmed, Trust record created.


---

🧩 Example 3 — Query Reputation via API

Developers can fetch a user’s reputation score through REST API endpoints.

GET /api/v1/trust/:userId

Response:

{
  "userId": "pi_user_9483",
  "trustScore": 94,
  "status": "verified",
  "reputationTier": "gold"
}


---

🧭 Notes

These examples use test data and sandbox API keys.
For production use, request mainnet credentials through Pi Core Team or verified partners.
See openapi.yaml for full endpoint documentation.


---

📬 Contact

For feedback or contribution:

📧 Email: madanimkhitar22@gmail.com
💻 GitHub: PiTrust Repository


---

Last updated: 2025/10/15
Author: El Mkhtar El Madani
