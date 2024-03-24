# https://www.codewars.com/kata/5dd462a573ee6d0014ce715b

# REFERENCE:
# 1. https://www.w3schools.com/python/ref_string_isupper.asp
# 2. https://www.w3schools.com/python/ref_string_isalpha.asp

# Best solution:
def check_same_case(a, b):
    return a.isupper() == b.isupper() if a.isalpha() and b.isalpha() else -1