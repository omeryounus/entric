from PIL import Image
import os

source_path = "public/images/logo_source_v2.png"
icon_out_png = "public/icon.png"
icon_out_ico = "public/favicon.ico"

try:
    img = Image.open(source_path)
    width, height = img.size
    
    # 2. Extract Favicon (Bottom half)
    # Re-using the logic from before to get the icon
    lower_half = img.crop((0, int(height * 0.55), width, height))
    bbox_lower = lower_half.getbbox()
    
    if bbox_lower:
        lower_half_tight = lower_half.crop(bbox_lower)
        w_l, h_l = lower_half_tight.size
        # Crop out "Favicon" text (bottom 25%)
        icon_final = lower_half_tight.crop((0, 0, w_l, int(h_l * 0.75)))
        
        # Save as PNG
        icon_final.save(icon_out_png)
        print(f"Saved icon to {icon_out_png}")
        
        # Save as ICO (Resize to 32x32 generally good for legacy, or multi-size)
        # For simplicity, let's just save the high-res one as .ico, PIL handles it.
        # Include varying sizes for better compatibility
        icon_final.save(icon_out_ico, format='ICO', sizes=[(32, 32), (64, 64), (128, 128)])
        print(f"Saved icon to {icon_out_ico}")

    else:
        print("Could not find icon in lower half")

except Exception as e:
    print(f"Error: {e}")
