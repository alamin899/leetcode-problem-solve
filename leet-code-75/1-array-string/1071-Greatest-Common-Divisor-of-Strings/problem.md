# 1071. Greatest Common Divisor of Strings

## Problem Statement:

For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

Sample Inputs and Outputs:

<b>Example 1:</b>

```
Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
```

<b>Example 2:</b>

```
Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB
```

<b>Example 3:</b>

```
Input: str1 = "LEET", str2 = "CODE"
Output: ""
```

## Constraints:

```
1. 1 <= str1.length, str2.length <= 1000
2. str1 and str2 consist of English uppercase letters.
```
