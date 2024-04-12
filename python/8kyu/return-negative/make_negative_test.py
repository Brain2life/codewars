# Unit tests for make_negative function

from make_negative import make_negative

def test_make_negative():
    assert make_negative(1) == -1
    assert make_negative(-5) == -5
    assert make_negative(0) == 0