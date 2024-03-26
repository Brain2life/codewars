# My solution:
def is_divisible(n,x,y):
    return True if (n % x == 0 and n % y == 0) else False 

    
# Best solution:
# def is_divisible(n, x, y):
#     return n % x == 0 and n % y == 0

# Examples
# print(is_divisible(3, 1, 3))    # True because 3 is divisible by 1 and 3
# print(is_divisible(12, 2, 6))   # True because 12 is divisible by 2 and 6
# print(is_divisible(100, 5, 3))  # False because 100 is not divisible by 3
# print(is_divisible(12, 7, 5))   # False because 12 is neither divisible by 7 nor 5
