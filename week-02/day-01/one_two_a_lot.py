# Write a program that reads a number form the standard input,
c=int(input("Hey, give me a number!"))
# If the number is zero or smaller it should print: Not enough
if c<=0:
    print("Not  enought")
elif c==1:
    print("One")
elif c==2:
    print("Two")
else:
    print("A lot")
# If the number is one it should print: One
# If the number is two it should print: Two
# If the number is more than two it should print: A lot