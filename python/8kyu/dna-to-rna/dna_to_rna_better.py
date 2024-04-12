def dna_to_rna(dna_str):
    # Replace all occurrences of 'T' with 'U'
    rna_str = dna_str.replace('T', 'U')
    return rna_str

# Example usage
example_dna = "GCAT"
example_rna = dna_to_rna(example_dna)
print(example_rna)  # Output: GCAU
