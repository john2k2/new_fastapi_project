import os
import tempfile
from firebase_admin import credentials
from google.cloud import storage
from pytube import YouTube

storage_client = storage.Client.from_service_account_json("./ytvideo-35400-firebase-adminsdk-u1nc7-b3dca9cd7b.json")
bucket_name = "ytvideo-35400.appspot.com"
bucket = storage_client.get_bucket(bucket_name)

def download_and_upload_video(url):
    # Descargar el video
    yt = YouTube(url)
    video = yt.streams.first()
    with tempfile.NamedTemporaryFile() as tmp:
        video.download(tmp.name)
        # Subir el video a Firebase Storage
        blob = bucket.blob(os.path.basename(tmp.name))
        blob.upload_from_filename(tmp.name)
        return {"message": f"Video {tmp.name} uploaded successfully"}
    
    
