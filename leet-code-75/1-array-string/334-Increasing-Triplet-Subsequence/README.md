# 334. Increasing Triplet Subsequence

## Problem Statement:

Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

<b>Example 1:</b>

```
Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.
```

<b>Example 2:</b>

```
Input: nums = [5,4,3,2,1]
Output: false
Explanation: No triplet exists.
```

<b>Example 3:</b>
```
Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
```
<b>Example 4:</b>
```
Input: nums = [2,1,5,0,3]
Output: false
Explanation: No triplet exists.
## Constraints:

```
Follow up: Could you implement a solution that runs in O(n) time complexity and O(1) space complexity?
```
