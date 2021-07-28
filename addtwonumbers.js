/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */



 var addTwoNumbers = function(l1, l2) {
    
    
    let reverse = new ListNode(0);
    let node = reverse;

    let carry = 0;
    
    while (l1 != null || l2 != null){
   
        
        
      let v1 = 0;
        let v2 = 0;
        
        if (l1 != null){
            v1 = l1.val;
        }
        if (l2 != null){
            v2 = l2.val;
        }
        
        let sum = v1 + v2 + carry;
        
           
            carry = Math.trunc(sum/10);
                
        node.next = new ListNode(sum % 10);
        node = node.next;
        
    
        if (l1 != null){
        l1 = l1.next;
        }
        if (l2 != null){
        l2 = l2.next;
        }
    }
    
    if (carry > 0){
        node.next = new ListNode(carry);
    }
    
    return reverse.next;
    
    
};