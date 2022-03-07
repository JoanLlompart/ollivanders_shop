from flask import Flask, render_template

app=Flask(__name__)

@app.route('/')
def index():
    # return "Welcome to Olivanders Shop"

    items = [''] 
    data = {
            'titulo': 'Index',
            'bienvenida':'!Saludos!'
            ''

            }
    return render_template('index.html', data=data) 

# API REST
api = Api(app, catch_all_404s=True)

if __name__ == '__main__':
    app.run(debug=True,host="0.0.0.0")