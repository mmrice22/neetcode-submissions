class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        } else {
            const frequency = new Map();

            for (const char of s) {
                frequency.set(char, (frequency.get(char) || 0) + 1)
            }

            for (const char of t) {
                if (!frequency.has(char)) return false;
                frequency.set(char, frequency.get(char) - 1);
                if (frequency.get(char) < 0 ) return false
            } 
             return true;
        }
    }
}
