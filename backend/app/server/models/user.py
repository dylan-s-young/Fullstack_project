from typing import Optional
from pydantic import BaseModel,Field
import uuid

'''
POST: to create data.
GET: to read data.
PUT: to update data.
DELETE: to delete data.'''

class User(BaseModel):
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    firstname: str = Field(...)
    lastname: str = Field(...)
    email: str
    password: str
    age: Optional[int] = None


    class Config: 
        schema_extra = {
            "example": {
                "id": "20b4444e-357f-40dc-8c34-299f44af0c34",
                "firstname": "Peter",
                "lastname": "Ruck",
                "email": "peterruck@gmail.com",
                "password": "petterrucko132@!",
                "age": "15"
            }
        }



