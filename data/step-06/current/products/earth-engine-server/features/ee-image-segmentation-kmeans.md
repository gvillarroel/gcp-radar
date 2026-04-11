---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.424Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.Image.Segmentation.KMeans()"
feature_slug: "ee-image-segmentation-kmeans"
latest_feature_date: "2018-06-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/guides/clustering"
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions"
keywords:
  - "ee"
  - "image"
  - "segmentation"
  - "kmeans"
  - "performs"
  - "using"
  - "means"
  - "clustering"
---

# ee.Image.Segmentation.KMeans()

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Performs image segmentation using k-means clustering.

## Extended Definition

Performs image segmentation using k-means clustering.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/guides/clustering](https://developers.google.com/earth-engine/guides/clustering)
- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions](https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions)

## Supporting Pages

### "Unsupervised Classification (clustering) \_|\_ Google Earth Engine \_|\_\

- URL: [https://developers.google.com/earth-engine/guides/clustering](https://developers.google.com/earth-engine/guides/clustering)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Clusterer . wekaKMeans ( 15 ) . train ( training ) Cluster the input using the trained clusterer. result = input . cluster ( clusterer ) Display the clusters with random colors. m . add layer ( result . randomVisualizer (), {}, 'clusters' ) m Please note: The same inputs should always produce the same outputs, but reordering the inputs can change the results.
- Clusterer . wekaKMeans ( 15 ). train ( training ); // Cluster the input using the trained clusterer. var result = input . cluster ( clusterer ); // Display the clusters with random colors.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-06-03 UTC."],[],["ee.Clusterer in Earth Engine performs unsupervised classification.
- Map . addLayer ( result . randomVisualizer (), {}, 'clusters' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Define a region in which to generate a segmented map. region = ee .

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Earth Engine Server Fixed Fixed an overly restrictive error check in ee.Algorithms.Image.Segmentation.KMeans() .
- Added ee.Image.Segmentation.KMeans() and ee.Image.Segmentation.GMeans() .
- August 14, 2018 Earth Engine Data Catalog Feature Added GLIMS/20171027 (no longer available) July 17, 2018 Earth Engine Data Catalog Feature Added CPOM/CryoSat2/ANTARCTICA DEM : CryoSat-2 Antarctica 1km DEM Added OSU/GIMP/2000 ICE OCEAN MASK : Greenland Ice & Ocean Mask - Greenland Mapping Project (GIMP) Added OSU/GIMP/2000 IMAGERY MOSAIC : 2000 Greenland Mosaic - Greenland Ice Mapping Project (GIMP) Added OSU/GIMP/DEM : Greenland DEM - Greenland Mapping Project (GIMP) Added OSU/GIMP/ICE VELOCITY OPT : MEaSUREs Greenland Ice Velocity: Selected Glacier Site Velocity Maps from Optical Images Version 2 Added TIGER/2016/Counties : TIGER: US Census Counties 2016 Added TIGER/2016/States : TIGER: US Census States 2016 Added USGS/LIMA/MOSAIC : Landsat Image Mosaic of Antarctica (LIMA) 16-Bit Pan-Sharpened Mosaic Added USGS/LIMA/SR : Landsat Image Mosaic of Antarctica (LIMA) - Processed Landsat Scenes (16 bit) July 10, 2018 Earth Engine Data Catalog Feature Added TRMM/3B43V7 : TRMM 3B43: Monthly Precipitation Estimates July 03, 2018 Earth Engine Data Catalog Feature Added CSP/ERGo/1 0/Global/ALOS CHILI : Global ALOS CHILI (Continuous Heat-Insolation Load Index) Added CSP/ERGo/1 0/Global/ALOS landforms : Global ALOS Landforms Added CSP/ERGo/1 0/Global/ALOS mTPI : Global ALOS mTPI (Multi-Scale Topographic Position Index) Added CSP/ERGo/1 0/Global/ALOS topoDiversity : Global ALOS Topographic Diversity Added CSP/ERGo/1 0/Global/SRTM CHILI : Global SRTM CHILI (Continuous Heat-Insolation Load Index) Added CSP/ERGo/1 0/Global/SRTM landforms : Global SRTM Landforms Added CSP/ERGo/1 0/Global/SRTM mTPI : Global SRTM mTPI (Multi-Scale Topographic Position Index) Added CSP/ERGo/1 0/Global/SRTM topoDiversity : Global SRTM Topographic Diversity Added CSP/ERGo/1 0/US/CHILI : US NED CHILI (Continuous Heat-Insolation Load Index) Added CSP/ERGo/1 0/US/landforms : US NED Landforms Added CSP/ERGo/1 0/US/lithology : US Lithology Added CSP/ERGo/1 0/US/mTPI : US NED mTPI (Multi-Scale Topographic Position Index) Added CSP/ERGo/1 0/US/physioDiversity : US NED Physiographic Diversity Added CSP/ERGo/1 0/US/physiography : US Physiography Added CSP/ERGo/1 0/US/topoDiversity : US NED Topographic Diversity Added JRC/GHSL/P2016/BUILT LDSMT GLOBE V1 (no longer available) Added JRC/GHSL/P2016/BUILT LDS GLOBE V1 (no longer available) Added JRC/GHSL/P2016/POP GPW GLOBE V1 (no longer available) Added JRC/GHSL/P2016/SMOD POP GLOBE V1 (no longer available) Added UMN/PGC/ArcticDEM/V2/2m (no longer available) Added UMN/PGC/ArcticDEM/V2/5m (no longer available) June 29, 2018 Earth Engine Server Fixed Added optional uniqueLabels parameter to ee.Algorithms.Image.Segmentation algorithms, which forces clusters to have unique IDs.
- May 22, 2018 Earth Engine Data Catalog Feature Added NRCan/CDEM : Canadian Digital Elevation Model May 18, 2018 Earth Engine Server Feature Added new superpixel segmentation algorithm ee.Algorithms.Image.Segmentation.SNIC() .

### Image Predictions \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions](https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions)
- Source ID: `site-docs-root-2`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- The model outputs are then returned as Earth Engine images or tables. ee.Model.predictImage Use model.predictImage() to make predictions on an ee.Image using a hosted model.
- Input Options When performing inference using on a ee.Image there are a number of parameters used in the ee.Model connector.
- Page Summary outlined flag Earth Engine's ee.Model connects to Vertex AI to send image or table data for online predictions, returning results as Earth Engine images or tables. model.predictImage() is used to perform inference on an ee.Image by sending image patches to a hosted model, with the output being an ee.Image .
- PixelType . float (), 'dimensions' : 1 } } Tile Sizes You control how the image is tiled using the following parameters: inputTileSize inputOverlapSize outputTileSize Input Tile Sizes To set input tile sizes use inputTileSize and inputOverlapSize .

