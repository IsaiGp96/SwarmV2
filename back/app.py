from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({'message': 'Que onda desde Flask!!'})
if __name__ == '__main__':
    app.run(debug=True)
