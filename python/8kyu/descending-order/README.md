# Task description:

**DESCRIPTION**:  
[Task](https://www.codewars.com/kata/5467e4d82edf8bbf40000155)

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

**Examples**:  
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

## Solution:

```python
def descending_order(num):
    # Convert the number to a string to iterate over its digits
    # Sort the digits in descending order
    # Join them back into a string
    # Convert the string back into an integer
    return int("".join(sorted(str(num), reverse=True)))

# Example usage:
print(descending_order(42145))        # Output: 54421
print(descending_order(145263))       # Output: 654321
print(descending_order(123456789))    # Output: 987654321
```

This function works by first converting the integer into a string so that we can sort its digits. The `sorted` function is used to sort these digits in descending order (when `reverse=True` is passed). The sorted digits are then joined back together into a single string, which is finally converted back into an integer before being returned.

## References:
1. [Sorting Techniques](https://docs.python.org/3/howto/sorting.html#sorting-techniques)