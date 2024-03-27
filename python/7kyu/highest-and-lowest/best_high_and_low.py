def high_and_low(numbers):
    # Convert the string of numbers into a list of integers
    nums = list(map(int, numbers.split()))
    # Find the highest and lowest number
    highest = max(nums)
    lowest = min(nums)
    # Return the result as a string
    return f"{highest} {lowest}"

# Examples of using the function
print(high_and_low("1 2 3 4 5"))  # Output: "5 1"
print(high_and_low("1 2 -3 4 5")) # Output: "5 -3"
print(high_and_low("1 9 3 4 -5")) # Output: "9 -5"

# Test cases
print(high_and_low("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))  # Output: "42 -9"
print(high_and_low("1 2 3"))                        # Output: "3 1"
