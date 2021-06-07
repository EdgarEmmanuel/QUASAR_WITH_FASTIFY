import mysql.connector
import random

myDatabaseName = "fastify_database"

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="",
  database=myDatabaseName
)

mycursor = mydb.cursor()
MIN = 0
MAX = 5

randomSizeArray = [23,45,67,78,90]
randomCountryArray = ['senegal','vietnam','portugal','china','bresil']
randomColorArray = ['red','blue','yellow','pink','bluesky']
randomQuantityArray = [123,45,78,67,900]
randomCatalogNameArray = ['dress','jean','hat','t-shirt','socks']


for position in range(MIN,MAX):
  sql = """ INSERT INTO products (location_name, catalog_name, color, size, quantity, del_flg) VALUES (%s, %s, %s, %s ,
    %s , 0) """
  randomInteger = random.randint(MIN,MAX)
  val = (randomCountryArray[position], randomCatalogNameArray[position],randomColorArray[position],randomSizeArray[randomInteger],
         randomQuantityArray[randomInteger])
  mycursor.execute(sql, val)
  mydb.commit()
  print(mycursor.rowcount, "record inserted.")

print("finish")