$ErrorActionPreference = 'Stop'

$repo = Resolve-Path (Join-Path $PSScriptRoot '..')
$inputDir = Join-Path $repo 'public/images'
$outputDir = Join-Path $inputDir 'optimized'

$images = @(
  @{ source = 'night-ride.png'; slug = 'hero-night-city' },
  @{ source = 'car-interior.png'; slug = 'party-interior' },
  @{ source = 'garage.png'; slug = 'fleet-garage' },
  @{ source = 'professional-chauffeur.png'; slug = 'professional-driver' },
  @{ source = 'group-of-friends.png'; slug = 'group-nightlife' },
  @{ source = 'taxi-driving.png'; slug = 'vip-arrival' },
  @{ source = 'smartphone-app-display.png'; slug = 'booking-app' },
  @{ source = 'neon-lights.png'; slug = 'abstract-brand' },
  @{ source = 'photo-collection.png'; slug = 'nightlife-collage' }
)

$landscapeWidths = @(1536, 1280, 960, 640)
$portraitWidths = @(1024, 768, 512)

New-Item -Path $outputDir -ItemType Directory -Force | Out-Null

foreach ($image in $images) {
  $src = Join-Path $inputDir $image.source
  if (-not (Test-Path $src)) {
    Write-Warning "Missing source image: $($image.source)"
    continue
  }

  $identify = & magick identify -format "%w %h" $src
  $parts = $identify -split ' '
  $width = [int]$parts[0]
  $height = [int]$parts[1]
  $isPortrait = $height -gt $width

  $targetWidths = if ($isPortrait) { $portraitWidths } else { $landscapeWidths }

  foreach ($w in $targetWidths) {
    if ($w -gt $width) {
      continue
    }

    $webpOut = Join-Path $outputDir ("{0}-{1}.webp" -f $image.slug, $w)
    $jpgOut = Join-Path $outputDir ("{0}-{1}.jpg" -f $image.slug, $w)

    & magick $src -strip -resize "${w}x" -define webp:method=6 -quality 82 $webpOut
    & magick $src -strip -resize "${w}x" -quality 82 $jpgOut
  }
}

Write-Host "Optimized images written to $outputDir"
