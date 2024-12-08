from flask import Flask, jsonify, request
from flask_cors import CORS
from services.ba import ejecutar_ba
import asyncio
from config import config


app = Flask(__name__)
app.config.from_object(config.config_by_name['development'])
CORS(app, origins=app.config['CORS_ORIGINS'])

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({'message': 'Hello from Flask!'})


@app.route('/api/ba', methods=['POST'])
def run_ba():
    try:
        data = request.get_json()
        alpha = 2.5
        gamma = 2.5
        iter_max = 10
        result = asyncio.run(ejecutar_ba(data, alpha, gamma, iter_max))
        print(result)
        return jsonify({"result": result})
    except Exception as e:
        return jsonify({"Error ": str(e)}), 400
    
if __name__ == '__main__':
    app.run(debug=True)
