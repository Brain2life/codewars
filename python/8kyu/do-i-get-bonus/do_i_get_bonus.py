# https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/python

def bonus_time(salary, bonus):
    if not isinstance(salary, int):
        print("Specify integer type for your salary")
        quit()
    if salary < 0:
        print("You didn't earn any salary. So the bonus")
        quit()
    if bonus:
        return "$" + str(salary * 10)
    else:
        return "$" + str(salary)

# print(bonus_time(60000, False))
# print(bonus_time(2, True))
# print(bonus_time(-2, True))
# print(bonus_time("2", True))