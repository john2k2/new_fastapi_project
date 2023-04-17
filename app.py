from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import firebase_admin
from firebase_admin import credentials

cred = credentials.Certificate("./ytvideo-35400-firebase-adminsdk-u1nc7-b3dca9cd7b.json")

if not firebase_admin._apps:
    firebase_app = firebase_admin.initialize_app(cred)
else:
    firebase_app = firebase_admin.get_app()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Importa tus rutas y modelos aquí
# Por ejemplo:
from scripts.contact import contact, Contact
from scripts.download import download_and_upload_video
from auth.pass_mail import authenticate_with_email, authenticate_with_google
from auth.pass_mail import EmailPasswordAuth, GoogleAuth
from auth.pass_mail import register_with_email

@app.get("/")
async def root():
    return {"message": "Hello World"}

# Agrega tus rutas aquí
# Por ejemplo:
@app.post("/contact")
async def contact_endpoint(contact_info: Contact):
    return await contact(contact_info)

@app.post("/download")
async def download_endpoint(url: str):
    return await download_and_upload_video(url)

@app.post("/register/email")
async def register_with_email_route(data: EmailPasswordAuth):
    response = await register_with_email(data.email, data.password)
    return response

@app.post("/authenticate/email")
async def authenticate_with_email_route(data: EmailPasswordAuth):
    response = await authenticate_with_email(data.email, data.password)
    return response

@app.post("/authenticate/google")
async def authenticate_with_google_route(data: GoogleAuth):
    response = authenticate_with_google(data.id_token)
    return response

