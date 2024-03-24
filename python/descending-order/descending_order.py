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