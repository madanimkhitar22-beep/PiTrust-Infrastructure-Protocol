# 🏛 PiTrust Governance Model

## Overview
PiTrust operates as a **community-driven decentralized protocol** ensuring that identity verification and trust scoring remain transparent, fair, and verifiable on-chain.

This document outlines how decisions are made, how updates are approved, and how stakeholders participate in maintaining the integrity of the network.

---

## 🧠 Core Principles
- **Transparency:** All protocol changes are proposed through public Pull Requests.
- **Security First:** Each update must pass CodeQL + infrastructure checks before merging.
- **Decentralized Voting:** Validators and contributors vote on proposals with weighted reputation.

---

## ⚙ Governance Structure
| Role | Responsibility | Voting Weight |
|------|----------------|----------------|
| **Core Maintainers** | Manage releases, security reviews | 3 votes |
| **Validators** | Run verification nodes and validate trust data | 2 votes |
| **Contributors** | Submit PRs and bug fixes | 1 vote |
| **Community Reviewers** | Provide feedback and issue reports | advisory only |

---

## 💰 Staking & Rewards
- Validators stake **Pi tokens** to join the trust validation layer.  
- Misbehavior or fraudulent validation leads to **slashing penalties**.  
- Active validators earn **periodic trust incentives** based on uptime and accuracy metrics.

---

## 🗳 Voting Process
1. **Proposal Submission:** Contributors create a governance proposal PR.
2. **Discussion Phase:** Minimum 5 days for open comments.
3. **Voting Phase:** Votes are cast by Validators and Core Maintainers.
4. **Approval Threshold:**  
   - Proposal passes if ≥ 60% weighted votes approve.  
   - Critical updates (security/core) require ≥ 75%.

---

## 📊 Transparency Reports
All accepted proposals are logged in `GOVERNANCE_LOG.md` including:
- Proposal title and summary
- Voting results
- Commit hash
- Implementation link

---

## 🌍 Community & Future Evolution
As PiTrust expands into Mainnet, governance will gradually transition toward **DAO-based on-chain voting**, where votes are transparently recorded on Pi Network infrastructure.

---

*Last updated: October 2025*
