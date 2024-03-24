# Unit tests for descending_order function

from descending_order import descending_order

def test_descending_order():
    assert descending_order(42145) == 54421, "Should return the digits in descending order"
    assert descending_order(145263) == 654321, "Should return the digits in descending order"
    assert descending_order(123456789) == 987654321, "Should return the digits in descending order"
    assert descending_order(0) == 0, "Should handle zero correctly"
    assert descending_order(111) == 111, "Should handle repeated digits correctly"
    assert descending_order(12300) == 32100, "Should handle numbers with zeroes correctly"
