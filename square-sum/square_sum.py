"""
Square(n) Sum
https://www.codewars.com/kata/515e271a311df0350d00000f/train/python
"""

from typing import List

def square_sum(numbers: List[int]) -> int:
    square_list = [number ** 2 for number in numbers]
    output = 0
    for square in square_list:
        output += square
    return output