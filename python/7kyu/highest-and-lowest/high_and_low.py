# My solution

def high_and_low(numbers):
    max_number = str(max([int(number) for number in numbers.split(" ")]))
    min_number = str(min([int(number) for number in numbers.split(" ")]))
    return max_number + " " + min_number
