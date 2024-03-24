"""Unit tests for square_sum function"""

from square_sum import square_sum
from better_square_sum import square_sum

def test_empty_list() -> None:
    """Square sum of empty list should be 0"""
    assert square_sum([]) == 0

def test_single_number() -> None:
    """Square sum of single number should be square of the number"""
    assert square_sum([9]) == 81

def test_positive_numbers() -> None:
    """Square sum of 1 and 2 should be 5"""
    assert square_sum([1, 2]) == 5

def test_negative_numbers() -> None:
    """Square sum of -1 and -2 should be 5"""
    assert square_sum([-1, -2]) == 5

def test_mixed_numbers() -> None:
    """Square sum of -1, 0, 1 should be 2"""
    assert square_sum([-1, 0, 1]) == 2