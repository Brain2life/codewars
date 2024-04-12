def make_string(s):

    output = ""

    for word in s.split(" "):
        output += word[0]
        
    return output