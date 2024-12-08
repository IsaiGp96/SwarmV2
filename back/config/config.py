class Config:
    """Configuración base de la aplicación"""
    
    # Configuración de CORS
    CORS_HEADERS = 'Content-Type'  # Permite el encabezado Content-Type
    CORS_ORIGINS = ['http://localhost:5173']  # Permite solicitudes solo desde el frontend en localhost:5173

    # Configuración de seguridad
    SECRET_KEY = 'mi_clave_secreta'  # Cambia esto por una variable de entorno en producción

    # Configuración de entorno
    ENV = 'development'  # O 'production' según el entorno


class DevelopmentConfig(Config):
    """Configuración para el entorno de desarrollo."""
    DEBUG = True
    CORS_ORIGINS = ['http://localhost:5173']  # Permite solicitudes desde el frontend de React

class ProductionConfig(Config):
    """Configuración para el entorno de producción."""
    DEBUG = False
    CORS_ORIGINS = ['https://miappfrontend.com']  # Cambia esto a tu dominio en producción

# Selección del entorno
config_by_name = {
    'development': DevelopmentConfig,
    'production': ProductionConfig
}
