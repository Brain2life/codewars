# Unit tests for cypher()

from cypher import cypher

def test_cypher() -> None:
    assert cypher("Hello World") == "H3110 W0r1d"
    assert cypher("I am your father") == "1 4m y0ur f47h3r"
    assert cypher("I do not know what else I can test. Be cool. Good luck") == "1 d0 n07 kn0w wh47 3153 1 c4n 7357. 83 c001. 600d 1uck"
    assert cypher("IlRzEeAaSsGbTtBgOo") == "112233445566778900"
    assert cypher("") == ""