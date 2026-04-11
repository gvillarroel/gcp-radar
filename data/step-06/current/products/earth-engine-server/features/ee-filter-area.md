---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.409Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.Filter.area"
feature_slug: "ee-filter-area"
latest_feature_date: "2023-06-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/getstarted"
  - "https://developers.google.com/earth-engine/guides/debugging"
keywords:
  - "ee"
  - "filter"
  - "area"
  - "this"
  - "evaluates"
  - "features"
  - "using"
  - "their"
---

# ee.Filter.area

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

This filter evaluates features using their area.

## Extended Definition

This filter evaluates features using their area.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/getstarted](https://developers.google.com/earth-engine/guides/getstarted)
- [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- June 24, 2025 Earth Engine Data Catalog Feature Added ECMWF/NRT FORECAST/IFS/SCWV : ECMWF Near-Realtime IFS Wave (Short-Cutoff) Forecasts Added ECMWF/NRT FORECAST/IFS/WAVE : ECMWF Near-Realtime IFS Wave Forecasts Added NASA/TEMPO/HCHO L3 : TEMPO gridded HCHO vertical columns V03 Added NASA/TEMPO/HCHO L3 QA : TEMPO gridded HCHO (QA filtered) vertical columns V03 June 17, 2025 Earth Engine Data Catalog Feature Added GOOGLE/SATELLITE EMBEDDING/V1/ANNUAL : Satellite Embedding V1 Added projects/forestdatapartnership/assets/cocoa/model 2025a : Cocoa Probability model 2025a Added projects/forestdatapartnership/assets/coffee/model 2025a : Coffee Probability model 2025a Added projects/forestdatapartnership/assets/palm/model 2025a : Palm Probability model 2025a Added projects/forestdatapartnership/assets/rubber/model 2025a : Rubber Tree Probability model 2025a June 10, 2025 Earth Engine Data Catalog Feature Added projects/edf-methanesat-ee/assets/public-preview/L4area v2 : MethaneSAT L4 Area Sources Public Preview V2.0.0 June 03, 2025 Earth Engine Data Catalog Feature Added JAXA/ALOS/AW3D30/V4 1 : ALOS DSM: Global 30m v4.1 Added UCSB/CHC/CMIP6/v1 : The Climate Hazards Center (CHC) Coupled Model Intercomparison Project Phase 6 (CHC-CMIP6) Added UMD/hansen/global forest change 2024 v1 12 : Hansen Global Forest Change v1.12 (2000-2024) Added projects/landandcarbon/assets/wri gdm drivers forest loss 1km/v1 1 2001 2023 : WRI/Google DeepMind Global Drivers of Forest Loss 2001-2023 v1.1 Added projects/landandcarbon/assets/wri gdm drivers forest loss 1km/v1 2001 2022 : WRI/Google DeepMind Global Drivers of Forest Loss 2001-2022 v1.0 Added projects/landandcarbon/assets/wri gdm drivers forest loss 1km/v1 2 2001 2024 : WRI/Google DeepMind Global Drivers of Forest Loss 2001-2024 v1.2 May 27, 2025 Earth Engine Data Catalog Feature Added NASA/TEMPO/NO2 L3 QA : TEMPO gridded NO2 (QA filtered) tropospheric and stratospheric columns V03 May 13, 2025 Earth Engine Data Catalog Feature Added USGS/NLCD RELEASES/2023 REL/TCC/v2023-5 : USFS Tree Canopy Cover v2023-5 (CONUS and OCONUS) May 06, 2025 Earth Engine Data Catalog Feature Added USFS/GTAC/LCMS/v2024-10 : USFS Landscape Change Monitoring System v2024.10 (CONUS and OCONUS) April 29, 2025 Earth Engine Data Catalog Feature Added ISRIC/SoilGrids250m/v2 0 : SoilGrids250m 2.0 - Volumetric Water Content Added NASA/TEMPO/NO2 L3 : TEMPO gridded NO2 tropospheric and stratospheric columns V03 Added UMN/PGC/ArcticDEM/V4/2m mosaic : ArcticDEM Mosaic V4.1 April 22, 2025 Earth Engine JavaScript Client Library 1.5.12 Change Added the Google Drive main OAuth scope , https://www.googleapis.com/auth/drive , to the default list of scopes to use for authorization.
- July 18, 2023 Earth Engine Data Catalog Feature Added JRC/GHSL/P2023A/GHS POP : GHSL: Global population surfaces 1975-2030 (P2023A) July 11, 2023 Earth Engine Data Catalog Feature Added MODIS/061/MOD17A2H : MOD17A2H.061: Terra Gross Primary Productivity 8-Day Global 500m Added MODIS/061/MYD17A2H : MYD17A2H.061: Aqua Gross Primary Productivity 8-Day Global 500m July 04, 2023 Earth Engine Data Catalog Feature Added Slovakia/orthos/25cm : Slovakia orthophotos June 27, 2023 Earth Engine Data Catalog Feature Added GOOGLE/Research/open-buildings/v3/polygons : Open Buildings V3 Polygons Added NOAA/VIIRS/DNB/ANNUAL V21 : VIIRS Nighttime Day/Night Annual Band Composites V2.1 June 26, 2023 Earth Engine Server Feature Added ee.Filter.area() .
- It is highly recommended to enable this by running the Python interpreter with the -W default flag or calling "import warnings; warnings.simplefilter('default')" before interacting with the EE library.
- Binary image operations (e.g. ee.Image.add ) now always match bands using their order (previously they matched them by name, falling back on matching by order only if not all names could be matched).

### "Get Started with Earth Engine \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/guides/getstarted](https://developers.google.com/earth-engine/guides/getstarted)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example demonstrates multiple concepts: filtering, mapping, reducing and the use of a cloud mask: Code Editor (JavaScript) // This function gets NDVI from a Landsat 8 image. var addNDVI = function ( image ) { return image . addBands ( image . normalizedDifference ([ 'B5' , 'B4' ])); }; // This function masks cloudy pixels. var cloudMask = function ( image ) { var clouds = ee .
- For example, the following code adds an NDVI band to every image in an ImageCollection : Code Editor (JavaScript) // This function gets NDVI from Landsat 8 imagery. var addNDVI = function ( image ) { return image . addBands ( image . normalizedDifference ([ 'B5' , 'B4' ])); }; // Load the Landsat 8 TOA data, filter by location and date. var collection = ee .
- Continuing the image differencing example, use a mask to display areas of increased and decreased NDVI over the difference interval: // This function gets NDVI from Landsat 5 imagery . var getNDVI = function ( image ) { return image . normalizedDifference ([ 'B4' , 'B3' ]); }; // Load two Landsat 5 images , 20 years apart . var image1 = ee .
- Alternatively, get the first image (lowest cloud cover): Code Editor (JavaScript) var first = filteredCollection . first (); Access the complete Earth Engine filtering functionality using filter() with an ee.Filter as the argument. (The filterBounds() and filterDate() methods used above are shortcuts).

### Debugging guide \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Number ( dictionary . get ( 'B5' )) . divide ( dictionary . get ( 'B4' )) }); }; var noProblem = someFeatures . filterBounds ( image . geometry ()) . map ( functionToMap ); print ( noProblem ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) def function to map ( feature ): dictionary = image . reduceRegion ( reducer = ee .
- Image ( 'COPERNICUS/S2 HARMONIZED/20160625T100617 20160625T170310 T33UVR' ); s2image . set ( 'myProperty' , 'This image is not assigned to a variable' ); // This will not result in an error, but will not find 'myProperty'. print ( s2image . get ( 'myProperty' )); // null Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) s2image = ee .
- Image ( 'USGS/SRTMGL1 003' ); // Error: "bandNames" is not defined in this scope. var display = image . visualize ({ bands : bandNames , min : 0 , max : 9000 }); // Error: image.selfAnalyze is not a function var silly = image . selfAnalyze (); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Load a Sentinel-2 image. image = ee .
- Image ( 'USGS/SRTMGL1 003' ); var nonsense = image + 2 ; // You can print this, but it's not what you were hoping for. print ( nonsense ); // Error: g.eeObject.name is not a function Map . addLayer ( nonsense ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Don't mix EE objects and Python objects. image = ee .

