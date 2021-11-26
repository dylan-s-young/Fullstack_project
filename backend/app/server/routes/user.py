from fastapi import APIRouter, Request, status, Body
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from server.models import user
from server.database import db


router = APIRouter()




@router.post("/create", response_model=user.User)
async def create_account(request: Request, user: user.User = Body(...)):
    new_user = jsonable_encoder(user)
    new_accnt = await db["users"].insert_one(new_user)

    return JSONResponse(status_code=status.HTTP_201_CREATED)





