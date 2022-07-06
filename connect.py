from app import app

# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///user.db'
# app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Подключение к БД
SQLALCHEMY_DATABASE_URI = "mysql+pymysql://{username}:{password}@{hostname}/{databasename}".format(
    username="kainn",
    password="hydramysql",
    hostname="localhost",
    databasename="microERP",
)
app.config["SQLALCHEMY_DATABASE_URI"] = SQLALCHEMY_DATABASE_URI
app.config["SQLALCHEMY_POOL_RECYCLE"] = 299
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False



# секретный ключ сесcии
# app.config['SECRET_KEY'] = os.urandom(20).hex() # если так сделать, то теряется сессия!!!
app.config['SECRET_KEY'] = "1234567890"

# настройка загружаемых изображений
app.config['UPLOAD_EXTENSIONS'] = ['.jpg', '.JPG', '.png', '.PNG']
app.config['MAX_CONTENT_LENGTH'] = 10*3602*5398