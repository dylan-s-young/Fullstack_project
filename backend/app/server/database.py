import motor.motor_asyncio

mongo_details = "mongodb://localhost:27017"


mongo_details = "mongodb://localhost:27017"
client = motor.motor_asyncio.AsyncIOMotorClient(mongo_details)
db = client.crypto_app

print(f'connected')
