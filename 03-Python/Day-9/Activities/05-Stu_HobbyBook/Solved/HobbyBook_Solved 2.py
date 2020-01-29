my_info = {
    "name": "Alfredo Jones",
    "age": 68,
    "hobbies": ["International man of mystery",
                "light espionage",
                "Harry Potter fanfic writer"],
    "wake_up_times": {
        "monday": "10am",
        "tuesday": "4am",
        "wednesday": "10am"
    }
}
print(f"My name is {my_info['name']}. I am {my_info['age']} years old. One of my hobbies is {my_info['hobbies'][2]}. On Monday I wake up at {my_info['wake_up_times']['monday']}")

print("My name is " + my_info['name'] + ". I am " + str(my_info['age']) + " years old. One of my hobbies is " + my_info['hobbies'][2])