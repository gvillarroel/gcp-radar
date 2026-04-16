---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.082Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "Landsat Image Mosaic of Antarctica 16-Bit Pan-Sharpened Mosaic"
feature_slug: "landsat-image-mosaic-of-antarctica-16-bit-pan-sharpened-mosaic"
latest_feature_date: "2018-07-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/tags/satellite-imagery"
  - "https://developers.google.com/earth-engine/datasets/catalog"
  - "https://developers.google.com/earth-engine/guides/landsat"
keywords:
  - "landsat"
  - "image"
  - "mosaic"
  - "antarctica"
  - "16"
  - "bit"
  - "pan"
  - "sharpened"
---

# Landsat Image Mosaic of Antarctica 16-Bit Pan-Sharpened Mosaic

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

A 16-bit pan-sharpened Landsat mosaic of Antarctica.

## Extended Definition

A 16-bit pan-sharpened Landsat mosaic of Antarctica.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)

## Supporting Pages

### "Datasets tagged satellite-imagery in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)
- Source ID: `site-docs-root-3`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- The mosaic consists of pan-sharpened normalized surface reflectance scenes (Landsat ETM+ bands 1, 2, 3, and … antarctica ice landsat-derived lima mosaic satellite-imagery MCD19A1.061: Land Surface BRF Daily L2G Global 500m and 1km The MCD19A1 Version 6.1 data product is a Moderate Resolution Imaging Spectroradiometer (MODIS) Terra and Aqua combined Land Surface Bidirectional Reflectance Factor (BRF) gridded Level 2 product produced daily at 500 meter and 1 kilometer resolution.
- Processed Landsat Scenes (16 bit) are Level 1Gt NLAPS scenes converted to 16 bit, processed with sun-angle correction, and converted to reflectance values (Bindschadler … antarctica ice landsat-derived lima mosaic satellite-imagery Landsat Image Mosaic of Antarctica (LIMA) 16-Bit Pan-Sharpened Mosaic The Landsat Image Mosaic of Antarctica (LIMA) is a seamless and virtually cloudless mosaic created from processed Landsat 7 ETM+ scenes.
- Processed Landsat Scenes (16 bit) are Level 1Gt NLAPS scenes converted to 16 bit, processed with sun-angle correction, and converted to reflectance values (Bindschadler … antarctica ice landsat-derived lima mosaic satellite-imagery Landsat Image Mosaic of Antarctica (LIMA) - Processed Landsat Scenes (16 bit) Metadata The Landsat Image Mosaic of Antarctica (LIMA) is a seamless and virtually cloudless mosaic created from processed Landsat 7 ETM+ scenes.
- GLS2005 uses mainly Landsat 5 and gap-filled Landsat 7 data with EO-1 ALI and Terra ASTER data filling in any … etm gls l7 landsat radiance satellite-imagery Landsat Image Mosaic of Antarctica (LIMA) - Processed Landsat Scenes (16 bit) The Landsat Image Mosaic of Antarctica (LIMA) is a seamless and virtually cloudless mosaic created from processed Landsat 7 ETM+ scenes.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Processed Landsat Scenes (16 bit) are Level 1Gt NLAPS scenes converted to 16 bit, processed with sun-angle correction, and converted to reflectance values (Bindschadler … antarctica ice landsat-derived lima mosaic satellite-imagery Landsat Image Mosaic of Antarctica (LIMA) 16-Bit Pan-Sharpened Mosaic The Landsat Image Mosaic of Antarctica (LIMA) is a seamless and virtually cloudless mosaic created from processed Landsat 7 ETM+ scenes.
- The mosaic consists of pan-sharpened normalized surface reflectance scenes (Landsat ETM+ bands 1, 2, 3, and … antarctica ice landsat-derived lima mosaic satellite-imagery Landsat Net Primary Production CONUS The Landsat Net Primary Production (NPP) CONUS dataset estimates NPP using Landsat Surface Reflectance for CONUS.
- Processed Landsat Scenes (16 bit) are Level 1Gt NLAPS scenes converted to 16 bit, processed with sun-angle correction, and converted to reflectance values (Bindschadler … antarctica ice landsat-derived lima mosaic satellite-imagery Landsat Image Mosaic of Antarctica (LIMA) - Processed Landsat Scenes (16 bit) Metadata The Landsat Image Mosaic of Antarctica (LIMA) is a seamless and virtually cloudless mosaic created from processed Landsat 7 ETM+ scenes.
- GPP is calculated using … 16-day conus gpp gridmet-derived landsat mod17 Landsat Image Mosaic of Antarctica (LIMA) - Processed Landsat Scenes (16 bit) The Landsat Image Mosaic of Antarctica (LIMA) is a seamless and virtually cloudless mosaic created from processed Landsat 7 ETM+ scenes.

### Landsat Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- ImageCollection ( 'LANDSAT/LC08/C02/T1 TOA' ) . filterDate ( '2019-06-01' , '2019-06-16' ). mosaic () . set ( 'SENSOR ID' , 'OLI TIRS' ); // Cloud score the mosaic and display the result. var scored mosaic = ee .
- ImageCollection ( 'LANDSAT/LC08/C02/T1 TOA' ) . filterDate ( '2019-06-01' , '2019-06-16' ) . mosaic () . set ( 'SENSOR ID' , 'OLI TIRS' ) ) Cloud score the mosaic and display the result. scored mosaic = ee .
- Landsat . simpleCloudScore ( cloudy scene ); // Create a mask from the cloud score and combine it with the image mask. var mask = scored . select ([ 'cloud' ]). lte ( 20 ); // Apply the mask to the image and display the result. var masked = cloudy scene . updateMask ( mask ); Map . addLayer ( masked , { bands : [ 'B4' , 'B3' , 'B2' ], max : 0.4 }, 'masked' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Load a cloudy Landsat scene and display it. cloudy scene = ee .
- Landsat . simpleCloudScore ( cloudy scene ) Create a mask from the cloud score and combine it with the image mask. mask = scored . select ([ 'cloud' ]) . lte ( 20 ) Apply the mask to the image and display the result. masked = cloudy scene . updateMask ( mask ) m . add layer ( masked , { 'bands' : [ 'B4' , 'B3' , 'B2' ], 'max' : 0.4 }, 'masked' ) m If you run this example in the Code Editor, try toggling the visibility of the TOA layers to compare the difference between the masked and unmasked imagery. (See the Layer Manager section of the Code Editor docs for instructions on how to do that).

