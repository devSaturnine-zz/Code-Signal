var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var count = new Array(26).fill(0)
var pos = new Array(26).fill(0)
var varpos = Number.MAX_SAFE_INTEGER

function firstNotRepeatingCharacter(s) {
    for (x = 0; x < s.length; x++){
        var temp1 = s.charAt(x)
        var temp2 = alphabet.indexOf(temp1)
        count[temp2] += 1
        pos[temp2] = x
    }
    
    for (y = 0; y < alphabet.length; y++){
        if (count[y] == 1){
            if (pos[y] < varpos){
                varpos = pos[y]
            }
        }
    }
    
    if (varpos == Number.MAX_SAFE_INTEGER){
        return '_'
    }
    else { return s[varpos]} 
}


/* Note: Write a solution that only iterates over the string once and uses O(1) additional memory, since this is what you would be 
asked to do during a real interview.

Given a string s, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

Example

For s = "abacabad", the output should be
firstNotRepeatingCharacter(s) = 'c'.

There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

For s = "abacabaabacaba", the output should be
firstNotRepeatingCharacter(s) = '_'.

There are no characters in this string that do not repeat.

Input/Output

[execution time limit] 4 seconds (js)

[input] string s

A string that contains only lowercase English letters.

Guaranteed constraints:
1 ≤ s.length ≤ 105.

[output] char

The first non-repeating character in s, or '_' if there are no characters that do not repeat.
*/
