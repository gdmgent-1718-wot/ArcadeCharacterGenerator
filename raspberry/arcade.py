"""
==============================================
ARCADE CHARACTER GENERATOR
==============================================
Course:     Web Of Things (WOT)
Option:     New Media Development
Department: Graphic and Digital Media
College:    Artevelde University College Ghent
----------------------------------------------
Authors:
    - Brent De Roeck
    - Adriaan Glibert
----------------------------------------------
Resources:
    - https://firebase.google.com/docs/admin/setup
    - https://pythonhosted.org/sense-hat/
==============================================
"""


import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
from sense_hat import SenseHat

sense = SenseHat()
sense.clear()

cred = credentials.Certificate('arcadegenerator-firebase-adminsdk-a1og2-e4d47303df.json')
default_app = firebase_admin.initialize_app(cred,{
    'databaseURL': 'https://arcadegenerator.firebaseio.com'
    })


root = db.reference()
#getting the matrices table from the database
matrices = db.reference('/matrices').get()
pixelsInfo = matrices["matrix-01"]["pixels"]
splitPixelsInfo = pixelsInfo.split('-')

for pixel in splitPixelsInfo:
    values = pixel.strip('[').strip(']').replace(" ","").split(",")
    sense.set_pixel(int(values[0]), int(values[1]), int(values[2]), int(values[3]), int(values[4]))    

