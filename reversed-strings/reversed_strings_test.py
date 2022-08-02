"""Unit tests for solution function"""

from reversed_strings import solution


def test_empty_string() -> None:
    """Reverse of an empty string should be '' string"""
    assert solution("") == ""

def test_one_item_string() -> None:
    """Reverse of one item string should be an item itself"""
    assert solution("h") == "h"

def test_world_reverse() -> None:
    """Reverse of 'world' should be 'dlrow'"""
    assert solution("world") == "dlrow"

def test_hello_reverse() -> None:
    """Reverse of 'hello' should be 'olleh'"""
    assert solution("hello") == "olleh"