# https://www.codewars.com/kata/50654ddff44f800200000007/train/python

# REFERENCE:
# 1. https://www.w3schools.com/python/ref_func_sorted.asp

def solution(a, b):
    short, long = sorted((a, b), key=len)
    return short + long + short

print(solution("1", "22"))