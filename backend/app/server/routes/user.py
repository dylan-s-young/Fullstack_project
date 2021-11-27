from fastapi import APIRouter,HTTPException, status, Body
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from server.models.user import User, UpdateUserModel 
from server.database import db
from bson.objectid import ObjectId


router = APIRouter()




@router.post("/create", response_description='Creating an Account')
async def create_account(user: User = Body(...)):
    user_details = jsonable_encoder(user)
    new_user = await db["users"].insert_one(user_details)
    return JSONResponse(status_code=status.HTTP_201_CREATED, content='User was created successfully.')
    #currently returns password, will hash password & not return it in PROD


@router.patch("/update/{id}", response_description='Updating user')
async def update_info(id: str, user: UpdateUserModel = Body(...)):
    user = {k: v for k, v in user.dict().items() if v is not None}
    
    if len(user) >= 1:
        find_user = await db["users"].find_one({"_id": id})
        if find_user:
            update_user = await db['users'].update_one(
                {"_id": id}, {"$set": user}
            )

            return JSONResponse(status_code=status.HTTP_202_ACCEPTED, content = 'Updated User')
        
        raise HTTPException(status_code=404, detail=f"Not Authenticated or Id Invalid")



@router.delete("/delete/{id}", response_description='Deleting user')
async def delete(id:str):
    pass





