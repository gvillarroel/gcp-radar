---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:10:51.806Z"
product_name: "Earth Engine Python Client Library"
product_slug: "earth-engine-python-client-library"
feature_name: "Constructor docstrings and type annotations for PixelType"
feature_slug: "constructor-docstrings-and-type-annotations-for-pixeltype"
latest_feature_date: "2024-01-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/command_line"
  - "https://developers.google.com/earth-engine/guides/getstarted"
keywords:
  - "constructor"
  - "docstrings"
  - "and"
  - "type"
  - "annotations"
  - "for"
  - "pixeltype"
  - "adds"
---

# Constructor docstrings and type annotations for PixelType

Product: Earth Engine Python Client Library
Coverage: LOW

## Step 02 Summary

Adds __init__ docstrings and argument type annotations for PixelType.

## Extended Definition

Adds __init__ docstrings and argument type annotations for PixelType.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- [https://developers.google.com/earth-engine/guides/getstarted](https://developers.google.com/earth-engine/guides/getstarted)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Feature Added init () for docstrings and argument type annotations to PixelType .
- January 30, 2024 Earth Engine Data Catalog Feature Added NOAA/CDR/AVHRR/AOT/V4 : NOAA CDR AVHRR AOT: Daily Aerosol Optical Thickness Over Global Oceans, v04 Added USGS/GMTED2010 FULL : GMTED2010: Global Multi-resolution Terrain Elevation Data 2010 Added WM/geoLab/geoBoundaries/500/ADM0 (no longer available) Added WM/geoLab/geoBoundaries/500/ADM1 (no longer available) Added WM/geoLab/geoBoundaries/500/ADM2 (no longer available) January 23, 2024 Earth Engine Data Catalog Feature Added USGS/LIMA/SR METADATA : Landsat Image Mosaic of Antarctica (LIMA) - Processed Landsat Scenes (16 bit) Metadata January 18, 2024 Earth Engine Python Client Library 0.1.386 Feature Added init () for docstrings and argument type annotations to ErrorMargin and Join .
- Also made PixelType() idempotent and adds the following methods: PixelType.uint8() PixelType.uint16() PixelType.uint32() PixelType.int8() PixelType.int16() PixelType.int32() PixelType.int64() PixelType.float() PixelType.double() Made Image.paint() respect line width for LineStrings.
- Earth Engine Python Client Library 0.1.388 Feature Added init () for docstrings and argument type annotations to Array , ConfusionMatrix , DateRange , Model , Projection , and Reducer .

### Command Line Tool \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- Source ID: `site-docs-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- They may or may not be necessary, depending on your shell and platform.) To delete a property, set it to null without a type: earthengine asset set -p name=null projects/my-project/assets/asset id Date properties are just numbers that represent a number of milliseconds since the Unix epoch ( i.e. midnight on January 1st, 1970) and may be specified directly as a number or in one of the following formats: YYYY-MM-DD YYYY-MM-DDThh:mm:ss YYYY-MM-DDThh:mm:ss.f The time zone is assumed to be UTC.
- You can see a complete list of table upload options by visiting the Table Manifest guide or with: earthengine upload table -h external image To create an asset backed by an external image, run the upload image command with a manifest: earthengine upload external image --manifest /tmp/foo.json An example manifest is: { "name" : "projects/{project}/assets/cogdemo1" , "tilesets" : [ { "id" : "0" , "sources" : [{ "uris" : [ "gs://ee-docs-demos/COG demo.tif" ] }] } ], "properties" : { "source" : "https://code.earthengine.google.com/d541cf8b268b2f9d8f834c255698201d" }, "startTime" : "2016-01-01T00:00:00.000000000Z" , "endTime" : "2016-12-31T15:01:23.000000000Z" } See the Cloud GeoTIFF guide and the Image Manifest guide for more details on constructing the manifest.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["The earthengine tool manages Earth Engine assets and tasks via the command line.
- This will control how Earth Engine generates the pyramid of lower-resolution versions of your image: earthengine upload image --asset id=projects/my-project/assets/asset id --pyramiding policy=sample gs://bucket/image.tif You can use the --last band alpha to indicate that the mask for the image should be taken from an alpha channel in the last band: earthengine upload image --asset id=projects/my-project/assets/asset id --last band alpha gs://bucket/image.tif You can specify a no-data value using the --nodata value flag.

### "Get Started with Earth Engine \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/guides/getstarted](https://developers.google.com/earth-engine/guides/getstarted)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, the following code adds an NDVI band to every image in an ImageCollection : Code Editor (JavaScript) // This function gets NDVI from Landsat 8 imagery. var addNDVI = function ( image ) { return image . addBands ( image . normalizedDifference ([ 'B5' , 'B4' ])); }; // Load the Landsat 8 TOA data, filter by location and date. var collection = ee .
- For example, the left side navigation contains links to sections or pages about important data types such as Image , ImageCollection , Feature , FeatureCollection , Geometry , Reducer , Chart , Join and Array .
- For example, the Image class has an add() method: Code Editor (JavaScript) var image3 = image1 . add ( image2 ); This method adds the bands of image2 to the bands of image1 .
- Users can access public and private datasets, perform operations on Image, Feature, and their Collection data types, leveraging server-side objects.

