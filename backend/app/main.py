from fastapi import FastAPI
from starlette.responses import JSONResponse
from server.models import user
from server.routes import user
from server.routes  import portfolio

app = FastAPI()



@app.get("/")
def home():
    return {"Online":"True"}




app.include_router(user.router, tags=['users'], prefix='/user')
app.include_router(portfolio.router)


