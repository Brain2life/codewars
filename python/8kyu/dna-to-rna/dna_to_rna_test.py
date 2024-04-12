# Unit tests for dna_to_rna function

from dna_to_rna import dna_to_rna

def test_dna_to_rna():
    assert dna_to_rna("") == ""
    assert dna_to_rna("T") == "U"
    assert dna_to_rna("TTTT") == "UUUU"
    assert dna_to_rna("GCAT") == "GCAU"
    assert dna_to_rna("GACCGCCGCC") == "GACCGCCGCC"