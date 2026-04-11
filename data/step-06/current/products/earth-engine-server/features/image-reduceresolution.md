---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.437Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "Image.reduceResolution"
feature_slug: "image-reduceresolution"
latest_feature_date: "2016-04-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/exporting_images"
  - "https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image"
keywords:
  - "image"
  - "reduceresolution"
  - "generates"
  - "pixels"
  - "in"
  - "lower"
  - "resolution"
  - "output"
---

# Image.reduceResolution

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Generates pixels in a lower-resolution output projection.

## Extended Definition

Generates pixels in a lower-resolution output projection.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/exporting_images](https://developers.google.com/earth-engine/guides/exporting_images)
- [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- April 26, 2016 Earth Engine Data Catalog Feature Added GLCF/GLS TCC (no longer available) Added GLCF/GLS WATER : GLCF: Landsat Global Inland Water April 12, 2016 Earth Engine Data Catalog Feature Added SKYSAT/GEN-A/PUBLIC/ORTHO/MULTISPECTRAL : Planet SkySat Public Ortho Imagery, Multispectral Added SKYSAT/GEN-A/PUBLIC/ORTHO/RGB : Planet SkySat Public Ortho Imagery, RGB April 08, 2016 Earth Engine Server Feature Added Image.reduceResolution , an algorithm to generate pixels in a (usually lower-resolution) output projection.
- November 15, 2016 Earth Engine Data Catalog Feature Added ASTER/AST L1T 003 : ASTER L1T Radiance November 03, 2016 Earth Engine Server Fixed Fixed a bug that sometimes caused ee.Image.reduceResolution() to overestimate the number of input pixels per output pixel.
- June 25, 2024 Earth Engine Data Catalog Feature Added CANADA/NFIS/NTEMS/CA FOREST AGE : Landsat-derived forest age for Canada 2019 Added LANDSAT/COMPOSITES/C02/T1 L2 32DAY BAI : Landsat Collection 2 Tier 1 Level 2 32-Day BAI Composite Added LANDSAT/COMPOSITES/C02/T1 L2 32DAY EVI : Landsat Collection 2 Tier 1 Level 2 32-Day EVI Composite Added LANDSAT/COMPOSITES/C02/T1 L2 32DAY NBR : Landsat Collection 2 Tier 1 Level 2 32-Day NBR Composite Added LANDSAT/COMPOSITES/C02/T1 L2 32DAY NDVI : Landsat Collection 2 Tier 1 Level 2 32-Day NDVI Composite Added LANDSAT/COMPOSITES/C02/T1 L2 32DAY NDWI : Landsat Collection 2 Tier 1 Level 2 32-Day NDWI Composite Added LANDSAT/COMPOSITES/C02/T1 L2 ANNUAL BAI : Landsat Collection 2 Tier 1 Level 2 Annual BAI Composite Added LANDSAT/COMPOSITES/C02/T1 L2 ANNUAL EVI : Landsat Collection 2 Tier 1 Level 2 Annual EVI Composite Added LANDSAT/COMPOSITES/C02/T1 L2 ANNUAL NBR : Landsat Collection 2 Tier 1 Level 2 Annual NBR Composite Added LANDSAT/COMPOSITES/C02/T1 L2 ANNUAL NDVI : Landsat Collection 2 Tier 1 Level 2 Annual NDVI Composite Added LANDSAT/COMPOSITES/C02/T1 L2 ANNUAL NDWI : Landsat Collection 2 Tier 1 Level 2 Annual NDWI Composite June 18, 2024 Earth Engine Data Catalog Feature Added HU BERLIN/EPFD/V2/points : European Primary Forest Dataset - Points Added HU BERLIN/EPFD/V2/polygons : European Primary Forest Dataset - Polygons Added NASA/VIIRS/002/VNP09GA : VNP09GA: VIIRS Surface Reflectance Daily 500m and 1km Added NOAA/IBTrACS/v4 : International Best Track Archive for Climate Stewardship Project June 11, 2024 Earth Engine Data Catalog Feature Added LANDSAT/COMPOSITES/C02/T1 L2 8DAY BAI : Landsat Collection 2 Tier 1 Level 2 8-Day BAI Composite Added LANDSAT/COMPOSITES/C02/T1 L2 8DAY EVI : Landsat Collection 2 Tier 1 Level 2 8-Day EVI Composite Added LANDSAT/COMPOSITES/C02/T1 L2 8DAY NBR : Landsat Collection 2 Tier 1 Level 2 8-Day NBR Composite Added LANDSAT/COMPOSITES/C02/T1 L2 8DAY NDVI : Landsat Collection 2 Tier 1 Level 2 8-Day NDVI Composite Added LANDSAT/COMPOSITES/C02/T1 L2 8DAY NDWI : Landsat Collection 2 Tier 1 Level 2 8-Day NDWI Composite June 07, 2024 Earth Engine Server Breaking Changed the way that the ee.Image.loadGeoTIFF() algorithm and COG-backed assets select lower resolution overviews if a GeoTIFF is missing pyramid levels.
- Fixed an error that sometimes caused ee.Image.resample() to fail to mask invalid pixels in its output.

### Exporting Images \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/exporting_images](https://developers.google.com/earth-engine/guides/exporting_images)
- Source ID: `site-docs-root-2`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If the crsTransform specified in an export do not match the crsTransform of the original image, the output pixels will be resampled (using nearest neighbor by default), which will make the resulting image be shifted relative to the original image.
- See the section on configuring image exports for details on specifying the resolution and coordinate system of the output.
- If the default value is too low for your intended output image, you can increase maxPixels .
- For example: Code Editor (JavaScript) // Set a nodata value and replace masked pixels around the image edge with it. var noDataVal = - 9999 ; landsat = landsat . unmask ( noDataVal ); Export . image . toDrive ({ image : landsat , description : 'imageNoDataExample' , crs : projection . crs , scale : 2000 , // large scale for minimal demo region : landsat . geometry (), // full image bounds fileFormat : 'GeoTIFF' , formatOptions : { noData : noDataVal , } }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Set a nodata value and replace masked pixels around the image edge with it. no data val = - 9999 landsat = landsat . unmask ( no data val ) task = ee . batch .

### "Image computations with the Earth Engine REST API \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Here the coordinate system is geographic, so the transform is specified with scale in degrees and geographic coordinates of the upper left corner of the requested image patch. import json url = 'https://earthengine.googleapis.com/v1beta/projects/ {} /image:computePixels' url = url . format ( PROJECT ) response = session . post ( url = url , data = json . dumps ({ 'expression' : serialized , 'fileFormat' : 'PNG' , 'bandIds' : [ 'B4' , 'B3' , 'B2' ], 'grid' : { 'dimensions' : { 'width' : 640 , 'height' : 640 }, 'affineTransform' : { 'scaleX' : scale x , 'shearX' : 0 , 'translateX' : coords [ 0 ], 'shearY' : 0 , 'scaleY' : scale y , 'translateY' : coords [ 1 ] }, 'crsCode' : 'EPSG:4326' , }, 'visualizationOptions' : { 'ranges' : [{ 'min' : 0 , 'max' : 3000 }]}, }) ) image content = response . content If you are running this in a notebook, you can display the results using the IPython image display widget.
- ImageCollection (' COPERNICUS / S2 ') collection = collection . filterBounds ( region ) collection = collection . filterDate (' 2020 - 04 - 01 ', ' 2020 - 09 - 01 ') image = collection . median () Serialize the expression graph This will create an object that represents the Earth Engine expression graph (specifically, an Expression ).
- Make a projection to discover the scale in degrees. proj = ee.Projection('EPSG:4326').atScale(10).getInfo() Get scales out of the transform. scale x = proj['transform'][0] scale y = -proj['transform'][4] Send the request Make a POST request to the computePixels endpoint.
- Home Products Google Earth Engine Reference Send feedback Image computations with the Earth Engine REST API Stay organized with collections Save and categorize content based on your preferences.

