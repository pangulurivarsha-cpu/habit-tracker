/**
 * Utility functions for storing and retrieving mobile numbers
 * Uses localStorage as a fallback when Firestore is unavailable
 */

/**
 * Save mobile number for a user
 * @param {string} email - User's email address
 * @param {string} mobile - User's mobile number
 */
export const saveMobileNumber = (email, mobile) => {
    if (!email || !mobile) return;
    try {
        localStorage.setItem(`mobile_${email}`, mobile);
        console.log(`Mobile number saved for ${email}`);
    } catch (err) {
        console.error('Error saving mobile to localStorage:', err);
    }
};

/**
 * Get mobile number for a user
 * @param {string} email - User's email address
 * @returns {string|null} Mobile number or null if not found
 */
export const getMobileNumber = (email) => {
    if (!email) return null;
    try {
        return localStorage.getItem(`mobile_${email}`);
    } catch (err) {
        console.error('Error getting mobile from localStorage:', err);
        return null;
    }
};

/**
 * Find email by mobile number
 * @param {string} mobile - Mobile number to search for
 * @returns {string|null} Email address or null if not found
 */
export const findEmailByMobile = (mobile) => {
    if (!mobile) return null;
    try {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith('mobile_')) {
                const storedMobile = localStorage.getItem(key);
                if (storedMobile === mobile) {
                    return key.substring(7); // Remove 'mobile_' prefix
                }
            }
        }
        return null;
    } catch (err) {
        console.error('Error searching mobile in localStorage:', err);
        return null;
    }
};
