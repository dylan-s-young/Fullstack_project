from fastapi import FastAPI
from fastapi.params import Body
from server.models import user

app = FastAPI()

@app.get("/")
def home():
    return {"Online":"True"}




@app.post("/users/create/")
async def create_account(user: user.User = Body(...)):
    print(user)
    return user

