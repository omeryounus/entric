import base64
import os

icon_path = "public/icon.png"

try:
    with open(icon_path, "rb") as image_file:
        encoded_string = base64.b64encode(image_file.read()).decode('utf-8')
        # Print pure base64 string to stdout
        print(f"data:image/png;base64,{encoded_string}")
except Exception as e:
    print(f"Error: {e}")
