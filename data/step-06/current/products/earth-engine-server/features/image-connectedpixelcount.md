---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.456Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "Image.connectedPixelCount"
feature_slug: "image-connectedpixelcount"
latest_feature_date: "2013-02-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image"
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/getstarted"
keywords:
  - "image"
  - "connectedpixelcount"
  - "annotates"
  - "pixels"
  - "with"
  - "the"
  - "number"
  - "of"
---

# Image.connectedPixelCount

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Annotates pixels with the number of equal neighbors.

## Extended Definition

Annotates pixels with the number of equal neighbors.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image)
- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/getstarted](https://developers.google.com/earth-engine/guides/getstarted)

## Supporting Pages

### "Image computations with the Earth Engine REST API \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Here the coordinate system is geographic, so the transform is specified with scale in degrees and geographic coordinates of the upper left corner of the requested image patch. import json url = 'https://earthengine.googleapis.com/v1beta/projects/ {} /image:computePixels' url = url . format ( PROJECT ) response = session . post ( url = url , data = json . dumps ({ 'expression' : serialized , 'fileFormat' : 'PNG' , 'bandIds' : [ 'B4' , 'B3' , 'B2' ], 'grid' : { 'dimensions' : { 'width' : 640 , 'height' : 640 }, 'affineTransform' : { 'scaleX' : scale x , 'shearX' : 0 , 'translateX' : coords [ 0 ], 'shearY' : 0 , 'scaleY' : scale y , 'translateY' : coords [ 1 ] }, 'crsCode' : 'EPSG:4326' , }, 'visualizationOptions' : { 'ranges' : [{ 'min' : 0 , 'max' : 3000 }]}, }) ) image content = response . content If you are running this in a notebook, you can display the results using the IPython image display widget.
- In general, you should build these with one of the client APIs. serialized = ee.serializer.encode(image) Create the desired projection (WGS84) at the desired scale (10 meters for Sentinel-2).
- Import the Image function from the IPython.display module. from IPython.display import Image Image ( image content ) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Make a projection to discover the scale in degrees. proj = ee.Projection('EPSG:4326').atScale(10).getInfo() Get scales out of the transform. scale x = proj['transform'][0] scale y = -proj['transform'][4] Send the request Make a POST request to the computePixels endpoint.

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Feature Added Image.connectedPixelCount() , which annotates pixels with the number of equal neighbors.
- January 10, 2017 Earth Engine Data Catalog Feature Added NOAA/VIIRS/DNB/MONTHLY V1/VCMSLCFG : VIIRS Stray Light Corrected Nighttime Day/Night Band Composites Version 1 Added VITO/PROBAV/C1/S1 TOC 100M : PROBA-V C1 Top Of Canopy Daily Synthesis 100m Added VITO/PROBAV/C1/S1 TOC 333M : PROBA-V C1 Top Of Canopy Daily Synthesis 333m January 03, 2017 Earth Engine Data Catalog Feature Added NOAA/VIIRS/DNB/MONTHLY V1/VCMCFG : VIIRS Nighttime Day/Night Band Composites Version 1 December 20, 2016 Earth Engine Data Catalog Feature Added WORLDCLIM/V1/BIO : WorldClim BIO Variables V1 Added WORLDCLIM/V1/MONTHLY : WorldClim Climatology V1 December 19, 2016 Earth Engine Server Fixed Added ee.Image.arrayCat() to easily concatenate two array images with the same number of dimensions.
- November 15, 2016 Earth Engine Data Catalog Feature Added ASTER/AST L1T 003 : ASTER L1T Radiance November 03, 2016 Earth Engine Server Fixed Fixed a bug that sometimes caused ee.Image.reduceResolution() to overestimate the number of input pixels per output pixel.
- September 16, 2016 Earth Engine Server Fixed Fixed a bug where large exports failed with a "Number of pixels requested exceeds the maximum allowed" error.

### "Get Started with Earth Engine \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/guides/getstarted](https://developers.google.com/earth-engine/guides/getstarted)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Image ( 'CGIAR/SRTM90 V4' ) . mask (); // Update the NDVI difference mask with the land mask . var maskedDifference = ndviDifference . updateMask ( landMask ); // Display the masked result . var vizParams = { min : - 0.5 , max : 0.5 , palette : [ 'FF0000' , 'FFFFFF' , '0000FF' ]}; Map . setCenter ( - 122.2531 , 37.6295 , 9 ); Map . addLayer ( maskedDifference , vizParams , 'NDVI difference' ); In this example, note that the mask of the NDVI difference is updated by the land mask with updateMask() .
- The following example demonstrates multiple concepts: filtering, mapping, reducing and the use of a cloud mask: Code Editor (JavaScript) // This function gets NDVI from a Landsat 8 image. var addNDVI = function ( image ) { return image . addBands ( image . normalizedDifference ([ 'B5' , 'B4' ])); }; // This function masks cloudy pixels. var cloudMask = function ( image ) { var clouds = ee .
- The lowercase image means that a variable named image refers to an instance of the ee.Image class. 'Hello world!' JavaScript Printing out information to the console is a basic task for getting information about an object, displaying the numeric result of a computation, displaying object metadata or helping with debugging.
- Map . addLayer ( image ); The second parameter of Map.centerObject() is a zoom level, where higher numbers indicate larger scale (more zoomed in).

