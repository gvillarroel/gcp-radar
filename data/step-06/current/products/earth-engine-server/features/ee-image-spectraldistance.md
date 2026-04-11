---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.423Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.Image.spectralDistance()"
feature_slug: "ee-image-spectraldistance"
latest_feature_date: "2018-06-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-crosscorrelation"
keywords:
  - "ee"
  - "image"
  - "spectraldistance"
  - "computes"
  - "spectral"
  - "distance"
  - "with"
  - "corrected"
---

# ee.Image.spectralDistance()

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Computes spectral distance with corrected NaN handling; Computes spectral distance between image spectra.

## Extended Definition

Computes spectral distance with corrected NaN handling; Computes spectral distance between image spectra.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-crosscorrelation](https://developers.google.com/earth-engine/apidocs/ee-algorithms-crosscorrelation)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- June 19, 2018 Earth Engine Data Catalog Feature Added COPERNICUS/CORINE/V18 5 1/100m (no longer available) Added JAXA/ALOS/PALSAR/YEARLY/SAR : Global PALSAR-2/PALSAR Yearly Mosaic, version 1 Added MODIS/006/MCD12Q1 (no longer available) Added MODIS/006/MOD13A2 (no longer available) Added MODIS/006/MYD13A2 (no longer available) Added UMD/hansen/global forest change 2017 v1 5 (no longer available) June 12, 2018 Earth Engine Data Catalog Feature Added UMT/NTSG/v2/LANDSAT/GPP : Landsat Gross Primary Production CONUS Added UMT/NTSG/v2/LANDSAT/NPP : Landsat Net Primary Production CONUS Added UMT/NTSG/v2/MODIS/GPP : MODIS Gross Primary Production CONUS Added UMT/NTSG/v2/MODIS/NPP : MODIS Net Primary Production CONUS June 08, 2018 Earth Engine Server Feature Added ee.Image.spectralGradient() , ee.Image.spectralMorphology() and ee.Image.spectralDistance() algorithms.
- June 26, 2018 Earth Engine Data Catalog Feature Added LANDSAT/LM01/C01/T1 (no longer available) Added LANDSAT/LM01/C01/T2 (no longer available) Added LANDSAT/LM02/C01/T1 (no longer available) Added LANDSAT/LM02/C01/T2 (no longer available) Added LANDSAT/LM03/C01/T1 (no longer available) Added LANDSAT/LM03/C01/T2 (no longer available) Added LANDSAT/LM04/C01/T1 (no longer available) Added LANDSAT/LM04/C01/T2 (no longer available) Added LANDSAT/LM05/C01/T1 (no longer available) Added LANDSAT/LM05/C01/T2 (no longer available) June 22, 2018 Earth Engine Server Feature Fixed NaN handling in ee.Image.spectralDistance() algorithm.
- January 10, 2017 Earth Engine Data Catalog Feature Added NOAA/VIIRS/DNB/MONTHLY V1/VCMSLCFG : VIIRS Stray Light Corrected Nighttime Day/Night Band Composites Version 1 Added VITO/PROBAV/C1/S1 TOC 100M : PROBA-V C1 Top Of Canopy Daily Synthesis 100m Added VITO/PROBAV/C1/S1 TOC 333M : PROBA-V C1 Top Of Canopy Daily Synthesis 333m January 03, 2017 Earth Engine Data Catalog Feature Added NOAA/VIIRS/DNB/MONTHLY V1/VCMCFG : VIIRS Nighttime Day/Night Band Composites Version 1 December 20, 2016 Earth Engine Data Catalog Feature Added WORLDCLIM/V1/BIO : WorldClim BIO Variables V1 Added WORLDCLIM/V1/MONTHLY : WorldClim Climatology V1 December 19, 2016 Earth Engine Server Fixed Added ee.Image.arrayCat() to easily concatenate two array images with the same number of dimensions.
- January 19, 2016 Earth Engine Data Catalog Feature Added EO1/HYPERION : EO-1 Hyperion Hyperspectral Imager January 11, 2016 Earth Engine Code Editor Change ee.Dictionary() can now be called with no arguments or with a list of alternating keys/values.

### "Image computations with the Earth Engine REST API \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Here the coordinate system is geographic, so the transform is specified with scale in degrees and geographic coordinates of the upper left corner of the requested image patch. import json url = 'https://earthengine.googleapis.com/v1beta/projects/ {} /image:computePixels' url = url . format ( PROJECT ) response = session . post ( url = url , data = json . dumps ({ 'expression' : serialized , 'fileFormat' : 'PNG' , 'bandIds' : [ 'B4' , 'B3' , 'B2' ], 'grid' : { 'dimensions' : { 'width' : 640 , 'height' : 640 }, 'affineTransform' : { 'scaleX' : scale x , 'shearX' : 0 , 'translateX' : coords [ 0 ], 'shearY' : 0 , 'scaleY' : scale y , 'translateY' : coords [ 1 ] }, 'crsCode' : 'EPSG:4326' , }, 'visualizationOptions' : { 'ranges' : [{ 'min' : 0 , 'max' : 3000 }]}, }) ) image content = response . content If you are running this in a notebook, you can display the results using the IPython image display widget.
- Home Products Google Earth Engine Reference Send feedback Image computations with the Earth Engine REST API Stay organized with collections Save and categorize content based on your preferences.
- In general, you should build these with one of the client APIs. serialized = ee.serializer.encode(image) Create the desired projection (WGS84) at the desired scale (10 meters for Sentinel-2).
- Credentials . from service account file ( KEY ) scoped credentials = credentials . with scopes ( [ 'https://www.googleapis.com/auth/cloud-platform' ]) session = AuthorizedSession ( scoped credentials ) url = 'https://earthengine.googleapis.com/v1beta/projects/earthengine-public/assets/LANDSAT' response = session . get ( url ) from pprint import pprint import json pprint ( json . loads ( response . content )) Serialize a computation Before you can send a request to compute something, the computation needs to be put into the Earth Engine expression graph format.

### "ee.Algorithms.CrossCorrelation \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-crosscorrelation](https://developers.google.com/earth-engine/apidocs/ee-algorithms-crosscorrelation)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Usage Returns ee.Algorithms.CrossCorrelation(imageA, imageB, maxGap, windowSize, maxMaskedFrac ) Image Argument Type Details imageA Image First image, with N bands. imageB Image Second image, must have the same number of bands as imageA. maxGap Integer The greatest distance a pixel may shift in either X or Y. windowSize Integer Size of the window to be compared. maxMaskedFrac Float, default: 0 The maximum fraction of pixels within the correlation window that are allowed to be masked.
- The first three are distances: the deltaX, deltaY, and the Euclidean distance for each pixel in imageA to the pixel which has the highest corresponding correlation coefficient in imageB.
- Page Summary outlined flag Assesses image registration quality between two input images with the same number of bands.
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.CrossCorrelation Stay organized with collections Save and categorize content based on your preferences.

