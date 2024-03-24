# https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/python

# REFERENCE:
# 1. https://python-reference.readthedocs.io/en/latest/docs/float/is_integer.html

def square_or_square_root(arr):
    result = []
    for x in arr:
        root = x**0.5
        if root.is_integer():
            result.append(int(root))
        else:
            result.append(x*x)
    return result

print(square_or_square_root([4,3,9,7,2,1]))