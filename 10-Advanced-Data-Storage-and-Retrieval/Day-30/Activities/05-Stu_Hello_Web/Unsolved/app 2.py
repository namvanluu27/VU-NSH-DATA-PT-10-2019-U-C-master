from flask import Flask
app = Flask(__name__)

@app.route("/")
def index():
    return "Hello, World!"

@app.route("/about")
def about():
    name = "Nam"
    location = "Nashville"
    return f"My name is {name}. I live in {location}."

@app.route("/contact")
def contact():
    email = "nam@gmail.com"
    return f"You can contact me at {email}"


if __name__ == "__main__": 
        app.run(debug=True)