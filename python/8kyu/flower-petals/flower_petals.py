"""Calculate the result of flower petal game"""

def how_much_i_love_you(n):
    phrases = [
        "I love you",    # index 0, corresponds to petal 1
        "a little",      # index 1, corresponds to petal 2
        "a lot",         # index 2, corresponds to petal 3
        "passionately",  # index 3, corresponds to petal 4
        "madly",         # index 4, corresponds to petal 5
        "not at all"     # index 5, corresponds to petal 6
    ]
    # Find the index for the last petal's phrase
    index = (n - 1) % len(phrases)
    return phrases[index]

# Testing the function with the provided examples
# print(how_much_i_love_you(7))    # "I love you"
# print(how_much_i_love_you(3))    # "a lot"
# print(how_much_i_love_you(6))    # "not at all"
