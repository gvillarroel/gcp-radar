---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.431Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "Image.blend()"
feature_slug: "image-blend"
latest_feature_date: "2017-09-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/best_practices"
  - "https://developers.google.com/earth-engine/guides/getstarted"
keywords:
  - "image"
  - "blend"
  - "performs"
  - "simple"
  - "alpha"
  - "blending"
  - "between"
  - "two"
---

# Image.blend()

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Performs simple alpha blending between two images.

## Extended Definition

Performs simple alpha blending between two images.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- [https://developers.google.com/earth-engine/guides/getstarted](https://developers.google.com/earth-engine/guides/getstarted)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- October 10, 2017 Earth Engine Data Catalog Feature Added HYCOM/GLBu0 08/sea surface elevation (no longer available) Added UMD/hansen/global forest change 2016 v1 4 (no longer available) October 03, 2017 Earth Engine Data Catalog Feature Added HYCOM/GLBu0 08/sea temp salinity (no longer available) Added HYCOM/GLBu0 08/sea water velocity (no longer available) Added LANDSAT/LE07/C01/T1 SR (no longer available) Added LANDSAT/LT04/C01/T1 SR (no longer available) Added LANDSAT/LT05/C01/T1 SR (no longer available) September 19, 2017 Earth Engine Data Catalog Feature Added LANDSAT COPY/LC8 (no longer available) Added LANDSAT COPY/LC8 L1T (no longer available) Added LANDSAT COPY/LE7 (no longer available) Added LANDSAT COPY/LE7 L1T (no longer available) Added LANDSAT COPY/LM1 (no longer available) Added LANDSAT COPY/LM1 L1T (no longer available) Added LANDSAT COPY/LM2 (no longer available) Added LANDSAT COPY/LM2 L1T (no longer available) Added LANDSAT COPY/LM3 (no longer available) Added LANDSAT COPY/LM3 L1T (no longer available) Added LANDSAT COPY/LM4 (no longer available) Added LANDSAT COPY/LM4 L1T (no longer available) Added LANDSAT COPY/LM5 (no longer available) Added LANDSAT COPY/LM5 L1T (no longer available) Added LANDSAT COPY/LT4 (no longer available) Added LANDSAT COPY/LT4 L1T (no longer available) Added LANDSAT COPY/LT5 (no longer available) Added LANDSAT COPY/LT5 L1T (no longer available) September 18, 2017 Earth Engine Server Feature Added Image.blend() to do simple alpha blending between two images.
- Changed the ee.Algorithms.CrossCorrelation algorithm to accept a value of 0 for the maxGap parameter, to allow for a direct computation of correlation scores between two images.
- Added ee.Array.dotProduct() and ee.Image.arrayDotProduct() algorithms to compute the dot product between two 1-D arrays of equal length.
- August 08, 2017 Earth Engine Data Catalog Feature Added LANDSAT/LT05/C01/T1 (no longer available) Added LANDSAT/LT05/C01/T1 TOA (no longer available) Added LANDSAT/LT05/C01/T2 (no longer available) Added LANDSAT/LT05/C01/T2 TOA (no longer available) Added USDOS/LSIB SIMPLE/2017 : LSIB 2017: Large Scale International Boundary Polygons, Simplified August 01, 2017 Earth Engine Data Catalog Feature Added NASA/OCEANDATA/SeaWiFS/L3SMI : Ocean Color SMI: Standard Mapped Image SeaWiFS Data Added WCMC/WDPA/current/points : WDPA: World Database on Protected Areas (points) Added WCMC/WDPA/current/polygons : WDPA: World Database on Protected Areas (polygons) July 25, 2017 Earth Engine Data Catalog Feature Added NOAA/CDR/PATMOSX/V53 : NOAA CDR PATMOSX: Cloud Properties, Reflectance, and Brightness Temperatures, Version 5.3 July 18, 2017 Earth Engine Data Catalog Feature Added MODIS/006/MOD08 M3 (no longer available) Added MODIS/006/MYD08 M3 (no longer available) July 06, 2017 Earth Engine Server Feature Added ee.Classifier.gmoLinearRegression() , a regularizing linear regression classifier.

### Coding Best Practices \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- Source ID: `site-docs-root`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- Image ( 'JAXA/ALOS/AW3D30 V1 1' ); // Make a simple binary layer from a threshold on elevation. var mask = aw3d30 . select ( 'AVE' ). gt ( 300 ); Map . setCenter ( - 122.0703 , 37.3872 , 11 ); Map . addLayer ( mask , {}, 'mask' ); // Distance in pixel units. var distance = mask . fastDistanceTransform (). sqrt (); // Threshold on distance (three pixels) for a dilation. var dilation = distance . lt ( 3 ); Map . addLayer ( dilation , {}, 'dilation' ); // Do the reverse for an erosion. var notDistance = mask . not (). fastDistanceTransform (). sqrt (); var erosion = notDistance . gt ( 3 ); Map . addLayer ( erosion , {}, 'erosion' ); Use the optimizations in reduceNeighborhood() If you need to perform a convolution and can't use fastDistanceTransform() , use the optimizations in reduceNeighborhood() . var l8raw = ee .
- Filter . lt ( 'CLOUDY PIXEL PERCENTAGE' , 1 )) . aside ( print ) // Useful for debugging. . map ( reduceFunction ) . reduce ( 'mean' ) . rename ( bands ); var viz = { bands : bands , min : 0 , max : 10000 }; Map . addLayer ( reasonableComputation , viz , 'reasonableComputation' ); Use updateMask() instead of mask() The difference between updateMask() and mask() is that the former does a logical and() of the argument (the new mask) and the existing image mask whereas mask() simply replaces the image mask with the argument.
- ImageCollection ( 'LANDSAT/LC08/C02/T1 L2' ) . map ( prepSrL8 ); // Create two annual cloud-free composites. var composite1 = collection . filterDate ( '2015-01-01' , '2015-12-31' ). median (); var composite2 = collection . filterDate ( '2017-01-01' , '2017-12-31' ). median (); // We want a strtatified sample of this stack. var stack = composite1 . addBands ( composite2 ) . float (); // Export the smallest size possible. // Export the image.
- FeatureCollection ( "USDOS/LSIB SIMPLE/2017" ); // Time series of images. var mod13a1 = ee .

### "Get Started with Earth Engine \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/guides/getstarted](https://developers.google.com/earth-engine/guides/getstarted)
- Source ID: `site-docs-root`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- For example, compute the difference between Normalized Difference Vegetation Index (NDVI) images 20 years apart: Code Editor (JavaScript) // This function gets NDVI from Landsat 5 imagery. var getNDVI = function ( image ) { return image . normalizedDifference ([ 'B4' , 'B3' ]); }; // Load two Landsat 5 images, 20 years apart. var image1 = ee .
- Continuing the image differencing example, use a mask to display areas of increased and decreased NDVI over the difference interval: // This function gets NDVI from Landsat 5 imagery . var getNDVI = function ( image ) { return image . normalizedDifference ([ 'B4' , 'B3' ]); }; // Load two Landsat 5 images , 20 years apart . var image1 = ee .
- Landsat . simpleCloudScore ( image ). select ([ 'cloud' ]); return image . updateMask ( clouds . lt ( 10 )); }; // Load a Landsat collection, map the NDVI and cloud masking functions over it. var collection = ee .
- The two most fundamental geographic data structures in Earth Engine are Image (raster) and Feature (vector), which can be organized into ImageCollection and FeatureCollection respectively.

