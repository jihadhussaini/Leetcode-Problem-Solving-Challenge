list1 = [1,2,4];
list2 = [1,3,4];

// singly linked list sol with recursion
var mergeTwoLists = function(list1, list2) {
    if (!list1) {
        return list2;
    }
    else if (!list2) {
        return list1;
    }
    else if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2)
        return list1;
    }
    else {
        list2.next = mergeTwoLists(list1, list2.next)
        return list2
    }
};

// array solution
var mergeTwoLists = function(list1, list2) {
    let result = []
    let i = 0;
    let j = 0;

    // selagi i blm list1.length dan j blm list2.length
    while (i < list1.length && j < list2.length) {
        if (list1[i] < list2[j]) {
            result.push(list1[i])
            i++;
        } 
        else {
            result.push(list2[j])
            j++
        }
    }
    while (i < list1.length) {
        result.push(list1[i])
        i++;
    }
    while (j < list2.length) {
        result.push(list1[j])
        j++;
    }
    return result
};

console.log(mergeTwoLists(list1, list2))