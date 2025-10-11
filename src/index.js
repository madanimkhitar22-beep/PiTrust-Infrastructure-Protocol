import { initTrustProtocol } from "./core/trust-core.js";
import { connectDAO } from "./governance/dao.js";
import { verifyIdentity } from "./modules/identity.js";

async function main() {
  console.log("🚀 Initializing PiTrust Infrastructure Protocol...");

  await verifyIdentity();
  await connectDAO();
  await initTrustProtocol();

  console.log("✅ PiTrust Protocol successfully initialized.");
}

main().catch((err) => {
  console.error("❌ Initialization failed:", err);
});
