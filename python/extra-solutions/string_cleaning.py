# https://www.codewars.com/kata/57e1e61ba396b3727c000251/train/python

# Best solution:
#  def string_clean(s):
#     return ''.join(x for x in s if not x.isdigit())

# REFERENCE:
# 1. https://www.w3schools.com/python/ref_string_join.asp
# 2. https://www.w3schools.com/python/ref_string_isdigit.asp

def string_clean(s):
    output  = ""
    for character in s:
        if not character.isnumeric():
            output += character
    return output

print(string_cleaning("! !"))
print(string_cleaning("123456789"))
print(string_cleaning("This looks5 grea8t!"))