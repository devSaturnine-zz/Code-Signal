// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

function isListPalindrome(l) {

    var secondHalf
    var x = l
    var y = l
    
    // Handle edge cases
    if (l == null){
        return true
    }
    else if (l.next == null){
        return true
    }
    
    // Using a fast and slow pointer, slow pointer is halfway when fast pointer reaches end/null.  
    while (1){
        x = x.next.next
        if (x && x.next == null){
            secondHalf = y.next.next
            break
        }
        if (x == null){
            secondHalf = y.next
            break
        }
        y = y.next
    }
    y.next = null
    
    //-------------------------------------------------------------------------
    // Reverse linked list from pointer secondHalf onwards until null
    
    var previous = secondHalf
    while (secondHalf.next){
        var nextNode = secondHalf.next
        secondHalf.next = previous
        previous = secondHalf
        secondHalf = nextNode
    }
    secondHalf.next = previous
   
    //------------------------------------------------------------------------
    // With pointer to second half's start (secondHalf), and with second half reversed, step through nodes
    // and compare values
    
    while(secondHalf && l){
        if (secondHalf.value == l.value){
            //console.log("match " + secondHalf.value + "||||||||" + l.value)
            secondHalf = secondHalf.next
            l = l.next
            continue
        }
        else {
            //console.log("false " + secondHalf.value + "|||||||" + l.value)
            return false
        }
    }
    return true
}


/*
Note: Try to solve this task in O(n) time using O(1) additional space, where n is the number of elements in l.

Given a singly linked list of integers, determine whether or not it's a palindrome.

Example

For l = [0, 1, 0], the output should be
isListPalindrome(l) = true;
For l = [1, 2, 2, 3], the output should be
isListPalindrome(l) = false.
Input/Output

[execution time limit] 4 seconds (js)

[input] linkedlist.integer l

A singly linked list of integers.

Guaranteed constraints:
0 ≤ list size ≤ 5 · 105,
-109 ≤ element value ≤ 109.

[output] boolean

Return true if l is a palindrome, otherwise return false.
*/
