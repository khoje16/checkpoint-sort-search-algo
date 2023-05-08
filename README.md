# checkpoint-sort-search-algo
Start with the second element (i=1) of the array.
Compare arr[i] with arr[i-1]. If arr[i-1] is greater, swap arr[i] and arr[i-1].
Repeat step 2 until arr[i-1] is smaller or equal to arr[i] or i=0.
Increment i by 1 and repeat steps 2-4 until i reaches the end of the array.
In this implementation, we start with the second element of the array (i=1) and compare it with the previous element arr[i-1]. If arr[i-1] is greater, we swap the two elements and continue comparing with previous elements until we find the correct position for arr[i]. We then move on to the next element (i+1) and repeat the process. This algorithm has a worst-case time complexity of O(n^2), but it can be efficient for small arrays or partially sorted arrays.
