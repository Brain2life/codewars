def dna_to_rna(dna):
    # Consider the special case with one "T0"
    if dna == "T":
        return "U"

    # Store converted DNA
    converted_dna = ""
    
    for molecule in dna:
        if molecule == "T":
            molecule = "U"
        converted_dna += molecule

    return converted_dna