// trust-score.js
// Minimal JavaScript file for CodeQL analysis

/**
 * Calculates a trust score based on user reputation.
 * @param {Object} user - The user object with a reputation property.
 * @returns {number} - The calculated trust score.
 */
function calculateTrustScore(user) {
  if (!user || typeof user.reputation !== 'number') {
    throw new Error('Invalid user object');
  }
  return user.reputation * 0.9;
}

// Example usage (can be removed in production)
const exampleUser = { reputation: 100 };
console.log('Trust Score:', calculateTrustScore(exampleUser));
