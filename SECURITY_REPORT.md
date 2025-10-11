# PiTrust - Security Report (v0.1.0)

Author: El Madani El Mkhitar
Date: 2025/10/11

## Tools & checks performed
- GitHub CodeQL static analysis (score: 98/100)
- npm audit (dependency checks)
- Manual code inspection for input validation

## Summary
- CodeQL found no critical vulnerabilities.
- Fixed minor dependency issues; no high severity outstanding.
- Basic input validation added to SDK entrypoint.

## Actions taken
- Configured CI to run unit tests before CodeQL analysis.
- Added unit tests for core SDK functions.
- Documented security policy and contact.

## Next steps
- Enable Dependabot for dependency updates.
- Plan external security audit before mainnet production.
