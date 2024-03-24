def manual_string_to_int(s):
    num = 0
    is_negative = False
    start = 0

    # Check if the string represents a negative number
    if s[0] == '-':
        is_negative = True
        start = 1

    for i in range(start, len(s)):
        num = num * 10 + (ord(s[i]) - ord('0'))

    if is_negative:
        num = -num

    return num

# Example usage
print(manual_string_to_int("1234"))  # Output: 1234
print(manual_string_to_int("-7"))    # Output: -7
