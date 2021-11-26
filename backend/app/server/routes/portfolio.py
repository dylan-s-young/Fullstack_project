from fastapi import APIRouter
from server.models import user
from fastapi.params import Body




router = APIRouter(
    prefix="/portfolio"
)


@router.get("/me", tags=["portfolio"])
async def create_account(user: user.User = Body(...)):
    print(user)
    return user
