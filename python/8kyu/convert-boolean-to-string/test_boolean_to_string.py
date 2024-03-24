# Unit tests for boolean_to_string function

from boolean_to_string import boolean_to_string

def test_boolean_to_string():
    assert boolean_to_string(True) == "True", "Should return 'True' string"
    assert boolean_to_string(False) == "False", "Should return 'False' string"
