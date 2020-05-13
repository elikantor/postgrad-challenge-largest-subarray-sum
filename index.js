function largestSubarraySum(arr){
    let largestSum = 0
    let currentSum = 0
    let tempSum = 0
    let negatives = 0
    let i = 0
    
    while(i < arr.length){
        // console.log(largestSum, currentSum, tempSum, negatives)
        while(arr[i]<0 && currentSum === 0){
            i++
        }
        currentSum += arr[i]
        tempSum += arr[i]
        i++
        while(arr[i] && arr[i] > 0){
            currentSum += arr[i]
            tempSum += arr[i]
            i++
        }
        if(arr[i] < 0 || i === arr.length){
            let currentLargest = Math.max(tempSum, currentSum)
            largestSum = Math.max(largestSum, currentLargest)
        }
        while(arr[i] < 0){
            negatives += arr[i]
            i++
        }
        if(Math.abs(negatives) >= currentSum){
            currentSum = 0
            tempSum = 0
            negatives = 0
        } else {
            currentSum = currentSum + negatives
            tempSum = 0
            negatives = 0
        }
    }
    return largestSum
}

let array = [1, -1, 3, 3, -1, -2, -3, 4, 5, -100, 4]


// all positive integers would be all elements
// negative numbers is the challenge
// if positives on both side of negative(s) both sum to greater amount than negative(s) then 
// use all positives and negative(s) in subarray.  Otherwise compare sum of positive subarrays to variable which stores current largest sum