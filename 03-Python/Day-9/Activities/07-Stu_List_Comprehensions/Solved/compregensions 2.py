names = []

keep_going = 'y'

while keep_going == 'y':
    name = input("Please enter the name of someone you know. ")
    names.append(name)
    
    keep_going = input("Do you want to add another name? (y)es or (n)o ")
    

# @TODO: Use a list comprehension to create a list of lowercased names
lowercased = [name.lower() for name in names]


# @TODO: Use a list comprehension to create a list of titlecased names
# https://www.tutorialspoint.com/python/string_title.htm
titlecased = [name.title() for name in names]

invitations = [
    f"Dear {name}, please come to the wedding this Saturday!" for name in titlecased]

for invitation in invitations:
    print(invitation)
