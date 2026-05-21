"""Generate Notion portfolio cover matching baselayerlabs.dev theme."""
from __future__ import annotations

import math
from pathlib import Path

from PIL import Image, ImageDraw

W, H = 3000, 1200

# baselayerlabs.dev tokens (index.css)
BG = (10, 10, 10)          # #0a0a0a
BG2 = (17, 17, 17)         # #111111
BORDER = (42, 42, 42)      # #2a2a2a
PRIMARY = (201, 169, 110)  # #C9A96E
MUTED = (153, 153, 153)    # #999999

OUT_DIR = Path(__file__).resolve().parents[1] / "public"
OUT_JPG = OUT_DIR / "notion-portfolio-cover.jpg"
OUT_PNG = OUT_DIR / "notion-portfolio-cover.png"


def lerp(a: int, b: int, t: float) -> int:
    return int(a + (b - a) * t)


def gradient_bg(draw: ImageDraw.ImageDraw, img: Image.Image) -> None:
    for y in range(H):
        t = y / H
        r = lerp(BG[0], BG2[0], t)
        g = lerp(BG[1], BG2[1], t)
        b = lerp(BG[2], BG2[2], t)
        draw.line([(0, y), (W, y)], fill=(r, g, b))


def grid_overlay(img: Image.Image, cell: int = 40, alpha: int = 38) -> None:
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)
    line = (*BORDER, alpha)
    for x in range(0, W + 1, cell):
        d.line([(x, 0), (x, H)], fill=line, width=1)
    for y in range(0, H + 1, cell):
        d.line([(0, y), (W, y)], fill=line, width=1)
    img.paste(overlay, (0, 0), overlay)


def copper_glow(img: Image.Image, cx: int, cy: int, radius: int) -> None:
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(glow)
    for r in range(radius, 0, -8):
        a = int(18 * (1 - r / radius))
        d.ellipse(
            (cx - r, cy - r, cx + r, cy + r),
            fill=(*PRIMARY, a),
        )
    img.paste(glow, (0, 0), glow)


def rotated_square(
    draw: ImageDraw.ImageDraw,
    cx: int,
    cy: int,
    size: int,
    angle_deg: float,
    color: tuple[int, int, int, int],
    width: int = 2,
) -> None:
    half = size / 2
    corners = [(-half, -half), (half, -half), (half, half), (-half, half)]
    rad = math.radians(angle_deg)
    cos_a, sin_a = math.cos(rad), math.sin(rad)
    pts = []
    for x, y in corners:
        rx = x * cos_a - y * sin_a + cx
        ry = x * sin_a + y * cos_a + cy
        pts.append((rx, ry))
    draw.polygon(pts, outline=color, width=width)


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    img = Image.new("RGB", (W, H), BG)
    draw = ImageDraw.Draw(img)
    gradient_bg(draw, img)

    grid_overlay(img)

    # Hero-style vertical rule (left, ~15%)
    vx = int(W * 0.12)
    for y in range(H):
        t = abs(y - H / 2) / (H / 2)
        a = int(90 * (1 - min(1.0, t * 1.2)))
        draw.point((vx, y), fill=(BORDER[0], BORDER[1], BORDER[2]))

    # Copper accent bar (like Hero label line)
    bar_y = int(H * 0.38)
    bar_x = int(W * 0.08)
    bar_w = 280
    draw.rectangle(
        (bar_x, bar_y, bar_x + bar_w, bar_y + 4),
        fill=PRIMARY,
    )

    # Geometric motif (right) — matches Hero spinning squares
    gx, gy = int(W * 0.78), int(H * 0.5)
    copper_glow(img, gx, gy, 420)
    draw = ImageDraw.Draw(img)
    rotated_square(draw, gx, gy, 520, 45, (*PRIMARY, 90), width=3)
    rotated_square(draw, gx, gy, 400, 12, (*BORDER, 140), width=2)
    draw.ellipse((gx - 6, gy - 6, gx + 6, gy + 6), fill=PRIMARY)

    # Bottom copper hairline
    draw.rectangle((0, H - 3, W, H), fill=(*PRIMARY,))

    # Soft vignette (keep top calm for Notion title)
    vignette = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    vd = ImageDraw.Draw(vignette)
    for y in range(int(H * 0.35)):
        a = int(80 * (1 - y / (H * 0.35)))
        vd.line([(0, y), (W, y)], fill=(0, 0, 0, a))
    img.paste(vignette, (0, 0), vignette)

    img.save(OUT_JPG, format="JPEG", quality=92, optimize=True)
    img.save(OUT_PNG, format="PNG", optimize=True)
    print(f"Wrote {OUT_JPG} ({OUT_JPG.stat().st_size // 1024} KB)")
    print(f"Wrote {OUT_PNG} ({OUT_PNG.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
