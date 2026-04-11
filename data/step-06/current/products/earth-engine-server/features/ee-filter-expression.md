---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.416Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.Filter.expression()"
feature_slug: "ee-filter-expression"
latest_feature_date: "2019-09-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring"
  - "https://developers.google.com/earth-engine/guides/client_server"
keywords:
  - "ee"
  - "filter"
  - "expression"
  - "converts"
  - "conditional"
  - "and"
  - "boolean"
  - "string"
---

# ee.Filter.expression()

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Converts conditional and boolean string expressions into filters.

## Extended Definition

Converts conditional and boolean string expressions into filters.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring)
- [https://developers.google.com/earth-engine/guides/client_server](https://developers.google.com/earth-engine/guides/client_server)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- September 10, 2019 Earth Engine Data Catalog Feature Added NASA/GPM L3/IMERG V06 (no longer available) September 05, 2019 Earth Engine Server Feature Added ee.Filter.expression() to convert conditional and boolean string expressions into filters and allow ee.Collection.filter() to take expression strings.
- Note that some parameters needed to be renamed after removing opt since they conflict with Python keywords: ee.Collection.limit() : opt property was converted to prop ee.Image.expression() : opt map was converted to map ee.Filter() : opt filter which was converted to filter Feature Added Export.classifier.toAsset and ee.Classifier.load for exporting and loading saved ee.Classifier.smileCart and ee.Classifier.smileRandomForest classifiers.
- June 24, 2025 Earth Engine Data Catalog Feature Added ECMWF/NRT FORECAST/IFS/SCWV : ECMWF Near-Realtime IFS Wave (Short-Cutoff) Forecasts Added ECMWF/NRT FORECAST/IFS/WAVE : ECMWF Near-Realtime IFS Wave Forecasts Added NASA/TEMPO/HCHO L3 : TEMPO gridded HCHO vertical columns V03 Added NASA/TEMPO/HCHO L3 QA : TEMPO gridded HCHO (QA filtered) vertical columns V03 June 17, 2025 Earth Engine Data Catalog Feature Added GOOGLE/SATELLITE EMBEDDING/V1/ANNUAL : Satellite Embedding V1 Added projects/forestdatapartnership/assets/cocoa/model 2025a : Cocoa Probability model 2025a Added projects/forestdatapartnership/assets/coffee/model 2025a : Coffee Probability model 2025a Added projects/forestdatapartnership/assets/palm/model 2025a : Palm Probability model 2025a Added projects/forestdatapartnership/assets/rubber/model 2025a : Rubber Tree Probability model 2025a June 10, 2025 Earth Engine Data Catalog Feature Added projects/edf-methanesat-ee/assets/public-preview/L4area v2 : MethaneSAT L4 Area Sources Public Preview V2.0.0 June 03, 2025 Earth Engine Data Catalog Feature Added JAXA/ALOS/AW3D30/V4 1 : ALOS DSM: Global 30m v4.1 Added UCSB/CHC/CMIP6/v1 : The Climate Hazards Center (CHC) Coupled Model Intercomparison Project Phase 6 (CHC-CMIP6) Added UMD/hansen/global forest change 2024 v1 12 : Hansen Global Forest Change v1.12 (2000-2024) Added projects/landandcarbon/assets/wri gdm drivers forest loss 1km/v1 1 2001 2023 : WRI/Google DeepMind Global Drivers of Forest Loss 2001-2023 v1.1 Added projects/landandcarbon/assets/wri gdm drivers forest loss 1km/v1 2001 2022 : WRI/Google DeepMind Global Drivers of Forest Loss 2001-2022 v1.0 Added projects/landandcarbon/assets/wri gdm drivers forest loss 1km/v1 2 2001 2024 : WRI/Google DeepMind Global Drivers of Forest Loss 2001-2024 v1.2 May 27, 2025 Earth Engine Data Catalog Feature Added NASA/TEMPO/NO2 L3 QA : TEMPO gridded NO2 (QA filtered) tropospheric and stratospheric columns V03 May 13, 2025 Earth Engine Data Catalog Feature Added USGS/NLCD RELEASES/2023 REL/TCC/v2023-5 : USFS Tree Canopy Cover v2023-5 (CONUS and OCONUS) May 06, 2025 Earth Engine Data Catalog Feature Added USFS/GTAC/LCMS/v2024-10 : USFS Landscape Change Monitoring System v2024.10 (CONUS and OCONUS) April 29, 2025 Earth Engine Data Catalog Feature Added ISRIC/SoilGrids250m/v2 0 : SoilGrids250m 2.0 - Volumetric Water Content Added NASA/TEMPO/NO2 L3 : TEMPO gridded NO2 tropospheric and stratospheric columns V03 Added UMN/PGC/ArcticDEM/V4/2m mosaic : ArcticDEM Mosaic V4.1 April 22, 2025 Earth Engine JavaScript Client Library 1.5.12 Change Added the Google Drive main OAuth scope , https://www.googleapis.com/auth/drive , to the default list of scopes to use for authorization.
- February 15, 2022 Earth Engine Data Catalog Feature Added COPERNICUS/S2 HARMONIZED : Harmonized Sentinel-2 MSI: MultiSpectral Instrument, Level-1C (TOA) February 08, 2022 Earth Engine Data Catalog Feature Added LANDSAT/LT05/C02/T1 : USGS Landsat 5 TM Collection 2 Tier 1 Raw Scenes Added LANDSAT/LT05/C02/T2 : USGS Landsat 5 TM Collection 2 Tier 2 Raw Scenes February 01, 2022 Earth Engine Data Catalog Feature Added LANDSAT/LE07/C02/T1 : USGS Landsat 7 Collection 2 Tier 1 Raw Scenes Added LANDSAT/LE07/C02/T1 RT : USGS Landsat 7 Collection 2 Tier 1 and Real-Time data Raw Scenes Added LANDSAT/LE07/C02/T2 : USGS Landsat 7 Collection 2 Tier 2 Raw Scenes January 25, 2022 Earth Engine Data Catalog Feature Added LANDSAT/LC08/C02/T1 : USGS Landsat 8 Collection 2 Tier 1 Raw Scenes Added LANDSAT/LC08/C02/T1 RT : USGS Landsat 8 Collection 2 Tier 1 and Real-Time data Raw Scenes Added LANDSAT/LC08/C02/T2 : USGS Landsat 8 Collection 2 Tier 2 Raw Scenes Added TERN/AET/CMRSET LANDSAT V2 2 : Actual Evapotranspiration for Australia (CMRSET Landsat V2.2) January 06, 2022 Earth Engine Server Feature Added ee.String.equals() .

### "ee.Algorithms.GeometryConstructors.MultiLineString \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],["The function MultiLineString creates a geometry object from a list of coordinates.
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.GeometryConstructors.MultiLineString Stay organized with collections Save and categorize content based on your preferences.
- Usage Returns ee.Algorithms.GeometryConstructors.MultiLineString(coordinates, crs , geodesic , maxError ) Geometry Argument Type Details coordinates List The list of LineStrings, or to wrap a single LineString, the list of Points or pairs of Numbers in x,y order. crs Projection, default: null The coordinate reference system of the coordinates.
- It takes coordinates defining the LineStrings, and optionally, the crs (coordinate reference system), geodesic (true for curved edges, false for straight), and maxError (for reprojection errors).

### Client vs. Server \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/client_server](https://developers.google.com/earth-engine/guides/client_server)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) if server boolean : client conditional = True else : client conditional = False print ( 'Should be False:' , client conditional ) # True!
- Use server functions for operations like loops and conditionals, using ee.Algorithms.If or filters, when working with server objects to avoid blocking the code.\n"]]
- Your client doesn't know what's in the container, but you can find out what's in it by printing it: Code Editor (JavaScript) print ( serverString ); // I am not a String Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) print ( server string . getInfo ()) # I am not a String To see what the container itself looks like, print the string representation of the object: Code Editor (JavaScript) print ( serverString . toString ()); // ee.String("I am not a String!") Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) print ( server string ) # ee.String({"constantValue": "I am not a String!"}) If, for some reason, you need to use Python or JavaScript running in the client to manipulate whatever is in the container, then use getInfo() to get the contents of the container and assign it to a variable: Code Editor (JavaScript) var someString = serverString . getInfo (); var strings = someString + ' Am I?' ; print ( strings ); // I am not a String!
- To start, consider a client-side string object (which is NOT a proxy object): Code Editor (JavaScript) var clientString = 'I am a String' ; print ( typeof clientString ); // string Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) client string = 'I am a String' print ( type ( client string )) # str Observe from the output that the client (the web browser or notebook) has interpreted this code and run it, determining that the variable is type string .

