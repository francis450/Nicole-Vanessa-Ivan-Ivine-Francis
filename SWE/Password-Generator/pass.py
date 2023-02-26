import random


uppercase_letters = "ADCDEFGHIJKLMNOPQRSTUVWXYZ"
lowercase_letters = uppercase_letters.lower()
digits = "0123456789"
symbols = "<>?:{}[](&^%$#@!&*%^/"

upper, lower, syms, nums = True, True, True, True
combination = ""
if upper:
    combination += uppercase_letters
if lower:
    combination += lowercase_letters
if syms:
    combination += symbols
if nums:
    combination += digits
length = 22
amount = 11
for x in range(amount):
    password = "".join(random.sample(combination, length))
    print(password)

