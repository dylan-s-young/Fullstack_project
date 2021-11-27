from typing import Optional
from pydantic import BaseModel,Field
import uuid
from pydantic.networks import EmailStr

'''
POST: to create data.
GET: to read data.
PUT: to update data.
DELETE: to delete data.'''

class User(BaseModel):
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    firstname: str = Field(...)
    lastname: str = Field(...)
    email: EmailStr
    password: str = Field(min_length=6)
    age: Optional[int] = Field(lt=100, gt=0)

    class Config: 
        allow_population_by_field_name = True
        schema_extra = {
            "example": {
                "firstname": "Peter",
                "lastname": "Ruck",
                "email": "peterruck@gmail.com",
                "password": "petterrucko132@!",
                "age": "15"
            }
        }


class UpdateUserModel(BaseModel):
    firstname: Optional[str]
    lastname: Optional[str]
    password: Optional[str] = Field(min_length=6)
    age: Optional[int] = Field(lt=100, gt=0)

    class Config:
        schema_extra = {
            "example": {
                "firstname": "Peter",
                "lastname": "Ruc",
                "password": "petterrucko132@!",
                "age": "16"
            }
        }



