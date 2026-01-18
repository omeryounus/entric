from PIL import Image
import os

source_path = "public/images/logo_source_v2.png"
logo_out = "public/images/logo.png"
icon_out = "public/icon.png"

try:
    img = Image.open(source_path)
    width, height = img.size
    print(f"Original size: {width}x{height}")

    # The image contains a large logo at the top (with text ENTRIC)
    # and a smaller "Favicon" version at the bottom.
    
    # Let's crop based on the visual layout.
    # Top part (Logo with text) seems to be in the upper 50%
    # Favicon seems to be in the lower 40%, centered.

    # 1. Extract Logo (Top half)
    logo_crop = img.crop((0, 0, width, int(height * 0.55)))
    bbox = logo_crop.getbbox()
    if bbox:
        logo_crop = logo_crop.crop(bbox)
    logo_crop.save(logo_out)
    print(f"Saved logo to {logo_out}")

    # 2. Extract Favicon (Bottom half)
    # The text "Favicon" is below the icon. We should try to crop just the icon.
    # Let's verify the bottom area.
    lower_half = img.crop((0, int(height * 0.55), width, height))
    
    # We want to exclude the "Favicon" text. 
    # The icon is above the text.
    # Let's just crop the center of the lower half where the icon likely is.
    # Or rely on bbox and then trim the bottom 20% of the bbox-ed result if it includes text?
    # Simple heuristic: The icon is likely the largest non-transparent object in the top part of the lower half.
    
    # Let's just crop tight on the lower half first.
    bbox_lower = lower_half.getbbox()
    if bbox_lower:
        lower_half_tight = lower_half.crop(bbox_lower)
        # Now we might have the icon + text "Favicon" below it.
        # Let's chop off the bottom 20% of this tight crop to remove "Favicon" text label
        w_l, h_l = lower_half_tight.size
        # "Favicon" text is likely small height relative to icon.
        # Let's assume text is in bottom 25%.
        icon_final = lower_half_tight.crop((0, 0, w_l, int(h_l * 0.75)))
        icon_final.save(icon_out)
        print(f"Saved icon to {icon_out}")
    else:
        print("Could not find icon in lower half")

except Exception as e:
    print(f"Error: {e}")
