# https://www.codewars.com/kata/595970246c9b8fa0a8000086/train/python

# Best solution:
# def capitalizeWord(word):
#     return word.capitalize()

# REFERENCE:
# 1. https://www.geeksforgeeks.org/string-capitalize-python/

def capitalize_word(word):
    return word[0].upper() + word[1:]

print(capitalize_word("word"))