import unittest
from string_to_number import string_to_int

class TestStringToInt(unittest.TestCase):

    def test_positive_number(self):
        self.assertEqual(string_to_int("1234"), 1234)

    def test_negative_number(self):
        self.assertEqual(string_to_int("-7"), -7)

    def test_zero(self):
        self.assertEqual(string_to_int("0"), 0)

    def test_large_number(self):
        self.assertEqual(string_to_int("123456789"), 123456789)

    def test_leading_zeros(self):
        self.assertEqual(string_to_int("00001234"), 1234)

if __name__ == '__main__':
    unittest.main()
