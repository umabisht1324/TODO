from flask import Flask,render_template

app=Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/register')
def register():
    return render_template('register.html')

@app.route('/tasks')
def tasks():
    # # Logic to fetch tasks data
    # tasks_data = ...
    return render_template('tasks.html')


if(__name__)=='__main__':
    app.run(debug=True)