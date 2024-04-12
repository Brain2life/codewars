# Unit tests for make_string function

from make_string import make_string

def test_make_string():
    assert make_string("sees eyes xray yoat") == "sexy"
    assert make_string("brown eyes are nice") == "bean"
    assert make_string("cars are very nice") == "cavn"
    assert make_string("kaks de gan has a big head") == "kdghabh"
    assert make_string("This Is A Test") == "TIAT"