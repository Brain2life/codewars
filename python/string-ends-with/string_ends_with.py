"""
https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/python
"""


def solution(string: str, ending: str) -> bool:
    if string == "" and ending == "":
        print("Please specify non-empty values")
    if string.endswith(ending):
        return True
    else:
        return False