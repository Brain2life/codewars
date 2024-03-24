"""Unit tests for solution function"""

from string_ends_with import solution

#-----------------------------------------
def test_empty_ending() -> None:
    """Empty ending should return True"""
    assert solution("abcde", "") == True

#-----------------------------------------
def test_empty_string() -> None:
    """Empty string should return False"""
    assert solution("", "cde") == False

#-----------------------------------------
def test_empty_all(capsys) -> None:
    """Empty string and ending should print out warning message"""
    solution("", "")
    captured = capsys.readouterr()
    assert captured.out == "Please specify non-empty values\n"

#-----------------------------------------
def test_abc_ending() -> None:
    """'abc' ending with abcded should return False"""
    assert solution("abcde", "abc") == False

#-----------------------------------------
def test_cde_ending() -> None:
    """'cde' ending should return True"""
    assert solution("abcde", "cde") == True

#-----------------------------------------
def test_one_value() -> None:
    """'a' ending in 'a' string should return True"""
    assert solution("a", "a") == True