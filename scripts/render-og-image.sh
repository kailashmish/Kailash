#!/usr/bin/env bash
# Re-render OG card from HTML template to public/og-image.jpg (1200x630, <300KB)
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/public/og-image.jpg"
CHROME=""
for c in google-chrome google-chrome-stable chromium chromium-browser; do
  if command -v "$c" >/dev/null 2>&1; then CHROME="$c"; break; fi
done
if [[ -z "$CHROME" ]]; then
  echo "Chrome/Chromium not found. Use scripts/generate-og-image.py instead." >&2
  exit 1
fi
"$CHROME" --headless=new --disable-gpu --window-size=1200,630 \
  --screenshot=/tmp/og-raw.png "file://$ROOT/scripts/og-image-template.html"
python3 - <<PY
from PIL import Image
img = Image.open('/tmp/og-raw.png').convert('RGB').resize((1200, 630))
img.save('$OUT', 'JPEG', quality=85, optimize=True, progressive=True)
print('wrote', '$OUT', img.size)
PY
