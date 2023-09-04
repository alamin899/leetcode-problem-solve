# 643. Maximum Average Subarray I

## Problem Statement:

You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

Sample Inputs and Outputs:

<b>Example 1:</b>

```
Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
```

<b>Example 2:</b>

```
Input: nums = [5], k = 1
Output: 5.00000
```

## Constraints:

```
1. n == nums.length
2. 1 <= k <= n <= 105
3. -104 <= nums[i] <= 104
```
