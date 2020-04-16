from flask import Flask, render_template, request, redirect
import game_algorithms

app = Flask(__name__)


@app.route('/')
def main():
    rows = 9
    cols = 9
    return render_template('index.html', rows=rows, cols=cols)


if __name__ == '__main__':
    app.run(
        debug=True, port=2000
    )
