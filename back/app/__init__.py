from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from config import config

db = SQLAlchemy()

def create_app(config_name='default'):
    app = Flask(__name__)

    # Configuración de la aplicación
    app.config.from_object(config[config_name])

    # Inicializar extensiones
    db.init_app(app)
    CORS(app)

    # Registrar Blueprints
    from .auth import auth_bp
    app.register_blueprint(auth_bp, url_prefix='/api')

    return app
